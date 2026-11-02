"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { moves } from "@/lib/wgtc/moves";
import { brandName } from "@/lib/wgtc/names";
import type {
  AiAnswer,
  AiResult,
  Business,
  Centre,
  FindResult,
  GridResult,
  SearchResult,
  SiteResult,
  WorthResult,
} from "@/lib/wgtc/types";
import { ENQUIRY_RATE, WIN_RATE, jobsAMonth, jobsPhrase, perTopBusiness } from "@/lib/wgtc/worth";

import s from "./who-gets-the-call.module.css";

type Phase = "form" | "finding" | "pick" | "running" | "result" | "unlocked";
type Slot<T> = T | "error" | null; // null = still loading

// Phone playback stages, in order. Each waits for a minimum gap after the
// previous one AND for the data it shows, so nothing on screen is invented.
// A stage with nothing to show (no website, no other assistants) is skipped.
const STAGES = ["query", "ads", "map", "you", "aio", "site", "chatgpt", "others", "call"] as const;
type Stage = (typeof STAGES)[number];
const MIN_GAP: Record<Stage, number> = {
  query: 0,
  ads: 1500,
  map: 1300,
  you: 1300,
  aio: 1400,
  site: 2200,
  chatgpt: 2600,
  others: 5200,
  call: 4200,
};
const TYPICAL_SECONDS = 40;

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`/api/wgtc/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
  return data as T;
}

function useTyped(text: string, active: boolean, msPerChar = 28) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setN((v) => {
        if (v >= text.length) {
          clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, msPerChar);
    return () => {
      clearInterval(id);
      setN(0);
    };
  }, [text, active, msPerChar]);
  return active ? text.slice(0, n) : "";
}

const tone = (rank: number | null) =>
  rank === null ? s.bad : rank <= 3 ? s.good : rank <= 10 ? s.mid : s.bad;

const ok = <T,>(v: Slot<T>): v is T => v !== null && v !== "error";

const money = (n: number) => `$${Math.round(n).toLocaleString("en-NZ")}`;
const clock = (sec: number) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

// Marks the visitor's own name wherever it appears in an AI answer.
function highlight(text: string, name: string) {
  if (name.length < 3) return text;
  const re = new RegExp(`(${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.split(re).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}

export function WhoGetsTheCall() {
  const [phase, setPhase] = useState<Phase>("form");
  const [error, setError] = useState("");
  const [business, setBusiness] = useState("");
  const [job, setJob] = useState("");
  const [place, setPlace] = useState("");
  const [found, setFound] = useState<FindResult | null>(null);
  const [you, setYou] = useState<Business | null>(null);
  const [search, setSearch] = useState<Slot<SearchResult>>(null);
  const [grid, setGrid] = useState<Slot<GridResult>>(null);
  const [ai, setAi] = useState<Slot<AiResult>>(null);
  const [worth, setWorth] = useState<Slot<WorthResult>>(null);
  const [site, setSite] = useState<Slot<SiteResult>>(null);
  const [stage, setStage] = useState(-1);
  const [contact, setContact] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [sending, setSending] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const runId = useRef(0);

  const centre: Centre | null = found?.centre ?? null;
  const area = centre?.name ?? "";
  const query = ok(search) ? search.query : `${job} ${area}`.trim().toLowerCase();
  const me = you ? brandName(you.name) : brandName(business);
  const reached = (k: Stage) => stage >= STAGES.indexOf(k);
  const at = (k: Stage) => STAGES[stage] === k;

  const chat: AiAnswer | null = ok(ai) ? (ai.answers.find((a) => a.engine === "chatgpt") ?? ai.answers[0] ?? null) : null;
  const others: AiAnswer[] = ok(ai) ? ai.answers.filter((a) => a !== chat) : [];

  const typedQuery = useTyped(query, phase === "running" && reached("query"), 55);
  const typedChat = useTyped(chat?.answer ?? "", phase === "running" && at("chatgpt") && !!chat, 12);

  // One clock for the whole run, shown above the phone.
  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => setElapsed((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const waitLine =
    elapsed < 4
      ? `Searching from ${area}…`
      : elapsed < 8
        ? "Loading the map results…"
        : elapsed < 12
          ? "Checking who's paying for ads…"
          : "Waiting on Google's AI answer…";

  // Is the data for a stage on hand (failed also counts, so nothing stalls)?
  const ready = (k: Stage) => {
    if (k === "query") return true;
    if (k === "you") return search !== null && grid !== null;
    if (k === "site") return site !== null;
    if (k === "chatgpt" || k === "others") return ai !== null;
    return search !== null;
  };
  // Stages with nothing to show are passed straight through.
  const empty = (k: Stage) =>
    (k === "site" && !ok(site)) || (k === "chatgpt" && !chat) || (k === "others" && others.length === 0);

  useEffect(() => {
    if (phase !== "running") return;
    const next = stage + 1;
    if (next >= STAGES.length) {
      const id = setTimeout(() => setPhase("result"), 3400);
      return () => clearTimeout(id);
    }
    const k = STAGES[next];
    if (!ready(k)) return;
    // Let ChatGPT's answer finish typing before moving on.
    const gap = empty(k)
      ? 0
      : k === "others" && chat
        ? Math.max(MIN_GAP.others, chat.answer.length * 12 + 2200)
        : MIN_GAP[k];
    const id = setTimeout(() => setStage(next), gap);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, stage, search, grid, ai, site]);

  async function find(e: FormEvent) {
    e.preventDefault();
    setError("");
    setPhase("finding");
    try {
      const r = await post<FindResult>("find", { business, place });
      setFound(r);
      setPhase("pick");
    } catch (err) {
      setError((err as Error).message);
      setPhase("form");
    }
  }

  function run(picked: Business | null) {
    if (!centre) return;
    const meNow: Business = picked ?? { name: business };
    const id = ++runId.current;
    setYou(meNow);
    setSearch(null);
    setGrid(null);
    setAi(null);
    setWorth(null);
    setSite(meNow.domain ? null : "error");
    setStage(-1);
    setElapsed(0);
    setPhase("running");
    const body = { job, centre, you: meNow };
    const settle = <T,>(p: Promise<T>, set: (v: Slot<T>) => void) =>
      p.then((v) => id === runId.current && set(v)).catch(() => id === runId.current && set("error"));
    settle(post<SearchResult>("search", body), setSearch);
    settle(post<GridResult>("grid", body), setGrid);
    settle(post<AiResult>("ai", body), setAi);
    settle(post<WorthResult>("worth", body), setWorth);
    if (meNow.domain) settle(post<SiteResult>("site", { domain: meNow.domain }), setSite);
  }

  function reset() {
    runId.current++;
    setPhase("form");
    setStage(-1);
    setFound(null);
    setContact("");
  }

  const pack = ok(search) ? search.pack : [];
  const winner = pack[0]?.name ?? null;
  const youFirst = ok(search) && search.youInPack === 1;
  const centreCell = ok(grid) ? (grid.cells.find((c) => c.name === area) ?? null) : null;
  const top3 = ok(grid) ? grid.cells.filter((c) => c.rank !== null && c.rank <= 3).length : 0;
  const spots = ok(grid) ? grid.cells.length : 0;
  const aiNamed = ok(ai) ? ai.answers.filter((a) => a.youNamed).length : 0;
  const theMoves = you
    ? moves(
        you,
        area,
        job,
        ok(search) ? search : null,
        ok(grid) ? grid : null,
        ok(ai) ? ai : null,
        ok(site) ? site : null,
      )
    : [];

  // The visitor's own job maths: their job value, our stated assumptions.
  const value = Number(jobValue.replace(/[^0-9.]/g, "")) || 0;
  // Per business in a top-three spot, not the whole top three.
  const each =
    ok(worth) && worth.topThreeLow !== null && worth.topThreeHigh !== null
      ? { low: perTopBusiness(worth.topThreeLow), high: perTopBusiness(worth.topThreeHigh) }
      : null;
  const jobs = each ? { low: jobsAMonth(each.low), high: jobsAMonth(each.high) } : null;

  function summary(): string {
    const lines = [
      `Job: ${job}`,
      `Area: ${area} (${centre?.lat}, ${centre?.lng})`,
      `Their listing: ${you?.cid ? `${you.name}, ${you.address ?? ""}, ${you.reviews ?? 0} reviews, ${you.domain ?? "no website"}` : "not matched"}`,
      "",
      `Search: ${query}`,
      `First in the map pack: ${winner ?? "unknown"}`,
    ];
    if (ok(search)) {
      lines.push(
        `Map pack: ${search.pack.map((b, i) => `${i + 1}. ${b.name} (${b.reviews ?? 0})`).join("; ")}`,
        `In map pack: ${search.youInPack ?? "no"} | Website rank: ${search.organicRank ?? "not top 10"} | Advertising: ${search.youAdvertising ? "yes" : "no"} (${search.ads.length} ads)`,
      );
    }
    if (ok(grid)) {
      lines.push(
        `Grid: ${grid.cells.map((c) => `${c.name}${c.base ? " (base)" : ""} ${c.rank ?? "-"}`).join(", ")}`,
        `Top-3 review average: ${grid.topReviews ?? "?"} | Leaders: ${grid.leaders.map((l) => l.name).join(", ")}`,
      );
    }
    if (ok(ai)) lines.push(`AI: ${ai.answers.map((a) => `${a.label} ${a.youNamed ? "named" : "not named"}`).join(", ")}`);
    if (ok(worth)) lines.push(`Demand: ${worth.searches ?? "<20"} searches/mo, top three get ${worth.topThreeLow ?? "-"} to ${worth.topThreeHigh ?? "-"}`);
    if (ok(site)) lines.push(`Website: ${site.loadSeconds}s on a phone`);
    if (value) lines.push(`Their job value: ${money(value)}`);
    lines.push("", "Moves shown:", ...theMoves.map((m) => `- ${m.title}`));
    return lines.join("\n");
  }

  async function unlock(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const hp = new FormData(e.currentTarget).get("company_url");
    setSending(true);
    try {
      await post("lead", { contact, business: you?.name ?? business, summary: summary(), company_url: hp });
      setPhase("unlocked");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={s.tool}>
      <div className={s.demoFlag}>Prototype · live results</div>

      {(phase === "form" || phase === "finding") && (
        <form className={s.card} onSubmit={find}>
          <p className={s.kicker}>Who gets the call?</p>
          <h2 className={s.cardTitle}>
            Watch a customer search for what you do, and see who they ring.
          </h2>
          <label className={s.field}>
            <span>Your business name</span>
            <input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Harcourt Concrete" required maxLength={80} />
          </label>
          <label className={s.field}>
            <span>Your trade, or the job you want more of</span>
            <input value={job} onChange={(e) => setJob(e.target.value)} placeholder="electrician, concrete driveways" required maxLength={60} />
          </label>
          <label className={s.field}>
            <span>Where you want it</span>
            <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Albany, Auckland" required maxLength={80} />
          </label>
          {error && <p className={s.error}>{error}</p>}
          <button className={`btn-primary ${s.go}`} type="submit" disabled={phase === "finding"}>
            {phase === "finding" ? "Finding you on Google…" : "Run the search"} <span className="arrow">→</span>
          </button>
          <p className={s.small}>
            Takes about {TYPICAL_SECONDS} seconds. Live from Google, Maps, ChatGPT, Perplexity and Claude.
          </p>
        </form>
      )}

      {phase === "pick" && found && (
        <div className={s.card}>
          <p className={s.kicker}>Near {found.centre.name}</p>
          <h2 className={s.cardTitle}>Which one is you on Google?</h2>
          <div className={s.picks}>
            {found.candidates.map((c) => (
              <button key={c.cid ?? c.name} className={s.pick} type="button" onClick={() => run(c)}>
                <strong>{c.name}</strong>
                <span>
                  {c.rating ? `${c.rating} ★ (${c.reviews ?? 0})` : "No reviews"}
                  {c.address ? ` · ${c.address}` : ""}
                </span>
              </button>
            ))}
            <button className={`${s.pick} ${s.pickNone}`} type="button" onClick={() => run(null)}>
              <strong>None of these are me</strong>
              <span>Run it anyway with just my business name</span>
            </button>
          </div>
          <button className="btn-ghost" type="button" onClick={reset}>
            Change the details
          </button>
        </div>
      )}

      {phase === "running" && (
        <>
          <div className={s.timer} aria-live="off">
            <span>{clock(elapsed)}</span>
            <div className={s.timerBar}>
              <i style={{ width: `${Math.min(100, (elapsed / TYPICAL_SECONDS) * 100)}%` }} />
            </div>
            <span>{elapsed < TYPICAL_SECONDS ? `about ${TYPICAL_SECONDS - elapsed}s to go` : "nearly there"}</span>
          </div>
          <div className={s.phone} aria-live="polite">
            <div className={s.notch} />
            <div className={s.screen}>
              {!reached("site") ? (
                <>
                  <div className={s.searchBar}>
                    <span className={s.g}>G</span>
                    <span>
                      {typedQuery}
                      {typedQuery.length < query.length && <span className={s.caret} />}
                    </span>
                  </div>

                  {stage >= 0 && !reached("ads") && (
                    <p className={s.wait} key={waitLine}>
                      {waitLine}
                    </p>
                  )}

                  {reached("ads") && search === "error" && (
                    <p className={s.wait}>Google didn&rsquo;t answer this time. Carrying on with the rest.</p>
                  )}

                  {reached("ads") && ok(search) && search.ads.length > 0 && (
                    <div className={s.block}>
                      {search.ads.slice(0, 2).map((ad) => (
                        <div className={s.ad} key={ad.name + ad.domain}>
                          <span className={s.sponsored}>Sponsored · {ad.domain}</span>
                          <strong>{ad.name}</strong>
                          <p>{ad.line}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {reached("map") && ok(search) && search.pack.length > 0 && (
                    <div className={s.block}>
                      <div className={s.mapStrip} aria-hidden="true">
                        <i style={{ left: "22%", top: "40%" }}>1</i>
                        <i style={{ left: "55%", top: "28%" }}>2</i>
                        <i style={{ left: "72%", top: "62%" }}>3</i>
                      </div>
                      {search.pack.map((l, i) => (
                        <div className={`${s.listing} ${search.youInPack === i + 1 ? s.you : ""}`} key={l.cid ?? l.name}>
                          <span className={s.pin}>{i + 1}</span>
                          <div>
                            <strong>{l.name}</strong>
                            <p>{l.rating ? `${l.rating} ★ (${l.reviews ?? 0})` : "No reviews yet"}</p>
                          </div>
                        </div>
                      ))}
                      {reached("you") && !search.youInPack && (
                        <div className={`${s.listing} ${s.you}`}>
                          <span className={s.pin}>{centreCell?.rank ?? "?"}</span>
                          <div>
                            <strong>{me}</strong>
                            <p>
                              {centreCell?.rank
                                ? "Below “More places”. Most people never tap it."
                                : ok(grid)
                                  ? "Outside the top results we could see from here."
                                  : "We couldn't read the map position this time."}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {reached("aio") && ok(search) && search.aio && (
                    <div className={`${s.block} ${s.aio}`}>
                      <span className={s.sponsored}>AI Overview</span>
                      <p>{search.aio.text}</p>
                      <span className={`${s.badge} ${search.aio.namesYou ? s.badgeYes : s.badgeNo}`}>
                        {search.aio.namesYou ? `Names ${me}` : `Doesn't name ${me}`}
                      </span>
                    </div>
                  )}
                </>
              ) : at("site") && ok(site) ? (
                <div className={s.siteScreen}>
                  <div className={s.urlBar}>{site.url.replace(/^https:\/\//, "")}</div>
                  {site.screenshot ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={site.screenshot} alt={`${me}'s homepage on a phone`} className={s.siteShot} />
                  ) : (
                    <div className={s.siteShot} />
                  )}
                  <div className={`${s.speed} ${site.loadSeconds <= site.goodMark ? s.badgeYes : s.badgeNo}`}>
                    <b>{site.loadSeconds}s</b> for the {site.measure} to show on a phone
                    <span>Google&rsquo;s good mark is {site.goodMark}s</span>
                  </div>
                </div>
              ) : !reached("others") && chat ? (
                <div className={s.chat}>
                  <div className={s.chatHead}>{chat.label}</div>
                  <div className={s.bubbleUser}>{ok(ai) ? ai.question : `Who's the best ${job} in ${area}?`}</div>
                  <span className={`${s.badge} ${chat.youNamed ? s.badgeYes : s.badgeNo}`}>
                    {chat.youNamed ? `${chat.label} names ${me}` : `${me} isn't named`}
                  </span>
                  <div className={s.bubbleBot}>{highlight(typedChat, me)}</div>
                </div>
              ) : !reached("call") && others.length ? (
                <div className={s.chat}>
                  <div className={s.chatHead}>Asking the other AI assistants</div>
                  {others.map((a, i) => (
                    <div className={s.aiCard} key={a.engine} style={{ animationDelay: `${i * 600}ms` }}>
                      <div className={s.aiCardHead}>
                        <strong>{a.label}</strong>
                        <span className={`${s.badge} ${a.youNamed ? s.badgeYes : s.badgeNo}`}>
                          {a.youNamed ? "Names you" : "Doesn't name you"}
                        </span>
                      </div>
                      <p>{highlight(a.answer.slice(0, 150) + (a.answer.length > 150 ? " …" : ""), me)}</p>
                    </div>
                  ))}
                </div>
              ) : reached("call") ? (
                <div className={s.calling}>
                  <div className={s.ring} />
                  <p className={s.callingLabel}>Calling from Google Maps</p>
                  <p className={s.callingName}>{youFirst ? me : winner ? brandName(winner) : "someone else"}</p>
                  <p className={s.callingSub}>{youFirst ? "That's you." : `Not ${me}.`}</p>
                  <p className={s.callingNote}>
                    {youFirst
                      ? "First on the map for this search."
                      : aiNamed > 0
                        ? "Some AI assistants named you, but most local calls still start on the map, and you're not first there."
                        : "First on the map for this search, where most local calls start."}
                  </p>
                </div>
              ) : (
                <p className={s.wait}>Asking the AI assistants…</p>
              )}
            </div>
          </div>
        </>
      )}

      {(phase === "result" || phase === "unlocked") && you && (
        <div className={s.card}>
          <p className={s.kicker}>Your result for &ldquo;{query}&rdquo;</p>
          <h2 className={s.cardTitle}>
            {youFirst ? (
              <>Right now, Google Maps puts <em>you</em> first for this search.</>
            ) : winner ? (
              <>Right now, someone else gets <em>this call</em> first.</>
            ) : (
              <>We couldn&rsquo;t read who&rsquo;s first this time.</>
            )}
          </h2>

          {/* What it's worth: searches a month x published click share, then their own maths. */}
          <div className={s.worth}>
            {worth === null ? (
              <p className={s.small}>Counting the searches…</p>
            ) : !ok(worth) ? null : worth.searches === null ? (
              <p className={s.worthNote}>
                Google counts fewer than 20 searches a month for &ldquo;{job}&rdquo; around {area}, so we
                won&rsquo;t put a number on it. Try your main trade word.
              </p>
            ) : (
              <>
                <p className={s.worthBig}>
                  <b>{worth.searches.toLocaleString("en-NZ")}</b> searches a month for {job} around {area}
                </p>
                <p className={s.worthLine}>
                  About <b>{worth.topThreeLow}&ndash;{worth.topThreeHigh}</b> of those people tap one of the
                  top three businesses on the map, so a business sitting in the top three gets roughly{" "}
                  <b>
                    {Math.round(each?.low ?? 0)}&ndash;{Math.round(each?.high ?? 0)}
                  </b>{" "}
                  a month.
                  {ok(grid) && (
                    <> You&rsquo;re in the top three in {top3} of {spots} spots we checked.</>
                  )}
                </p>
                {jobs && (
                  <div className={s.worthCalc}>
                    <label className={s.field}>
                      <span>Your average job value (optional)</span>
                      <input
                        inputMode="numeric"
                        value={jobValue}
                        onChange={(e) => setJobValue(e.target.value)}
                        placeholder="$4,000"
                        maxLength={10}
                      />
                    </label>
                    {value > 0 && (
                      <p className={s.worthLine}>
                        If 1 in {Math.round(1 / ENQUIRY_RATE)} of those people got in touch and 1 in{" "}
                        {Math.round(1 / WIN_RATE)} quotes was won, a top-three spot would be worth{" "}
                        <b>{jobsPhrase(jobs.low, jobs.high)}</b>, roughly{" "}
                        <b>
                          {money(jobs.low * value)}&ndash;{money(jobs.high * value)}
                        </b>{" "}
                        of work a month on average.
                      </p>
                    )}
                  </div>
                )}
                <p className={s.source}>
                  Searches: Google Ads data. Share of taps: BrightLocal (2018) and First Page Sage (2026)
                  click studies. Enquiry and win rates are assumptions, shown so you can judge them.
                </p>
              </>
            )}
          </div>

          <ul className={s.scores}>
            <li>
              <span>Google Maps</span>
              {ok(grid) ? (
                <b className={top3 === 0 ? s.bad : top3 * 2 < spots ? s.mid : s.good}>
                  Top 3 in {top3} of {spots} spots
                </b>
              ) : (
                <b className={s.mid}>Unknown</b>
              )}
            </li>
            <li>
              <span>Google reviews</span>
              {you.cid && ok(grid) && grid.topReviews ? (
                <b className={(you.reviews ?? 0) >= grid.topReviews ? s.good : (you.reviews ?? 0) * 2 >= grid.topReviews ? s.mid : s.bad}>
                  {you.reviews ?? 0} vs {grid.topReviews} for the top three
                </b>
              ) : (
                <b className={s.mid}>Unknown</b>
              )}
            </li>
            <li>
              <span>AI assistants</span>
              {ok(ai) ? (
                <b className={aiNamed === 0 ? s.bad : aiNamed < ai.answers.length ? s.mid : s.good}>
                  {aiNamed} of {ai.answers.length} name you
                </b>
              ) : (
                <b className={s.mid}>Unknown</b>
              )}
            </li>
            {ok(site) && (
              <li>
                <span>Website on a phone</span>
                <b className={site.loadSeconds <= site.goodMark ? s.good : site.loadSeconds <= site.goodMark * 1.6 ? s.mid : s.bad}>
                  {site.loadSeconds}s to load
                </b>
              </li>
            )}
            <li>
              <span>Google Ads</span>
              {ok(search) ? (
                <b className={search.youAdvertising ? s.good : search.ads.length ? s.bad : s.mid}>
                  {search.youAdvertising ? "Showing" : search.ads.length ? `Not showing (${search.ads.length} are)` : "No ads here"}
                </b>
              ) : (
                <b className={s.mid}>Unknown</b>
              )}
            </li>
          </ul>

          {ok(ai) && (
            <ul className={s.aiList}>
              {ai.answers.map((a) => (
                <li key={a.engine} className={a.youNamed ? s.good : s.bad}>
                  {a.youNamed ? "✓" : "✕"} {a.label}
                </li>
              ))}
            </ul>
          )}

          {ok(grid) && (
            <>
              <p className={s.gridLabel}>Your map position for &ldquo;{query}&rdquo;, searched from each spot</p>
              <div className={s.grid}>
                {grid.cells.map((g, k) => (
                  <div className={`${s.cell} ${tone(g.rank)}`} key={`${g.name}-${k}`}>
                    <b>{g.rank ?? "–"}</b>
                    <span>{g.name}</span>
                    {g.base && <span className={s.baseTag}>your base</span>}
                    {g.rank === null && <span>{g.shown ? "not in view" : "no data"}</span>}
                  </div>
                ))}
              </div>
            </>
          )}

          {phase === "result" ? (
            <form className={s.gate} onSubmit={unlock}>
              <p className={s.gateTitle}>
                {theMoves.length} {theMoves.length === 1 ? "move" : "moves"} that would get more of these calls to you
              </p>
              <div className={s.blurred} aria-hidden="true">
                {theMoves.map((m) => (
                  <p key={m.title}>{m.title}</p>
                ))}
              </div>
              <input className={s.hp} name="company_url" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <label className={s.field}>
                <span>Mobile or email, and we&rsquo;ll send them to you too</span>
                <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="021 123 4567" required maxLength={120} />
              </label>
              {error && <p className={s.error}>{error}</p>}
              <button className={`btn-primary ${s.go}`} type="submit" disabled={sending}>
                {sending ? "Sending…" : "Show me the moves"} <span className="arrow">→</span>
              </button>
            </form>
          ) : (
            <div className={s.gate}>
              <p className={s.gateTitle}>What would get more of these calls to you</p>
              <ol className={s.moves}>
                {theMoves.map((m) => (
                  <li key={m.title}>
                    <strong>{m.title}</strong>
                    <p>{m.body}</p>
                  </li>
                ))}
              </ol>
              <a className={`btn-primary ${s.go}`} href="/contact">
                Talk it through with Brendan, 15 min <span className="arrow">→</span>
              </a>
            </div>
          )}

          <p className={s.small}>
            Live from Google and the AI assistants just now. Map positions are read from a fixed point and
            can differ from your own phone, especially if you&rsquo;re signed in to your Google profile.
          </p>
          <button className="btn-ghost" type="button" onClick={reset}>
            Run another search
          </button>
        </div>
      )}
    </div>
  );
}

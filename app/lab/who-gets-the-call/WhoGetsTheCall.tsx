"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

import type { Report, ReportScore } from "@/lib/wgtc/email";
import { BOOKING_URL } from "@/lib/site";
import { aiQuestion, parseJob } from "@/lib/wgtc/job";
import { moves } from "@/lib/wgtc/moves";
import { TIPS } from "@/lib/wgtc/tips";
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
// The other assistants play before ChatGPT because ChatGPT answers last.
const STAGES = ["query", "ads", "map", "you", "aio", "site", "others", "chatgpt", "call"] as const;
type Stage = (typeof STAGES)[number];
const MIN_GAP: Record<Stage, number> = {
  query: 0,
  ads: 1500,
  map: 1300,
  you: 1300,
  aio: 1400,
  site: 2200,
  others: 2000,
  chatgpt: 3800, // how long the other assistants stay on screen
  call: 3200,
};
const TYPICAL_SECONDS = 40;
const CHAT_TYPE_MS = 4000;

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
  const [aiRest, setAiRest] = useState<Slot<AiResult>>(null);
  const [aiChat, setAiChat] = useState<Slot<AiResult>>(null);
  const [worth, setWorth] = useState<Slot<WorthResult>>(null);
  const [site, setSite] = useState<Slot<SiteResult>>(null);
  const [stage, setStage] = useState(-1);
  const [contact, setContact] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [sending, setSending] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const runId = useRef(0);
  const [tipStart, setTipStart] = useState(0);

  const centre: Centre | null = found?.centre ?? null;
  const area = centre?.name ?? "";
  // What was typed, read as the phrase we search (see lib/wgtc/job.ts).
  const jobPhrase = parseJob(job).search;
  const query = ok(search) ? search.query : `${jobPhrase} ${area}`.trim().toLowerCase();
  const me = you ? brandName(you.name) : brandName(business);
  const reached = (k: Stage) => stage >= STAGES.indexOf(k);
  const at = (k: Stage) => STAGES[stage] === k;

  // ChatGPT and the other three come back as separate requests.
  const ai: Slot<AiResult> = useMemo(() => {
    if (aiRest === null || aiChat === null) return null;
    const parts = [aiChat, aiRest].filter(ok);
    if (!parts.length) return "error";
    return { question: parts[0].question, answers: parts.flatMap((p) => p.answers) };
  }, [aiRest, aiChat]);
  const chat: AiAnswer | null = ok(aiChat) ? (aiChat.answers[0] ?? null) : null;
  const others: AiAnswer[] = ok(aiRest) ? aiRest.answers : [];

  const typedQuery = useTyped(query, phase === "running" && reached("query"), 55);
  // ChatGPT's answer types out in about four seconds, however long it is.
  const chatMs = chat ? Math.min(12, Math.max(4, Math.round(CHAT_TYPE_MS / chat.answer.length))) : 12;
  const typedChat = useTyped(chat?.answer ?? "", phase === "running" && at("chatgpt") && !!chat, chatMs);

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
    // Without the results page, the map waits for the map search instead.
    if (k === "map") return search !== null && (ok(search) && search.pack.length > 0 ? true : grid !== null);
    if (k === "site") return site !== null;
    if (k === "others") return aiRest !== null;
    if (k === "chatgpt") return aiChat !== null;
    return search !== null;
  };
  // Stages with nothing to show are passed straight through.
  const empty = (k: Stage) =>
    (k === "ads" && ok(search) && search.ads.length === 0) ||
    (k === "site" && !ok(site)) || (k === "chatgpt" && !chat) || (k === "others" && others.length === 0);

  // Waiting on data for the next screen: show the loader and a tip.
  const nextStage = STAGES[stage + 1];
  const stalled = phase === "running" && stage >= 0 && !!nextStage && !ready(nextStage);
  const tip = TIPS[(tipStart + Math.floor(elapsed / 7)) % TIPS.length];

  useEffect(() => {
    if (phase !== "running") return;
    const next = stage + 1;
    if (next >= STAGES.length) {
      const id = setTimeout(() => setPhase("result"), 2600);
      return () => clearTimeout(id);
    }
    const k = STAGES[next];
    if (!ready(k)) return;
    // Let ChatGPT's answer finish typing before moving on.
    const gap = empty(k)
      ? 0
      : k === "call" && chat
        ? Math.max(MIN_GAP.call, chat.answer.length * chatMs + 1800)
        : MIN_GAP[k];
    const id = setTimeout(() => setStage(next), gap);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, stage, search, grid, aiRest, aiChat, site]);

  // Links can carry ?business=&job=&place=. With all three, pre-fill and go
  // straight to "Which one is you on Google?".
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const b = (q.get("business") ?? "").trim().slice(0, 80);
    const j = (q.get("job") ?? "").trim().slice(0, 60);
    const p = (q.get("place") ?? "").trim().slice(0, 80);
    if (!b || !j || !p) return;
    const id = setTimeout(() => {
      setBusiness(b);
      setJob(j);
      setPlace(p);
      void find(undefined, { business: b, place: p });
    }, 0);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function find(e?: FormEvent, preset?: { business: string; place: string }) {
    e?.preventDefault();
    setError("");
    setPhase("finding");
    try {
      const r = await post<FindResult>("find", preset ?? { business, place });
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
    // Each run starts on a different tip.
    setTipStart((id * 3) % TIPS.length);
    setYou(meNow);
    setSearch(null);
    setGrid(null);
    setAiRest(null);
    setAiChat(null);
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
    settle(post<AiResult>("ai", { ...body, engines: ["aimode", "perplexity", "claude"] }), setAiRest);
    settle(post<AiResult>("ai", { ...body, engines: ["chatgpt"] }), setAiChat);
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

  // The map pack from the Google results page, or, when that page failed, the
  // top three from the map search at the centre.
  const fromSearch = ok(search) && search.pack.length > 0;
  const pack = fromSearch ? search.pack : ok(grid) ? grid.pack : [];
  const centreRank = ok(grid) ? (grid.cells.find((c) => c.name === area)?.rank ?? null) : null;
  const youInPack = fromSearch ? search.youInPack : centreRank !== null && centreRank <= 3 ? centreRank : null;
  const winner = pack[0]?.name ?? null;
  const youFirst = youInPack === 1;
  const centreCell = ok(grid) ? (grid.cells.find((c) => c.name === area) ?? null) : null;
  const top3 = ok(grid) ? grid.cells.filter((c) => c.rank !== null && c.rank <= 3).length : 0;
  const spots = ok(grid) ? grid.cells.length : 0;
  const aiNamed = ok(ai) ? ai.answers.filter((a) => a.youNamed).length : 0;
  const theMoves = you
    ? moves(
        you,
        area,
        jobPhrase,
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

  // The scores on the result card, shared with the visitor's emailed copy.
  const scoreRows: ReportScore[] = you
    ? [
        ok(grid)
          ? { label: "Google Maps", value: `Top 3 in ${top3} of ${spots} spots`, tone: top3 === 0 ? "bad" : top3 * 2 < spots ? "mid" : "good" }
          : { label: "Google Maps", value: "Unknown", tone: "mid" },
        you.cid && ok(grid) && grid.topReviews
          ? {
              label: "Google reviews",
              value: `${you.reviews ?? 0} vs ${grid.topReviews} for the top three`,
              tone: (you.reviews ?? 0) >= grid.topReviews ? "good" : (you.reviews ?? 0) * 2 >= grid.topReviews ? "mid" : "bad",
            }
          : { label: "Google reviews", value: "Unknown", tone: "mid" },
        ok(ai)
          ? { label: "AI assistants", value: `${aiNamed} of ${ai.answers.length} name you`, tone: aiNamed === 0 ? "bad" : aiNamed < ai.answers.length ? "mid" : "good" }
          : { label: "AI assistants", value: "Unknown", tone: "mid" },
        ...(ok(site)
          ? [
              {
                label: "Website on a phone",
                value: `${site.loadSeconds}s to load`,
                tone: (site.loadSeconds <= site.goodMark ? "good" : site.loadSeconds <= site.goodMark * 1.6 ? "mid" : "bad") as ReportScore["tone"],
              },
            ]
          : []),
        ok(search)
          ? {
              label: "Google Ads",
              value: search.youAdvertising ? "Showing" : search.ads.length ? `Not showing (${search.ads.length} are)` : "No one advertising",
              tone: search.youAdvertising ? "good" : search.ads.length ? "bad" : "mid",
            }
          : { label: "Google Ads", value: "Unknown", tone: "mid" },
      ]
    : [];
  const headline = youFirst
    ? "Right now, Google Maps puts you first for this search."
    : winner
      ? "Right now, someone else gets this call first."
      : "We couldn't read who's first this time.";

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
      const report: Report = { query, headline, scores: scoreRows, moves: theMoves };
      await post("lead", { contact, business: me, summary: summary(), report, company_url: hp });
      setPhase("unlocked");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={s.tool}>

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
            <span>The job you want more calls for</span>
            <input value={job} onChange={(e) => setJob(e.target.value)} placeholder="new builds" required maxLength={60} />
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
            <span>{elapsed < TYPICAL_SECONDS
                ? `about ${TYPICAL_SECONDS - elapsed}s to go`
                : ai === null
                  ? "waiting on the AI assistants"
                  : "putting it together"}</span>
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

                  {reached("ads") && search === "error" && (
                    <p className={s.wait}>Google&rsquo;s results page didn&rsquo;t load this time, so this is the map on its own.</p>
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

                  {reached("map") && pack.length > 0 && (
                    <div className={s.block}>
                      <div className={s.mapStrip} aria-hidden="true">
                        <i style={{ left: "22%", top: "40%" }}>1</i>
                        <i style={{ left: "55%", top: "28%" }}>2</i>
                        <i style={{ left: "72%", top: "62%" }}>3</i>
                      </div>
                      {pack.map((l, i) => (
                        <div className={`${s.listing} ${youInPack === i + 1 ? s.you : ""}`} key={l.cid ?? l.name}>
                          <span className={s.pin}>{i + 1}</span>
                          <div>
                            <strong>{l.name}</strong>
                            <p>{l.rating ? `${l.rating} ★ (${l.reviews ?? 0})` : "No reviews yet"}</p>
                          </div>
                        </div>
                      ))}
                      {reached("you") && !youInPack && (
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
              ) : !reached("chatgpt") && others.length ? (
                <div className={s.chat}>
                  <div className={s.chatHead}>Asking the AI assistants</div>
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
              ) : !reached("call") && chat ? (
                <div className={s.chat}>
                  <div className={s.chatHead}>{chat.label}</div>
                  <div className={s.bubbleUser}>{ok(aiChat) ? aiChat.question : aiQuestion(parseJob(job), area)}</div>
                  <span className={`${s.badge} ${chat.youNamed ? s.badgeYes : s.badgeNo}`}>
                    {chat.youNamed ? `${chat.label} names ${me}` : `${me} isn't named`}
                  </span>
                  <div className={s.bubbleBot}>{highlight(typedChat, me)}</div>
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
              ) : null}
              {stalled && (
                <div className={`${s.loader} ${reached("ads") ? "" : s.loaderCentre}`} aria-live="polite">
                  <div className={s.loaderHead}>
                    <span className={s.spinner} aria-hidden />
                    <span>{reached("others") ? "Waiting on ChatGPT…" : reached("site") ? "Asking the AI assistants…" : reached("map") ? "Checking the suburbs around you…" : waitLine}</span>
                  </div>
                  {/* On the website screen the tip would cover the speed badge. */}
                  {!(at("site") && ok(site)) && (
                    <p className={s.tip} key={tip.line}>
                      {tip.line}
                      <span>{tip.source}</span>
                    </p>
                  )}
                </div>
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
                Google counts fewer than 20 searches a month for &ldquo;{jobPhrase}&rdquo; around {area}, so we
                won&rsquo;t put a number on it. Try your main trade word.
              </p>
            ) : (
              <>
                <p className={s.worthBig}>
                  <b>{worth.searches.toLocaleString("en-NZ")}</b> searches a month for {jobPhrase} around {area}
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
            {scoreRows.map((r) => (
              <li key={r.label}>
                <span>{r.label}</span>
                <b className={s[r.tone]}>{r.value}</b>
              </li>
            ))}
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
                <span>Your email, and we&rsquo;ll send you a copy (or a mobile)</span>
                <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="you@yourbusiness.co.nz" required maxLength={120} />
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
              <a
                className={`btn-primary ${s.go}`}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
              >
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

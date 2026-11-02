"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { moves } from "@/lib/wgtc/moves";
import { brandName } from "@/lib/wgtc/names";
import type {
  AiResult,
  Business,
  Centre,
  FindResult,
  GridResult,
  SearchResult,
} from "@/lib/wgtc/types";

import s from "./who-gets-the-call.module.css";

type Phase = "form" | "finding" | "pick" | "running" | "result" | "unlocked";
type Slot<T> = T | "error" | null; // null = still loading

// Phone playback stages, in order. Each waits for a minimum gap after the
// previous one AND for the data it shows, so nothing on screen is invented.
const STAGES = ["query", "ads", "map", "you", "aio", "chatgpt", "call"] as const;
const MIN_GAP = [0, 1500, 1300, 1300, 1400, 2200, 5200];

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
  const [stage, setStage] = useState(-1);
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const runId = useRef(0);
  const [waited, setWaited] = useState(0);

  const centre: Centre | null = found?.centre ?? null;
  const area = centre?.name ?? "";
  const query = ok(search) ? search.query : `${job} ${area}`.trim().toLowerCase();
  const reached = (k: (typeof STAGES)[number]) => stage >= STAGES.indexOf(k);

  const typedQuery = useTyped(query, phase === "running" && reached("query"), 55);
  const typedChat = useTyped(ok(ai) ? ai.answer : "", phase === "running" && reached("chatgpt") && ok(ai), 12);

  // Seconds on the phone, for the "still searching" lines while Google loads.
  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => setWaited((w) => w + 1), 1000);
    return () => {
      clearInterval(id);
      setWaited(0);
    };
  }, [phase]);
  const waitLine =
    waited < 4
      ? `Searching from ${area}…`
      : waited < 8
        ? "Loading the map results…"
        : waited < 12
          ? "Checking who's paying for ads…"
          : "Waiting on Google's AI answer…";

  // Is the data for stage i on hand (or failed, which also lets it pass)?
  const ready = (i: number) => {
    const k = STAGES[i];
    if (k === "query") return true;
    if (k === "you") return search !== null && grid !== null;
    if (k === "chatgpt") return ai !== null;
    return search !== null;
  };

  useEffect(() => {
    if (phase !== "running") return;
    const next = stage + 1;
    if (next >= STAGES.length) {
      const id = setTimeout(() => setPhase("result"), 3200);
      return () => clearTimeout(id);
    }
    if (!ready(next)) return;
    // Let ChatGPT's answer finish typing before the phone rings.
    const gap =
      STAGES[next] === "call" && ok(ai) ? Math.max(MIN_GAP[next], ai.answer.length * 12 + 1800) : MIN_GAP[next];
    const id = setTimeout(() => setStage(next), gap);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, stage, search, grid, ai]);

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
    const me: Business = picked ?? { name: business };
    const id = ++runId.current;
    setYou(me);
    setSearch(null);
    setGrid(null);
    setAi(null);
    setStage(-1);
    setPhase("running");
    const body = { job, centre, you: me };
    const settle = <T,>(p: Promise<T>, set: (v: Slot<T>) => void) =>
      p.then((v) => id === runId.current && set(v)).catch(() => id === runId.current && set("error"));
    settle(post<SearchResult>("search", body), setSearch);
    settle(post<GridResult>("grid", body), setGrid);
    settle(post<AiResult>("ai", body), setAi);
  }

  function reset() {
    runId.current++;
    setPhase("form");
    setStage(-1);
    setFound(null);
    setContact("");
  }

  const me = you ? brandName(you.name) : brandName(business);
  const centreCell = ok(grid) ? (grid.cells.find((c) => c.name === area) ?? grid.cells[4]) : null;
  const pack = ok(search) ? search.pack : [];
  const winner =
    pack[0]?.name ?? (ok(grid) ? grid.leaders[0]?.name : undefined) ?? null;
  const youFirst = ok(search) && search.youInPack === 1;
  const top3 = ok(grid) ? grid.cells.filter((c) => c.rank !== null && c.rank <= 3).length : 0;
  const spots = ok(grid) ? grid.cells.length : 0;
  const theMoves = you ? moves(you, area, job, ok(search) ? search : null, ok(grid) ? grid : null, ok(ai) ? ai : null) : [];

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
        `AI Overview: ${search.aio ? (search.aio.namesYou ? "names them" : "doesn't name them") : "none"}`,
      );
    }
    if (ok(grid)) lines.push(`Grid: ${grid.cells.map((c) => `${c.name}${c.base ? " (base)" : ""} ${c.rank ?? "-"}`).join(", ")}`);
    if (ok(ai)) lines.push(`ChatGPT: ${ai.youNamed ? "named" : "not named"}. Named: ${ai.named.join(", ")}`);
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
          <p className={s.small}>Takes about 30 seconds. Live from Google, Maps and ChatGPT.</p>
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
        <div className={s.phone} aria-live="polite">
          <div className={s.notch} />
          <div className={s.screen}>
            {!reached("chatgpt") ? (
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
                  <p className={s.wait}>Google didn&rsquo;t answer this time. Carrying on with Maps and ChatGPT.</p>
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
            ) : !reached("call") ? (
              <div className={s.chat}>
                <div className={s.chatHead}>ChatGPT</div>
                <div className={s.bubbleUser}>{ok(ai) ? ai.question : `Who's the best ${job} in ${area}?`}</div>
                {ok(ai) && (
                  <span className={`${s.badge} ${ai.youNamed ? s.badgeYes : s.badgeNo}`}>
                    {ai.youNamed ? `ChatGPT names ${me}` : `${me} isn't named`}
                  </span>
                )}
                <div className={s.bubbleBot}>
                  {ok(ai) ? highlight(typedChat, me) : "ChatGPT didn't answer this time."}
                </div>
              </div>
            ) : (
              <div className={s.calling}>
                <div className={s.ring} />
                <p className={s.callingLabel}>Calling from Google Maps</p>
                <p className={s.callingName}>{youFirst ? me : winner ? brandName(winner) : "someone else"}</p>
                <p className={s.callingSub}>{youFirst ? "That's you." : `Not ${me}.`}</p>
                <p className={s.callingNote}>
                  {youFirst
                    ? "First on the map for this search."
                    : ok(ai) && ai.youNamed
                      ? "ChatGPT named you, but most local calls still start on the map, and you're not first there."
                      : "First on the map for this search, where most local calls start."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {(phase === "result" || phase === "unlocked") && you && (
        <div className={s.card}>
          <p className={s.kicker}>Your result for &ldquo;{query}&rdquo;</p>
          <h2 className={s.cardTitle}>
            {youFirst ? (
              <>Right now, Google Maps puts <em>you</em> first for this search.</>
            ) : winner ? (
              <>Right now, Google Maps puts <em>{brandName(winner)}</em> first for this search.</>
            ) : (
              <>We couldn&rsquo;t read who&rsquo;s first this time.</>
            )}
          </h2>

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
              <span>Google Ads</span>
              {ok(search) ? (
                <b className={search.youAdvertising ? s.good : search.ads.length ? s.bad : s.mid}>
                  {search.youAdvertising ? "Showing" : search.ads.length ? `Not showing (${search.ads.length} are)` : "No ads here"}
                </b>
              ) : (
                <b className={s.mid}>Unknown</b>
              )}
            </li>
            <li>
              <span>Google AI answer</span>
              {ok(search) ? (
                <b className={search.aio ? (search.aio.namesYou ? s.good : s.bad) : s.mid}>
                  {search.aio ? (search.aio.namesYou ? "Named" : "Not named") : "None shown"}
                </b>
              ) : (
                <b className={s.mid}>Unknown</b>
              )}
            </li>
            <li>
              <span>ChatGPT</span>
              {ok(ai) ? (
                <b className={ai.youNamed ? s.good : s.bad}>{ai.youNamed ? "Named" : "Not named"}</b>
              ) : (
                <b className={s.mid}>Unknown</b>
              )}
            </li>
          </ul>

          {ok(grid) && (
            <>
              <p className={s.gridLabel}>Your map position for &ldquo;{job}&rdquo;, searched from each spot</p>
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
            Live from Google and ChatGPT just now. Map positions are read from a fixed point and
            can differ from your own phone, especially if you&rsquo;re signed in to your Google
            profile.
          </p>
          <button className="btn-ghost" type="button" onClick={reset}>
            Run another search
          </button>
        </div>
      )}
    </div>
  );
}

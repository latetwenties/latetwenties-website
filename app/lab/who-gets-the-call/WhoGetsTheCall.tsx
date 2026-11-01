"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { DEMO } from "./demo-data";
import s from "./who-gets-the-call.module.css";

type Phase = "form" | "running" | "result" | "unlocked";

// Stages of the phone playback, in order. Each one is revealed after the
// previous one's delay (ms).
const STAGES = [
  { key: "query", delay: 0 },
  { key: "ads", delay: 1600 },
  { key: "map", delay: 1300 },
  { key: "you", delay: 1300 },
  { key: "aio", delay: 1400 },
  { key: "chatgpt", delay: 2600 },
  { key: "call", delay: 5200 },
] as const;
type StageKey = (typeof STAGES)[number]["key"];

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

function posTone(pos: number) {
  if (pos <= 3) return s.good;
  if (pos <= 10) return s.mid;
  return s.bad;
}

export function WhoGetsTheCall() {
  const [phase, setPhase] = useState<Phase>("form");
  const [business, setBusiness] = useState("Harcourt Concrete");
  const [job, setJob] = useState("concrete driveway, Albany");
  const [stage, setStage] = useState(-1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [jobPart, suburbPart] = job.includes(",")
    ? [job.slice(0, job.lastIndexOf(",")).trim(), job.slice(job.lastIndexOf(",") + 1).trim()]
    : [job.trim(), ""];
  const query = `${jobPart} ${suburbPart}`.trim().toLowerCase();
  const name = business.trim() || "Your business";

  const reached = (key: StageKey) =>
    phase !== "form" && stage >= STAGES.findIndex((st) => st.key === key);

  const typedQuery = useTyped(query, reached("query"), 55);
  const typedChat = useTyped(DEMO.chatgpt, reached("chatgpt"), 14);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function run(e: FormEvent) {
    e.preventDefault();
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase("running");
    setStage(-1);
    let t = 300;
    STAGES.forEach((st, i) => {
      t += st.delay;
      timers.current.push(setTimeout(() => setStage(i), t));
    });
    timers.current.push(setTimeout(() => setPhase("result"), t + 2600));
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    setPhase("form");
    setStage(-1);
  }

  return (
    <div className={s.tool}>
      <div className={s.demoFlag}>Prototype · example data, nothing is sent</div>

      {phase === "form" && (
        <form className={s.card} onSubmit={run}>
          <p className={s.kicker}>Who gets the call?</p>
          <h2 className={s.cardTitle}>
            Watch a customer search for what you do, and see who they ring.
          </h2>
          <label className={s.field}>
            <span>Your business name</span>
            <input value={business} onChange={(e) => setBusiness(e.target.value)} required />
          </label>
          <label className={s.field}>
            <span>The job you want more of, and where</span>
            <input
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder="concrete driveway, Albany"
              required
            />
          </label>
          <button className={`btn-primary ${s.go}`} type="submit">
            Run the search <span className="arrow">→</span>
          </button>
          <p className={s.small}>Takes about 20 seconds. Google, Maps, ChatGPT and Gemini.</p>
        </form>
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

                {reached("ads") && (
                  <div className={s.block}>
                    {DEMO.ads.map((ad) => (
                      <div className={s.ad} key={ad.name}>
                        <span className={s.sponsored}>Sponsored</span>
                        <strong>{ad.name}</strong>
                        <p>{ad.line}</p>
                      </div>
                    ))}
                  </div>
                )}

                {reached("map") && (
                  <div className={s.block}>
                    <div className={s.mapStrip} aria-hidden="true">
                      <i style={{ left: "22%", top: "40%" }}>1</i>
                      <i style={{ left: "55%", top: "28%" }}>2</i>
                      <i style={{ left: "72%", top: "62%" }}>3</i>
                    </div>
                    {DEMO.mapPack.map((l, i) => (
                      <div className={s.listing} key={l.name}>
                        <span className={s.pin}>{i + 1}</span>
                        <div>
                          <strong>{l.name}</strong>
                          <p>
                            {l.rating} ★ ({l.reviews}) · {l.note}
                          </p>
                        </div>
                      </div>
                    ))}
                    {reached("you") && (
                      <div className={`${s.listing} ${s.you}`}>
                        <span className={s.pin}>{DEMO.yourPosition}</span>
                        <div>
                          <strong>{name}</strong>
                          <p>Below &ldquo;More places&rdquo;. Most people never tap it.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {reached("aio") && (
                  <div className={`${s.block} ${s.aio}`}>
                    <span className={s.sponsored}>AI Overview</span>
                    <p>{DEMO.aiOverview}</p>
                  </div>
                )}
              </>
            ) : !reached("call") ? (
              <div className={s.chat}>
                <div className={s.chatHead}>ChatGPT</div>
                <div className={s.bubbleUser}>
                  Who&rsquo;s the best for a {query}?
                </div>
                <div className={s.bubbleBot}>{typedChat}</div>
              </div>
            ) : (
              <div className={s.calling}>
                <div className={s.ring} />
                <p className={s.callingLabel}>Calling</p>
                <p className={s.callingName}>{DEMO.winner}</p>
                <p className={s.callingSub}>Not {name}.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {(phase === "result" || phase === "unlocked") && (
        <div className={s.card}>
          <p className={s.kicker}>Your result for &ldquo;{query}&rdquo;</p>
          <h2 className={s.cardTitle}>
            Right now, this search sends most calls to <em>{DEMO.winner}</em>.
          </h2>

          <ul className={s.scores}>
            <li>
              <span>Google Maps</span>
              <b className={s.bad}>#{DEMO.yourPosition}</b>
            </li>
            <li>
              <span>Google Ads</span>
              <b className={s.bad}>Not showing</b>
            </li>
            <li>
              <span>ChatGPT</span>
              <b className={s.bad}>Not named</b>
            </li>
            <li>
              <span>Gemini</span>
              <b className={s.mid}>Named 4th</b>
            </li>
          </ul>

          <p className={s.gridLabel}>Your map position, searched from each suburb</p>
          <div className={s.grid}>
            {DEMO.grid.map((g) => (
              <div className={`${s.cell} ${posTone(g.pos)}`} key={g.suburb}>
                <b>{g.pos >= 20 ? "20+" : g.pos}</b>
                <span>{g.suburb}</span>
              </div>
            ))}
          </div>

          {phase === "result" ? (
            <form
              className={s.gate}
              onSubmit={(e) => {
                e.preventDefault();
                setPhase("unlocked");
              }}
            >
              <p className={s.gateTitle}>Three moves that would get the call to you</p>
              <div className={s.blurred} aria-hidden="true">
                {DEMO.moves.map((m) => (
                  <p key={m.title}>{m.title}</p>
                ))}
              </div>
              <label className={s.field}>
                <span>Mobile or email, and we&rsquo;ll send them over</span>
                <input placeholder="021 123 4567" required />
              </label>
              <button className={`btn-primary ${s.go}`} type="submit">
                Show me the three moves <span className="arrow">→</span>
              </button>
            </form>
          ) : (
            <div className={s.gate}>
              <p className={s.gateTitle}>Three moves that would get the call to you</p>
              <ol className={s.moves}>
                {DEMO.moves.map((m) => (
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

          <button className="btn-ghost" type="button" onClick={reset}>
            Run another search
          </button>
        </div>
      )}
    </div>
  );
}

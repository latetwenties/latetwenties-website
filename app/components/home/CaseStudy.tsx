"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function CaseStudy() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);
  const [rank, setRank] = useState(101);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRank(101);
            setActive(false);
            requestAnimationFrame(() =>
              requestAnimationFrame(() => setActive(true)),
            );
          } else {
            setActive(false);
            setRank(101);
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1800;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setRank(Math.round(101 - 76 * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <section className="case" id="work" ref={ref}>
      <div className="wrap">
        <div className="case-head">
          <Reveal>
            <Eyebrow num="04">The work</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="case-pull">
              From not showing, to <em>#2 in search</em>
              <br />
              across our neighbouring towns.
            </p>
            <div className="case-attribution">
              Boaz Developments &nbsp;·&nbsp; Builders, Mangawhai
            </div>
          </Reveal>
        </div>

        <Reveal className={`case-card ${active ? "is-active" : ""}`} delay={140}>
          <div className="cc-stats">
            <div className="cc-metric">
              <div className="cc-metric-label">Avg map-pack rank</div>
              <div className="cc-metric-value">
                <span className="cc-old">10.1</span>
                <span className="cc-arrow" aria-hidden="true">
                  →
                </span>
                <span className="cc-new">{(rank / 10).toFixed(1)}</span>
              </div>
              <div className="cc-metric-q">for &ldquo;builder mangawhai&rdquo;</div>
            </div>

            <div className="cc-meta">
              <div className="cc-meta-row">
                <span className="cc-k">Engagement</span>
                <span className="cc-v">Foundations + Presence Care</span>
              </div>
              <div className="cc-meta-row">
                <span className="cc-k">Timeframe</span>
                <span className="cc-v">Under 8 weeks</span>
              </div>
              <div className="cc-meta-row">
                <span className="cc-k">Outcome</span>
                <span className="cc-v">Top 3 across 80% of search grid</span>
              </div>
            </div>
          </div>

          <div className="cc-visual">
            <div className="cc-mappack">
              <Image
                className="cc-map cc-map-before"
                src="/images/case-studies/boaz/map-pack-before.png"
                alt="Map pack before. Average rank 10.1."
                fill
                sizes="(max-width: 920px) 100vw, 480px"
              />
              <Image
                className="cc-map cc-map-after"
                src="/images/case-studies/boaz/map-pack-after.png"
                alt="Map pack after. Average rank 2.5."
                fill
                sizes="(max-width: 920px) 100vw, 480px"
                style={{
                  zIndex: 2,
                  clipPath: active ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                  transition:
                    "clip-path 1800ms cubic-bezier(0.65, 0, 0.35, 1) 200ms",
                }}
              />
              <div
                className="cc-wipe"
                style={{
                  left: active ? "100%" : "0%",
                  transition:
                    "left 1800ms cubic-bezier(0.65, 0, 0.35, 1) 200ms",
                }}
              />
            </div>
            <div className="cc-mappack-foot">
              <span>Before · 11 Apr</span>
              <span className="cc-divider" />
              <span>After · 30 Apr</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="case-cta" delay={240}>
          <Link className="ghost-link" href="/work/boaz-developments">
            Read the full case study →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

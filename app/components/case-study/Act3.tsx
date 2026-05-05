"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

function useCountAnim(from: number, to: number, decimals: number, active: boolean, ms = 1600) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, from, to, ms]);
  return v.toFixed(decimals);
}

export function Act3() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const fire = () => {
      if (!fired) {
        fired = true;
        setActive(true);
      }
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fire();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    const fb = setTimeout(fire, 800);
    return () => {
      io.disconnect();
      clearTimeout(fb);
    };
  }, []);

  const rank = useCountAnim(10.1, 2.5, 1, active);

  return (
    <section className="cs-act cs-act-3" ref={ref}>
      <div className="wrap">
        <div className="cs-act-grid">
          <div className="cs-act-left">
            <Reveal>
              <Eyebrow num="03">The result</Eyebrow>
              <h2 className="cs-act-h2">
                The phone
                <br />
                started ringing
                <br />
                <em>for new&nbsp;names.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal as="div" className="cs-act-body" delay={80}>
            <p>
              Within two months of going live, Boaz was showing up for the
              searches that mattered. People who hadn&rsquo;t heard of Reece
              before, but who were searching for a builder in his area, were
              finding him.
            </p>
          </Reveal>
        </div>

        <Reveal className={`cs-rank ${active ? "is-active" : ""}`} delay={120}>
          <div className="cs-rank-stats">
            <div className="cs-rank-label">
              Local map-pack · average rank
            </div>
            <div className="cs-rank-value">
              <span className="cs-rank-old">10.1</span>
              <span className="cs-rank-arrow">→</span>
              <span className="cs-rank-new">{rank}</span>
            </div>
            <div className="cs-rank-meta">
              From not appearing on the map pack to{" "}
              <em>#2 across the neighbouring towns</em>, in under two months.
            </div>
          </div>

          <div className="cs-rank-visual">
            <div className="cs-mappack">
              <Image
                className="cs-map cs-map-before"
                src="/images/case-studies/boaz/map-pack-before.png"
                alt="Map pack before. Average rank 10.1."
                fill
                sizes="(max-width: 920px) 100vw, 480px"
              />
              <Image
                className="cs-map cs-map-after"
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
              <div className="cs-mappack-tags">
                <span className="cs-mappack-tag cs-mappack-tag-before">
                  Before · 10.1
                </span>
                <span className="cs-mappack-tag cs-mappack-tag-after">
                  After · 2.5
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="cs-proof" delay={120}>
          <div className="cs-proof-head">
            <Eyebrow num="04">Google Business Profile</Eyebrow>
            <h3 className="cs-proof-h3">
              From a thin listing, to <em>a full presence</em> with photos,
              reviews, service categories, and an organic listing right beside
              it.
            </h3>
          </div>
          <div className="cs-proof-grid">
            <figure className="cs-proof-fig">
              <div className="cs-proof-tag">Before</div>
              <Image
                src="/images/case-studies/boaz/gmb-before.png"
                alt="Boaz Developments on Google before. Basic search result with no business profile, no photos, no reviews."
                width={2302}
                height={1492}
                sizes="(max-width: 920px) 100vw, 600px"
              />
            </figure>
            <figure className="cs-proof-fig">
              <div className="cs-proof-tag cs-proof-tag-after">After</div>
              <Image
                src="/images/case-studies/boaz/gmb-after.png"
                alt="Boaz Developments on Google after. Full business profile with project photos, map, 5.0 stars from 20 reviews, sitelinks for services and locations."
                width={2380}
                height={1336}
                sizes="(max-width: 920px) 100vw, 600px"
              />
            </figure>
          </div>
        </Reveal>

        <Reveal as="div" className="cs-proof cs-proof-ai" delay={120}>
          <div className="cs-proof-head">
            <Eyebrow num="05">AI search</Eyebrow>
            <h3 className="cs-proof-h3">
              Ask ChatGPT for a builder in Mangawhai or Langs Beach. Boaz
              comes back at <em>position #1.</em>
            </h3>
            <p className="cs-proof-sub">
              The same research-led copy that ranks Boaz on Google gives
              ChatGPT, Gemini and Perplexity the context they need to
              confidently recommend Boaz when someone asks.
            </p>
          </div>
          <figure className="cs-proof-fig cs-proof-fig-single">
            <Image
              src="/images/case-studies/boaz/chatgpt-position1.png"
              alt="ChatGPT search result. User asks: I'm looking to do a new house build in Mangawhai or Langs Beach area, can you recommend a company to talk to. ChatGPT lists Boaz Developments first under Local, proven Mangawhai and Langs Beach builders, describing them as properly local, strong on new builds, family-run, community-focused."
              width={1830}
              height={1240}
              sizes="(max-width: 920px) 100vw, 880px"
            />
          </figure>
        </Reveal>

        <Reveal as="div" className="cs-summary" delay={140}>
          <div className="cs-summary-tag">In summary</div>
          <ul className="cs-summary-list">
            <li>
              <strong>Map pack:</strong> from not appearing to #2 average
              across the neighbouring towns in under two months.
            </li>
            <li>
              <strong>Google Business Profile:</strong> from thin to fully
              built, with reviews coming in steadily.
            </li>
            <li>
              <strong>Website:</strong> from a basic placeholder to a
              service-led, research-driven home.
            </li>
            <li>
              <strong>AI search:</strong> ChatGPT recommends Boaz at position
              #1 for the area.
            </li>
            <li>
              <strong>The phone:</strong> ringing for the right kinds of jobs,
              people who hadn&rsquo;t heard of Boaz before, searching for a
              builder in the area.
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

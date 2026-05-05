"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

import { Reveal } from "../Reveal";

type Hotspot = {
  id: number;
  top: number;
  side: "left" | "right";
  title: string;
  body: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    top: 0.04,
    side: "right",
    title: "Real project photography",
    body: "Hero swapped from generic stock framing to a real Boaz build. Visitors see the actual quality of work, and Google sees authentic, original imagery on a builder site.",
  },
  {
    id: 2,
    top: 0.2,
    side: "left",
    title: "Individual service pages",
    body: "Three service entry points (new builds, renovations, maintenance), each linking to a dedicated page. Content depth signals expertise to both Google and visitors comparing builders.",
  },
  {
    id: 3,
    top: 0.34,
    side: "right",
    title: "Real, recent projects",
    body: "Visitors landing here recognise the builds. Locals see houses they've driven past. Trust comes from seeing real work in real places, not a stock gallery.",
  },
  {
    id: 4,
    top: 0.5,
    side: "left",
    title: "Research-led copy",
    body: "Every “why choose us” line maps to a real pain point lifted from interviewing locals about builder horror stories. It speaks to the visitor's actual hesitations.",
  },
  {
    id: 5,
    top: 0.66,
    side: "right",
    title: "Service area signals",
    body: "The towns Boaz serves are named on the homepage in plain language. Same content gives ChatGPT, Gemini and Google the geographic context they need to recommend Boaz when someone asks for a builder in the area.",
  },
];

function BrowserFrame({
  url,
  tone,
  children,
}: {
  url: string;
  tone?: "muted";
  children: ReactNode;
}) {
  return (
    <div className={`cs-bw ${tone === "muted" ? "cs-bw-muted" : ""}`}>
      <div className="cs-bw-bar">
        <span className="cs-bw-dot" />
        <span className="cs-bw-dot" />
        <span className="cs-bw-dot" />
        <div className="cs-bw-url">{url}</div>
      </div>
      <div className="cs-bw-body">
        {children}
        <div className="cs-bw-swipe-hint" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M12 5v14M6 11l6-6 6 6M6 13l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

type Dims = { imgH: number; frameH: number };
const ZERO_DIMS: Dims = { imgH: 0, frameH: 0 };

function translateY(dims: Dims, progress: number) {
  const max = dims.imgH - dims.frameH;
  if (max <= 0) return 0;
  return -max * progress;
}

export function BeforeAfterCompare() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const beforeImgRef = useRef<HTMLImageElement | null>(null);
  const afterImgRef = useRef<HTMLImageElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [beforeDims, setBeforeDims] = useState<Dims>(ZERO_DIMS);
  const [afterDims, setAfterDims] = useState<Dims>(ZERO_DIMS);

  useEffect(() => {
    const measure = () => {
      const before = beforeImgRef.current;
      const after = afterImgRef.current;
      if (before && before.parentElement) {
        setBeforeDims({
          imgH: before.clientHeight,
          frameH: before.parentElement.clientHeight,
        });
      }
      if (after && after.parentElement) {
        setAfterDims({
          imgH: after.clientHeight,
          frameH: after.parentElement.clientHeight,
        });
      }
    };
    measure();
    const before = beforeImgRef.current;
    const after = afterImgRef.current;
    before?.addEventListener("load", measure);
    after?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      before?.removeEventListener("load", measure);
      after?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = track.offsetHeight - vh;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      setProgress(scrolled / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const beforeY = translateY(beforeDims, progress);
  const afterY = translateY(afterDims, progress);

  return (
    <section className="cs-compare">
      <div className="wrap cs-compare-intro">
        <Reveal>
          <h2 className="cs-ba-h2">
            The site, <em>before and after.</em>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="cs-ba-lede">
            Side-by-side, scrolled in sync. The new home page is built with
            intent, not decoration. Hover the markers to see where each
            strategic decision lives.
          </p>
        </Reveal>
      </div>

      <div className="cs-compare-track" ref={trackRef}>
        <div className="cs-compare-sticky">
          <div className="cs-compare-grid">
            <div className="cs-compare-col">
              <div className="cs-compare-tag">Before</div>
              <BrowserFrame url="boazdevelopments.co.nz" tone="muted">
                <Image
                  ref={beforeImgRef}
                  className="cs-compare-img"
                  src="/images/case-studies/boaz/website-home-before.png"
                  alt="Boaz Developments homepage before. Generic dark builder template, stock framing imagery, vague headlines."
                  width={2578}
                  height={8684}
                  sizes="(max-width: 920px) 100vw, 700px"
                  style={{ transform: `translateY(${beforeY}px)` }}
                />
              </BrowserFrame>
            </div>

            <div className="cs-compare-col">
              <div className="cs-compare-tag cs-compare-tag-after">After</div>
              <BrowserFrame url="boazdevelopments.co.nz">
                <Image
                  ref={afterImgRef}
                  className="cs-compare-img"
                  src="/images/case-studies/boaz/website-home-after.png"
                  alt="Boaz Developments homepage after. Real project photography, service-led layout, research-driven copy."
                  width={2746}
                  height={12374}
                  sizes="(max-width: 920px) 100vw, 700px"
                  style={{ transform: `translateY(${afterY}px)` }}
                />
                <div className="cs-compare-spots">
                  {afterDims.imgH > 0 &&
                    afterDims.frameH > 0 &&
                    HOTSPOTS.map((h) => {
                      const targetY = h.top * afterDims.imgH;
                      const visibleY = targetY + afterY;
                      const visiblePct =
                        (visibleY / afterDims.frameH) * 100;
                      const inFrame = visiblePct >= -10 && visiblePct <= 110;
                      return (
                        <button
                          key={h.id}
                          type="button"
                          className={`cs-spot cs-spot-${h.side} ${
                            activeHotspot === h.id ? "is-active" : ""
                          } ${inFrame ? "is-in" : ""}`}
                          style={{ top: `${visiblePct}%` }}
                          onMouseEnter={() => setActiveHotspot(h.id)}
                          onMouseLeave={() => setActiveHotspot(null)}
                          onFocus={() => setActiveHotspot(h.id)}
                          onBlur={() => setActiveHotspot(null)}
                          onClick={() =>
                            setActiveHotspot(
                              activeHotspot === h.id ? null : h.id,
                            )
                          }
                          aria-label={`Strategy point ${h.id}: ${h.title}`}
                        >
                          <span className="cs-spot-dot">{h.id}</span>
                          <span className="cs-spot-card">
                            <span className="cs-spot-title">{h.title}</span>
                            <span className="cs-spot-body">{h.body}</span>
                          </span>
                        </button>
                      );
                    })}
                </div>
              </BrowserFrame>
            </div>
          </div>

          <div className="cs-compare-rail" aria-hidden="true">
            <div
              className="cs-compare-rail-fill"
              style={{ height: `${progress * 100}%` }}
            />
            {HOTSPOTS.map((h) => (
              <div
                key={h.id}
                className="cs-compare-rail-tick"
                style={{ top: `${h.top * 100}%` }}
              />
            ))}
          </div>

          <div className="cs-compare-hint">Scroll to compare</div>
        </div>
      </div>

      <div className="wrap cs-compare-notes">
        <p className="cs-compare-notes-eyebrow">What we focused on</p>
        <ul className="cs-compare-notes-list">
          <li>
            <strong>Dedicated service and location pages</strong>, each
            findable in its own right
          </li>
          <li>
            <strong>Heavy SEO and GEO foundations</strong> — schema,
            structured data, internal linking, AI-search markup
          </li>
          <li>
            <strong>Copy lifted from how locals actually search</strong>,
            using their language, not ours
          </li>
          <li>
            <strong>Real Boaz photography</strong> from the build sites,
            no stock
          </li>
          <li>
            <strong>Named service areas in plain text</strong> so AI tools
            confidently recommend Boaz when asked about the area
          </li>
        </ul>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

import { Reveal } from "../Reveal";

export type CompareHotspot = {
  id: number;
  top: number;
  side: "left" | "right";
  title: string;
  body: string;
};

export type CompareImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type BeforeAfterCompareProps = {
  heading: ReactNode;
  lede: string;
  url: string;
  before: CompareImage;
  after: CompareImage;
  hotspots: CompareHotspot[];
  notesEyebrow?: string;
  notes: ReactNode[];
};

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

export function BeforeAfterCompare({
  heading,
  lede,
  url,
  before,
  after,
  hotspots,
  notesEyebrow = "What we focused on",
  notes,
}: BeforeAfterCompareProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const beforeImgRef = useRef<HTMLImageElement | null>(null);
  const afterImgRef = useRef<HTMLImageElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [beforeDims, setBeforeDims] = useState<Dims>(ZERO_DIMS);
  const [afterDims, setAfterDims] = useState<Dims>(ZERO_DIMS);

  useEffect(() => {
    const measure = () => {
      const beforeEl = beforeImgRef.current;
      const afterEl = afterImgRef.current;
      if (beforeEl && beforeEl.parentElement) {
        setBeforeDims({
          imgH: beforeEl.clientHeight,
          frameH: beforeEl.parentElement.clientHeight,
        });
      }
      if (afterEl && afterEl.parentElement) {
        setAfterDims({
          imgH: afterEl.clientHeight,
          frameH: afterEl.parentElement.clientHeight,
        });
      }
    };
    measure();
    const beforeEl = beforeImgRef.current;
    const afterEl = afterImgRef.current;
    beforeEl?.addEventListener("load", measure);
    afterEl?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      beforeEl?.removeEventListener("load", measure);
      afterEl?.removeEventListener("load", measure);
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
          <h2 className="cs-ba-h2">{heading}</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="cs-ba-lede">{lede}</p>
        </Reveal>
      </div>

      <div className="cs-compare-track" ref={trackRef}>
        <div className="cs-compare-sticky">
          <div className="cs-compare-grid">
            <div className="cs-compare-col">
              <div className="cs-compare-tag">Before</div>
              <BrowserFrame url={url} tone="muted">
                <Image
                  ref={beforeImgRef}
                  className="cs-compare-img"
                  src={before.src}
                  alt={before.alt}
                  width={before.width}
                  height={before.height}
                  sizes="(max-width: 920px) 100vw, 700px"
                  style={{ transform: `translateY(${beforeY}px)` }}
                />
              </BrowserFrame>
            </div>

            <div className="cs-compare-col">
              <div className="cs-compare-tag cs-compare-tag-after">After</div>
              <BrowserFrame url={url}>
                <Image
                  ref={afterImgRef}
                  className="cs-compare-img"
                  src={after.src}
                  alt={after.alt}
                  width={after.width}
                  height={after.height}
                  sizes="(max-width: 920px) 100vw, 700px"
                  style={{ transform: `translateY(${afterY}px)` }}
                />
                <div className="cs-compare-spots">
                  {afterDims.imgH > 0 &&
                    afterDims.frameH > 0 &&
                    hotspots.map((h) => {
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
            {hotspots.map((h) => (
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
        <p className="cs-compare-notes-eyebrow">{notesEyebrow}</p>
        <ul className="cs-compare-notes-list">
          {notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

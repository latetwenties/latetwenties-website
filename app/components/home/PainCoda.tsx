"use client";

import { useEffect, useRef, useState } from "react";

const CODA = "Word of mouth got you here. It won't get you there.";
const WORDS = CODA.split(" ");

// Scroll progress range over which words reveal. The 0-to-START_PROGRESS
// slice is the lead-in (sticky pinned, nothing visible yet). END_PROGRESS-
// to-1 is the hold (last word fully visible, holds before unpinning).
const START_PROGRESS = 0.15;
const END_PROGRESS = 0.85;
const WORD_FADE = 0.12;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getInitialReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PainCoda() {
  const trackRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(getInitialReducedMotion);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", onChange);
    return () => motionQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      setProgress(scrolled / total);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  const visualProgress = reducedMotion ? 1 : progress;
  const stagger =
    (END_PROGRESS - START_PROGRESS - WORD_FADE) /
    Math.max(1, WORDS.length - 1);

  return (
    <section
      ref={trackRef}
      className="pain-coda-track"
      aria-label="Pain section coda"
    >
      <div className="pain-coda-sticky">
        <p className="pain-coda-text">
          <em>
            {WORDS.map((word, i) => {
              const wordStart = START_PROGRESS + i * stagger;
              const op = clamp(
                (visualProgress - wordStart) / WORD_FADE,
                0,
                1,
              );
              return (
                <span
                  key={`${word}-${i}`}
                  className="pain-coda-word"
                  style={{
                    opacity: op,
                    transform: `translateY(${(1 - op) * 6}px)`,
                  }}
                >
                  {word}
                  {i < WORDS.length - 1 ? " " : ""}
                </span>
              );
            })}
          </em>
        </p>
      </div>
    </section>
  );
}

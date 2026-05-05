"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const CODA = "Word of mouth got you here. It won't get you there.";
const WORDS = CODA.split(" ");

// Scroll progress is 0 when the coda just enters viewport from the bottom,
// 1 when it just exits at the top. Words reveal across the middle slice
// (REVEAL_START to REVEAL_END), so they finish fading in well before the
// coda exits the viewport.
const REVEAL_START = 0.2;
const REVEAL_END = 0.6;
const WORD_FADE = 0.1;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getInitialReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PainCoda() {
  const ref = useRef<HTMLDivElement | null>(null);
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
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const traversed = vh - rect.top;
      setProgress(clamp(traversed / total, 0, 1));
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
    (REVEAL_END - REVEAL_START - WORD_FADE) /
    Math.max(1, WORDS.length - 1);

  return (
    <div ref={ref} className="pain-coda">
      <p>
        <em>
          {WORDS.map((word, i) => {
            const wordStart = REVEAL_START + i * stagger;
            const op = clamp(
              (visualProgress - wordStart) / WORD_FADE,
              0,
              1,
            );
            return (
              <Fragment key={`${word}-${i}`}>
                <span
                  className="pain-coda-word"
                  style={{
                    opacity: op,
                    transform: `translateY(${(1 - op) * 6}px)`,
                  }}
                >
                  {word}
                </span>
                {i < WORDS.length - 1 ? " " : null}
              </Fragment>
            );
          })}
        </em>
      </p>
    </div>
  );
}

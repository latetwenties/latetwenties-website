"use client";

import { useEffect, useState } from "react";

export type Query = { q: string; kind: "local" | "ai" };

// Trades only, to match who we work with and every case study on the site.
// The first word is server-rendered into the hero headline, so it leads
// with a trade our proof speaks to directly.
export const TRADES = [
  "builder",
  "concreter",
  "plumber",
  "electrician",
  "roofer",
  "landscaper",
];

export const QUERIES: Query[] = [
  { q: "concreter near me", kind: "local" },
  { q: "best builder on the north shore", kind: "ai" },
  { q: "electrician near me", kind: "local" },
  { q: "reliable landscaper for a full backyard", kind: "ai" },
  { q: "builder near me", kind: "local" },
  { q: "best drainlayer in auckland", kind: "ai" },
  { q: "roofer near me", kind: "local" },
  { q: "plumber for an old villa in ponsonby", kind: "ai" },
];

type RotateOptions = {
  typeMs?: number;
  pauseMs?: number;
  deleteMs?: number;
};

export function useRotatingWord(
  words: string[],
  { typeMs = 75, pauseMs = 1700, deleteMs = 38 }: RotateOptions = {},
) {
  const [idx, setIdx] = useState(0);
  // Start at the first word so the SSR'd HTML already has content in the
  // headline. Without this the LCP element renders empty until JS
  // hydrates and types the first character. The hook then immediately
  // hits its "fully typed, schedule deletion" branch and the animation
  // continues normally.
  const [text, setText] = useState(words[0] ?? "");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const target = words[idx];
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (phase === "typing") {
      if (text.length < target.length) {
        timer = setTimeout(
          () => setText(target.slice(0, text.length + 1)),
          typeMs,
        );
      } else {
        timer = setTimeout(() => setPhase("deleting"), pauseMs);
      }
    } else if (text.length > 0) {
      timer = setTimeout(
        () => setText(target.slice(0, text.length - 1)),
        deleteMs,
      );
    } else {
      timer = setTimeout(() => {
        setPhase("typing");
        setIdx((i) => (i + 1) % words.length);
      }, 0);
    }
    return () => clearTimeout(timer);
  }, [text, phase, idx, words, typeMs, pauseMs, deleteMs]);

  return { text, current: words[idx], idx };
}

export function useRotatingQueries(
  queries: Query[],
  { typeMs = 55, pauseMs = 2200, deleteMs = 26 }: RotateOptions = {},
) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const target = queries[idx].q;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (phase === "typing") {
      if (text.length < target.length) {
        timer = setTimeout(
          () => setText(target.slice(0, text.length + 1)),
          typeMs,
        );
      } else {
        timer = setTimeout(() => setPhase("deleting"), pauseMs);
      }
    } else if (text.length > 0) {
      timer = setTimeout(
        () => setText(target.slice(0, text.length - 1)),
        deleteMs,
      );
    } else {
      timer = setTimeout(() => {
        setPhase("typing");
        setIdx((i) => (i + 1) % queries.length);
      }, 0);
    }
    return () => clearTimeout(timer);
  }, [text, phase, idx, queries, typeMs, pauseMs, deleteMs]);

  return { text, current: queries[idx], idx };
}

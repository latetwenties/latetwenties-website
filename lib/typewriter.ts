"use client";

import { useEffect, useState } from "react";

export type Query = { q: string; kind: "local" | "ai" };

export const TRADES = [
  "physio",
  "builder",
  "plumber",
  "dentist",
  "barber",
  "florist",
  "lawyer",
  "roofer",
];

export const QUERIES: Query[] = [
  { q: "physio near me", kind: "local" },
  { q: "best accountant in north shore", kind: "ai" },
  { q: "electrician near me", kind: "local" },
  { q: "trusted dog groomer with good reviews", kind: "ai" },
  { q: "builder near me", kind: "local" },
  { q: "best mortgage broker in auckland", kind: "ai" },
  { q: "hairdresser near me", kind: "local" },
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
  const [text, setText] = useState("");
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

"use client";

import { useRotatingWord } from "@/lib/typewriter";

// Every word takes "a", and the longest sets the line's width in the CSS.
const WORDS = ["builder", "concreter", "plumber", "sparky", "roofer", "landscaper"];

export function HeroWord() {
  const { text } = useRotatingWord(WORDS, {
    typeMs: 110,
    pauseMs: 2200,
    deleteMs: 60,
  });

  return (
    <>
      <span className="sr-only">local business like yours</span>
      <span aria-hidden="true">
        {text}
        <span className="hv2-caret" />
      </span>
    </>
  );
}

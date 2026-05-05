"use client";

import Link from "next/link";

import { TRADES, useRotatingWord } from "@/lib/typewriter";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function Hero() {
  const { text } = useRotatingWord(TRADES, {
    typeMs: 130,
    pauseMs: 2400,
    deleteMs: 70,
  });

  return (
    <section className="hero-pure" id="top">
      <div className="wrap">
        {/* Real H1 for SEO and assistive tech. The visible headline below
            is decorative — it cycles trade words inside it. */}
        <h1 className="sr-only">
          Local marketing for service businesses in Auckland and across New
          Zealand.
        </h1>

        <Reveal className="hero-eyebrow">
          <span className="dot" />
          <Eyebrow>Local marketing · Auckland NZ</Eyebrow>
        </Reveal>

        <Reveal
          as="div"
          className="hero-pure-headline"
          delay={80}
          aria-hidden="true"
        >
          <span className="hp-trade">
            {text}
            <span className="hp-caret" />
          </span>{" "}
          <span className="hp-tail">near me</span>
        </Reveal>

        <Reveal as="p" className="hero-sub hero-sub-tight" delay={200}>
          Someone is searching for what you do, right now. We make sure
          your business is the one they choose.
        </Reveal>

        <Reveal className="hero-cta-row" delay={280}>
          <Link className="btn-primary" href="/contact">
            Free presence check <span className="arrow">→</span>
          </Link>
          <Link className="btn-ghost" href="/how-it-works">
            See how it works
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

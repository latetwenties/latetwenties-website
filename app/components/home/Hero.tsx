"use client";

import Link from "next/link";

import { TRADES, useRotatingWord } from "@/lib/typewriter";

import { Eyebrow } from "../Eyebrow";

export function Hero() {
  const { text } = useRotatingWord(TRADES, {
    typeMs: 130,
    pauseMs: 2400,
    deleteMs: 70,
  });

  // Hero renders content directly (no Reveal wrappers) so it's painted
  // immediately on first response and doesn't wait for JS hydration to
  // become visible. That keeps LCP fast on slow mobile connections.
  return (
    <section className="hero-pure" id="top">
      <div className="wrap">
        {/* Real H1 for SEO and assistive tech. The visible headline below
            is decorative: it cycles trade words inside it. */}
        <h1 className="sr-only">
          More local enquiries in 90 days, or we keep working free until you
          get them.
        </h1>

        <div className="hero-eyebrow">
          <span className="dot" />
          <Eyebrow>Built for local service businesses · NZ &amp; AU</Eyebrow>
        </div>

        <div className="hero-pure-headline" aria-hidden="true">
          <span className="hp-trade">
            {text}
            <span className="hp-caret" />
          </span>{" "}
          <span className="hp-tail">near me</span>
        </div>

        <p className="hero-promise">
          More local enquiries in 90 days. Or we keep working, free, until you
          get them.
        </p>

        <p className="hero-sub hero-sub-tight">
          Someone is searching for what you do right now. We make sure your
          business is the one they choose.
        </p>

        <p className="hero-proof">
          4 → 12 enquiries in one month
          <span className="hero-proof-sep" aria-hidden="true">
            &nbsp;·&nbsp;
          </span>
          #2 in local search in under two months
          <span className="hero-proof-sep" aria-hidden="true">
            &nbsp;·&nbsp;
          </span>
          First lead 4 days after launch
        </p>

        <div className="hero-cta-row">
          <Link className="btn-primary" href="/contact">
            Get your free Presence Report <span className="arrow">→</span>
          </Link>
          <Link className="btn-ghost" href="/how-it-works">
            See the system
          </Link>
        </div>
      </div>
    </section>
  );
}

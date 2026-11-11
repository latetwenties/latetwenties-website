import Link from "next/link";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function TwoThings() {
  return (
    <section className="two" id="what-we-do">
      <div className="wrap">
        <div className="two-head">
          <Reveal>
            <Eyebrow num="03">The system</Eyebrow>
            <h2>
              The Found &amp; Chosen System.
              <br />
              <em>Three parts, done properly.</em>
            </h2>
          </Reveal>
          <Reveal as="p" className="lede" delay={120}>
            One system, three parts. Groundwork first. Momentum every month.
            Speed it up when you want calls sooner.
          </Reveal>
        </div>

        <div className="two-grid">
          <Reveal as="article" className="two-card">
            <div className="num">
              <span className="num-i">01</span> / Groundwork
            </div>
            <h3>Groundwork</h3>
            <p className="body">
              When someone searches your trade in your area, you show up, and
              you look like the obvious choice. Website, Google Business
              Profile, listings and reviews, built once, properly.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={80}>
            <div className="num">
              <span className="num-i">02</span> / Momentum
            </div>
            <h3>Momentum</h3>
            <p className="body">
              The monthly upkeep that keeps you climbing. Posts, fresh
              reviews, clean listings and ongoing SEO, so you keep moving up
              the list instead of slipping back.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={160}>
            <div className="num">
              <span className="num-i">03</span> / Fast Track
            </div>
            <h3>Fast Track</h3>
            <p className="body">
              Paid placement on Google and Meta puts you in front of people
              searching right now. The fast lane: enquiries in weeks, not
              months, while the rest of the system builds.
            </p>
          </Reveal>
        </div>

        <div className="two-foot">
          <Link className="ghost-link" href="/how-it-works">
            See how it works →
          </Link>
          <span className="eyebrow">Backed by the 90-day guarantee</span>
        </div>
      </div>
    </section>
  );
}

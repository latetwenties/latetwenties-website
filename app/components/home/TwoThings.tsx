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
            One system, three parts. Get found. Stay chosen. Speed it up.
          </Reveal>
        </div>

        <div className="two-grid">
          <Reveal as="article" className="two-card">
            <div className="num">01 / Get Found</div>
            <h3>Get Found</h3>
            <p className="body">
              When someone searches your trade in your area, you show up, and
              you look like the obvious choice. We build the website, Google
              Business Profile, listings and reviews once, properly, so every
              signal points at you. Built in weeks, not months.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={80}>
            <div className="num">02 / Stay Chosen</div>
            <h3>Stay Chosen</h3>
            <p className="body">
              Rankings aren&rsquo;t a trophy, they&rsquo;re a treadmill. We
              keep you climbing, fresh reviews, posts, listings, ongoing SEO,
              so the newer outfit up the road never passes you again.
              You&rsquo;ll see your position and your enquiry count every
              month, in plain English.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={160}>
            <div className="num">03 / Ring This Week</div>
            <h3>Ring This Week</h3>
            <p className="body">
              Paid placement on Google and Meta that puts you in front of
              people searching right now. This is the fast lane: enquiries
              landing this week, not next quarter, while the rest of the
              system compounds.
            </p>
          </Reveal>
        </div>

        <div className="two-foot">
          <Link className="ghost-link" href="/how-it-works">
            How it works →
          </Link>
          <span className="eyebrow">
            No lock-in contract · 90-day enquiry guarantee
          </span>
        </div>
      </div>
    </section>
  );
}

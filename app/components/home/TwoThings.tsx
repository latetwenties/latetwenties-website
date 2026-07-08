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
            One system, three parts. Get found. Stay chosen. Speed it up when
            you need the phone to ring now.
          </Reveal>
        </div>

        <div className="two-grid">
          <Reveal as="article" className="two-card">
            <div className="num">
              <span className="num-i">01</span> / Get Found
            </div>
            <h3>Get Found</h3>
            <p className="body">
              When someone searches your trade in your area, you show up, and
              you look like the obvious choice. Website, Google Business
              Profile, listings and reviews, built once, properly.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={80}>
            <div className="num">
              <span className="num-i">02</span> / Stay Chosen
            </div>
            <h3>Stay Chosen</h3>
            <p className="body">
              Showing up once isn&rsquo;t enough. We keep the signals strong,
              posts, fresh reviews, listings, ongoing SEO, so you don&rsquo;t
              slip back down the list while a newer outfit climbs.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={160}>
            <div className="num">
              <span className="num-i">03</span> / Ring This Week
            </div>
            <h3>Ring This Week</h3>
            <p className="body">
              Paid placement on Google and Meta puts you in front of people
              searching right now. The fast lane: enquiries landing this week,
              not next quarter, while the rest of the system compounds.
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

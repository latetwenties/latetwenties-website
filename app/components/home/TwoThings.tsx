import Link from "next/link";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function TwoThings() {
  return (
    <section className="two" id="what-we-do">
      <div className="wrap">
        <div className="two-head">
          <Reveal>
            <Eyebrow num="02">What we do</Eyebrow>
            <h2>
              Three things,
              <br />
              <em>done properly.</em>
            </h2>
          </Reveal>
          <Reveal as="p" className="lede" delay={120}>
            Foundations gets you showing up. Presence Care keeps you moving
            up the list. Paid Ads gets the phone ringing fast.
          </Reveal>
        </div>

        <div className="two-grid">
          <Reveal as="article" className="two-card">
            <div className="num">01 / Foundations</div>
            <h3>Foundations</h3>
            <p className="body">
              Website, Google Business Profile, listings, and reviews, set up
              properly. Built once so every signal points to you when
              someone searches.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={80}>
            <div className="num">02 / Presence Care</div>
            <h3>Presence Care</h3>
            <p className="body">
              The steady, visible care that keeps the signals strong and
              moves you up the list. Posts, reviews, listings, ongoing SEO.
              Month after month.
            </p>
          </Reveal>

          <Reveal as="article" className="two-card" delay={160}>
            <div className="num">03 / Paid Ads</div>
            <h3>Paid Ads</h3>
            <p className="body">
              Paid placement on Google and Meta that puts your business in
              front of the people searching right now. The fastest way to
              get enquiries landing this week, not next quarter.
            </p>
          </Reveal>
        </div>

        <div className="two-foot">
          <Link className="ghost-link" href="/how-it-works">
            How it works →
          </Link>
          <span className="eyebrow">No lock-ins · Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}

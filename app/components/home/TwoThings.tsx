import Link from "next/link";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function TwoThings() {
  return (
    <section className="two" id="what-we-do">
      <div className="wrap">
        <div className="two-head">
          <Reveal>
            <Eyebrow num="03">What we do</Eyebrow>
            <h2>
              Two things,
              <br />
              <em>done properly.</em>
            </h2>
          </Reveal>
          <Reveal as="p" className="lede" delay={120}>
            The site gets you showing up. The steady work after gets you
            moving up the list. We do both, in that order, so neither runs
            on its own.
          </Reveal>
        </div>

        <div className="two-grid">
          <Reveal as="article" className="two-card">
            <div className="num">01 / Foundations</div>
            <h3>Foundations</h3>
            <p className="body">
              Website, Google Business Profile, listings, and reviews, set up
              properly. Then the first 30 days of Presence Care, already
              included while the work is fresh.
            </p>
            <div className="price">
              <div className="amount">
                $3,700 <em>once</em>
              </div>
              <div className="deets">2 to 3 weeks build, then 30 days care</div>
            </div>
          </Reveal>

          <Reveal as="article" className="two-card" delay={120}>
            <div className="num">02 / Presence Care</div>
            <h3>Presence Care</h3>
            <p className="body">
              From day 31, the steady, visible care that keeps the signals
              strong and moves you up the list. Posts, reviews, listings,
              ongoing SEO.
            </p>
            <div className="price">
              <div className="amount">
                $1,200 <em>a month</em>
              </div>
              <div className="deets">Month to month, from month two</div>
            </div>
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

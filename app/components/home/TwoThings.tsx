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
            No retainers full of fluff. The foundations done right, then
            steady, visible care, month after month.
          </Reveal>
        </div>

        <div className="two-grid">
          <Reveal as="article" className="two-card">
            <div className="num">01 / Foundations</div>
            <h3>Foundations</h3>
            <p className="body">
              Set up the website, Google Business Profile, listings, and
              reviews so customers can find you.
            </p>
            <div className="price">
              <div className="amount">
                From $2,500 <em>once</em>
              </div>
              <div className="deets">2 to 3 weeks</div>
            </div>
          </Reveal>

          <Reveal as="article" className="two-card" delay={120}>
            <div className="num">02 / Presence Care</div>
            <h3>Presence Care</h3>
            <p className="body">
              Keep the signals active month to month. Posts, reviews,
              listings, ongoing SEO.
            </p>
            <div className="price">
              <div className="amount">
                $1,200 <em>a month</em>
              </div>
              <div className="deets">Month to month</div>
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

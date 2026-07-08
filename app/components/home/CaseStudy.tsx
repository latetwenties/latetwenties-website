import Link from "next/link";

import { CaseTileGrid } from "../CaseTileGrid";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function CaseStudy() {
  return (
    <section className="case" id="work">
      <div className="wrap">
        <div className="case-head">
          <Reveal>
            <Eyebrow num="04">The proof</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="case-pull">
              Local businesses,
              <br />
              <em>found and chosen.</em>
            </p>
            <div className="case-attribution">
              <span className="case-attr-name">
                A handful of our case studies
              </span>
              <span className="case-attr-sep" aria-hidden="true">
                &nbsp;·&nbsp;
              </span>
              <span className="case-attr-meta">
                Real clients, real numbers, recent work
              </span>
            </div>
          </Reveal>
        </div>

        <CaseTileGrid />

        <Reveal className="case-cta" delay={360}>
          <Link className="ghost-link" href="/work">
            All case studies →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

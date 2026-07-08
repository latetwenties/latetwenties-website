import Link from "next/link";

import { CaseTileGrid } from "../CaseTileGrid";
import { Reveal } from "../Reveal";

export function CaseStudy() {
  return (
    <section className="case" id="work">
      <div className="wrap">
        <div className="case-head">
          <Reveal>
            <p className="case-pull">
              Local businesses,
              <br />
              <em>found and chosen.</em>
            </p>
          </Reveal>
          <Reveal as="p" className="case-meta" delay={80}>
            <span className="case-meta-num">04</span> The proof · Real clients ·
            Real numbers · Recent work
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

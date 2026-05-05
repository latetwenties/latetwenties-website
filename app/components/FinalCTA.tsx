import Link from "next/link";

import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type FinalCTAProps = {
  num?: string;
  label?: string;
};

export function FinalCTA({
  num = "07",
  label = "Free presence check",
}: FinalCTAProps) {
  return (
    <section className="cta-final" id="check">
      <div className="wrap">
        <Reveal>
          <Eyebrow num={num}>{label}</Eyebrow>
          <h2>
            Want me to take
            <br />a look?{" "}
            <em>
              30 minutes,
              <br />
              no pitch.
            </em>
          </h2>
        </Reveal>
        <Reveal className="row" delay={120}>
          <Link className="btn-light" href="/contact">
            Take a look <span aria-hidden>→</span>
          </Link>
          <a className="ghost-light" href="tel:+6498844418">
            or call 09-884-4418
          </a>
        </Reveal>
      </div>
    </section>
  );
}

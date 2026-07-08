import Link from "next/link";
import { ReactNode } from "react";

import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type FinalCTAProps = {
  num?: string;
  label?: string;
  heading?: ReactNode;
  body?: ReactNode;
  cta?: string;
  note?: ReactNode;
};

const DEFAULT_HEADING = (
  <>
    Want to see what&rsquo;s
    <br />
    <em>costing you enquiries?</em>
  </>
);

export function FinalCTA({
  num = "07",
  label = "Free Presence Report",
  heading = DEFAULT_HEADING,
  body,
  cta = "Get your free Presence Report",
  note,
}: FinalCTAProps) {
  return (
    <section className="cta-final" id="check">
      <div className="wrap">
        <Reveal>
          <Eyebrow num={num}>{label}</Eyebrow>
          <h2>{heading}</h2>
        </Reveal>
        {body ? (
          <Reveal as="div" className="cta-final-body" delay={80}>
            {body}
          </Reveal>
        ) : null}
        <Reveal className="row" delay={120}>
          <Link className="btn-light" href="/contact">
            {cta} <span aria-hidden>→</span>
          </Link>
          <a className="ghost-light" href="tel:+6498844418">
            or call 09-884-4418
          </a>
        </Reveal>
        {note ? (
          <Reveal as="p" className="cta-final-note" delay={160}>
            {note}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

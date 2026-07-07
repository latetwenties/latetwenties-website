import Link from "next/link";
import { ReactNode } from "react";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

type CaseTile = {
  href: string;
  client: string;
  meta: string;
  line: ReactNode;
  stat: string;
  statLabel: string;
};

const CASES: CaseTile[] = [
  {
    href: "/work/boaz-developments",
    client: "Boaz Developments",
    meta: "Builders · Mangawhai NZ",
    line: (
      <>
        From not showing, to <em>#2 in search</em> across the neighbouring
        towns.
      </>
    ),
    stat: "10.1 → 2.5",
    statLabel: "Map-pack rank, under two months",
  },
  {
    href: "/work/tmt-concreting",
    client: "TMT Concreting & Maintenance",
    meta: "Concreting · Gippsland VIC",
    line: (
      <>
        Four enquiries a month <em>became twelve</em>, first full month with
        everything on.
      </>
    ),
    stat: "4 → 12",
    statLabel: "Enquiries, May to June",
  },
  {
    href: "/work/rbm-concrete",
    client: "RBM Concrete & Excavation",
    meta: "Concrete & excavation · Bairnsdale VIC",
    line: (
      <>
        No website at all, then <em>a stranger on the phone</em> about a new
        house slab.
      </>
    ),
    stat: "Four days",
    statLabel: "From launch to first lead",
  },
];

export function CaseStudy() {
  return (
    <section className="case" id="work">
      <div className="wrap">
        <div className="case-head">
          <Reveal>
            <Eyebrow num="03">The work</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="case-pull">
              Three local businesses.
              <br />
              <em>Three phones ringing.</em>
            </p>
            <div className="case-attribution">
              <span className="case-attr-name">Real clients, real numbers</span>
              <span className="case-attr-sep" aria-hidden="true">
                &nbsp;·&nbsp;
              </span>
              <span className="case-attr-meta">
                Every case study links the receipts
              </span>
            </div>
          </Reveal>
        </div>

        <div className="case-grid">
          {CASES.map((c, i) => (
            <Reveal key={c.href} delay={120 + i * 80}>
              <Link className="case-tile" href={c.href}>
                <div className="case-tile-meta">{c.meta}</div>
                <p className="case-tile-line">{c.line}</p>
                <div className="case-tile-stat">
                  <span className="case-tile-stat-value">{c.stat}</span>
                  <span className="case-tile-stat-label">{c.statLabel}</span>
                </div>
                <div className="case-tile-foot">
                  <span className="case-tile-client">{c.client}</span>
                  <span className="case-tile-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

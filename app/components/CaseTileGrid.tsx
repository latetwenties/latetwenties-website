import Link from "next/link";
import { ReactNode } from "react";

import { Reveal } from "./Reveal";

type CaseTile = {
  href: string;
  client: string;
  meta: string;
  line: ReactNode;
  stat: string;
};

export const CASE_TILES: CaseTile[] = [
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
  },
  {
    href: "/work/kd-bookworks",
    client: "KD Bookworks",
    meta: "Bookkeeping · Christchurch NZ",
    line: (
      <>
        A local bookkeeping site, re-aimed at Xero nationwide. Its first
        Google enquiry <em>became a client.</em>
      </>
    ),
    stat: "Seven days",
  },
];

// Render the metric with a terracotta arrow when the stat is a before/after.
function renderStat(stat: string): ReactNode {
  if (!stat.includes("→")) return stat;
  const [before, after] = stat.split("→");
  return (
    <>
      {before}
      <span className="case-tile-stat-arrow" aria-hidden="true">
        →
      </span>
      {after}
    </>
  );
}

export function CaseTileGrid({ baseDelay = 120 }: { baseDelay?: number }) {
  return (
    <div className="case-grid">
      {CASE_TILES.map((c, i) => (
        <Reveal key={c.href} delay={baseDelay + i * 80}>
          <Link className="case-tile" href={c.href}>
            <div className="case-tile-meta">{c.meta}</div>
            <p className="case-tile-line">{c.line}</p>
            <div className="case-tile-stat">
              <span className="case-tile-stat-value">
                {renderStat(c.stat)}
              </span>
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
  );
}

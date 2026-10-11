import Link from "next/link";
import { ReactNode } from "react";

import { Reveal } from "./Reveal";

type CaseTile = {
  href: string;
  client: string;
  meta: string;
  line: ReactNode;
};

// The three trade case studies lead everywhere a short proof strip appears.
// /work shows the full list.
export const FEATURED_CASES = [
  "/work/tmt-concreting",
  "/work/boaz-developments",
  "/work/rbm-concrete",
];

export const CASE_TILES: CaseTile[] = [
  {
    href: "/work/tmt-concreting",
    client: "TMT Concreting & Maintenance",
    meta: "Concreting · Gippsland VIC",
    line: (
      <>
        Seven enquiries a month <em>became thirty-five</em>, with no extra ad
        spend.
      </>
    ),
  },
  {
    href: "/work/boaz-developments",
    client: "Boaz Developments",
    meta: "Builders · Mangawhai NZ",
    line: (
      <>
        From not showing, to <em>#2 in search</em> across the neighbouring
        towns, in under two months.
      </>
    ),
  },
  {
    href: "/work/rbm-concrete",
    client: "RBM Concrete & Excavation",
    meta: "Concrete & excavation · Bairnsdale VIC",
    line: (
      <>
        No website at all, then <em>a stranger on the phone</em> about a new
        house slab, four days after launch.
      </>
    ),
  },
  {
    href: "/work/kd-bookworks",
    client: "KD Bookworks",
    meta: "Bookkeeping · Christchurch NZ",
    line: (
      <>
        A local bookkeeping site, re-aimed at Xero nationwide. Seven days after
        launch, its first Google enquiry <em>became a client.</em>
      </>
    ),
  },
];

// The client's name is saved for the case study itself; the tile leads with
// the trade, the place and the result.
export function CaseTileGrid({
  baseDelay = 120,
  only,
}: {
  baseDelay?: number;
  only?: string[];
}) {
  const tiles = only
    ? CASE_TILES.filter((c) => only.includes(c.href))
    : CASE_TILES;
  return (
    <div className="case-grid">
      {tiles.map((c, i) => (
        <Reveal key={c.href} delay={baseDelay + i * 80}>
          <Link
            className="case-tile"
            href={c.href}
            aria-label={`${c.client}: see the story`}
          >
            <div className="case-tile-meta">{c.meta}</div>
            <p className="case-tile-line">{c.line}</p>
            <div className="case-tile-foot">
              <span className="case-tile-client">See the story</span>
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

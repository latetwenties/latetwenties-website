"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";

import { FREE_SEARCH_HREF } from "@/lib/site";
import { GhostLink } from "../Button";

type Client = {
  name: string;
  // Case study page, where one exists. Cards without one aren't links.
  href?: string;
  photo: string;
  alt: string;
  logo: { src: string; w: number; h: number };
  // Logo width as a share of the card, so wide wordmarks and stacked marks
  // sit at a similar visual weight.
  logoWidth: number;
};

// Photos are the clients' own shots, pulled from their site repos. Logos are
// their marks recoloured to white for the dark overlay. Order is row by row,
// three across.
const CLIENTS: Client[] = [
  {
    name: "Boaz Developments",
    href: "/work/boaz-developments",
    photo: "/images/clients/boaz.jpg",
    alt: "Finished home built by Boaz Developments",
    logo: { src: "/images/clients/boaz-logo.png", w: 800, h: 126 },
    logoWidth: 46,
  },
  {
    name: "RBM Concrete & Excavation",
    href: "/work/rbm-concrete",
    photo: "/images/clients/rbm.jpg",
    alt: "Finished exposed aggregate path by RBM Concrete",
    logo: { src: "/images/clients/rbm-logo.png", w: 800, h: 384 },
    logoWidth: 40,
  },
  {
    name: "Hooper Electrical",
    photo: "/images/clients/hooper.jpg",
    alt: "Hooper Electrical vehicles parked on the coast",
    logo: { src: "/images/clients/hooper-logo.png", w: 407, h: 400 },
    logoWidth: 22,
  },
  {
    name: "Glenbuild",
    href: "/work/glenbuild",
    photo: "/images/clients/glenbuild.jpg",
    alt: "Finished Grey Lynn home by Glenbuild",
    logo: { src: "/images/clients/glenbuild-logo.png", w: 800, h: 253 },
    logoWidth: 44,
  },
  {
    name: "TMT Concreting & Maintenance",
    href: "/work/tmt-concreting",
    photo: "/images/clients/tmt.jpg",
    alt: "Finished concrete driveway by TMT Concreting",
    logo: { src: "/images/clients/tmt-logo.png", w: 430, h: 400 },
    logoWidth: 20,
  },
  {
    name: "Wellington Rentals",
    photo: "/images/clients/wellington.jpg",
    alt: "Wellington Rentals delivering a skid steer in Sale",
    logo: { src: "/images/clients/wellington-logo.png", w: 800, h: 105 },
    logoWidth: 50,
  },
];

// Where each card goes as the grid opens: outer columns slide sideways, the
// middle column slides up and down, clearing the centre for the last line.
const SPLIT = ["sp-left", "sp-up", "sp-right", "sp-left", "sp-down", "sp-right"];

function Card({ client, className }: { client: Client; className: string }) {
  const inner: ReactNode = (
    <>
      <Image
        src={client.photo}
        alt={client.alt}
        fill
        sizes="(max-width: 920px) 50vw, 34vw"
        className="patch-img"
      />
      <span className="patch-shade" aria-hidden="true" />
      <Image
        src={client.logo.src}
        alt={client.name}
        width={client.logo.w}
        height={client.logo.h}
        className="patch-logo"
        style={{ width: `${client.logoWidth}%` }}
      />
    </>
  );
  if (client.href) {
    return (
      <Link href={client.href} className={`patch-tile is-link ${className}`}>
        {inner}
      </Link>
    );
  }
  return <div className={`patch-tile ${className}`}>{inner}</div>;
}

export function OurPatch() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Progress is read straight off the stage's own rect and written to a CSS
  // variable, no React state, so the split tracks the scroll exactly.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = stage.getBoundingClientRect();
      // The pin sits under the 76px header, so it travels 76px less.
      const travel = rect.height - (window.innerHeight - 76);
      const raw = travel > 0 ? (76 - rect.top) / travel : 0;
      // Hold still for the first fifth, then split, then hold open.
      const p = Math.min(1, Math.max(0, (raw - 0.2) / 0.6));
      stage.style.setProperty("--split", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="patch" id="work">
      <div className="wrap patch-head">
        <h2 className="patch-h2">Local search is our patch.</h2>
        <p className="patch-lede">
          From one-man bands to growing crews. We treat every business like
          our own.
        </p>
      </div>

      <div className="patch-stage" ref={stageRef}>
        <div className="patch-pin">
          <div className="patch-grid">
            {CLIENTS.map((c, i) => (
              <Card key={c.name} client={c} className={SPLIT[i]} />
            ))}
          </div>

          <div className="patch-next">
            <h3>Yours could be next.</h3>
            <GhostLink href={FREE_SEARCH_HREF} tone="light">
              See who gets the call near you
            </GhostLink>
          </div>
        </div>
      </div>
    </section>
  );
}

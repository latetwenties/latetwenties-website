import type { Metadata } from "next";

import { breadcrumbList } from "@/lib/schema";

import { CaseTileGrid } from "../components/CaseTileGrid";
import { Eyebrow } from "../components/Eyebrow";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Case studies from local service businesses across NZ and Australia: the situation, the work, and the numbers that followed, with the screenshots and sources attached.",
  alternates: { canonical: "/work" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Our work", href: "/work" },
  ]),
];

export default function WorkPage() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header current="work" />
      <main>
        <section className="v2-hero is-short">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="dot" />
              <Eyebrow>Our work</Eyebrow>
            </div>
            <h1>
              Case studies, <em>receipts attached.</em>
            </h1>
            <p className="v2-sub">
              Local service businesses across NZ and Australia. The situation,
              the work and the numbers that followed, with sources on the page.
            </p>
          </div>
        </section>

        <section className="work-grid-section">
          <div className="wrap">
            <CaseTileGrid baseDelay={80} />
            <Reveal as="p" className="work-verify" delay={320}>
              Every client here is named and real, and the numbers are theirs,
              not ours. Want to check one? Look them up, or ask us and
              we&rsquo;ll point you their way.
            </Reveal>
          </div>
        </section>

        <FinalCTA num="02" label="Free Presence Report" />
      </main>
      <Footer />
    </>
  );
}

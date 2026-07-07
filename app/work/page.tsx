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
    { name: "Work", href: "/work" },
  ]),
];

export default function WorkPage() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header current="work" />
      <main>
        <section className="hiw-hero">
          <div className="wrap">
            <Reveal>
              <Eyebrow>The work</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hiw-h1">
                Case studies, <em>receipts attached.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hiw-lede">
                Local service businesses across New Zealand and Australia.
                Each case study shows the situation, the work, and the
                numbers that followed, with the screenshots and sources on
                the page. No composites, no vague claims, just what happened
                and when.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="work-grid-section">
          <div className="wrap">
            <CaseTileGrid baseDelay={80} />
          </div>
        </section>

        <FinalCTA num="02" label="Free presence check" />
      </main>
      <Footer />
    </>
  );
}

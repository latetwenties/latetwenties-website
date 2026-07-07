import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";

import { article, breadcrumbList, review } from "@/lib/schema";

import { Act3 } from "../../components/case-study/Act3";
import {
  BeforeAfterCompare,
  CompareHotspot,
} from "../../components/case-study/BeforeAfterCompare";
import { Eyebrow } from "../../components/Eyebrow";
import { FinalCTA } from "../../components/FinalCTA";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Boaz Developments, Mangawhai",
  description:
    "How Boaz Developments went from not showing on Google to #2 across the neighbouring towns in under two months. The full case study.",
  alternates: { canonical: "/work/boaz-developments" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Boaz Developments", href: "/work/boaz-developments" },
  ]),
  article({
    headline:
      "Boaz Developments: from not showing, to #2 in search across the neighbouring towns",
    description:
      "How a Mangawhai builder went from invisible on Google to #2 in the local map pack across the neighbouring towns in under two months.",
    url: "/work/boaz-developments",
    datePublished: "2026-04-30",
  }),
  review({
    author: "Reece, Boaz Developments",
    body: "From not showing, to #2 in search across our neighbouring towns. In under two months.",
    rating: 5,
  }),
];

const HOTSPOTS: CompareHotspot[] = [
  {
    id: 1,
    top: 0.04,
    side: "right",
    title: "Real project photography",
    body: "Hero swapped from generic stock framing to a real Boaz build. Visitors see the actual quality of work, and Google sees authentic, original imagery on a builder site.",
  },
  {
    id: 2,
    top: 0.2,
    side: "left",
    title: "Individual service pages",
    body: "Three service entry points (new builds, renovations, maintenance), each linking to a dedicated page. Content depth signals expertise to both Google and visitors comparing builders.",
  },
  {
    id: 3,
    top: 0.34,
    side: "right",
    title: "Real, recent projects",
    body: "Visitors landing here recognise the builds. Locals see houses they've driven past. Trust comes from seeing real work in real places, not a stock gallery.",
  },
  {
    id: 4,
    top: 0.5,
    side: "left",
    title: "Research-led copy",
    body: "Every “why choose us” line maps to a real pain point lifted from interviewing locals about builder horror stories. It speaks to the visitor's actual hesitations.",
  },
  {
    id: 5,
    top: 0.66,
    side: "right",
    title: "Service area signals",
    body: "The towns Boaz serves are named on the homepage in plain language. Same content gives ChatGPT, Gemini and Google the geographic context they need to recommend Boaz when someone asks for a builder in the area.",
  },
];

export default function BoazCaseStudy() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header current="work" />
      <main>
        <section className="cs-hero">
          <div className="wrap">
            <Reveal>
              <Eyebrow>Case study</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="cs-h1">
                From not showing, to <em>#2 in&nbsp;search</em>{" "}
                across our neighbouring towns. In under two&nbsp;months.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="cs-attr">Reece, Boaz Developments</div>
            </Reveal>

            <Reveal as="div" className="cs-meta" delay={180}>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">Boaz Developments</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Location</div>
                <div className="cs-meta-val">Mangawhai, Northland NZ</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Engagement</div>
                <div className="cs-meta-val">
                  Foundations and Presence Care
                </div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Time to result</div>
                <div className="cs-meta-val">Under two months</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="cs-act cs-act-1">
          <div className="wrap">
            <div className="cs-act-grid">
              <div className="cs-act-left">
                <Reveal>
                  <Eyebrow num="01">The situation</Eyebrow>
                  <h2 className="cs-act-h2">
                    A builder
                    <br />
                    running on
                    <br />
                    <em>referrals.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  Reece runs Boaz Developments. He builds homes in Mangawhai
                  and the surrounding Northland coast. Langs Beach, Mangawhai
                  Heads, the towns up and down that stretch. Growing team.
                  Real reputation among the people who already knew him.
                </p>
                <p>
                  Most work came through referrals. Friends of friends,
                  family, repeat clients. The phone rang for people who
                  already knew his name. But anyone searching online for a
                  builder in his area found someone else.
                </p>
                <p className="cs-act-pull">
                  Word of mouth got Reece to where he was. It was capping his
                  ability to bring in new work.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="cs-act cs-act-2">
          <div className="wrap">
            <div className="cs-act-grid">
              <div className="cs-act-left">
                <Reveal>
                  <Eyebrow num="02">The work</Eyebrow>
                  <h2 className="cs-act-h2">
                    One
                    <br />
                    conversation.
                    <br />
                    Then we got
                    <br />
                    <em>out of his way.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  We met with Reece. After a brief conversation about what
                  Latetwenties does, he said it sounded like exactly what he
                  needed. The last thing he wanted was to sit at a computer
                  figuring out marketing himself.
                </p>
                <p>
                  An onboarding session, then the in-depth research process.
                  A V1 of the site delivered for review within a week. We
                  sent the link in a text message.{" "}
                  <em>It went live with no changes from him.</em>
                </p>

                <figure className="cs-react-inline">
                  <Image
                    src="/images/case-studies/boaz/text-reaction.png"
                    alt="Text message exchange with Reece, shortly after the V1 link landed. Reece replies: Brooooo. That is UNREAL. Change NOTHING! I don't like it. I LOVE IT."
                    width={1206}
                    height={2622}
                    sizes="(max-width: 920px) 240px, 280px"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <figcaption>
                    Reece, by text. Shortly after the V1 link landed.
                  </figcaption>
                </figure>

                <p>
                  From there we took over Presence Care. The relationship runs
                  smoothly because Reece trusts the practice. We only check in
                  when factual confirmation is needed. Otherwise he focuses on
                  his actual work and the signals stay active.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <BeforeAfterCompare
          heading={
            <>
              The site, <em>before and after.</em>
            </>
          }
          lede="The old homepage and the new one, scrolled together. Hover the markers to see where each decision lives."
          url="boazdevelopments.co.nz"
          before={{
            src: "/images/case-studies/boaz/website-home-before.png",
            alt: "Boaz Developments homepage before. Generic dark builder template, stock framing imagery, vague headlines.",
            width: 2578,
            height: 8684,
          }}
          after={{
            src: "/images/case-studies/boaz/website-home-after.png",
            alt: "Boaz Developments homepage after. Real project photography, service-led layout, research-driven copy.",
            width: 2746,
            height: 12374,
          }}
          hotspots={HOTSPOTS}
          notes={[
            <Fragment key={1}>
              <strong>Dedicated service and location pages</strong>, each
              findable in its own right
            </Fragment>,
            <Fragment key={2}>
              <strong>Heavy SEO and GEO foundations</strong>: schema,
              structured data, internal linking, AI-search markup
            </Fragment>,
            <Fragment key={3}>
              <strong>Copy lifted from how locals actually search</strong>,
              using their language, not ours
            </Fragment>,
            <Fragment key={4}>
              <strong>Real Boaz photography</strong> from the build sites,
              no stock
            </Fragment>,
            <Fragment key={5}>
              <strong>Named service areas in plain text</strong> so AI tools
              confidently recommend Boaz when asked about the area
            </Fragment>,
          ]}
        />

        <Act3 />

        <FinalCTA num="06" label="Free presence check" />
      </main>
      <Footer />
    </>
  );
}

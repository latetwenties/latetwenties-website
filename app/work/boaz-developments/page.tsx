import type { Metadata } from "next";
import Image from "next/image";

import { article, breadcrumbList, review } from "@/lib/schema";

import { Act3 } from "../../components/case-study/Act3";
import { BeforeAfterCompare } from "../../components/case-study/BeforeAfterCompare";
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
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work/boaz-developments" },
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

export default function BoazCaseStudy() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header />
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

        <BeforeAfterCompare />

        <Act3 />

        <FinalCTA num="06" label="Free presence check" />
      </main>
      <Footer />
    </>
  );
}

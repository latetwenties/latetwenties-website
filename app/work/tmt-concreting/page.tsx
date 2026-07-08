import type { Metadata } from "next";
import { Fragment } from "react";

import { article, breadcrumbList, review } from "@/lib/schema";

import {
  BeforeAfterCompare,
  CompareHotspot,
} from "../../components/case-study/BeforeAfterCompare";
import { TmtResults } from "../../components/case-study/TmtResults";
import { Eyebrow } from "../../components/Eyebrow";
import { FinalCTA } from "../../components/FinalCTA";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "TMT Concreting & Maintenance, Gippsland",
  description:
    "How TMT Concreting & Maintenance went from four enquiries a month to twelve in the first full month with a new website, local search and Google Ads working together. The full case study.",
  alternates: { canonical: "/work/tmt-concreting" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "TMT Concreting & Maintenance", href: "/work/tmt-concreting" },
  ]),
  article({
    headline:
      "TMT Concreting & Maintenance: from four enquiries a month to twelve in the first full month",
    description:
      "How a Gippsland concreter went from a template website to twelve enquiries in a month, with a research-led rebuild, local search foundations and a small Google Ads campaign.",
    url: "/work/tmt-concreting",
    datePublished: "2026-07-07",
  }),
  review({
    author: "Nick MacDonald, TMT Concreting & Maintenance",
    body: "Working with the team at Late Twenties Agency has been an outstanding experience. From the very beginning, they took the time to understand our business and provided clear, practical advice without all the usual marketing jargon. Their communication has been excellent, they're responsive, transparent, and genuinely invested in helping us grow. The quality of their work has exceeded our expectations, and we've already seen positive improvements to our online presence. If you're looking for a marketing agency that genuinely cares about your business and delivers what they promise, I wouldn't hesitate to recommend Late Twenties Agency. Thanks for all your hard work and support!",
    rating: 5,
  }),
];

const HOTSPOTS: CompareHotspot[] = [
  {
    id: 1,
    top: 0.03,
    side: "right",
    title: "Copy that answers the real hesitation",
    body: "“Done right the first time” and “we show up when we say we will” come straight from research into what Gippsland homeowners worry about after a bad contractor experience.",
  },
  {
    id: 2,
    top: 0.3,
    side: "left",
    title: "A page for every service",
    body: "Seven services, each with its own dedicated page. Someone searching for epoxy flooring or exposed aggregate lands on a page about exactly that, not a catch-all list.",
  },
  {
    id: 3,
    top: 0.52,
    side: "right",
    title: "Reviews doing the talking",
    body: "Named homeowner reviews and the live 5.0 Google rating sit on the page itself. The reputation TMT already earned now works on the site, not just on the profile.",
  },
  {
    id: 4,
    top: 0.655,
    side: "left",
    title: "A note from Nick",
    body: "The owner in his own words: measure up in person, written quote, no square-metre guesses over the phone. Trust comes from a person, and the site puts him front and centre.",
  },
  {
    id: 5,
    top: 0.845,
    side: "right",
    title: "Towns named in plain text",
    body: "Sale, Traralgon, Bairnsdale, Stratford, Paynesville. Google and AI tools get the geography they need, and the site-visit CTA matches how Nick actually quotes.",
  },
];

export default function TmtCaseStudy() {
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
                Four enquiries a month <em>became twelve</em>. In the first
                full month with everything switched&nbsp;on.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="cs-attr">TMT Concreting &amp; Maintenance</div>
            </Reveal>

            <Reveal as="div" className="cs-meta" delay={180}>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">
                  TMT Concreting &amp; Maintenance
                </div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Location</div>
                <div className="cs-meta-val">Sale, Gippsland VIC</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Engagement</div>
                <div className="cs-meta-val">
                  Get Found, Stay Chosen and Ring This Week
                </div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Enquiries, first full month</div>
                <div className="cs-meta-val">4 → 12</div>
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
                    A 5.0-star crew
                    <br />
                    on a <em>template</em>
                    <br />
                    <em>website.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  Nick MacDonald runs TMT Concreting &amp; Maintenance out of
                  Sale, in Gippsland, Victoria. A small crew doing driveways,
                  pool surrounds, exposed aggregate, slabs and epoxy across
                  Sale, Traralgon, Bairnsdale, Stratford and Paynesville. The
                  work speaks for itself: a 5.0 rating on Google from the
                  people he&rsquo;s poured for.
                </p>
                <p>
                  The website didn&rsquo;t. A template site with a generic
                  headline, one catch-all services list and a gallery.
                  Nothing for someone searching &ldquo;concrete driveway
                  Sale&rdquo; or &ldquo;epoxy flooring Traralgon&rdquo; to
                  land on, and nothing measured, so no way of knowing what
                  any of it was doing.
                </p>
                <p className="cs-act-pull">
                  The work earned the reviews. The website didn&rsquo;t earn
                  the work.
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
                    Get found first.
                    <br />
                    <em>Then fuel.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  The research came first. The pattern across Gippsland
                  homeowners was clear: too many had been burned by
                  concreters who don&rsquo;t show up, don&rsquo;t finish, or
                  won&rsquo;t give a straight number. So every page answers
                  that hesitation in plain language. Measure up in person.
                  Written quote you can compare. Workmanship warranty on
                  every pour.
                </p>
                <p>
                  The new site went live in May: a page for each of the
                  seven services, the towns named in plain text, real
                  project photos with places and dates, a note from Nick in
                  his own words, and a quote form wired so every enquiry is
                  counted. Underneath it, the local layer: Business Profile,
                  citations, and a 49-point ranking grid around Sale so we
                  can see the map, not guess at it.
                </p>
                <p>
                  Only once that was standing did the ads go on. A small
                  Google Ads search campaign on a modest daily budget,
                  sending paid clicks to pages built to convert them.
                  Getting found first is the point: the same budget works
                  harder when the landing isn&rsquo;t a template.
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
          lede="The old homepage and the new one, scrolled together. Hover the markers to see what changed and why."
          url="tmtconcreteandmaintenance.com.au"
          before={{
            src: "/images/case-studies/tmt/website-home-before.jpg",
            alt: "TMT homepage before. Purple template site with a generic Building Trust headline over a bitumen photo, a catch-all services list and a gallery grid.",
            width: 2746,
            height: 7780,
          }}
          after={{
            src: "/images/case-studies/tmt/website-home-after.jpg",
            alt: "TMT homepage after. Concrete done right the first time headline, seven dedicated service pages, named homeowner reviews with a live 5.0 Google rating, a note from Nick, and the Gippsland towns named in plain text.",
            width: 2746,
            height: 12224,
          }}
          hotspots={HOTSPOTS}
          notes={[
            <Fragment key={1}>
              <strong>Research before design</strong>: what Gippsland
              homeowners actually worry about when hiring a concreter
            </Fragment>,
            <Fragment key={2}>
              <strong>A page for each of the seven services</strong>, with
              the towns named in plain text
            </Fragment>,
            <Fragment key={3}>
              <strong>Heavy SEO and GEO foundations</strong>: schema,
              structured data, internal linking, AI-search markup
            </Fragment>,
            <Fragment key={4}>
              <strong>Conversion tracking wired end to end</strong>: every
              form, call tap and ad click counted, not guessed
            </Fragment>,
            <Fragment key={5}>
              <strong>Google Ads switched on last</strong>, once the pages
              it pays to land on were standing
            </Fragment>,
          ]}
        />

        <TmtResults />

        <FinalCTA
          num="05"
          label="Free Presence Report"
          heading={
            <>
              Want numbers
              <br />
              <em>like these?</em>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}

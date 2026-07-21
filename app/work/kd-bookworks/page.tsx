import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

import { article, breadcrumbList } from "@/lib/schema";

import { Eyebrow } from "../../components/Eyebrow";
import { FinalCTA } from "../../components/FinalCTA";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  BeforeAfterCompare,
  type CompareHotspot,
} from "../../components/case-study/BeforeAfterCompare";
import { JsonLd } from "../../components/JsonLd";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "KD Bookworks, Christchurch",
  description:
    "How a Christchurch bookkeeper stopped competing for a 20-a-month local search and aimed her whole site at Xero instead. Seven days after launch, a builder chose her over the other option, and it became live Xero-training work.",
  alternates: { canonical: "/work/kd-bookworks" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "KD Bookworks", href: "/work/kd-bookworks" },
  ]),
  article({
    headline:
      "KD Bookworks: the brief said bookkeeping, the searches said Xero",
    description:
      "How an opportunity pass re-aimed a Christchurch bookkeeper's site from a 20-a-month local search to nationwide Xero, and produced a first Google enquiry seven days after launch that became live Xero-training work.",
    url: "/work/kd-bookworks",
    datePublished: "2026-07-17",
  }),
];

// TODO(asset): hotspot `top` values are fractions of the full-page after image
// and are estimated from a scaled screenshot. Re-check once the real capture
// is in place.
const HOTSPOTS: CompareHotspot[] = [
  {
    id: 1,
    top: 0.03,
    side: "right",
    title: "Her voice, in the first person",
    body: "\"I make Xero make sense.\" The old site said \"we\" and sounded like a firm. Karen is one person who teaches you the software rather than taking it away from you, so the site says \"I\".",
  },
  {
    id: 2,
    top: 0.07,
    side: "left",
    title: "Her face, above the fold",
    body: "Named, credentialed, photographed. The enquiry that arrived seven days after launch cited exactly this: the more personalised approach on the site.",
  },
  {
    id: 3,
    top: 0.13,
    side: "right",
    title: "A reason to care, with a number in it",
    body: "Not a welcome message. A specific claim about money sole traders leave behind at tax time, which is the thing her customers actually feel.",
  },
  {
    id: 4,
    top: 0.35,
    side: "left",
    title: "Xero setup and training, first",
    body: "The service the searches pointed at, given the lead position and its own page. Bookkeeping stayed on the site. It just stopped being the front door.",
  },
  {
    id: 5,
    top: 0.62,
    side: "right",
    title: "Pricing in plain sight",
    body: "By the hour, or monthly, with the numbers on the page. Nobody has to email to find out whether they can afford her.",
  },
];

export default function KdBookworksCaseStudy() {
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
                She asked for a bookkeeping site. The searches said Xero.{" "}
                <em>
                  Seven days after the new one went live, a builder chose her
                  over the other bloke.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="cs-attr">KD Bookworks</div>
            </Reveal>

            <Reveal as="div" className="cs-meta" delay={180}>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">KD Bookworks</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Location</div>
                <div className="cs-meta-val">Waltham, Christchurch</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Engagement</div>
                <div className="cs-meta-val">Get Found</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">First enquiry</div>
                <div className="cs-meta-val">Seven days after launch</div>
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
                    A Xero specialist
                    <br />
                    aiming at the
                    <br />
                    <em>smallest pool.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  Karen Dunford runs KD Bookworks out of Waltham,
                  Christchurch. Ten years at it, ICNZB certified, Xero Partner
                  Silver, Xero Advisor and Xero Payroll certified. She works
                  remotely with clients across New Zealand, and she refers
                  limited-company end-of-year work to accountants rather than
                  pretending to be one.
                </p>
                <p>
                  Her old site opened with &ldquo;We take care of the numbers
                  so you can grow your business.&rdquo; Third person, no face,
                  packages named after a fox. It was a site about bookkeeping,
                  and it read like every other site about bookkeeping.
                </p>
                <p>
                  She came to us wanting a bookkeeping site, with Xero as a
                  sub-product.
                </p>
                <p className="cs-act-pull">
                  The brief said bookkeeping. The demand was somewhere else.
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
                    Before the design,
                    <br />
                    <em>a look at what</em>
                    <br />
                    <em>people type.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  Every onboarding here has an opportunity phase. Not just
                  what the client asked for, but what else is sitting there
                  unclaimed. For Karen that meant reading the searches behind
                  the brief before anyone drew a page.
                </p>
                <p>
                  Bookkeeping reads as local. People want a bookkeeper near
                  them, so Karen&rsquo;s real market was Christchurch-sized.{" "}
                  <em>Bookkeeper Christchurch</em> runs about 20 searches a
                  month, and it is a high-competition term. She would have
                  been competing hardest for the smallest pool she had.
                </p>
                <p>
                  Xero is a different shape. Setup and training happen down a
                  video call, so the market is not Christchurch, it is the
                  country. <em>Xero training</em> runs around 720 searches a
                  month nationally, and <em>Xero help</em> another 260 at
                  almost no competition (Google Ads volumes, New Zealand, July
                  2026). The same gap held at the May research pass and across
                  the twelve months before it. And Karen already held the
                  credentials for every one of those searches.
                </p>
                <p className="cs-act-pull">
                  She was already qualified for the bigger market. The site
                  just was not pointed at it.
                </p>
                <p>
                  So we aimed the whole site at Xero. Setup and training took
                  the lead position with a page of its own. The copy moved
                  into her own voice, first person, because she teaches the
                  software rather than taking it off you. Her face went above
                  the fold. The bookkeeping stayed. It stopped being the front
                  door.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TODO(asset): both captures needed at public/images/case-studies/kdbookworks/.
            The after image MUST show Karen's hero portrait: the enquiry cited the
            personalised approach, so a capture that drops her face undercuts the
            case study. Correct width/height below to the real files on swap-in. */}
        <BeforeAfterCompare
          heading={
            <>
              The site, <em>before and after.</em>
            </>
          }
          lede="The old homepage and the new one, scrolled together. Hover the markers to see where each decision lives."
          url="kdbookworks.co.nz"
          before={{
            src: "/images/case-studies/kdbookworks/website-home-before.png",
            alt: "KD Bookworks homepage before. Navy Squarespace template, third-person copy reading We take care of the numbers so you can grow your business, generic services overview, packages named after a fox.",
            width: 3076,
            height: 12896,
          }}
          after={{
            src: "/images/case-studies/kdbookworks/website-home-after.png",
            alt: "KD Bookworks homepage after. Cream editorial layout, first-person headline reading I make Xero make sense, Karen photographed above the fold, Xero setup and training leading the services, pricing shown plainly.",
            width: 2368,
            height: 16384,
          }}
          hotspots={HOTSPOTS}
          notes={[
            <Fragment key={1}>
              <strong>An opportunity pass before the design</strong>: what she
              asked for, checked against what people actually search
            </Fragment>,
            <Fragment key={2}>
              <strong>Aimed at Xero, not bookkeeping</strong>: the service she
              can deliver anywhere in the country, given the front door
            </Fragment>,
            <Fragment key={3}>
              <strong>Her voice and her face</strong>: first person, named,
              credentialed, photographed
            </Fragment>,
            <Fragment key={4}>
              <strong>Heavy SEO and GEO foundations</strong>: schema,
              structured data, internal linking, AI-search markup
            </Fragment>,
            <Fragment key={5}>
              <strong>Pricing on the page</strong>: by the hour or monthly, no
              email required to find out
            </Fragment>,
          ]}
        />

        <section className="cs-act cs-act-3">
          <div className="wrap">
            <div className="cs-act-grid">
              <div className="cs-act-left">
                <Reveal>
                  <Eyebrow num="03">The result</Eyebrow>
                  <h2 className="cs-act-h2">
                    Seven days later,
                    <br />
                    a builder chose her.
                    <br />
                    <em>Then he became a client.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  The new site went live on Thursday 9 July. Seven days later
                  Karen&rsquo;s first enquiry arrived through Google search: a
                  builder whose partner wanted help getting their Xero sorted.
                </p>
                <p>
                  He had two options in front of him. He contacted Karen
                  first, and he told her why. He liked the more personalised
                  approach on her website.
                </p>
                <p>
                  The reason matters more than the speed. He was not choosing
                  on price, and he was not choosing on proximity. He chose on
                  the sense that a real person would sit down and help him,
                  which is precisely what the first-person voice and the
                  photograph were put there to do.
                </p>
                <p>
                  The enquiry has since become the work. They have started
                  together, a builder who wants to run his own Xero properly
                  rather than hand the books off. That is the exact job the site
                  was re-aimed to bring in: not a local bookkeeping lead, a
                  Xero-training client who could have been anywhere in the
                  country. Seven days from launch to the kind of client the
                  redesign was for.
                </p>
                <p>
                  It also happened with everything else switched off.
                  Karen&rsquo;s Google Business Profile is suspended and still
                  working through recovery, so none of this came from the map
                  pack. No Google reviews. No ongoing work, no posts, no ads.
                  The website did it on its own.
                </p>
                <p className="cs-act-pull">
                  Chosen first, out of two, before anything else was even
                  switched on.
                </p>

                {/* TODO(asset): Karen's message, cropped to the message itself.
                    Correct width/height to the real file on swap-in. */}
                <figure className="cs-react-inline">
                  <Image
                    src="/images/case-studies/kdbookworks/text-reaction.jpg"
                    alt="Text message from Karen. She writes that her first enquiry came through Google search that day, that they liked the more personalised approach on the website so chose to contact her first out of two options, and that it is a builder whose partner wants help with the Xero."
                    width={1206}
                    height={2041}
                    sizes="(max-width: 920px) 240px, 280px"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <figcaption>
                    Karen, by text. Seven days after launch.
                  </figcaption>
                </figure>

                <p>
                  Up next is the Google layer: the Business Profile back from
                  suspension, then reviews and the map pack on top of
                  foundations that are already working.
                </p>
                <p>
                  Karen left us a Google review after the site went live. The
                  line that stuck was the one about the opportunity pass:{" "}
                  <em>
                    &ldquo;He knows exactly what to do to optimize your
                    marketing plan within any given industry.&rdquo;
                  </em>{" "}
                  She said it about bookkeeping, which is not an industry we
                  specialise in. That is rather the point.
                </p>
              </Reveal>
            </div>

            <Reveal as="div" className="cs-summary" delay={140}>
              <div className="cs-summary-tag">In summary</div>
              <ul className="cs-summary-list">
                <li>
                  <strong>Opportunity pass:</strong> the brief said bookkeeping
                  (bookkeeper Christchurch, about 20 searches a month, high
                  competition). The searches said Xero (Xero training, about
                  720 a month, nationwide).
                </li>
                <li>
                  <strong>Website:</strong> from a third-person template to a
                  first-person Xero specialist site, her voice and her face,
                  pricing on the page.
                </li>
                <li>
                  <strong>First enquiry, first client:</strong> seven days
                  after launch a builder chose her through Google over the other
                  option, and it has become live Xero-training work.
                </li>
                <li>
                  <strong>Up next:</strong> Google Business Profile recovery,
                  then reviews and the map pack.
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <FinalCTA
          num="04"
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

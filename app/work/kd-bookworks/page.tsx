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
    "How a Christchurch bookkeeping brand stopped competing for a 20-a-month local search and aimed its whole site at Xero instead. Seven days after launch, its first Google enquiry became a client.",
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
      "How an opportunity pass re-aimed a Christchurch bookkeeping site from a 20-a-month local search to nationwide Xero, and produced a first Google enquiry that became a client seven days after launch.",
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
    body: "\"I make Xero make sense.\" The old site said \"we\" and sounded like a firm. This is one person who teaches you the software rather than taking it away from you, so the site says \"I\".",
  },
  {
    id: 2,
    top: 0.07,
    side: "left",
    title: "A face, above the fold",
    body: "Named, credentialed, photographed. The enquiry that arrived a week after launch cited exactly this: the more personalised approach on the site.",
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
                The brief said bookkeeping. The searches said Xero.{" "}
                <em>
                  Seven days after the new site went live, its first enquiry
                  became a client.
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
                <div className="cs-meta-val">Christchurch NZ</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Engagement</div>
                <div className="cs-meta-val">Get Found</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Time to first client</div>
                <div className="cs-meta-val">Seven days</div>
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
                    A Xero specialist,
                    <br />
                    fishing
                    <br />
                    <em>too small a pond.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  KD Bookworks is a Xero specialist. Setup, training, the
                  ongoing books, all done remotely with clients anywhere in
                  New Zealand.
                </p>
                <p>
                  The old site spoke in the third person and kept the owner
                  off the page. It was built around bookkeeping, for one city,
                  when the work could reach the whole country.
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
                    <em>we read the</em>
                    <br />
                    <em>searches.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  A client comes to us clear on their focus, on what they know
                  their business is about. Our part is to sit the data next to
                  that, in case it points to an opportunity neither of us had
                  spotted yet.
                </p>
                <p>
                  Bookkeeping is a local search. <em>Bookkeeper Christchurch</em>{" "}
                  runs about 20 a month, and it is fought over. Xero is
                  different. Setup and training happen down a video call, so
                  the market is the whole country. <em>Xero training</em> runs
                  about 720 a month, at almost no competition (Google Ads
                  volumes, NZ, 2026). KD Bookworks already held the credentials
                  for all of it.
                </p>
                <p className="cs-act-pull">
                  Already qualified for the bigger market. The site just was
                  not pointed at it.
                </p>
                <p>
                  So we aimed the whole site at Xero. Setup and training took
                  the lead, with a page of its own. The copy moved into the
                  first person, because this is one person who teaches you the
                  software rather than taking it off you. The bookkeeping
                  stayed. It stopped being the front door.
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
            alt: "KD Bookworks homepage before. Navy Squarespace template, third-person copy reading We take care of the numbers so you can grow your business, services overview, themed pricing packages.",
            width: 3076,
            height: 12896,
          }}
          after={{
            src: "/images/case-studies/kdbookworks/website-home-after.png",
            alt: "KD Bookworks homepage after. Cream editorial layout, first-person headline reading I make Xero make sense, the owner photographed above the fold, Xero setup and training leading the services, pricing shown plainly.",
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
                    <em>the ideal client.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                {/* TODO(asset): the client's message, cropped to the message
                    itself. Correct width/height to the real file on swap-in. */}
                <figure className="cs-react-inline">
                  <Image
                    src="/images/case-studies/kdbookworks/text-reaction.jpg"
                    alt="Text message reporting the first enquiry. It says the enquiry came through Google search that day, that the customer liked the more personalised approach on the website and made contact first out of two options, and that it is a builder whose partner wants help with Xero."
                    width={1206}
                    height={2041}
                    sizes="(max-width: 920px) 240px, 280px"
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>

                <p>
                  The new site went live. Seven days later the first enquiry
                  came in through Google search: a builder wanting help getting
                  his Xero sorted.
                </p>
                <p>
                  He had two options and contacted KD Bookworks first. He said
                  why. He liked the more personalised approach on the site. Not
                  price, not proximity. The sense that a real person would sit
                  down and help him.
                </p>
                <p>
                  It has since become the work: a builder learning to run his
                  own Xero properly, which is exactly the client the site was
                  rebuilt to bring in. And it happened with everything else
                  switched off. The Google Business Profile is still in
                  recovery, there are no reviews yet, no ads. The site did it
                  on its own.
                </p>
                <p className="cs-act-pull">
                  Chosen first, out of two, before anything else was even
                  switched on.
                </p>
              </Reveal>
            </div>

            <Reveal as="div" className="cs-summary" delay={140}>
              <div className="cs-summary-tag">In summary</div>
              <ul className="cs-summary-list">
                <li>
                  <strong>New site, live.</strong> A local bookkeeping template
                  rebuilt as a first-person Xero specialist site, pricing on
                  the page.
                </li>
                <li>
                  <strong>Opportunity found.</strong> The brief said bookkeeper
                  Christchurch, about 20 searches a month. The searches said
                  Xero training, about 720 a month, nationwide.
                </li>
                <li>
                  <strong>Ideal client.</strong> Seven days after launch a
                  builder chose KD Bookworks through Google, over the other
                  option, and it became live Xero work.
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

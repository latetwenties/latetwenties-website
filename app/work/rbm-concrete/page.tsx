import type { Metadata } from "next";

import { article, breadcrumbList } from "@/lib/schema";

import { Eyebrow } from "../../components/Eyebrow";
import { FinalCTA } from "../../components/FinalCTA";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeShowcase } from "../../components/case-study/HomeShowcase";
import { JsonLd } from "../../components/JsonLd";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "RBM Concrete & Excavation, Bairnsdale",
  description:
    "How RBM Concrete & Excavation went from no website at all to their first enquiry from a stranger, four days after the new site went live. The full case study.",
  alternates: { canonical: "/work/rbm-concrete" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work/rbm-concrete" },
    { name: "RBM Concrete & Excavation", href: "/work/rbm-concrete" },
  ]),
  article({
    headline:
      "RBM Concrete & Excavation: from no website at all to the first stranger enquiry in four days",
    description:
      "How a Bairnsdale concreter with no online presence got a research-led website and citations live, and received their first enquiry from a stranger four days later.",
    url: "/work/rbm-concrete",
    datePublished: "2026-07-07",
  }),
];

export default function RbmCaseStudy() {
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
                From no website at all, to a stranger asking for a quote on a
                new house slab. <em>In four&nbsp;days.</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="cs-attr">RBM Concrete &amp; Excavation</div>
            </Reveal>

            <Reveal as="div" className="cs-meta" delay={180}>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">RBM Concrete &amp; Excavation</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Location</div>
                <div className="cs-meta-val">Bairnsdale, East Gippsland VIC</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Engagement</div>
                <div className="cs-meta-val">Foundations</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Time to first lead</div>
                <div className="cs-meta-val">Four days</div>
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
                    A concrete crew
                    <br />
                    with <em>no way to</em>
                    <br />
                    <em>be found.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  Ronnie runs RBM Concrete &amp; Excavation out of Bairnsdale,
                  in East Gippsland, Victoria. One crew handles both the dig
                  and the pour: house slabs, driveways, commercial work,
                  excavation. Jobs across Lindenow, Paynesville, Lakes
                  Entrance and the towns between, including commercial builds
                  like the Bairnsdale Police Station.
                </p>
                <p>
                  The work was real and the reputation was solid, but all of
                  it moved through the local network. Builders who knew the
                  crew, neighbours, repeat clients. There was no website. No
                  listing. Nothing.
                </p>
                <p className="cs-act-pull">
                  If you searched for a concreter in Bairnsdale, RBM
                  didn&rsquo;t exist.
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
                    Research first.
                    <br />
                    Then a site built
                    <br />
                    <em>to be found.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  We started with the research, not the design. How do East
                  Gippsland homeowners and builders actually choose a
                  concreter? What do they search, what do they worry about,
                  what language do they use? The pattern was clear: people
                  there want the job done right, not done cheap, and they
                  want one team accountable for the dig and the pour.
                </p>
                <p>
                  The site was built around that. A page for every service.
                  The towns RBM serves named in plain language. Straight
                  answers to the questions people ask before they book. A
                  quote form that works the way Ronnie works: site visit
                  first, firm number after.
                </p>
                <p>
                  Alongside the site, we built RBM&rsquo;s citations: name,
                  address and phone listed consistently across the business
                  directories that sit outside Google. The Google Business
                  Profile is still working through verification, so none of
                  what happened next came from the map pack. That layer
                  switches on next.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <HomeShowcase />

        <section className="cs-act cs-act-3">
          <div className="wrap">
            <div className="cs-act-grid">
              <div className="cs-act-left">
                <Reveal>
                  <Eyebrow num="03">The result</Eyebrow>
                  <h2 className="cs-act-h2">
                    Four days later,
                    <br />
                    <em>the phone rang.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  The site went live in late June 2026. Four days later, an
                  enquiry landed from a complete stranger: a new house slab.
                  No referral, no builder connection, nobody who knew the
                  crew. Someone searching online for a concreter found RBM
                  and asked for a quote.
                </p>
                <p>
                  That matters more than the speed. It came before the
                  Google Business Profile was even verified. The website and
                  the citations did the work on their own, which is exactly
                  what foundations are supposed to do: keep working before,
                  during and after everything else switches on.
                </p>
                <p className="cs-act-pull">
                  The first job RBM never had to ask for, four days in.
                </p>
                <p>
                  Up next is the Google layer: profile verification, reviews,
                  the map pack. The foundations are set. Now the signals
                  build on top.
                </p>
              </Reveal>
            </div>

            <Reveal as="div" className="cs-summary" delay={140}>
              <div className="cs-summary-tag">In summary</div>
              <ul className="cs-summary-list">
                <li>
                  <strong>Website:</strong> from none at all to a
                  research-led, service-led home for the trade.
                </li>
                <li>
                  <strong>Citations:</strong> name, address and phone listed
                  consistently across the directories outside Google.
                </li>
                <li>
                  <strong>First lead:</strong> four days after launch. A
                  stranger, out of the blue, asking about a new house slab.
                </li>
                <li>
                  <strong>Up next:</strong> the Google layer. Business
                  Profile, reviews, the map pack.
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <FinalCTA num="04" label="Free presence check" />
      </main>
      <Footer />
    </>
  );
}

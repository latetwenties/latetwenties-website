import type { Metadata } from "next";

import { article, breadcrumbList } from "@/lib/schema";

import { Eyebrow } from "../../components/Eyebrow";
import { FinalCTA } from "../../components/FinalCTA";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { Reveal } from "../../components/Reveal";

// Results-pending case study: foundations only. The baseline (BrightLocal grid
// and rank tracker, GA4 export) lives in the client's Drive `baseline` folder
// and stays off the page until Brendan approves the Stay Chosen results to set
// beside it. Add those as a result act when they land.
export const metadata: Metadata = {
  title: "Glenbuild, Auckland",
  description:
    "An award-winning Auckland builder with thirty years of referral work, and the foundations we built so new clients can find it in search. Results to follow.",
  alternates: { canonical: "/work/glenbuild" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Glenbuild", href: "/work/glenbuild" },
  ]),
  article({
    headline:
      "Glenbuild: an award-winning Auckland builder, and the foundations to be found",
    description:
      "How a National Supreme House of the Year builder that ran on referrals got a site built around its award-winning projects, ready for the results to follow.",
    url: "/work/glenbuild",
    datePublished: "2026-10-05",
  }),
];

export default function GlenbuildCaseStudy() {
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
                Thirty years of award-winning homes, built on referrals.{" "}
                <em>The foundations are in. The results are on their way.</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="cs-attr">Glenbuild</div>
            </Reveal>

            <Reveal as="div" className="cs-meta" delay={180}>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">Glenbuild</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Location</div>
                <div className="cs-meta-val">Mt Albert, Auckland NZ</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Engagement</div>
                <div className="cs-meta-val">Get Found, now Stay Chosen</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-label">Status</div>
                <div className="cs-meta-val">Live, results to follow</div>
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
                    Thirty years
                    <br />
                    of referrals,
                    <br />
                    <em>and the work to show for it.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  Glenbuild builds architectural new homes and major
                  renovations across Auckland. Finn Glengarry started the
                  firm with his father Rob in 1994, and the same director and
                  crew still run every job from first call to handover. Their
                  Rawhitiroa renovation won the 2023 National Supreme
                  Renovation of the Year at the Master Builders House of the
                  Year awards.
                </p>
                <p>
                  For thirty years the work came through referrals. Someone
                  who already knew the name could find Glenbuild. Someone
                  searching fresh for a builder in Remuera or Grey Lynn mostly
                  could not.
                </p>
                <p className="cs-act-pull">
                  The standing was real. Search had not caught up with it
                  yet.
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
                    Let the builds
                    <br />
                    <em>do the talking.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  Glenbuild already had the best proof a builder can have:
                  award-winning homes, photographed properly. The job was to
                  put that work where people search, and to build the site so
                  Google could read it.
                </p>
                <p>
                  Every project got its own page with the full photography
                  and the story of the build. New builds and renovations each
                  got a page. Six suburbs got a page, but only where Glenbuild
                  has a finished home to point to, so every one of them is
                  backed by real work. Every old page address was redirected,
                  the structured data was set up for Google and AI search,
                  and enquiry tracking went in before launch.
                </p>
                <p>
                  Alongside the site, the Google Business Profile came under
                  regular care: project posts and reviews from past clients.
                </p>
              </Reveal>
            </div>

            <Reveal as="div" className="cs-proof" delay={120}>
              <div className="cs-proof-head">
                <Eyebrow>The new site</Eyebrow>
                <h3 className="cs-proof-h3">
                  The work up front, <em>from the first second.</em>
                </h3>
                <p className="cs-proof-sub">
                  The homepage opens on Glenbuild&rsquo;s own finished homes,
                  on film.
                </p>
              </div>
              <div className="cs-proof-fig-single">
                <div className="cs-bw">
                  <div className="cs-bw-bar">
                    <span className="cs-bw-dot" />
                    <span className="cs-bw-dot" />
                    <span className="cs-bw-dot" />
                    <div className="cs-bw-url">glenbuild.co.nz</div>
                  </div>
                  <div className="cs-bw-body">
                    <video
                      className="cs-bw-video"
                      src="/images/case-studies/glenbuild/website-hero.mp4"
                      poster="/images/case-studies/glenbuild/website-hero-poster.jpg"
                      width={1280}
                      height={720}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="The new Glenbuild homepage hero: a slow film of finished Glenbuild homes behind the headline Award-winning new builds and renovations across Auckland."
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="cs-act cs-act-3">
          <div className="wrap">
            <div className="cs-act-grid">
              <div className="cs-act-left">
                <Reveal>
                  <Eyebrow num="03">Up next</Eyebrow>
                  <h2 className="cs-act-h2">
                    The foundations are set.
                    <br />
                    <em>Now we measure.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal as="div" className="cs-act-body" delay={80}>
                <p>
                  The new site went live a few weeks ago. Search takes time to
                  catch up with a change this size, so this page shows the
                  foundations, not the results.
                </p>
                <p>
                  Stay Chosen is running now: the profile, the reviews, the
                  content, and weekly checks on where Glenbuild shows up. We
                  will update this page once the results are in.
                </p>
              </Reveal>
            </div>

            <Reveal as="div" className="cs-proof" delay={120}>
              <div className="cs-proof-head">
                <Eyebrow num="04">In their words</Eyebrow>
                <h3 className="cs-proof-h3">
                  &ldquo;He really listens and understands our business
                  needs. His advice and guidance have been incredibly helpful.{" "}
                  <em>His attention to detail has been crucial in our set
                  up.</em>&rdquo;
                </h3>
                <p className="cs-proof-sub">
                  Finn Glengarry, Director, Glenbuild. Google review.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCTA num="05" label="Free Presence Report" />
      </main>
      <Footer />
    </>
  );
}

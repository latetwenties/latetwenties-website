import type { Metadata } from "next";

import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Button, GhostLink } from "../components/Button";
import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhoGetsTheCall } from "../lab/who-gets-the-call/WhoGetsTheCall";

const TITLE = "Free local search check: who gets the call in your area?";
const DESCRIPTION =
  "Free, live check of who shows up when a customer searches your trade and suburb: the Google map pack, your position across your area, and what ChatGPT, Perplexity and Claude say. About 40 seconds, no sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/local-search-check" },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://latetwenties.agency/local-search-check" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

// The one lead magnet. Every "Run the free search" CTA on the site lands here.
export default function LocalSearchCheckPage() {
  return (
    <>
      <Header />
      <main>
        <section className="fs" id="search">
          <div className="wrap fs-grid">
            <div className="fs-left">
              <Eyebrow>Free search · Live from Google</Eyebrow>
              <h1>
                Someone nearby needs you. <em>Who do they ring?</em>
              </h1>
              <p className="fs-lede">
                We run the search your customer runs, and show you who comes up
                on Google, Maps and AI. Then what it would take to make that
                you.
              </p>
              <ol className="fs-list">
                <li>
                  <span>01</span>The map pack, and where you sit in it
                </li>
                <li>
                  <span>02</span>What ChatGPT, Perplexity and Claude say when
                  asked
                </li>
                <li>
                  <span>03</span>What a top-three spot is worth to you each
                  month
                </li>
              </ol>
            </div>
            <div className="fs-tool">
              <WhoGetsTheCall />
            </div>
          </div>
        </section>

        <section className="fs-strip">
          <div className="wrap fs-strip-grid">
            <h2>
              Seen enough? Talk it through with Brendan.{" "}
              <em>15 minutes, no pitch.</em>
            </h2>
            <div className="fs-strip-row">
              <Button href={BOOKING_URL}>Book 15 minutes</Button>
              <GhostLink href={PHONE_HREF} tone="strong" arrow={false}>
                or call {PHONE_DISPLAY}
              </GhostLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

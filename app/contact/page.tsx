import type { Metadata } from "next";
import Script from "next/script";

import { breadcrumbList } from "@/lib/schema";

import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Want us to take a look? Thirty minutes, no pitch. Book a time and we'll come back to you within a day.",
};

const TIDYCAL_PATH = "latetwenties/30-min-strategy";

const SCHEMA = breadcrumbList([
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
]);

export default function Contact() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header current="contact" />
      <main>
        <section className="ct-hero">
          <div className="wrap">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="ct-h1">
                Want me to <em>take a look?</em>
              </h1>
            </Reveal>
            <Reveal as="div" className="ct-lede" delay={160}>
              <p>
                30 minutes, no pitch. Pick a time below and I&rsquo;ll come
                prepared with a look at where you sit and what&rsquo;s
                costing you calls. I&rsquo;ll get back to you within a day.
              </p>
              <p className="ct-or">
                Or just{" "}
                <a
                  className="ct-mailto"
                  href="mailto:team@latetwenties.agency"
                >
                  email me directly
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <section className="ct-body">
          <div className="wrap">
            <div className="ct-grid">
              <Reveal className="ct-cal">
                <div className="ct-cal-inner" aria-label="Booking calendar">
                  <div className="ct-cal-tag">Booking</div>
                  <div className="ct-cal-title">
                    Latetwenties · 30m strategy session
                  </div>
                  <div className="ct-cal-meta">
                    <span>30 minutes</span>
                    <span className="ct-dot">·</span>
                    <span>NZST · Auckland</span>
                  </div>
                  <div className="tidycal-embed" data-path={TIDYCAL_PATH} />
                  <div className="ct-cal-foot">Powered by TidyCal</div>
                </div>
                <Script
                  src="https://asset-tidycal.b-cdn.net/js/embed.js"
                  strategy="afterInteractive"
                />
              </Reveal>

              <Reveal as="aside" className="ct-side" delay={120}>
                <div className="ct-side-tag">Or get in touch directly</div>

                <div className="ct-row">
                  <div className="ct-row-label">Phone</div>
                  <a className="ct-row-val" href="tel:+6498844418">
                    09-884-4418
                  </a>
                </div>
                <div className="ct-row">
                  <div className="ct-row-label">Email</div>
                  <a
                    className="ct-row-val"
                    href="mailto:team@latetwenties.agency"
                  >
                    team@latetwenties.agency
                  </a>
                </div>
                <div className="ct-row">
                  <div className="ct-row-label">Hours</div>
                  <div className="ct-row-val">
                    Monday to Friday
                    <br />
                    <span className="ct-row-dim">8am to 5pm NZT</span>
                  </div>
                </div>
                <div className="ct-row">
                  <div className="ct-row-label">Based</div>
                  <div className="ct-row-val">
                    Auckland, New Zealand.
                    <br />
                    <span className="ct-row-dim">
                      Working across NZ and Australia.
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

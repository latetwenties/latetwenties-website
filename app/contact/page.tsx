import type { Metadata } from "next";

import { breadcrumbList } from "@/lib/schema";

import { PresenceReportForm } from "../components/contact/PresenceReportForm";
import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get your free Presence Report. Tell us your business name and we'll send a short video walkthrough of what's costing you enquiries, and how to fix it. No pitch.",
  alternates: { canonical: "/contact" },
};

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
                See exactly what&rsquo;s <em>costing you enquiries.</em>
              </h1>
            </Reveal>
            <Reveal as="div" className="ct-lede" delay={160}>
              <p>
                Tell us your business name. We&rsquo;ll go looking the way a
                customer would, Google, maps, reviews, your website, and record
                you a short video walking through what we find: the things
                costing you enquiries, and how to fix each one. Some you can fix
                yourself this week, free.
              </p>
              <p className="ct-or">
                No pitch on the video. It&rsquo;s yours either way. Prefer to
                talk? Call{" "}
                <a className="ct-mailto" href="tel:+6498844418">
                  09-884-4418
                </a>{" "}
                or{" "}
                <a
                  className="ct-mailto"
                  href="mailto:team@latetwenties.agency"
                >
                  email us directly
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
                <PresenceReportForm />
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

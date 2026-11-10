import type { Metadata } from "next";

import { breadcrumbList } from "@/lib/schema";
import { EMAIL, FREE_SEARCH_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

import { Button } from "../components/Button";
import { TidyCalEmbed } from "../components/contact/TidyCalEmbed";
import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";

const DESCRIPTION =
  "Book 15 minutes with Brendan, call 09-884-4418 or email team@latetwenties.agency. Auckland based, working with home service businesses across NZ and Australia.";

export const metadata: Metadata = {
  title: "Contact",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { description: DESCRIPTION, url: "https://latetwenties.agency/contact" },
  twitter: { description: DESCRIPTION },
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
        <section className="v2-hero is-short">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="dot" />
              <Eyebrow>Contact</Eyebrow>
            </div>
            <h1>
              Talk it through with Brendan. <em>15 minutes, no pitch.</em>
            </h1>
            <p className="v2-sub">
              Pick a time below, or call or email. We&rsquo;ll tell you straight
              what we&rsquo;d do in your area.
            </p>
          </div>
        </section>

        <section className="ct2">
          <div className="wrap ct2-grid">
            <div className="ct2-cal">
              <TidyCalEmbed />
            </div>

            <aside className="ct2-side">
              <ul className="ct2-rows">
                <li>
                  <span className="eyebrow">Phone</span>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </li>
                <li>
                  <span className="eyebrow">Email</span>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <span className="eyebrow">Hours</span>
                  <span className="ct2-val">Monday to Friday, 8am to 5pm NZT</span>
                </li>
                <li>
                  <span className="eyebrow">Based</span>
                  <span className="ct2-val">
                    Auckland, New Zealand. Working across NZ and Australia.
                  </span>
                </li>
              </ul>

              <div className="ct2-search">
                <Eyebrow>Before we talk</Eyebrow>
                <h2>
                  See who gets the call <em>in your area.</em>
                </h2>
                <p>
                  Run the free search first. About 40 seconds, live from Google,
                  Maps and AI.
                </p>
                <div>
                  <Button href={FREE_SEARCH_HREF}>Run the free search</Button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

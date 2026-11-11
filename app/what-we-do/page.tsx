import type { Metadata } from "next";

import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import Link from "next/link";

import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { HomeCTA } from "../components/home-v2/HomeCTA";
import { type Faq, HomeFaq } from "../components/home-v2/HomeFaq";
import { breadcrumbList, faqPage } from "@/lib/schema";

const DESCRIPTION =
  "Local SEO, websites and Google Ads for home service businesses. We map where the demand is in your area, build to win it, and show you every enquiry it brings in. Live in two to four weeks.";

export const metadata: Metadata = {
  title: "What we do: local SEO, websites and Google Ads for trades",
  description: DESCRIPTION,
  alternates: { canonical: "/what-we-do" },
  openGraph: { description: DESCRIPTION, url: "https://latetwenties.agency/what-we-do" },
  twitter: { description: DESCRIPTION },
};

const SERVICES = [
  {
    href: "/local-seo-auckland",
    title: "Local SEO",
    body: "Show up on Google, Maps and AI answers when someone nearby searches your trade.",
  },
  {
    href: "/web-design-auckland",
    title: "Websites",
    body: "A fast site with a page for every job, written by us and built to make the phone ring.",
  },
  {
    href: "/google-ads-auckland",
    title: "Google Ads",
    body: "Calls in weeks, not months, from people searching for your trade right now.",
  },
];

const FAQS: Faq[] = [
  {
    question: "How soon will the phone ring?",
    answer:
      "The site and your Google profile go live two to four weeks after kick-off. The first enquiries can come within days of launch. Climbing the map takes longer, and busier areas take longer still. We'll tell you which yours is before we start.",
  },
  {
    question: "How much of my time will it take?",
    answer:
      "Very little. Upload your project photos once at the start. After that it's the odd new photo for your Google profile and a quick yes by email when something new goes live. No status meetings.",
  },
  {
    question: "How will I know it's working?",
    answer:
      "Every month you get a short report and a walkthrough video: how many enquiries came in, where from, what they cost and which turned into work. Calls and forms are tracked from day one, so the numbers are real, not our estimate.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We rebuild it onto our platform. That's what lets us make changes the same day and track every enquiry. Anything worth keeping from your current site comes across.",
  },
  {
    question: "Where do Google Ads fit?",
    answer:
      "On top of the groundwork, when you want calls sooner. Ads bring enquiries in weeks, not months, but the page they land on decides whether a click becomes a call. So we run them alongside your site and Google profile, not instead of them.",
  },
  {
    question: "Am I locked in?",
    answer:
      "No. There's no lock-in contract. You stay because it's working, and the monthly report shows you whether it is.",
  },
  {
    question: "Do I own everything?",
    answer:
      "Yes. The website, the domain, the Google Business Profile, every account we set up. All in your name, all yours to keep.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Header current="what-we-do" />
      <main>
        <section className="v2-hero is-short">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="dot" />
              <Eyebrow>What we do</Eyebrow>
            </div>
            <h1>
              We find where your work is. <em>Then we build to win it.</em>
            </h1>
            <p className="v2-sub">
              One goal: more of the right enquiries, and proof of where every
              one came from. Live in two to four weeks.
            </p>
          </div>
        </section>

        <section className="wwd-svcs">
          <div className="wrap">
            <div className="wwd-svcs-head">
              <h2>
                Three ways we <em>get you found.</em>
              </h2>
            </div>
            <ul className="wwd-svcs-grid">
              {SERVICES.map((sv) => (
                <li key={sv.href}>
                  <Link href={sv.href}>
                    <h3>{sv.title}</h3>
                    <p>{sv.body}</p>
                    <span className="ghost-link ghost-strong">
                      Read more <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HomeFaq faqs={FAQS} />
        <HomeCTA />
      </main>
      <Footer />
      <JsonLd schema={faqPage(FAQS)} />
      <JsonLd
        schema={breadcrumbList([
          { name: "Home", href: "/" },
          { name: "What we do", href: "/what-we-do" },
        ])}
      />
    </>
  );
}

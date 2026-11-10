import type { Metadata } from "next";

import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import { GhostLink } from "../components/Button";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { GetFoundWith, type PinnedItem } from "../components/home-v2/GetFoundWith";
import { HomeCTA } from "../components/home-v2/HomeCTA";
import { type Faq, HomeFaq } from "../components/home-v2/HomeFaq";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { FREE_SEARCH_HREF } from "@/lib/site";

const DESCRIPTION =
  "How Latetwenties works with home service businesses: Onboarding, Groundwork, then Upkeep. We map where the demand is in your area, build to win it, and show you every enquiry it brings in.";

export const metadata: Metadata = {
  title: "What we do: Onboarding, Groundwork, Upkeep",
  description: DESCRIPTION,
  alternates: { canonical: "/what-we-do" },
  openGraph: { description: DESCRIPTION, url: "https://latetwenties.agency/what-we-do" },
  twitter: { description: DESCRIPTION },
};

const STEPS: PinnedItem[] = [
  {
    word: "Onboarding",
    label: "01 · We learn the business",
    body: "A short form and a call. You tell us about the business, the work you want more of and how customers find you now. We collect the logins and photos, so nothing holds up the build.",
    tags: ["Intake form", "Kick-off call", "Logins", "Photos", "Your best jobs"],
  },
  {
    word: "Groundwork",
    label: "02 · We find the demand and build to win it",
    body: "We map where the real demand is in your area, service by service and town by town. Then we build everything around that. If ads suit you, we build those from the same map.",
    tags: [
      "Demand map",
      "Fast website",
      "A page for every job",
      "Google Business Profile",
      "Listings",
      "Review system",
      "Call and form tracking",
      "Ads, if they suit",
    ],
  },
  {
    word: "Upkeep",
    label: "03 · We keep it working, and show you the enquiries",
    body: "Each month we keep working, and anything that slips gets fixed. You get a short report and walkthrough video: how many enquiries came in, what they cost and which ones turned into work.",
    tags: [
      "New pages",
      "Google posts",
      "Google Ads managed",
      "Reviews kept moving",
      "Fixes",
      "Monthly report",
      "Walkthrough video",
    ],
  },
];

const FAQS: Faq[] = [
  {
    question: "How long until it's live?",
    answer:
      "Two to four weeks from onboarding to launch. The first week is research, then the build. Upkeep starts the day it goes live.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll take a look at it before we recommend anything. Sometimes the right answer is a rebuild. Sometimes it's to leave it and focus on the rest. We'll tell you straight.",
  },
  {
    question: "Can I just get ads?",
    answer:
      "Ads work best on top of the groundwork, because the page they land on has to be ready for the click. If you already have a site you're happy with, ask us. We'll tell you straight whether ads alone make sense.",
  },
  {
    question: "How much of my time will this take?",
    answer:
      "Very little. Upload your project photos once. After that it's the odd new photo and a quick yes by email when new content goes live. No status meetings.",
  },
  {
    question: "Do I own everything?",
    answer:
      "Yes. The website, the domain, the Google Business Profile, every account we set up. All in your name, all yours to keep. If you ever want to move on, there's nothing to untangle.",
  },
  {
    question: "Am I locked in?",
    answer: "No lock-ins. After the first three months, it's month to month.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Header current="what-we-do" />
      <main>
        <section className="v2-hero">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="dot" />
              <Eyebrow>What we do</Eyebrow>
            </div>
            <h1>
              We find where your work is. <em>Then we build to win it.</em>
            </h1>
            <p className="v2-sub">
              Three steps, one goal: more of the right enquiries, and proof of
              where every one came from.
            </p>
          </div>
        </section>

        <GetFoundWith
          id="steps"
          title="How it works"
          items={STEPS}
          foot={
            <>
              <GhostLink href={FREE_SEARCH_HREF} tone="strong">
                Run the free search
              </GhostLink>
              <span className="mono-note">
                You own everything we build · Monthly report and video
              </span>
            </>
          }
        />

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

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

// Each step leads with what the owner gets, then what it takes. Kept free of
// client names and dated figures so the page doesn't age; proof lives on /work.
const STEPS: PinnedItem[] = [
  {
    word: "Onboarding",
    label: "01 · Week one · We learn how your work comes in",
    body: "One call about the jobs you want more of, and the ones you'd rather not do. Then it's on us. We write every word on the site and source the images. Your part is uploading your project photos, once.",
    tags: ["One kick-off call", "Your best jobs", "Your photos, once", "We write the words"],
  },
  {
    word: "Groundwork",
    label: "02 · Weeks two to four · We build where the work is",
    body: "Before we build anything, we look at what people near you actually type, job by job and town by town. Then everything is built to win those searches, so the calls come for the jobs and places you want.",
    tags: [
      "Demand map",
      "Fast website",
      "A page for every job",
      "Google Business Profile",
      "Listings",
      "Review asks",
      "Calls and forms tracked",
      "Google Ads, if they'll pay",
    ],
  },
  {
    word: "Upkeep",
    label: "03 · Every month after · We keep the phone ringing",
    body: "Rankings slip when nobody's watching, so every month we add, fix and keep things moving. Then a short video shows you what came in and which jobs it turned into.",
    tags: [
      "New pages",
      "Google posts",
      "Fresh reviews",
      "Google Ads managed",
      "Monthly video walkthrough",
    ],
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
      "We'll look at it before we recommend anything. Sometimes the right answer is a rebuild. Sometimes it's leave it and focus on the rest. We'll tell you straight.",
  },
  {
    question: "Can I just get ads?",
    answer:
      "Ads work best on top of the groundwork, because the page they land on has to be ready for the click. If you already have a site you're happy with, ask us. We'll tell you straight whether ads alone make sense.",
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
              where every one came from. Live in two to four weeks.
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
                You own everything we build · No lock-in contract
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

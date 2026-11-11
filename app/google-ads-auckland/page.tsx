import type { Metadata } from "next";

import { ServicePage, type ServiceContent } from "../components/service/ServicePage";

const C: ServiceContent = {
  path: "/google-ads-auckland",
  eyebrow: "Google Ads · Auckland",
  name: "Google Ads management",
  h1: (
    <>
      Google Ads for Auckland trades. <em>Calls from people ready to book.</em>
    </>
  ),
  lede: "Google Ads put your business in front of people searching for your trade right now. We build campaigns around the jobs you want, land every ad on a page ready for the click, and count real enquiries, not clicks. Calls in weeks, not months.",
  itemsTitle: (
    <>
      Every dollar pointed <em>at the right work.</em>
    </>
  ),
  items: [
    {
      title: "Know the numbers before you spend",
      body: "We work out what clicks cost for your jobs in your area, and what that budget should bring in, before a dollar goes to Google.",
    },
    {
      title: "Ads that don't burn money on the wrong people",
      body: "DIY questions, job hunters and the jobs you don't want get blocked, and we check what people actually searched every week.",
    },
    {
      title: "Clicks that turn into calls",
      body: "Every ad lands on a page about that exact job, in that area, with your number and a short quote form within reach.",
    },
    {
      title: "See what every enquiry cost",
      body: "Calls and forms are tracked back to the ad that brought them. Each month a short video shows what came in, what it cost and which became work.",
    },
    {
      title: "Up when it's quiet, down when you're booked",
      body: "Turn it up when you want more work and ease off when the diary's full. No lock-in contract, and the ads account is in your name.",
    },
  ],
  proofTitle: (
    <>
      Ads and search, <em>working together.</em>
    </>
  ),
  proof: ["/work/tmt-concreting", "/work/boaz-developments"],
  articles: ["google-ads-framework", "google-ads-vs-facebook-ads", "what-a-customer-costs-you"],
  faqs: [
    {
      question: "How much should I spend?",
      answer:
        "It depends on your trade and your area. We work it out from what clicks cost for your jobs near you, and tell you what that budget should bring in before you spend anything.",
    },
    {
      question: "How is the fee worked out?",
      answer:
        "Your ad budget goes straight to Google. Managing it is a fixed monthly fee on top, with no lock-in contract.",
    },
    {
      question: "How soon will ads bring in calls?",
      answer:
        "In weeks, not months, once the campaign and its pages are live. That's the difference from search rankings, which build over time.",
    },
    {
      question: "Can I run ads without the rest?",
      answer:
        "Ads work best on top of the groundwork, because the page an ad lands on decides whether a click becomes a call. That's why we run them alongside your site and Google profile, not instead of them.",
    },
    {
      question: "Do I own the ads account?",
      answer:
        "Yes. The Google Ads account is in your name, along with everything else we set up.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Google Ads Auckland for trades and home service businesses",
  description: C.lede,
  alternates: { canonical: C.path },
  openGraph: { description: C.lede, url: `https://latetwenties.agency${C.path}` },
  twitter: { description: C.lede },
};

export default function Page() {
  return <ServicePage c={C} />;
}

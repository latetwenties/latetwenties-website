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
      title: "Spend on the jobs you want",
      body: "Campaigns are built from the same demand map as your site, so the budget goes on the work you want more of, not the work you don't.",
    },
    {
      title: "Stop paying for the wrong searches",
      body: "We keep the list of searches to block up to date, so DIY questions and job hunters don't eat your budget.",
    },
    {
      title: "Pages ready for the click",
      body: "Every ad lands on a page about that exact job, with a quote form and your number one tap away.",
    },
    {
      title: "Count enquiries, not clicks",
      body: "Calls and forms are tracked back to the ad that brought them, so you see what each enquiry cost.",
    },
    {
      title: "Up when you want work, down when you're booked",
      body: "Turn it up when you want more and ease off when the diary is full. No lock-in contract.",
    },
  ],
  proofTitle: (
    <>
      Ads and search, <em>working together.</em>
    </>
  ),
  proof: ["/work/tmt-concreting", "/work/boaz-developments"],
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

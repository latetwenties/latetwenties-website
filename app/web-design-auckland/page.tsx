import type { Metadata } from "next";

import { ServicePage, type ServiceContent } from "../components/service/ServicePage";

const C: ServiceContent = {
  path: "/web-design-auckland",
  eyebrow: "Websites · Auckland",
  name: "Web design",
  h1: (
    <>
      Web design for Auckland trades. <em>Built to make the phone ring.</em>
    </>
  ),
  lede: "A website for a home service business has one job: turn the people who find you into calls and quote requests. We build fast, mobile-first sites with a page for every job you want more of, written by us and tracked from day one.",
  itemsTitle: (
    <>
      A site that earns its keep, <em>not just one that looks nice.</em>
    </>
  ),
  items: [
    {
      title: "We write it, so you don't have to",
      body: "Every word on the site is written by us, in your voice. Your part is uploading your project photos once.",
    },
    {
      title: "Quick on a phone",
      body: "Most people find a tradie on their phone. We build to Google's own mark for a fast page, 2.5 seconds for the main content to show, because people don't wait.",
    },
    {
      title: "A page for every job",
      body: "Each service gets its own page, so Google and your customers can see plainly what you do and where you do it.",
    },
    {
      title: "Quote forms people finish",
      body: "Short forms that ask only what you need, and your number one tap away on every page.",
    },
    {
      title: "Every enquiry tracked",
      body: "Calls and forms are counted from day one, with where each one came from, so you know what the site is bringing in.",
    },
    {
      title: "Changes the same day, and it's yours",
      body: "Your site runs on our platform, so updates never wait on anyone else. The domain, the site and every account are in your name.",
    },
  ],
  proofTitle: (
    <>
      Sites we&rsquo;ve built, <em>and what they did.</em>
    </>
  ),
  proof: ["/work/rbm-concrete", "/work/glenbuild", "/work/tmt-concreting"],
  faqs: [
    {
      question: "How long does a website take?",
      answer:
        "Two to four weeks from kick-off to live. The first week is research into what people near you search for, then we write and build.",
    },
    {
      question: "What if I already have a website?",
      answer:
        "We rebuild it onto our platform. That's what lets us make changes the same day and track every enquiry. Anything worth keeping from your current site comes across.",
    },
    {
      question: "Is a website enough on its own?",
      answer:
        "Rarely. A new site with nothing behind it goes quiet. That's why we build it alongside your Google profile, listings and reviews, and keep it all moving each month.",
    },
    {
      question: "Do I own it?",
      answer:
        "Yes. The website, the domain and every account we set up are in your name. If you ever move on, there's nothing to untangle.",
    },
    {
      question: "How much of my time will it take?",
      answer:
        "Very little. One kick-off call, your project photos uploaded once, and a quick yes by email before it goes live.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Web design Auckland for trades and home service businesses",
  description: C.lede,
  alternates: { canonical: C.path },
  openGraph: { description: C.lede, url: `https://latetwenties.agency${C.path}` },
  twitter: { description: C.lede },
};

export default function Page() {
  return <ServicePage c={C} />;
}

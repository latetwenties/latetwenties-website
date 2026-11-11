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
      Everything between a visitor <em>and a quote request, handled.</em>
    </>
  ),
  items: [
    {
      title: "A website without writing a word",
      body: "One call about your business and the jobs you want more of. Then we write every page in your voice and source the images. You upload your project photos once and give it a yes by email.",
    },
    {
      title: "Visitors who become quote requests",
      body: "Every page answers what a homeowner wants to know before they ring: what you do, where, and what you're like to work with. Your number and a short quote form are always within reach on a phone.",
    },
    {
      title: "A site Google can actually find",
      body: "Built around what people near you type, with a clear page for each job you want more of. Fast on mobile data, with the technical groundwork (structured data, sitemap, indexing) done before launch, not after.",
    },
    {
      title: "Live in two to four weeks",
      body: "No wireframe rounds or sign-off meetings. A week of research into how your customers search, then we write and build.",
    },
    {
      title: "Changes the same day, and it's all yours",
      body: "Your site runs on our platform, so updates never sit in a queue. The domain, the site and every account are in your name, with nothing to untangle if you ever move on.",
    },
    {
      title: "Know what it's bringing in",
      body: "Every call and quote request is counted, and each month a short video shows which ones turned into work. You'll know whether the site is earning its keep.",
    },
  ],
  proofTitle: (
    <>
      Sites we&rsquo;ve built, <em>and what they did.</em>
    </>
  ),
  proof: ["/work/rbm-concrete", "/work/glenbuild", "/work/tmt-concreting"],
  articles: ["what-a-website-costs-nz", "what-customers-type-into-google", "five-minute-rule"],
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

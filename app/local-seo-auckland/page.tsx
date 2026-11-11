import type { Metadata } from "next";

import { ServicePage, type ServiceContent } from "../components/service/ServicePage";

const C: ServiceContent = {
  path: "/local-seo-auckland",
  eyebrow: "Local SEO · Auckland",
  name: "Local SEO",
  h1: (
    <>
      Local SEO for Auckland trades. <em>Found where the work is.</em>
    </>
  ),
  lede: "Local SEO decides whether your business shows up on Google, Maps and AI answers when someone nearby searches for what you do. We map where the demand is, build your site and Google profile around it, and keep it moving every month.",
  itemsTitle: (
    <>
      What you get, <em>and why it matters.</em>
    </>
  ),
  items: [
    {
      title: "Know where the work actually is",
      body: "We map what people near you type, job by job and suburb by suburb. Every page then targets searches that exist, not guesses.",
    },
    {
      title: "Show up on the map, not just the website",
      body: "Your Google Business Profile set up properly: categories, services, areas, photos and posts. It carries more weight in the map results than anything on your site.",
    },
    {
      title: "A page for every job you want more of",
      body: "Each service gets its own page that says plainly what you do and where. We write every word, in your voice, with nothing templated.",
    },
    {
      title: "Reviews that keep coming",
      body: "A simple way to ask after every good job, and a reply to every review. Recent reviews are one of the strongest reasons people pick one tradie over the next.",
    },
    {
      title: "Named in AI answers too",
      body: "ChatGPT, Google's AI and Perplexity lean on the same signals: clear pages, matching listings and real reviews. We set those up, list you on Bing and Apple Maps, and check where you're named.",
    },
    {
      title: "Proof of what it brought in",
      body: "Calls and forms are tracked from day one. Each month a short video shows you which enquiries came from search, and which turned into work.",
    },
  ],
  proofTitle: (
    <>
      Local search, <em>working.</em>
    </>
  ),
  proof: ["/work/glenbuild", "/work/boaz-developments", "/work/rbm-concrete"],
  faqs: [
    {
      question: "How long does local SEO take?",
      answer:
        "Your site and Google profile go live two to four weeks after kick-off, and enquiries can start within days of launch. Climbing the map in a busy area takes longer. We'll tell you which yours is before we start.",
    },
    {
      question: "What's the difference between local SEO and regular SEO?",
      answer:
        "Regular SEO competes for searches from anywhere. Local SEO is about searches made near you or with a place in them, like 'builder Mt Eden' or 'concreter near me'. Those decide who shows up on the map, and they're the ones that turn into calls.",
    },
    {
      question: "Do you only work in Auckland?",
      answer:
        "No. We're based in Auckland and work with home service businesses across New Zealand and Australia. What matters is your area and how people search in it.",
    },
    {
      question: "Do I need a new website?",
      answer:
        "We rebuild your site onto our platform as part of the groundwork. That's what lets us make changes the same day and track every enquiry. You own it, domain and all.",
    },
    {
      question: "Am I locked in?",
      answer:
        "No. There's no lock-in contract. You stay because it's working, and the monthly report shows you whether it is.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Local SEO Auckland for trades and home service businesses",
  description: C.lede,
  alternates: { canonical: C.path },
  openGraph: { description: C.lede, url: `https://latetwenties.agency${C.path}` },
  twitter: { description: C.lede },
};

export default function Page() {
  return <ServicePage c={C} />;
}

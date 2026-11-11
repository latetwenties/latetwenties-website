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
      What usually stops the phone ringing, <em>and what we do about it.</em>
    </>
  ),
  items: [
    {
      title: "Show up across your whole patch, not just your street",
      body: "Most trades rank near their own address and disappear a few suburbs over. We map where the work is, suburb by suburb, then work your Google profile, listings and pages until you show up there too. You see where you rank from point to point across your area, before and after.",
    },
    {
      title: "Stop losing jobs to businesses newer than yours",
      body: "When a newer business shows up above you, it usually comes down to signals, not workmanship: a fuller Google profile, fresher reviews, clearer pages. We close those gaps one at a time, starting with the ones that move the map most.",
    },
    {
      title: "Get the technical side right, once",
      body: "A site that loads fast on a phone, structured data that tells Google your trade, area and hours, every page found and indexed, and the same business details on every directory. The invisible stuff that quietly holds rankings back.",
    },
    {
      title: "More reviews, without chasing customers",
      body: "A simple ask that goes out when a job wraps up, and a reply to every review. No shortcuts that put your profile at risk.",
    },
    {
      title: "Get named when someone asks ChatGPT",
      body: "AI assistants pull from Bing, Apple Maps, directories and your own site. We make sure they all say the same thing about you, then check who gets named for your trade in your area.",
    },
    {
      title: "All of it, without becoming a marketer",
      body: "We write, build and keep it moving. Your part is the odd project photo and a quick yes by email. Each month a short video shows you what search brought in.",
    },
  ],
  proofTitle: (
    <>
      Local search, <em>working.</em>
    </>
  ),
  proof: ["/work/glenbuild", "/work/boaz-developments", "/work/rbm-concrete"],
  articles: ["local-seo-cost-nz", "diy-local-seo-vs-agency", "review-gating"],
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

import type { Metadata } from "next";
import Link from "next/link";

import { ServicePage, type ServiceContent } from "../components/service/ServicePage";

const C: ServiceContent = {
  path: "/local-seo-auckland",
  eyebrow: "SEO agency · Auckland",
  name: "Local SEO",
  h1: (
    <>
      Local SEO for Auckland trades. <em>Found where the work is.</em>
    </>
  ),
  lede: "Latetwenties is an Auckland SEO agency for trades and home service businesses. Local SEO decides whether you show up on Google, Maps and AI answers when someone nearby searches for what you do, so we map where the demand is, build your site and Google profile around it, and keep it moving every month.",
  updated: "Updated November 2026",
  body: {
    title: (
      <>
        What an SEO agency in Auckland <em>should do for a trade.</em>
      </>
    ),
    paras: [
      <>
        Most searches that turn into a job have a place in them, said or not:
        &ldquo;builder Grey Lynn&rdquo;, &ldquo;concreter near me&rdquo;,
        &ldquo;electrician North Shore&rdquo;. Google answers them with the map
        first and the results underneath. Both lean on where you are, what
        your Google profile says, your reviews, and whether your website backs
        all of it up.
      </>,
      <>
        So for a trade, SEO is local first. We start with where you show up
        today, point by point across your area, then fix what holds you back
        in order: the profile, the pages, the listings, the reviews. You can
        see your own starting point in about 40 seconds with the{" "}
        <Link href="/local-search-check">free local search check</Link>.
      </>,
      <>
        If you would rather do some of it yourself first, that can be the
        right call. Here is{" "}
        <Link href="/blog/diy-local-seo-vs-agency">
          what you can do on your own, and when an agency is worth paying
        </Link>
        , and{" "}
        <Link href="/blog/local-seo-cost-nz">
          what local SEO costs in New Zealand
        </Link>
        .
      </>,
    ],
  },
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
  proofNote: (
    <>
      An Auckland example.{" "}
      <Link href="/work/glenbuild">Glenbuild</Link>, a Mt Albert builder,
      reached page one on Google for builder searches in four of its focus
      suburbs within its first month. Ask ChatGPT for a builder to renovate a
      Mt Eden villa and it names Glenbuild first.{" "}
      <Link href="/local-search-check">See where you stand in your area</Link>.
    </>
  ),
  proof: ["/work/glenbuild", "/work/boaz-developments", "/work/rbm-concrete"],
  articles: ["local-seo-cost-nz", "diy-local-seo-vs-agency", "review-gating"],
  faqs: [
    {
      question: "Do I need an SEO agency in Auckland, or can I do it myself?",
      answer:
        "You can do a fair bit yourself: fill in your Google profile properly, ask every happy customer for a review, and keep your business details the same everywhere. An agency earns its fee when you run out of time, or when the map stops moving and you can't see why.",
      link: {
        href: "/blog/diy-local-seo-vs-agency",
        label: "The honest split, DIY or agency.",
      },
    },
    {
      question: "What does SEO cost in Auckland?",
      answer:
        "Published NZ agency price guides mostly put small local campaigns between about $500 and $3,000 a month, with many trade businesses quoted roughly $800 to $2,000. Treat that as indicative. Your figure depends on how busy your area is and the state your website and profile are in now.",
      link: {
        href: "/blog/local-seo-cost-nz",
        label: "What local SEO costs in New Zealand.",
      },
    },
    {
      question: "Why did my map ranking drop?",
      answer:
        "Most drops are not penalties. Some are a bad data day, and some are a real slide caused by a profile change, fewer fresh reviews, or a competitor doing more. It pays to check before you change anything.",
      link: {
        href: "/blog/why-your-ranking-dropped",
        label: "What to check, in what order.",
      },
    },
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
  title: {
    absolute: "SEO agency Auckland for trades | Local SEO, Maps and AI search",
  },
  description: C.lede,
  alternates: { canonical: C.path },
  openGraph: { description: C.lede, url: `https://latetwenties.agency${C.path}` },
  twitter: { description: C.lede },
};

export default function Page() {
  return <ServicePage c={C} />;
}

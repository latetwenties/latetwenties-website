import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList, faqPage } from "@/lib/schema";

import {
  BlogPost,
  H2,
  H3,
  P,
  Signoff,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE = "What does local SEO cost in New Zealand?";
const DESCRIPTION =
  "What NZ trade and local service businesses are typically quoted for local SEO, what the money should buy, why quotes vary so much, and how to work out if it’s worth it for you.";
const URL = "/blog/local-seo-cost-nz";

const TOC = [
  { id: "short-answer", label: "The short answer" },
  { id: "how-its-sold", label: "The three ways it’s sold" },
  { id: "what-it-buys", label: "What the money should buy" },
  { id: "why-quotes-vary", label: "Why quotes vary so much" },
  { id: "red-flags", label: "Red flags at any price" },
  { id: "is-it-worth-it", label: "Is it worth it? Do the maths" },
  { id: "quick-answers", label: "Quick answers" },
];

const FAQS = [
  {
    question: "How much should a small trade business spend on local SEO?",
    answer:
      "Published NZ agency price guides in 2026 mostly put small, one-town local campaigns somewhere between about $500 and $3,000 a month, with a lot of trade businesses quoted between roughly $800 and $2,000. Treat those as indicative. The right figure for you depends on how competitive your area is and what state your website and profile are in now.",
  },
  {
    question: "Is local SEO cheaper than Google Ads?",
    answer:
      "Over time, usually yes, because you are not paying for every click. But SEO is slower to start. Ads can bring enquiries this week; SEO builds over months and keeps working when you stop paying for clicks. Many trade businesses run a small ad budget while the SEO catches up, then turn it down.",
  },
  {
    question: "Can I pay for local SEO once and be done?",
    answer:
      "You can pay once for the foundations: a website built to be found, a properly set-up Google Business Profile, clean listings and a review system. That work keeps paying off. What you cannot do once is the upkeep, because reviews, photos and competitors keep moving, and a profile left alone slowly slips.",
  },
  {
    question: "Why won’t some agencies give me a price upfront?",
    answer:
      "Sometimes because the right scope genuinely depends on your starting point. Sometimes because the price depends on what they think you will pay. A fair agency can at least tell you how they price (fixed monthly, hourly, or per project) and what is included before they have seen your books.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: TITLE, href: URL },
  ]),
  article({
    headline: TITLE,
    description: DESCRIPTION,
    url: URL,
    datePublished: "2026-10-23",
  }),
  faqPage(FAQS),
];

export default function Post() {
  assertPostLive("local-seo-cost-nz");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="8 min read"
        lede="Most NZ trade businesses get quoted somewhere between $500 and $3,000 a month for local SEO. That range is so wide it’s almost useless on its own, so here’s what sits behind it, and how to tell which end of it you belong at."
        toc={TOC}
        keyStat={{
          label: "Typical small-town quote",
          value: "$800 to $2k",
          caption: "a month. Indicative, from published NZ price guides.",
        }}
        railCtaLine="Been quoted and not sure?"
        ctaTitle="Want a second opinion on what you need?"
        ctaBody="Tell us your business name. We’ll look at where you show up now, what’s actually missing, and what that should cost to fix, and record you a short video with what we find. Some of it you can fix yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          Nobody likes a price article that ends with “it depends.” It does
          depend, but not in a mysterious way. There are three or four
          things that move the number, and once you know them you can read
          any quote and see whether it adds up.
        </P>

        <H2 id="short-answer">The short answer</H2>
        <P>
          <Strong>
            Local SEO for a small New Zealand trade or local service
            business is usually quoted at between $500 and $3,000 a month,
            and most small, one-town campaigns land somewhere around $800 to
            $2,000.
          </Strong>{" "}
          Those figures come from the price guides NZ agencies publish
          themselves, so treat them as indicative rather than a rate card.
          Under a few hundred dollars a month, there usually isn’t enough
          time in the budget to do the work properly. Well above the top of
          the range, you should expect a competitive city market, lots of
          services, or lots of locations to justify it.
        </P>
        <P>
          The number that matters more is what you get for it, and whether
          one extra job covers it. Both are below.
        </P>

        <H2 id="how-its-sold">The three ways it’s sold</H2>
        <H3>A monthly retainer</H3>
        <P>
          The most common model. A fixed amount each month for ongoing
          work: profile management, reviews, content, listings, reporting.
          Fine if you can see exactly what’s done each month and what it
          produced. Watch for long minimum terms. Twelve months locked in
          before you’ve seen a single result puts all the risk on you.
        </P>
        <H3>A one-off setup or build</H3>
        <P>
          A fixed price to get the foundations right once: the website, the
          Google Business Profile, the listings, the review system. This is
          where a lot of the lasting value sits, because a site built to be
          found keeps working long after the invoice is paid. If a new
          website is part of it,{" "}
          <a href="/blog/what-a-website-costs-nz">
            here’s what the build itself should cost
          </a>
          .
        </P>
        <H3>By the hour</H3>
        <P>
          Some freelancers and consultants bill hourly. It can suit a small
          one-off job, like a profile clean-up. For ongoing work it has a
          built-in problem: it pays more the slower the work goes. That’s
          why we price everything fixed.
        </P>

        <H2 id="what-it-buys">What the money should actually buy</H2>
        <P>
          Whatever the model, a local SEO budget for a trade business
          should be buying these. If a quote can’t tell you which of them
          it covers, ask.
        </P>
        <P>
          <Strong>A Google Business Profile that’s complete and kept
          fresh.</Strong> Right category, every service, your areas, new
          job photos regularly.{" "}
          <a href="/blog/google-business-profile">
            What a properly set-up profile looks like
          </a>
          .
        </P>
        <P>
          <Strong>A system that brings in reviews.</Strong> Not a
          one-off push. A steady ask after every good job, and a reply to
          every review that lands.
        </P>
        <P>
          <Strong>Clean, consistent listings.</Strong> Your details the same
          everywhere Google looks, checked and kept that way.
        </P>
        <P>
          <Strong>Website pages that match what people search.</Strong> A
          page for each main service, in your customers’ words, with your
          towns named.
        </P>
        <P>
          <Strong>Reporting in enquiries, not impressions.</Strong> Calls,
          form fills and booked jobs. If the monthly report leads with
          “reach” and “visibility,” ask what it came to in phone calls.
        </P>

        <H2 id="why-quotes-vary">Why quotes vary so much</H2>
        <P>
          <Strong>How competitive your area is.</Strong> An electrician in
          central Auckland is up against dozens of businesses with hundreds
          of reviews between them. A builder in a small Northland town
          might be up against three. The second job is smaller, and should
          cost less.
        </P>
        <P>
          <Strong>Where you’re starting from.</Strong> A business with a
          decent site, a claimed profile and twenty reviews needs upkeep. A
          business with no site, an unverified profile and two reviews needs
          building first. Our honest view: sites on builder platforms like
          Wix or Squarespace, or an old WordPress install, can only be
          pushed so far for local and AI search, so sometimes the cheapest
          path is a proper rebuild before any monthly work.
        </P>
        <P>
          <Strong>How many services and places.</Strong> One service in
          one town is a small job. Seven services across five towns is
          seven times the pages and a lot more ground to win.
        </P>
        <P>
          <Strong>Whether ads are in the mix.</Strong> Some quotes bundle in
          Google Ads management. That’s a separate service with a separate
          budget, and you should see the two priced apart.
        </P>

        <H2 id="red-flags">Red flags at any price</H2>
        <P>
          <Strong>A guaranteed ranking.</Strong> Nobody controls Google.
          Anyone promising position one is promising something they can’t
          deliver. An enquiry guarantee is a different thing, because it’s
          about the outcome, not the algorithm.
        </P>
        <P>
          <Strong>You don’t own the accounts.</Strong> Your profile, your
          website, your domain and your data should be in your name. If
          the agency holds them, leaving gets expensive.
        </P>
        <P>
          <Strong>A long lock-in with no exit.</Strong> If the work is
          good, you’ll stay anyway. A contract that has to hold you there
          is telling you something.
        </P>
        <P>
          <Strong>Nobody can tell you what was done last month.</Strong>{" "}
          Specific tasks, with dates. Not “ongoing optimisation.”{" "}
          <a href="/blog/questions-to-ask-a-marketing-agency">
            The seven questions to ask before paying anyone
          </a>{" "}
          cover the rest.
        </P>

        <H2 id="is-it-worth-it">Is it worth it? Do the maths</H2>
        <P>
          <Strong>
            Local SEO is worth it when the extra jobs it brings in cover
            what it costs, with room to spare.
          </Strong>{" "}
          That’s a sum you can do on the back of an invoice. Take a made-up
          example: a retainer of $1,000 a month, and a trade business that
          keeps $2,500 on an average job after materials and wages. It needs
          one extra job every two and a half months to break even. Anything
          past that is profit.
        </P>
        <P>
          Your numbers will be different, and that’s the point. Work out{" "}
          <a href="/blog/what-a-customer-costs-you">
            what winning a customer costs you now
          </a>
          , put it next to the quote, and the decision usually makes
          itself.
        </P>
        <P>
          For a real example of the upside, a concreter in Gippsland went
          from{" "}
          <a href="/work/tmt-concreting">
            four enquiries a month to thirty-five by the third full month
          </a>
          , with a new website, the local search work and a small Google
          Ads campaign running together. Not every business will see that,
          but it shows the scale of what one extra job a month is worth
          against a monthly fee.
        </P>

        <H2 id="quick-answers">Quick answers</H2>
        {FAQS.map((faq) => (
          <div key={faq.question}>
            <H3>{faq.question}</H3>
            <P>{faq.answer}</P>
          </div>
        ))}

        <Signoff>
          Our own pricing is fixed, with no lock-in, and how it’s
          structured is laid out on{" "}
          <a href="/how-it-works">how it works</a>. We’ll give you the
          actual number on a free{" "}
          <a href="/contact">Presence Report</a>, alongside what we’d fix
          first, before you commit to anything. And if a quote you already
          have looks fair, we’ll tell you that too. If you’re still working
          out what local SEO covers,{" "}
          <a href="/blog/what-is-local-seo">start with the plain answer</a>.
        </Signoff>
      </BlogPost>
    </>
  );
}

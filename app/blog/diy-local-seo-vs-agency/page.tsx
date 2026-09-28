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

const TITLE = "Local SEO: what to do yourself, and when to pay an agency";
const DESCRIPTION =
  "An honest split for trade businesses: the local SEO you can do yourself for free, where doing it yourself usually stalls, and when paying an agency is the wrong call.";
const URL = "/blog/diy-local-seo-vs-agency";

const TOC = [
  { id: "honest-split", label: "The honest split" },
  { id: "do-it-yourself", label: "What you can do yourself this month" },
  { id: "where-diy-stalls", label: "Where doing it yourself stalls" },
  { id: "your-time", label: "The real cost of your time" },
  { id: "agency-wrong-answer", label: "When an agency is the wrong answer" },
  { id: "middle-path", label: "The middle path" },
  { id: "quick-answers", label: "Quick answers" },
];

const FAQS = [
  {
    question: "Can I do local SEO myself?",
    answer:
      "Yes, a good share of it. Setting up your Google Business Profile properly, asking for reviews after every job, replying to them, adding job photos and fixing your listings are all free and need no technical skill. Where most owners get stuck is the website and the consistency month after month.",
  },
  {
    question: "What tools do I need for DIY local SEO?",
    answer:
      "Your phone, your Google Business Profile login and Google Search Console, which is free and shows how Google sees your website. That covers most of it. Paid SEO tools are useful for agencies comparing many businesses, but a single trade business can get a long way without them.",
  },
  {
    question: "How much time does DIY local SEO take?",
    answer:
      "The first setup is a solid afternoon or two: profile, listings clean-up and a review routine. After that it is a small weekly habit rather than a big job: a photo from site, a review ask after each job, a reply to each review that comes in.",
  },
  {
    question: "Can I start myself and hand over to an agency later?",
    answer:
      "Yes, and the work carries over, provided everything is in your name. Keep your profile, domain and website accounts under your own login from day one, so anyone you bring in later is adding to what you built rather than starting again.",
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
    datePublished: "2026-10-30",
  }),
  faqPage(FAQS),
];

export default function Post() {
  assertPostLive("diy-local-seo-vs-agency");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="8 min read"
        lede="You can do a good share of local SEO yourself, free, with the phone in your pocket. An agency is worth paying when the website is the problem, when your area is crowded, or when your hours are worth more on the tools. Here’s where the line sits."
        toc={TOC}
        keyStat={{
          label: "DIY cost",
          value: "$0",
          caption: "for the profile, reviews, photos and listings. Just your time.",
        }}
        railCtaLine="Not sure what to do yourself?"
        ctaTitle="Want to know which bits you can do yourself?"
        ctaBody="Tell us your business name. We’ll look at where you show up and record you a short video that splits what we find into what you can fix yourself this week and what needs more than that. No pitch. It’s yours either way."
      >
        <P>
          We’re an agency, so you’d expect us to say you need one. Often you
          don’t, or not yet. A lot of what gets a local business found is
          ordinary, free work that nobody else can do as well as the owner,
          because it depends on the jobs, the customers and the photos only
          you have.
        </P>

        <H2 id="honest-split">The honest split</H2>
        <P>
          <Strong>
            Do the profile, the reviews, the photos and the listings
            yourself. Pay for help with the website, the tracking, and
            anything that needs doing consistently for months when you
            know you won’t.
          </Strong>{" "}
          The first group is mostly about showing up in the map results, and
          it rewards effort more than expertise. The second group is where
          the technical knowledge sits, and where most owners run out of
          time or patience.
        </P>
        <P>
          If you’re not sure what those pieces are yet,{" "}
          <a href="/blog/what-is-local-seo">
            here’s what local SEO covers, in plain terms
          </a>
          .
        </P>

        <H2 id="do-it-yourself">What you can do yourself this month</H2>
        <P>
          Each of these is free, and each has a full guide if you want the
          detail.
        </P>
        <P>
          <Strong>Finish your Google Business Profile.</Strong> The right
          primary category, every service you offer, your service areas,
          accurate hours and a description written like you’d explain it
          to a customer.{" "}
          <a href="/blog/google-business-profile">
            The full setup takes about fifteen minutes
          </a>
          .
        </P>
        <P>
          <Strong>Start asking for reviews after every job.</Strong> In
          person, then a text with the link, asking them to mention what
          you did and where.{" "}
          <a href="/blog/how-to-get-google-reviews">
            The exact wording is here
          </a>
          , and so is{" "}
          <a href="/blog/replying-to-google-reviews">
            how to reply, including to the unfair one
          </a>
          .
        </P>
        <P>
          <Strong>Take photos on site.</Strong> Before, during and after,
          on your phone, and add a couple to your profile each week.{" "}
          <a href="/blog/google-business-profile-photos">
            These are the nine that matter most
          </a>
          .
        </P>
        <P>
          <Strong>Fix your listings.</Strong> Search your business name
          and your old phone number, and correct anything out of date.{" "}
          <a href="/blog/fix-your-listings">
            An afternoon, once, then a quick check now and then
          </a>
          .
        </P>
        <P>
          <Strong>Answer faster than the next person.</Strong> Not SEO in
          the strict sense, but it decides whether being found turns into
          work.{" "}
          <a href="/blog/five-minute-rule">
            The business that replies first often wins the job
          </a>
          .
        </P>

        <H2 id="where-diy-stalls">Where doing it yourself usually stalls</H2>
        <P>
          <Strong>The website.</Strong> A page for each service, written in
          the words customers search, with your towns named, structured so
          Google and AI tools can read it, and fast on a phone. This is
          technical work, and it’s where DIY site builders hit their limits.
          If you’ve got one page listing everything you do, this is
          probably your biggest gap.
        </P>
        <P>
          <Strong>Keeping it up.</Strong> Most owners do a burst of work,
          get busy, and stop. Nothing breaks, so nobody notices, and six
          months later a competitor who kept going is above them. That’s
          behind a lot of the{" "}
          <a href="/blog/why-your-ranking-dropped">
            drops that seem to come from nowhere
          </a>
          .
        </P>
        <P>
          <Strong>Knowing what’s working.</Strong> Which searches bring
          calls, which pages get enquiries, where you rank a few suburbs
          away. Without tracking, you’re guessing, and guessing is how
          good money gets spent on the wrong things.
        </P>
        <P>
          <Strong>A crowded area.</Strong> If the map results for your
          trade are full of businesses with a hundred reviews and a page
          for every service, the basics get you into the game but not to
          the front. Catching up needs everything done, and done steadily.
        </P>
        <P>
          <Strong>AI answers.</Strong> Getting named by ChatGPT and Google’s
          AI overviews leans on your website and what other sites say about
          you, more than your profile.{" "}
          <a href="/blog/get-recommended-by-ai">
            What gets a business named
          </a>{" "}
          is mostly the same foundations, with an extra layer on top.
        </P>

        <H2 id="your-time">The real cost of your time</H2>
        <P>
          DIY is free in dollars and not free in hours. A quick way to
          price it: take the hours a month you’d honestly spend, and times
          them by what you charge for an hour on the tools. Say, as an
          example, four hours a month at $95 an hour. That’s $380 of your
          time, every month, spent at a desk instead of billing.
        </P>
        <P>
          Sometimes that trade is still worth it, especially early on. But
          put the number next to any agency quote, and next to{" "}
          <a href="/blog/local-seo-cost-nz">
            what local SEO usually costs in NZ
          </a>
          , before deciding the DIY route is the cheap one.
        </P>

        <H2 id="agency-wrong-answer">When an agency is the wrong answer</H2>
        <P>
          <Strong>You’re booked solid on referrals.</Strong> If you’re
          turning work away, more enquiries aren’t your problem. Do the free
          basics so you’re ready when things slow down, and save the money.
        </P>
        <P>
          <Strong>You’ve got almost no reviews.</Strong> Reviews are the
          cheapest trust you can get, and no agency can collect them for
          you. Spend a couple of months asking every happy customer first.
          Everything an agency does afterwards will work better for it.
        </P>
        <P>
          <Strong>You can’t say what a customer is worth.</Strong> If you
          don’t know what a job leaves you after costs, you can’t tell
          whether any marketing spend is paying off.{" "}
          <a href="/blog/what-a-customer-costs-you">
            Work that out first
          </a>
          . It takes ten minutes.
        </P>

        <H2 id="middle-path">The middle path most owners end up on</H2>
        <P>
          For most trade businesses the sensible split looks like this: pay
          once for the parts that need skill, a website built to be found
          and a profile set up properly, then keep up the everyday work
          yourself, or hand the upkeep over when you’d rather not. That’s
          why we sell the build and the ongoing care separately:{" "}
          <a href="/how-it-works">Get Found is a one-off build that’s
          yours to keep</a>, and Stay Chosen is there if you want the
          upkeep off your plate.
        </P>
        <P>
          One timing note. It’s the end of October. The profile, reviews
          and pages you start now have a couple of months to settle before
          the new year, when a lot of owners suddenly want the phone busier
          again. Starting in January means starting behind the people who
          started now.
        </P>

        <H2 id="quick-answers">Quick answers</H2>
        {FAQS.map((faq) => (
          <div key={faq.question}>
            <H3>{faq.question}</H3>
            <P>{faq.answer}</P>
          </div>
        ))}

        <Signoff>
          Whichever way you go, do the free list above this week. If you’d
          like to know which of your gaps you can close yourself and which
          need more,{" "}
          <a href="/contact">ask us for a free Presence Report</a>. We’ll
          split it plainly, and if you can do the lot yourself, we’ll tell
          you that.
        </Signoff>
      </BlogPost>
    </>
  );
}

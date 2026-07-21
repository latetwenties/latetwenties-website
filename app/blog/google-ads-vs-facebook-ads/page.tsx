import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
  Signoff,
  Strong,
  UL,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "Google Ads or Facebook Ads? For a local business, the answer isn’t close.";
const DESCRIPTION =
  "Which one should a local service business run first? The honest answer, the one exception, and why running both badly is worse than running one well.";
const URL = "/blog/google-ads-vs-facebook-ads";

const TOC = [
  { id: "the-difference", label: "The difference in one sentence" },
  { id: "honest-comparison", label: "The honest comparison" },
  { id: "when-facebook", label: "When Facebook is the right call" },
  { id: "the-mistake", label: "The mistake that costs the most" },
  { id: "before-either", label: "What has to be true before either" },
  { id: "with-1000-a-month", label: "What we’d do with $1,000 a month" },
  { id: "the-summary", label: "The uncomfortable summary" },
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
    datePublished: "2026-08-20",
  }),
];

export default function Post() {
  assertPostLive("google-ads-vs-facebook-ads");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="7 min read"
        lede="If you’re a local service business and you’ve got budget for one, run Google."
        toc={TOC}
        keyStat={{
          label: "For local services",
          value: "Google",
          caption: "meet people already searching.",
        }}
        railCtaLine="Paying for clicks that don’t convert?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          That’s the answer. Here’s why, and here’s the exception, because there
          is a real one.
        </P>

        <H2 id="the-difference">The difference in one sentence</H2>
        <P>
          <Strong>
            Google Ads reaches people who are already looking for what you do.
            Facebook Ads interrupts people who weren’t looking for anything.
          </Strong>
        </P>
        <P>Everything else follows from that.</P>
        <P>
          Someone typing “emergency plumber Manukau” at 9pm has a problem right
          now and a wallet out. You’re not persuading them to want a plumber.
          They want a plumber. You’re only competing to be the one they call.
        </P>
        <P>
          Someone scrolling Facebook at 9pm is looking at their cousin’s holiday
          photos. Your ad is an interruption. It can still work, but you have to
          create the want, then hold it long enough to get an action, and that’s
          a much longer, more expensive job.
        </P>
        <P>
          For most local services, the want already exists. Nobody scrolls their
          way into needing a leak fixed, a tooth looked at, or a GST return
          filed. They need it, they search, they choose. Meet them at the
          search.
        </P>

        <H2 id="honest-comparison">The honest comparison</H2>
        <P>
          <Strong>Intent.</Strong> Google, comfortably. This is the whole
          ballgame for services.
        </P>
        <P>
          <Strong>Cost per click.</Strong> Facebook is much cheaper, often a
          fraction. This is what pulls people in, and it’s a trap. Cheap clicks
          from people who don’t want anything are more expensive than dear
          clicks from people who do. The only number that matters is cost per
          job.
        </P>
        <P>
          <Strong>Speed.</Strong> Both are fast. Google tends to be faster to
          first enquiry because you’re catching existing demand rather than
          building it.
        </P>
        <P>
          <Strong>Targeting.</Strong> Facebook, by a mile: age, area, interests,
          homeowners, life events. Genuinely impressive. Just remember you’re
          targeting people well, not people who want you.
        </P>
        <P>
          <Strong>Visual.</Strong> Facebook. If your work is dramatic to look at
          (landscaping, renovations, dog grooming, before-and-after anything)
          this matters more than the intent gap suggests.
        </P>
        <P>
          <Strong>Best for.</Strong> Google: urgent, searched-for,
          problem-solving services. Facebook: visual, discretionary, “I’ve been
          meaning to” services.
        </P>

        <H2 id="when-facebook">When Facebook is genuinely the right call</H2>
        <P>
          Three situations. They’re real, and we’ll tell clients to go this way
          when they fit.
        </P>
        <P>
          <Strong>1. Nobody’s searching for what you sell.</Strong>
        </P>
        <P>
          Some services have almost no search volume because people don’t know
          to look. A mobile dog groomer. A meal prep service. A home organiser.
          A new kind of treatment nobody’s heard of. If nobody types it, Google
          has nothing to show them. Facebook creates the demand instead. This is
          the strongest case and it’s a good one.
        </P>
        <P>
          <Strong>2. Your work is visually spectacular.</Strong>
        </P>
        <P>
          A landscaper’s before-and-after stops a thumb. So does a bathroom
          renovation, a groom-day transformation, a detailed car. If the photo
          does the selling, put the photo where people are looking at photos.
        </P>
        <P>
          <Strong>3. Google is too expensive in your category.</Strong>
        </P>
        <P>
          In some categories the auction is brutal. Lawyers, insurance, some
          trades in central Auckland. If a click costs $25 and you’re converting
          one in twenty, that’s $500 a job before you’ve picked up a hammer.
          Sometimes the maths genuinely doesn’t work and Facebook does. You only
          know by working out{" "}
          <a href="/blog/what-a-customer-costs-you">
            what a customer is worth to you
          </a>{" "}
          first.
        </P>

        <H2 id="the-mistake">The mistake that costs the most</H2>
        <P>Not picking wrong. Splitting.</P>
        <P>
          A business with $1,000 a month puts $500 in each. Both campaigns run
          underfed. Neither gets enough data to learn what’s working, so neither
          improves. Three months later there are two mediocre campaigns, no
          clear signal from either, and a conclusion that “ads don’t work for
          us.”
        </P>
        <P>Ads platforms need volume to optimise. Feed one properly.</P>
        <P>
          Run one channel for ninety days with the whole budget. Learn what it
          costs you to get a job there. Then decide whether to add the second
          one, with facts instead of a feeling.
        </P>

        <H2 id="before-either">The thing that has to be true before either</H2>
        <P>Neither works if the place you send people is broken.</P>
        <P>
          We turn down ads work regularly for this reason, and it’s not
          principle, it’s arithmetic. If your website converts one in fifty
          visitors and your competitor’s converts one in ten, they can pay five
          times what you can for the same click and still make money. You will
          lose that auction forever, and every dollar you spend teaches you
          nothing except that you’re losing.
        </P>
        <P>Before you spend a cent on either platform:</P>
        <UL>
          <li>
            Your site loads fast on a phone. Most of this traffic is mobile.
          </li>
          <li>
            It’s instantly obvious what you do, where you do it, and how to
            contact you.
          </li>
          <li>Your reviews are visible, plural, and recent.</li>
          <li>The contact form goes somewhere a human checks.</li>
          <li>
            <Strong>Someone answers.</Strong> Paid traffic is perishable in a
            way organic isn’t. You paid for that click by the click, and if it
            goes to voicemail you paid for a voicemail.{" "}
            <a href="/blog/five-minute-rule">Answer fast.</a>
          </li>
        </UL>
        <P>
          Get those right and modest ad spend works. Get them wrong and no ad
          spend works.
        </P>

        <H2 id="with-1000-a-month">
          What we’d actually do with $1,000 a month
        </H2>
        <P>Assuming the foundations are sorted:</P>
        <P>
          <Strong>All of it into Google Search.</Strong> Not Display, not
          Performance Max, not the “smart” campaign Google keeps nudging you
          toward in the interface. Search.
        </P>
        <P>
          <Strong>Tight keywords.</Strong> Your actual services, plus your
          actual areas. Not “building.” “Deck builder Papakura.”
        </P>
        <P>
          <Strong>A big negative keyword list, maintained weekly.</Strong> This
          is where the money leaks. You do not want to pay for “plumbing
          courses,” “plumber jobs,” “how to fix a tap yourself,” or “plumber
          salary NZ.” Left alone, these will quietly eat a third of your budget.
        </P>
        <P>
          <Strong>Send clicks to the matching page.</Strong> Someone who
          searched for decks lands on your decks page, not your homepage. This
          alone often doubles conversion.
        </P>
        <P>
          <Strong>Track calls and forms, not clicks.</Strong> If you can’t tell
          how many jobs came from the spend, you’re not advertising, you’re
          donating.
        </P>
        <P>
          <Strong>Give it ninety days and judge it on cost per job.</Strong> Not
          clicks, not impressions, not the score in the dashboard. What did one
          customer cost, and is that less than one is worth?
        </P>
        <P>
          We’ve written the longer version of this in{" "}
          <a href="/blog/google-ads-framework">
            our framework for whether to run Google Ads at all
          </a>
          , including when the honest answer is “don’t yet.”
        </P>

        <H2 id="the-summary">The uncomfortable summary</H2>
        <P>
          Facebook is more fun to run. The creative is enjoyable, the clicks are
          cheap, the numbers in the dashboard look great, and the phone doesn’t
          necessarily ring.
        </P>
        <P>
          Google is boring. Fewer clicks, more expensive, less to look at, and
          it puts you in front of someone who is right now trying to give money
          to someone who does what you do.
        </P>
        <Signoff>
          Take the boring one. At Latetwenties we get local service businesses
          found online and chosen by the right customers, and most of the time
          that starts with meeting people at the moment they’re already
          searching.
        </Signoff>
      </BlogPost>
    </>
  );
}

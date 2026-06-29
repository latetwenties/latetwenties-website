import type { Metadata } from "next";

import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
  Strong,
  UL,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title:
    "5 Reasons Your Business Isn’t Showing Up on Google",
  description:
    "Five very fixable mistakes that keep local service businesses invisible on Google, and the simple fixes that change everything.",
  alternates: { canonical: "/blog/google-ranking" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "5 reasons your business isn’t showing up on Google",
      href: "/blog/google-ranking",
    },
  ]),
  article({
    headline:
      "5 Reasons Your Business Isn’t Showing Up on Google (and the Simple Fixes That Change Everything)",
    description:
      "Five very fixable mistakes that keep local service businesses invisible on Google, and the simple fixes that change everything.",
    url: "/blog/google-ranking",
    datePublished: "2026-03-01",
  }),
];

export default function Post() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
    <BlogPost
      title="5 Reasons Your Business Isn’t Showing Up on Google (and the Simple Fixes That Change Everything)"
      readTime="7 min read"
      lede="If someone searches for your type of business “near me” right now, and you don’t show up in the first few results, you’re invisible. Most of the time, it’s not because your competitors are doing something magical. It’s because you’re making one or more very fixable mistakes."
    >
      <P>
        Studies consistently show that the vast majority of people never
        scroll past the first page of Google results. In local services,
        where someone needs help now, the decision of who to call happens
        in seconds. If you’re not there, you simply don’t exist as an
        option.
      </P>
      <P>Here are the five most common reasons.</P>

      <H2>
        Your Google Business Profile is incomplete (or you don’t have one)
      </H2>
      <P>
        This is the single biggest lever in local search, and most service
        businesses are leaving it half-pulled.
      </P>
      <P>
        Google uses three factors to rank local businesses:{" "}
        <Strong>relevance</Strong> (does your business match what someone
        searched?), <Strong>distance</Strong> (how close are you?), and{" "}
        <Strong>prominence</Strong> (how well-known and trusted does
        Google think you are?). You can’t control distance. Either you’re
        close to someone or you’re not. But relevance and prominence are
        almost entirely determined by your Google Business Profile (GBP),
        and both can be dramatically improved with the right setup.
      </P>
      <P>
        A profile with a business name and phone number is not an
        optimised profile. An optimised profile has:
      </P>
      <UL>
        <li>
          The correct primary category selected (this is the single most
          important ranking field in your entire GBP)
        </li>
        <li>
          Every service listed individually, with descriptions that use
          natural language your customers actually search
        </li>
        <li>
          A business description that mentions your city, what you do,
          who you help, and what makes you different, in 750 characters
          or less
        </li>
        <li>
          At least 10 to 15 photos, including job site images, your
          van/truck, and your team
        </li>
        <li>
          Consistent, regularly updated posts (at minimum once a week)
        </li>
      </UL>
      <P>
        If your profile is thin or untouched since you created it three
        years ago, Google is essentially looking at a business card with
        minimal information and deciding there are better options to show
        searchers.
      </P>
      <P>
        <Strong>The fix:</Strong> Block out 90 minutes this week. Treat
        your GBP like the front page of your website, because for most
        potential customers, it is.
      </P>

      <H2>
        Your business name, address, and phone number are inconsistent
        across the web
      </H2>
      <P>
        This one catches a lot of business owners off guard. It sounds
        like a minor administrative detail, but Google uses it as a trust
        signal.
      </P>
      <P>
        When Google sees your business listed as “Smith Plumbing” on your
        website, “Smith Plumbing &amp; Drain” on Yelp, “Smith Plumbing
        Co.” on the BBB, and “Smith Plumbing Services” on a local chamber
        of commerce directory, it gets confused. That confusion translates
        directly into reduced confidence in your listing, which reduces
        your ranking.
      </P>
      <P>
        Your NAP (Name, Address, Phone) needs to match everywhere it
        appears online. Down to whether you abbreviate “Street” as “St.”
        or spell it out. Down to whether you use a local number or an
        0800 number. Every inconsistency is a small chip away at the
        trust Google has in your listing.
      </P>
      <P>
        <Strong>The fix:</Strong> Search for your business name across the
        major directories: Google, Yelp, Facebook, BBB, Apple Maps, Bing
        Places, and any local directories in your area. Make every entry
        match your GBP exactly. Tools like BrightLocal can audit this at
        scale if you have listings across multiple platforms.
      </P>

      <H2>You have no reviews, or you’re not getting new ones</H2>
      <P>
        Reviews are social proof for human customers. But for Google,
        they’re a ranking signal.
      </P>
      <P>
        It’s not just the total number. Google’s algorithm weighs{" "}
        <Strong>review velocity</Strong> (how recently and frequently
        you’re getting them), average rating, review sentiment (whether
        customers mention specific services and locations), and whether
        you’re responding to them.
      </P>
      <P>
        A business with 80 reviews all from three years ago will often
        rank below a business with 25 reviews consistently accumulated
        over the past year. Recency matters enormously.
      </P>
      <P>
        The mistake most business owners make is a passive one: they do
        great work, assume happy customers will leave reviews, and then
        wonder why they have 11 reviews after five years in business.
      </P>
      <P>
        Happy customers rarely self-initiate a review. They need to be
        asked. Specifically. Immediately after a job. With a direct link
        that makes it effortless.
      </P>
      <P>
        <Strong>The fix:</Strong> Build a review request into your
        post-job workflow. A text message or email sent within 24 hours
        of completing a job, with a direct Google review link, will
        convert far better than any follow-up you do weeks later. Aim for
        a minimum of 2 to 4 new reviews per month.
      </P>

      <H2>Your website isn’t sending the right local signals</H2>
      <P>
        Your GBP is the engine. Your website is the fuel. If your website
        doesn’t reinforce the same location and service signals, you’re
        running on half a tank.
      </P>
      <P>The most common website mistakes for service businesses:</P>
      <P>
        <Strong>No service area pages.</Strong> A single homepage that
        says “serving the greater Auckland area” is nearly useless
        compared to individual pages for each suburb or region you cover.
        A dedicated page for your service in a specific suburb, with that
        suburb’s name woven naturally into the content, title tag, and
        meta description, will rank in those searches. A generic page
        won’t.
      </P>
      <P>
        <Strong>No schema markup.</Strong> Schema (or structured data) is
        code that tells Google explicitly: “this is a local business,
        here is our address, phone number, and service area.” Without it,
        Google has to guess. With it, you’re handing Google the answers
        and showing up in rich search results with ratings and details
        displayed directly.
      </P>
      <P>
        <Strong>Slow mobile load times.</Strong> Over 70% of local
        searches happen on mobile, often in urgent situations. If your
        site takes more than three seconds to load on a phone, you’re
        losing customers before they ever read a word. Google knows this
        and penalises slow sites in rankings.
      </P>
      <P>
        <Strong>The fix:</Strong> Check your site speed at PageSpeed
        Insights (free from Google). If your mobile score is below 70,
        that’s a problem worth addressing. Ask your web developer about
        adding LocalBusiness schema markup. And if you serve multiple
        suburbs, start building out individual service area pages.
      </P>

      <H2>You’re not active enough to register as a “real” business</H2>
      <P>
        Here’s something most people don’t realise: Google is running a
        constant background check on your business to determine whether
        you’re legitimate and engaged.
      </P>
      <P>
        Signals of an active, legitimate business include: recent posts
        on your GBP, new photos added regularly, customer questions
        answered in your Q&amp;A section, responses to every review (yes,
        every one, including the bad ones), and a website that’s being
        updated periodically.
      </P>
      <P>
        A profile that was set up in 2021 and hasn’t been touched since
        reads as a business that may not even be operating anymore.
        Google isn’t going to confidently send customers to you if it has
        doubts about whether you’re still open.
      </P>
      <P>
        This doesn’t require hours each week. It requires a rhythm: one
        post per week to your GBP, a handful of photos after each job,
        and a five-minute review check on Fridays.
      </P>
      <P>
        <Strong>The fix:</Strong> Set a 15-minute calendar block every
        Monday morning. Use it to post a GBP update (a completed job, a
        seasonal tip, an offer), respond to any reviews from the previous
        week, and answer any Q&amp;A submissions. That’s it. That’s the
        entire habit.
      </P>

      <H2>The bottom line</H2>
      <P>
        You don’t need to outspend the big players. You don’t need a
        marketing agency. What you need is to stop making the mistakes
        that are making you invisible, and start doing the few things
        that genuinely move the needle.
      </P>
      <P>
        Google isn’t trying to hide your business. It’s trying to show
        searchers the most relevant, trustworthy option near them. Your
        job is to make it easy for Google to see that you’re that
        business.
      </P>
      <P>
        Start with your GBP. Get your NAP consistent. Get a review system
        in place. Then build from there. The compounding effect is real,
        and it starts faster than most business owners expect.
      </P>
    </BlogPost>
    </>
  );
}

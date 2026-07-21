import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
  Signoff,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "Someone newer is outranking you. Here’s exactly what they did.";
const DESCRIPTION =
  "A competitor half your age is above you in Google. It’s not luck and it’s not a trick. Here’s the checklist of what they almost certainly did, and how to take the spot back.";
const URL = "/blog/competitor-outranking-you";

const TOC = [
  { id: "true-and-unhelpful", label: "The thing that’s true and unhelpful" },
  { id: "what-they-did", label: "What they almost certainly did" },
  { id: "what-they-didnt", label: "What they didn’t do" },
  { id: "taking-it-back", label: "Taking it back" },
  { id: "your-experience", label: "Where your years finally count" },
  { id: "the-timeline", label: "The honest timeline" },
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
    datePublished: "2026-09-04",
  }),
];

export default function Post() {
  assertPostLive("competitor-outranking-you");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="8 min read"
        lede="You’ve been doing this eighteen years. Your work is good, good enough that people still ring you off a job you did in 2019."
        toc={TOC}
        keyStat={{
          label: "The gap isn’t skill",
          value: "It’s documented",
          caption: "everything they did is available to you.",
        }}
        railCtaLine="Want to see where the gap is?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          And when someone searches your trade in your town, the first name that
          comes up is a business that didn’t exist four years ago. Run by
          someone you’re fairly sure learned the job from someone you trained.
        </P>
        <P>
          That is a genuinely maddening thing to look at. So let’s take the
          emotion out and go through what actually happened, because it’s not
          luck, it’s not a trick, and every single thing on this list is
          available to you.
        </P>

        <H2 id="true-and-unhelpful">
          First, the thing that’s true and unhelpful
        </H2>
        <P>Google is not ranking businesses by quality of work.</P>
        <P>
          It can’t. It has never seen a roof, a weld, a treatment room, a set of
          accounts. It has no way to know that your finishing is better, that
          you turn up when you say you will, or that half the town owes you a
          favour.
        </P>
        <P>
          What it can see is a set of signals (
          <a href="/blog/google-ranking-factors">
            the six that matter are here
          </a>
          ) and it ranks on those. Your eighteen years of reputation is real and
          valuable and it is doing absolutely nothing for you in that search
          result, because none of it has been written down anywhere Google can
          read.
        </P>
        <P>That’s the whole gap. Not skill. Documentation.</P>

        <H2 id="what-they-did">What they almost certainly did</H2>
        <P>
          We’ve reverse-engineered a lot of these situations. It’s usually the
          same six things, in roughly this order.
        </P>
        <P>
          <Strong>
            1. They filled in their Google Business Profile properly, and you
            didn’t.
          </Strong>
        </P>
        <P>
          Not “claimed it.” Filled it in. Every category. Every service listed
          individually. Service areas set. Hours right, including public
          holidays. A description written in the words customers actually use.
          Products or services with prices or ranges. The Q&amp;A section
          populated.
        </P>
        <P>
          Yours is probably claimed, has one category, no services listed, and a
          description written in 2019 by whoever built your site.
        </P>
        <P>
          This is the single most common gap we find, and it’s free.{" "}
          <a href="/blog/google-business-profile">Full checklist here.</a>
        </P>
        <P>
          <Strong>
            2. They asked every single customer for a review from day one.
          </Strong>
        </P>
        <P>
          They asked every customer from day one, before they had a reputation
          to feel precious about, every time, immediately. Four years later
          they’ve got 130 reviews and you’ve got nineteen, and eleven of yours
          are older than their business.
        </P>
        <P>
          Worse, theirs are <em>recent</em>. Recency is a signal on its own.
          Forty reviews that stopped in 2022 look, to Google and to a customer,
          like a business that stopped.
        </P>
        <P>
          This is the one that hurts most and it’s the most fixable.{" "}
          <a href="/blog/how-to-get-google-reviews">
            Here’s how to ask without being weird about it.
          </a>
        </P>
        <P>
          <Strong>3. They post photos constantly.</Strong>
        </P>
        <P>
          Every job, three photos, straight onto the profile. Their listing
          shows two hundred images of recent work. Yours shows a logo and a van.
        </P>
        <P>
          It’s not vanity. It’s a live feed of evidence that they’re working
          right now, and it’s the thing a customer looks at when the star
          ratings are close.
        </P>
        <P>
          <Strong>
            4. Their website is built around what customers search, not around
            them.
          </Strong>
        </P>
        <P>
          Yours probably has: Home, About, Services, Gallery, Contact. Five
          pages. The Services page lists everything you do in a single block of
          text.
        </P>
        <P>
          Theirs has a separate page for every service, and a page for every
          area. Fifteen or twenty pages, each one aimed at an actual thing an
          actual person types. When someone searches “deck builder Papakura,”
          there’s a page that is <em>about</em> that, and Google has something
          obvious to serve.
        </P>
        <P>This is not clever. It’s just work that got done.</P>
        <P>
          <Strong>5. They answer the phone.</Strong>
        </P>
        <P>
          Not a ranking factor. A winning factor. They’re younger, hungrier,
          probably not on the tools as much as you, and they pick up on the
          second ring or text back within a minute.
        </P>
        <P>
          You’re up a ladder. They’re in the ute with the phone in the cradle.
          Half of what looks like a search problem is{" "}
          <a href="/blog/five-minute-rule">an answering problem</a>.
        </P>
        <P>
          <Strong>6. They started before you did.</Strong>
        </P>
        <P>
          Every one of these things compounds. The reviews compound, the photos
          compound, the pages accumulate authority, the local mentions build up.
          They’ve had four years of it and you’ve had none, so the gap looks
          bigger than the effort behind it actually was.
        </P>
        <P>
          Which cuts both ways, and that’s the point of the next section.
        </P>

        <H2 id="what-they-didnt">What they didn’t do</H2>
        <P>
          Worth saying, because the assumption is usually that there’s a trick.
        </P>
        <P>
          They didn’t buy reviews. They didn’t pay Google for rankings. That’s
          not a thing. Ads are a separate box and everyone can tell. They didn’t
          hire an expensive agency, mostly. And they didn’t do anything you
          can’t do.
        </P>
        <P>
          If it makes it easier: they’re not better at business than you.
          They’re just documented.
        </P>

        <H2 id="taking-it-back">Taking it back</H2>
        <P>
          Here’s the order. Do it in this order, each one makes the next one
          work better.
        </P>
        <P>
          <Strong>Week one: the profile.</Strong>
        </P>
        <P>
          Every field. Every category. Every service. Areas. Hours. A
          description in plain language. Twenty photos from the last three
          months. This is the highest-return afternoon available to you and it
          costs nothing but the afternoon.
        </P>
        <P>
          <Strong>Week two: start the review engine.</Strong>
        </P>
        <P>
          Not a campaign. A permanent habit. Every customer, at the moment of
          relief, with the link texted before you drive away. One a week for a
          year is fifty reviews, and fifty recent reviews from an eighteen-year
          business beats a hundred from a four-year one on every signal except
          raw count.
        </P>
        <P>
          Then go back through the last two years of customers, the ones who
          loved the job, and ask them too. That’s a one-off catch-up on top of
          the habit.
        </P>
        <P>
          <Strong>Weeks three to six: the website.</Strong>
        </P>
        <P>
          Not a redesign. A restructure. A page per service. A page per area you
          actually work in. Real photos, real job stories, real place names. If
          your site is genuinely old and slow, that’s a rebuild conversation,{" "}
          <a href="/blog/what-a-website-costs-nz">
            and here’s what that should honestly cost
          </a>
          .
        </P>
        <P>
          <Strong>Ongoing: keep showing signs of life.</Strong>
        </P>
        <P>
          Photos from jobs. New reviews. Profile posts. Updated services when
          what you offer changes. Search rewards the businesses that look active
          this month, not the ones that were established in 2008.
        </P>

        <H2 id="your-experience">
          The part where your eighteen years finally counts
        </H2>
        <P>Here’s what your competitor cannot do.</P>
        <P>
          They cannot produce ten years of finished jobs. They cannot produce
          customers who’ve used them three times across a decade. They cannot
          show the villa restoration from 2016 or the client whose kids have
          grown up in the house they built. They cannot write with the authority
          of someone who’s seen every way a job can go wrong.
        </P>
        <P>
          You have all of that. It has simply never been written down,
          photographed, or published anywhere a search engine or a nervous
          customer can find it.
        </P>
        <P>
          That’s the actual work. Not becoming a marketer. Just documenting what
          already exists.
        </P>
        <P>
          We worked with a building company in Mangawhai who weren’t showing up
          at all. Good outfit, real reputation, invisible online. Getting the
          foundations right took them{" "}
          <a href="/work/boaz-developments">
            from nowhere to second across the neighbouring towns
          </a>
          . Nothing about the business changed. The work was already good. It
          just started being visible.
        </P>

        <H2 id="the-timeline">The honest timeline</H2>
        <P>
          This isn’t a week. Profile changes can show movement in days. Reviews
          build over months. Website restructuring takes six to twelve weeks to
          be fully reflected.
        </P>
        <P>
          Three to six months to meaningfully change your position. Which sounds
          slow, until you consider that the alternative is looking at that same
          search result in three to six months’ time and feeling exactly how you
          feel right now.
        </P>
        <P>
          The competitor who’s above you started at some point. That’s the only
          thing they did that you haven’t.
        </P>
        <Signoff>
          They’re not better at business than you. They’re just documented. At
          Latetwenties we get local service businesses found online and chosen
          by the right customers, by putting the reputation you already have
          somewhere Google and a nervous customer can finally see it.
        </Signoff>
      </BlogPost>
    </>
  );
}

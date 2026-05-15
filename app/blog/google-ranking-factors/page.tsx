import type { Metadata } from "next";

import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "The 6 things that decide where you rank on Google",
  description:
    "The six actual ranking factors that decide whether your business shows up in local search. Plain-spoken, no jargon. Almost nobody gets all six right.",
  alternates: { canonical: "/blog/google-ranking-factors" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "The 6 things that decide where you show up on Google",
      href: "/blog/google-ranking-factors",
    },
  ]),
  article({
    headline: "The 6 Things That Decide Where You Show Up on Google",
    description:
      "The six actual ranking factors that decide whether your business shows up in local search. Plain-spoken, no jargon.",
    url: "/blog/google-ranking-factors",
    datePublished: "2026-03-08",
  }),
];

export default function Post() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
    <BlogPost
      title="The 6 Things That Decide Where You Show Up on Google"
      readTime="5 min read"
      lede="There’s a lot of noise about SEO. Most of it is either vague, outdated, or written to confuse you into hiring someone. This isn’t that."
    >
      <P>
        These are the 6 actual things Google looks at when deciding whether
        to show your business in local search. They’re not complicated.
        But almost nobody gets all 6 right. Missing even one of them is
        enough to hand jobs to a competitor who does.
      </P>

      <H2>1. Your primary category is your single biggest ranking lever</H2>
      <P>
        When you set up a Google Business Profile, it asks you to pick a
        category. Most people pick something broad. “Contractor.”
        “Consultant.” “Health and wellness.”
      </P>
      <P>That’s a mistake.</P>
      <P>
        Your primary category isn’t just a label. It’s the strongest signal
        Google uses to decide what searches you’re relevant for. If you’re
        a physio, you want “physiotherapist,” not “health clinic.” If
        you’re a plumber, you want “plumber,” not “home services.”
      </P>
      <P>
        One category change has moved businesses from page 4 to page 1. No
        exaggeration. Check yours.
      </P>

      <H2>2. Google is reading your reviews for keywords</H2>
      <P>
        Reviews aren’t just social proof. Google scans the words inside
        them to understand what you actually do and where you do it.
      </P>
      <P>
        A review that says “Amazing job fixing the burst pipe in our
        Remuera home on a Sunday night” is an SEO event. It tells Google:
        this business fixes burst pipes, in Remuera, and they’re available
        on weekends.
      </P>
      <P>
        This means <Strong>how you ask for reviews matters</Strong>. A
        message that says “Hey, would you mind leaving us a Google
        review?” gets you “Great service, highly recommend.”
      </P>
      <P>
        A message that says “Would you mind mentioning what we helped you
        with and where you’re based?” gets you reviews that actually move
        the needle.
      </P>

      <H2>
        3. Your website probably doesn’t mention your suburb once
      </H2>
      <P>
        Google needs to connect your website to a physical location. If
        your site doesn’t say where you are, not just in the footer but in
        the actual content, Google has no location signal to work with.
      </P>
      <P>
        Most local business websites say things like: “We provide quality
        service to our valued customers.”
      </P>
      <P>
        They don’t say: “We’ve been helping homeowners in Ponsonby, Grey
        Lynn, and Mt Eden since 2015.”
      </P>
      <P>
        Google can’t rank you for local searches it can’t verify you’re
        local for. Your suburb, your city, your service areas need to
        appear naturally in your content. Not stuffed. Just present.
      </P>

      <H2>
        4. Tiny inconsistencies across the internet are silently killing
        your ranking
      </H2>
      <P>
        Google doesn’t just look at your website and your Google profile.
        It cross-references your business details across dozens of other
        sites: directories, listings, review platforms.
      </P>
      <P>And it’s ruthless about consistency.</P>
      <P>
        “Road” vs “Rd.” A different phone number on a directory you signed
        up for in 2017. “Ltd” on some listings, nothing on others. An old
        address from when you moved premises two years ago.
      </P>
      <P>
        These aren’t cosmetic issues. To Google,{" "}
        <Strong>inconsistency equals distrust</Strong>. Distrust equals
        lower ranking. A competitor with a worse website but cleaner data
        across the internet will often outrank you.
      </P>
      <P>
        The fix is boring but effective: audit every place your business
        details appear and make them match exactly.
      </P>

      <H2>
        5. Review volume doesn’t matter as much as review recency
      </H2>
      <P>
        Here’s one most people get wrong: 80 reviews from 2021 is worse
        than 12 reviews with 3 from last month.
      </P>
      <P>
        Google treats an inactive review profile the same way a customer
        does, as a sign that the business might have slowed down, changed,
        or closed.
      </P>
      <P>
        Search algorithms weight recency heavily. A steady drip of fresh
        reviews tells Google you’re active, trusted, and still trading.
        One big push years ago, then nothing, sends the opposite signal.
      </P>
      <P>
        You don’t need a flood of reviews. You need a system that gets you
        one or two every month without you having to think about it.
      </P>

      <H2>
        6. People clicking on your listing is itself a ranking signal
      </H2>
      <P>
        This one surprises people: Google watches what happens after it
        shows your listing.
      </P>
      <P>
        If your business shows up in search and nobody clicks on it,
        Google interprets that as a signal that you’re not the most
        relevant result and moves you down. If people consistently click
        your listing over the ones above it, Google takes notice and
        moves you up.
      </P>
      <P>
        This means your photos, your business description, your review
        score, and your hours all affect your ranking. Not just because
        they look good, but because they influence whether someone clicks.
      </P>
      <P>
        Most businesses treat their Google profile like a form they filled
        in once. The businesses showing up at the top treat it like a
        storefront.
      </P>

      <H2>So what do you do with this?</H2>
      <P>
        Start with the easy stuff: check your primary category, make sure
        your details are consistent everywhere, and put a simple review
        follow-up process in place.
      </P>
      <P>
        If you want someone to look at all 6 for you, we do a Free
        Presence Check. No pitch, just a clear picture of where you stand
        and what to fix.
      </P>
    </BlogPost>
    </>
  );
}

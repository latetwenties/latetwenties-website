import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList } from "@/lib/schema";

import { BlogPost, H2, P, Signoff, Strong } from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "You show up in your suburb. Three suburbs over, you don’t exist.";
const DESCRIPTION =
  "Why your business ranks well close to home and vanishes a few suburbs away, and what you can honestly do about it without faking an address.";
const URL = "/blog/ranking-in-nearby-suburbs";

const TOC = [
  { id: "proximity", label: "Ranking by proximity" },
  { id: "two-lies", label: "Two shortcuts to avoid" },
  { id: "what-works", label: "What actually moves you outward" },
  { id: "expectation", label: "The expectation to reset" },
  { id: "one-thing", label: "If you only do one thing" },
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
    datePublished: "2026-07-31",
  }),
];

export default function Post() {
  assertPostLive("ranking-in-nearby-suburbs");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="6 min read"
        lede="Here’s a test that ruins a lot of people’s afternoons."
        toc={TOC}
        keyStat={{
          label: "The honest rule",
          value: "1 page",
          caption: "per area you can prove you work in.",
        }}
        railCtaLine="Invisible a few suburbs over?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          Search your own service on your phone, standing in your own driveway.
          You’ll probably look pretty good. Top few results, map pack, the lot.
        </P>
        <P>Now drive fifteen minutes and do it again.</P>
        <P>
          Gone. Not further down the list. Gone entirely, replaced by businesses
          you’ve never heard of.
        </P>
        <P>
          You didn’t get worse on the drive over. You ran into the single most
          misunderstood thing about local search.
        </P>

        <H2 id="proximity">
          Google isn’t ranking businesses. It’s ranking businesses near the
          searcher.
        </H2>
        <P>
          Every local search quietly includes a location, whether the person
          typed one or not. “Electrician” typed in Henderson and “electrician”
          typed in Howick are two completely different searches, and they get two
          completely different sets of results.
        </P>
        <P>
          This is one of the{" "}
          <a href="/blog/google-ranking-factors">
            six factors that decide where you show up
          </a>
          , and it’s the one you have the least control over. Google calls it
          proximity. It’s measuring the distance between the searcher and your
          business address.
        </P>
        <P>
          The uncomfortable implication:{" "}
          <Strong>
            you cannot outrank a nearby competitor on proximity by being better.
          </Strong>{" "}
          More reviews won’t fix distance. A nicer website won’t fix distance. If
          they’re four kilometres closer to the person searching, they start
          ahead.
        </P>
        <P>
          Which is why the advice you’ve probably been given, “just get more
          reviews and you’ll rank everywhere,” is wrong, and why you’ve been
          doing the work and not seeing the result.
        </P>

        <H2 id="two-lies">The two lies people tell to get around it</H2>
        <P>
          Before the honest options, the dishonest ones. Because someone will
          offer them to you.
        </P>
        <P>
          <Strong>Fake addresses.</Strong> Renting a virtual office, using a
          mate’s garage, using your accountant’s address. It works, briefly.
          Google runs verification, competitors report listings, and the penalty
          when it lands is that your profile gets suspended, which doesn’t mean
          you drop a few spots, it means you disappear from maps entirely,
          including in the suburb where you were legitimately ranking. We have
          watched businesses lose their real visibility chasing a fake one.
        </P>
        <P>
          <Strong>Keyword-stuffing your business name.</Strong> Changing “Dave’s
          Plumbing” to “Dave’s Plumbing Auckland Emergency Plumber North Shore.”
          Your business name must match your real-world, signage-on-the-van name.
          This is also reportable, also penalised, and every competitor who’s
          paying attention knows how to report it in about forty seconds.
        </P>
        <P>Neither is worth it. Here’s what actually works.</P>

        <H2 id="what-works">What actually moves you outward</H2>
        <P>
          <Strong>Build a real page for each area you genuinely serve.</Strong>{" "}
          Not a list of suburbs in your footer, that does nothing. A proper page
          for each area that matters, with real content on it. What you do there,
          jobs you’ve actually done there, photos from those jobs, the specific
          quirks of working in that area. Villas in Grey Lynn have different
          problems from new builds in Millwater, and a page that knows that will
          outrank a page that lists forty suburb names and says nothing.
        </P>
        <P>
          The honest rule:{" "}
          <Strong>one page per area you can prove you work in.</Strong> If you’ve
          never done a job in Pukekohe, don’t make a Pukekohe page. It’ll be
          thin, it’ll read as thin, and it won’t rank anyway.
        </P>
        <P>
          <Strong>Get your service area right on your profile.</Strong> Your
          Google Business Profile lets you set the areas you serve, separately
          from where you’re based. Set it honestly and set it fully. It won’t
          beat proximity on its own, but leaving it blank or half-filled is
          throwing away a signal you’re entitled to.
        </P>
        <P>
          <Strong>Get reviews that name places.</Strong> This is the sleeper. A
          review that says “came out to us in Silverdale, sorted the same day” is
          doing something a five-star with no words can’t: it’s evidence, in a
          customer’s own voice, that you actually work in Silverdale. Ten of
          those across an area move things. And you get them the same way you get
          any specific review, by asking people to mention what the job was, as
          we covered in{" "}
          <a href="/blog/how-to-get-google-reviews">the reviews piece</a>. Just
          don’t script it. Never tell a customer to name a suburb. Ask what the
          job was, and locals mention where they live all by themselves.
        </P>
        <P>
          <Strong>Get mentioned by things that are already local.</Strong> A
          sponsorship of the local club. The community Facebook page. A local
          supplier’s “who we work with” list. A regional trade directory. Google
          reads mentions of your name and address across the web as evidence of
          where you operate. This is slow, unglamorous, and it works, and it’s
          the part almost nobody does, which is exactly why it’s still available.
        </P>
        <P>
          <Strong>Do more jobs there.</Strong> Not a growth hack. But the
          businesses that break into an adjacent area almost always do it in this
          order: win a few jobs there through word of mouth or ads, get reviews
          from those jobs, photograph those jobs, build the area page around real
          work, and then the rankings follow. The search visibility trails the
          real-world presence. It doesn’t lead it.
        </P>

        <H2 id="expectation">The expectation to reset</H2>
        <P>
          You will probably never rank in a suburb fifteen kilometres away as
          well as you rank in your own. Not because you did it wrong. Because a
          business physically located there has an advantage you cannot buy.
        </P>
        <P>
          What you can do is push your radius out steadily and hold what you
          gain. A building company we work with in Mangawhai went from not
          showing at all to{" "}
          <a href="/work/boaz-developments">
            ranking second across the neighbouring towns
          </a>
          , not by faking anything, but by getting the foundations right and then
          giving the surrounding areas real reasons to come up. That’s the
          realistic shape of a win here: not everywhere, but meaningfully further
          than yesterday.
        </P>

        <H2 id="one-thing">If you only do one thing</H2>
        <P>
          Open a map. Draw the area you actually want work from. Now list the
          suburbs inside it, in order of how much you want them.
        </P>
        <P>
          Take the top one. Build it a proper page this month, with two real jobs
          and two real photos on it. Ask the next customer in that suburb for a
          review.
        </P>
        <P>Then next month, the second one.</P>
        <Signoff>
          That’s it. It’s not fast, and it’s the only version that doesn’t get
          you suspended. At Latetwenties we get local service businesses found
          online and chosen by the right customers. Pushing your radius out is
          patient work, and it’s the kind that holds.
        </Signoff>
      </BlogPost>
    </>
  );
}

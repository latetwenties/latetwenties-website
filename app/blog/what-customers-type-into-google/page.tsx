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

const TITLE = "You say retaining wall. Your customer types fix leaning fence.";
const DESCRIPTION =
  "Trade businesses describe their work in trade language, then wonder why the phone is quiet. How to find the words your customers actually search, and where to put them on your site.";
const URL = "/blog/what-customers-type-into-google";

const TOC = [
  { id: "the-gap", label: "The language gap" },
  { id: "problem-words", label: "Customers search problems, not services" },
  { id: "finding-the-words", label: "Finding the actual words" },
  { id: "using-them", label: "Where the words go" },
  { id: "keep-listening", label: "Keep listening" },
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
    datePublished: "2026-09-25",
  }),
];

export default function Post() {
  assertPostLive("what-customers-type-into-google");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="6 min read"
        lede="A homeowner is standing in their backyard looking at a fence that’s leaning like it’s had a big night. They pull out their phone. They do not type “timber retaining solutions”. They type “fence leaning over who do I call”."
        toc={TOC}
        keyStat={{
          label: "Free keyword source",
          value: "Your inbox",
          caption: "customers tell you their words in every enquiry.",
        }}
        railCtaLine="Not sure what your customers search?"
        ctaTitle="Want to know what your customers are actually searching?"
        ctaBody="Tell us your business name. We’ll look at your market the way we do for every build: the searches, the competitors, your site as it stands, and record you a short video with what we find. Some of it you can act on yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          If your website only speaks your trade’s language, Google has a
          harder time matching you to that search, and the job goes to
          whoever wrote the page that sounds like the customer.
        </P>
        <P>
          This is one of the most common gaps we find in trade websites, and
          one of the cheapest to close. You don’t need a keyword tool to
          start. You need to listen differently.
        </P>

        <H2 id="the-gap">The language gap</H2>
        <P>
          You’ve spent years inside your trade, and your vocabulary shows
          it. Sparkies write “switchboard upgrades”. Concreters write
          “exposed aggregate”. Plumbers write “backflow prevention”. All
          correct, and all nearly invisible to a customer who doesn’t know
          those words exist.
        </P>
        <P>
          The customer knows what they can see and what they’re worried
          about. The powerpoint that smells hot. The driveway that’s
          cracking. The tap that won’t stop. Their search is made of those
          words, because those are the only words they have.
        </P>
        <P>
          Google is good at bridging some of this gap, and getting better.
          But it still rewards the page that matches the searcher’s intent
          in the searcher’s own terms, and so does the human who lands on
          it. A page that reads like their problem gets the enquiry. A page
          that reads like your invoice doesn’t.
        </P>

        <H2 id="problem-words">Customers search problems, not services</H2>
        <P>Most local searches worth money come in three flavours:</P>
        <P>
          <Strong>The problem search.</Strong> “Water stain on ceiling”,
          “garage door won’t open”, “power keeps tripping”. They don’t know
          what the fix is called. Highest urgency, least trade language.
        </P>
        <P>
          <Strong>The solution search.</Strong> “Reroofing cost nz”, “new
          driveway timaru”, “bathroom renovation quote”. They know roughly
          what they need and they’re comparing. This is where{" "}
          <a href="/blog/what-a-website-costs-nz">honest pricing
          content</a>{" "}
          earns its keep.
        </P>
        <P>
          <Strong>The trade search.</Strong> “Electrician near me”,
          “plumber henderson”. Shortest, most competitive, and the one
          every business already targets because it’s the obvious one.
        </P>
        <P>
          Most trade websites compete hard on the third flavour and ignore
          the first two, which is exactly backwards: the problem search has
          the least competition and reaches the customer earliest, before
          they’ve started collecting quotes from your competitors.
        </P>

        <H2 id="finding-the-words">Finding the actual words</H2>
        <P>
          <Strong>Read your own enquiries.</Strong> Open your texts, emails
          and form fills from the last six months and write down the exact
          phrases customers used to describe the job. Not your tidied-up
          version. Theirs. “The concrete out the front is all flaky” is a
          keyword. This is the best keyword research available anywhere,
          and it’s sitting in your pocket, free.
        </P>
        <P>
          <Strong>Let Google finish your sentences.</Strong> Type the start
          of a customer-style search into Google and read the suggestions.
          Then scroll to the related searches at the bottom of the results.
          Both lists are built from what people genuinely type.
        </P>
        <P>
          <Strong>Listen on site visits.</Strong> The words a customer uses
          when they walk you round the job are the words they searched the
          night before. When three customers in a month say “the deck’s
          gone all grey and slimy”, that’s a page topic, handed to you.
        </P>
        <P>
          <Strong>Check what the winners wrote.</Strong> Search your main
          jobs the way a customer would and read the sites above you.
          Notice the language on the pages that win. You’re not copying
          them. You’re confirming which words the market has already voted
          for.
        </P>

        <H2 id="using-them">Where the words go</H2>
        <P>
          <Strong>One job, one page.</Strong> A single “Our Services” page
          listing everything you do can’t compete with a dedicated page for
          each service written in customer language. If you pour driveways,
          patios and shed slabs, that’s three pages, each answering the
          searches for that job: what it involves, roughly what it costs,
          how long it takes, photos of yours.
        </P>
        <P>
          <Strong>Put the problem in the headline.</Strong> “Driveway
          cracked or sinking?” beats “Concrete Solutions” as an opening
          line, because it’s the sentence the searcher just typed. Trade
          terms can live further down the page for the customers who do
          know them. You’re adding the customer’s language, not deleting
          your own.
        </P>
        <P>
          <Strong>Answer questions in their words.</Strong> An FAQ that
          asks “Why is my hot water running out fast?” meets the search
          head-on, and it’s exactly the kind of plainly written answer{" "}
          <a href="/blog/get-recommended-by-ai">AI assistants pull from
          when they recommend businesses</a>
          . Writing for the customer and writing for the machines have
          quietly become the same job.
        </P>

        <H2 id="keep-listening">Keep listening</H2>
        <P>
          This isn’t a one-off exercise. Every enquiry that comes in is
          another data point about how your market talks, and the phrasing
          drifts over time. The habit is simple: when a customer describes
          a job in words that surprise you, write the words down. Once a
          quarter, check your site still speaks them.
        </P>
        <P>
          The businesses that win local search long-term aren’t the ones
          with the cleverest tools. They’re the ones whose websites sound
          like their customers.
        </P>
        <Signoff>
          The words are the strategy: get them right and everything built
          on top works harder. At Latetwenties we get local service
          businesses found online and chosen by the right customers, and
          every build starts with exactly this research. To see what the
          rest of the picture looks like,{" "}
          <a href="/blog/google-ranking-factors">
            the six things that decide where you show up
          </a>{" "}
          is the natural next read.
        </Signoff>
      </BlogPost>
    </>
  );
}

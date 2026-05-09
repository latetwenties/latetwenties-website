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
  title: "The year your customers stopped clicking",
  description:
    "Why local service businesses are seeing traffic fall while their Google rankings hold steady, and the diagnostic that explains where their customers actually went.",
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "The year your customers stopped clicking",
      href: "/blog/ai-search-shift",
    },
  ]),
  article({
    headline: "The year your customers stopped clicking",
    description:
      "Why local service businesses are seeing traffic fall while their Google rankings hold steady, and the diagnostic that explains where their customers actually went.",
    url: "/blog/ai-search-shift",
    datePublished: "2026-05-09",
  }),
];

export default function Post() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title="The year your customers stopped clicking"
        readTime="8 min read"
        lede="A quiet thing is happening to local service businesses across New Zealand and Australia right now. The Google rankings haven’t moved. Some have even improved. But the phone is ringing less than it used to, the contact form is quieter, and the traffic chart is sliding sideways into down. Nothing looks technically broken. The ground has shifted underneath."
        ctaTitle="Want me to run the diagnostic for you?"
        ctaBody="30 minutes, no pitch. Before we talk I’ll run these searches against your business across ChatGPT, Perplexity and Google’s AI mode, and come prepared with what they’re saying about you, what they’re missing, and what to do about it."
      >
        <H2>What’s actually happening</H2>
        <P>
          In the last 18 months a layer has appeared above the search results.
          Google began rolling out AI Overviews to New Zealand and Australia
          through 2024 and 2025: the AI-generated summary that sits at the top
          of the page and answers the question directly. ChatGPT Search
          launched late 2024 and is now used by tens of millions of people each
          week. Perplexity has grown more confident with every model release.
          Apple Intelligence is wired into Siri’s local recommendations on
          every recent iPhone in the country.
        </P>
        <P>
          These tools are answer engines, not search engines. They read the
          web, extract what’s relevant, and hand the customer a prepared
          answer. Often without sending the click.
        </P>
        <P>
          Pew Research has tracked this shift carefully. In a study published
          July 2025, when a Google AI Overview appeared at the top of the
          page, the click-through rate on the rest of the page roughly halved.
          Almost 60% of all Google searches now end without a click on any
          result at all. Ahrefs and Similarweb have published parallel numbers
          on AI search traffic from ChatGPT and Perplexity, growing month on
          month through 2025 and into 2026.
        </P>
        <P>
          You can feel this without reading a single report. Your customers
          are still finding you. They just don’t always need to visit your
          site to do it.
        </P>

        <H2>Why your rankings can hold while your traffic falls</H2>
        <P>
          This is the part that catches people off guard. Your Google Business
          Profile is performing fine. Your map pack ranking hasn’t moved. Your
          website is still on page one. But the calls and form fills are
          quieter than last year, and you can’t put your finger on why.
        </P>
        <P>
          Your ranking decides whether you’re seen by the algorithm. The AI
          layer above it decides whether the customer needs to do anything
          about being shown.
        </P>
        <P>
          A customer searching “best builder in Mt Eden” used to get ten links
          and pick one. Now they get a paragraph that summarises the top
          results, names two or three businesses, and answers any follow-up
          question without a click. If you’re one of the businesses cited,
          you’ve made it into the considered set. If you’re not, you’re
          invisible at a layer the old SEO tools weren’t built to measure.
        </P>

        <H2>The new question</H2>
        <P>
          The question used to be: where do I rank?
        </P>
        <P>
          The question now is: am I being cited?
        </P>
        <P>
          These are not the same question. You can rank fifth on a Google
          search and be the first business named in the AI Overview, because
          the AI weighs you on factors beyond ranking position: the depth and
          clarity of your service descriptions, the language your customers
          use in their reviews, the structured data on your site, the way
          third-party sources describe your business.
        </P>
        <P>
          You can also rank first on Google and not appear in the AI summary
          at all. We’ve seen this happen on real local businesses we work
          with.
        </P>

        <H2>What still works underneath</H2>
        <P>
          The good news is the foundations haven’t moved. Answer engines still
          read the same web, the same reviews, the same listings, the same
          pages. What’s changed is what they reward.
        </P>
        <P>Three things now matter more than they used to:</P>
        <P>
          <Strong>Specific, plain language.</Strong> AI summaries pull from
          text that already reads like an answer. Vague service pages full of
          marketing copy do badly. A page that says “we install vinyl plank
          flooring in Auckland villas, typically two days for a three-bedroom
          home, $85 per square metre supply and lay” is far more likely to be
          cited than one that says “premium flooring solutions for discerning
          homeowners”.
        </P>
        <P>
          <Strong>Clear structured data.</Strong> Schema markup
          (LocalBusiness, Service, FAQPage) gives the AI an unambiguous
          picture of who you are, what you do, where you do it, and what you
          charge. Without it, the AI is reading your site like a human and
          guessing. With it, you’re handing it the answer in a format it can’t
          misinterpret. Most small business websites in NZ and AU still
          don’t have this.
        </P>
        <P>
          <Strong>Citation density across the web.</Strong> Reviews, directory
          listings, mentions in local press, third-party case studies. Answer
          engines weigh corroborated information higher than self-described
          claims. You can’t tell ChatGPT you’re trustworthy. Other sources
          have to do that for you.
        </P>

        <H2>A diagnostic you can run in fifteen minutes</H2>
        <P>
          This is roughly the version of the screen-share we’d run together
          if you{" "}
          <a
            href="/contact"
            className="underline underline-offset-4 hover:opacity-65 transition-opacity"
          >
            booked a free presence check
          </a>
          . You can do it yourself first. It costs you nothing and it’s
          genuinely useful.
        </P>
        <UL>
          <li>
            Open ChatGPT (or Perplexity, or Google’s AI mode). Type the search
            a real customer would use. Not your business name. The job. “Best
            plumber in Hamilton.” “Electrician in Newmarket who does heat
            pumps.” “Roof repair Tauranga.” See if you’re mentioned. Not on a
            list of links. In the answer.
          </li>
          <li>
            If you’re not mentioned, ask a follow-up: “Are there any others?”
            Sometimes you’re in the second tier. That’s still useful
            information.
          </li>
          <li>
            Ask the AI directly: “What do you know about [your business
            name]?” Read the answer carefully. Is the description right? Is
            the location right? Are the services right? Whatever the AI says
            here is roughly what it’s telling your customers.
          </li>
          <li>
            Now do the same searches in Google. Look at the AI Overview at
            the top. Same questions. Are you mentioned? Is the description
            right?
          </li>
        </UL>
        <P>
          If the answers feel thin or wrong or absent, that’s the gap. That’s
          what’s costing you calls right now, and almost nothing in your old
          SEO report will tell you about it.
        </P>

        <H2>What to actually do about it</H2>
        <P>Three things, in order.</P>
        <P>
          <Strong>Rewrite your service pages for AI extraction.</Strong> The
          old goal was “rank for this keyword”. The new goal is “be the clear,
          specific, citation-worthy answer to the question a real customer is
          asking”. Plain language. Real numbers. Real timeframes. Real prices
          where you can. Locations named. The kind of writing a customer would
          screenshot and send to their partner.
        </P>
        <P>
          <Strong>Get your structured data right.</Strong> If you don’t have
          LocalBusiness and Service schema on your site, you’re missing the
          most direct lever for being parsed correctly by an answer engine.
          It’s the closest thing to a free win available right now, and most
          of your competitors don’t have it yet.
        </P>
        <P>
          <Strong>Strengthen your citations.</Strong> Get your name, address
          and phone consistent across every directory. Build review velocity
          (recent, frequent, specific to your services and patch). Make sure
          every third-party page that mentions your business is accurate. The
          AI is reading all of it.
        </P>
        <P>
          These aren’t new fundamentals. They’re the same fundamentals,
          weighted differently for a customer who increasingly never needs to
          click.
        </P>

        <H2>The bottom line</H2>
        <P>
          We’re still early in this shift. Most small business owners we
          speak to haven’t named what they’re feeling yet. The numbers are
          slipping a little, the calls are a little quieter, but everything
          looks fine on the surface.
        </P>
        <P>
          What’s happening is a quiet rewrite of the rules of being found
          online. Ranking is no longer the finish line. Being citable is. The
          businesses doing this work now will be the ones answer engines keep
          quoting in 2027 and 2028, while their competitors wonder why the
          phone has gone so quiet.
        </P>
        <P>
          Type your service into ChatGPT this afternoon. Add your suburb. See
          where you stand. That’s the new version of the diagnostic, and it
          tells you almost everything you need to know about whether your
          marketing is still doing its job.
        </P>
      </BlogPost>
    </>
  );
}

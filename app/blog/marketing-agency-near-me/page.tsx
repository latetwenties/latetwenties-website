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

const TITLE = "Does your marketing agency need to be near you?";
const DESCRIPTION =
  "Searching for a marketing agency near me? For local SEO and Google Ads, the agency doesn’t need to be in your town. It needs to know your town. How to tell the difference.";
const URL = "/blog/marketing-agency-near-me";

const TOC = [
  { id: "short-answer", label: "The short answer" },
  { id: "why-near-me", label: "Why people search “near me”" },
  { id: "knowledge-that-matters", label: "The local knowledge that matters" },
  { id: "what-proximity-buys", label: "What being nearby does buy you" },
  { id: "the-test", label: "Four questions to test any agency" },
  { id: "where-distance-matters", label: "Where distance really matters" },
  { id: "quick-answers", label: "Quick answers" },
];

const FAQS = [
  {
    question: "Should I hire a marketing agency in my own city?",
    answer:
      "Only if meeting in person matters to you. For local SEO and Google Ads, what counts is whether the agency understands your area: the suburbs you want work from, the words your customers search, and who you are up against. That can be learned from anywhere, and you can test for it with a few direct questions.",
  },
  {
    question: "Can a New Zealand agency do local SEO for an Australian business?",
    answer:
      "Yes. Google works the same way on both sides of the Tasman, and the local detail comes from research and from the owner. We work with concreters in Sale and Bairnsdale in Victoria from New Zealand. One of them had a stranger ask for a house slab quote four days after his new site went live.",
  },
  {
    question: "How does a remote agency get photos of my work?",
    answer:
      "From you. The best photos for a trade business are real jobs, taken on your phone on site, with the location noted. Those beat anything an agency photographer could stage, because customers and Google both respond to real work in real places.",
  },
  {
    question: "Why do the agencies near me show up first when I search?",
    answer:
      "Mostly because they are close to you. For any “near me” search, Google weighs distance heavily, so the nearest agencies appear first whether or not they are the best fit. Distance tells you where an agency sits, not how good it is.",
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
    datePublished: "2026-10-16",
  }),
  faqPage(FAQS),
];

export default function Post() {
  assertPostLive("marketing-agency-near-me");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="7 min read"
        lede="No. An agency doesn’t need to be in your town to get you found in it. It needs to know your town, which is a different thing, and one you can test for in a single conversation."
        toc={TOC}
        keyStat={{
          label: "First enquiry",
          value: "4 days",
          caption: "after launch, for a Victorian concreter we work with from NZ.",
        }}
        railCtaLine="Weighing up an agency?"
        ctaTitle="Want to see how well we know your patch?"
        ctaBody="Tell us your business name and your area. We’ll look at who shows up for your work there, why, and where you stand, and record you a short video with what we find. Some of it you can fix yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          If you’ve typed “marketing agency near me” into Google, you’re
          probably after something reasonable: someone accountable, who
          understands your area, who you could look in the eye if things
          went wrong. Those are the right things to want. Distance is just a
          rough stand-in for them, and not a very reliable one.
        </P>

        <H2 id="short-answer">The short answer</H2>
        <P>
          <Strong>
            For local SEO and Google Ads, your agency doesn’t need to be near
            you. It needs to understand the area you want work from, answer
            the phone, and show you results you can check.
          </Strong>{" "}
          Everything that gets a trade business found happens online: your
          Google Business Profile, your reviews, your listings, your
          website, your ads. None of it needs someone in the room. What it
          needs is local knowledge, and that can be researched, asked for,
          and tested.
        </P>

        <H2 id="why-near-me">Why people search “near me” for an agency</H2>
        <P>
          In our experience it’s rarely about geography. It’s usually about
          trust, and often about having been burned. The last agency was a
          voice on the phone, the reports were full of numbers nobody could
          explain, the account manager changed twice, and when the owner
          finally asked what they’d got for their money, there wasn’t a good
          answer.
        </P>
        <P>
          Wanting someone local is a reasonable reaction to that. But a
          local agency can do exactly the same thing to you, just with a
          nicer office down the road. What protected you was never the
          postcode. It was the questions you asked before signing, and{" "}
          <a href="/blog/questions-to-ask-a-marketing-agency">
            there are seven worth asking anyone
          </a>
          , near or far.
        </P>

        <H2 id="knowledge-that-matters">The local knowledge that actually matters</H2>
        <P>
          There is real local knowledge that makes or breaks a trade
          business’s marketing. It just isn’t the kind you get from living
          nearby. It’s this:
        </P>
        <P>
          <Strong>Which towns and suburbs you want work from.</Strong> And,
          just as important, which ones you don’t, because the travel
          doesn’t pay or the jobs there aren’t your kind of job. An agency
          that doesn’t ask this will happily get you enquiries you’ll turn
          down.
        </P>
        <P>
          <Strong>The words your customers use.</Strong> Homeowners don’t
          search the way tradespeople talk. They search the problem, in
          their words.{" "}
          <a href="/blog/what-customers-type-into-google">
            Finding those words
          </a>{" "}
          is research, not residency.
        </P>
        <P>
          <Strong>Who you’re up against.</Strong> Which businesses sit in
          the map results for your main searches, how many reviews they
          have, what their pages say. This is readable from anywhere, and
          an agency that hasn’t looked before pitching you hasn’t done the
          homework.
        </P>
        <P>
          <Strong>What local customers worry about.</Strong> When we
          rebuilt the site for a concreter in Sale, Victoria, the research
          kept turning up the same fear among Gippsland homeowners:
          concreters who don’t show up, don’t finish, or won’t give a
          straight number. So{" "}
          <a href="/work/tmt-concreting">every page answers that</a>, in
          plain language. We did that work from New Zealand.
        </P>

        <H2 id="what-proximity-buys">What being nearby does buy you</H2>
        <P>
          To be fair to the local agencies, proximity isn’t worthless. It
          buys you three real things.
        </P>
        <P>
          <Strong>Face-to-face meetings.</Strong> If sitting across a table
          is how you build trust, that’s a legitimate preference. Weigh it.
          Just notice how many meetings you’d actually want once the work
          is running. For most owner-operators the honest answer is almost
          none.
        </P>
        <P>
          <Strong>Someone who can turn up with a camera.</Strong> Useful,
          but less than you’d think. The photos that work hardest for a
          trade business are the ones you take yourself, on site, on your
          phone, of real jobs.{" "}
          <a href="/blog/google-business-profile-photos">
            Here are the nine worth taking
          </a>
          .
        </P>
        <P>
          <Strong>Shared networks.</Strong> A local agency may know your
          suppliers, your competitors and the local business crowd. That
          can help with referrals. It can also mean they work for the
          business down the road, so ask.
        </P>

        <H2 id="the-test">Four questions to test any agency, near or far</H2>
        <P>
          Ask these in the first conversation. A good agency answers them
          specifically and without flinching. A vague answer tells you
          they haven’t looked.
        </P>
        <P>
          <Strong>1. “Who shows up for my main search in my area, and why
          them?”</Strong> They should be able to name the businesses in the
          map results and say what those businesses are doing that you
          aren’t.
        </P>
        <P>
          <Strong>2. “Which suburbs would you go after first, and
          why?”</Strong> The right answer starts close to your base and
          works outward, because{" "}
          <a href="/blog/ranking-in-nearby-suburbs">
            you rank strongest near where Google places you
          </a>
          . Anyone promising the whole region in month one is guessing.
        </P>
        <P>
          <Strong>3. “What will you need from me?”</Strong> Remote or not,
          some things only the owner can give: photos, confirmation of
          services and areas, the names of happy customers to ask for
          reviews. A good agency keeps that list short and tells you up
          front.
        </P>
        <P>
          <Strong>4. “Can I talk to a client in a town like mine?”</Strong>{" "}
          Someone with a similar business, in a similar size of place. If
          they have one, the distance question tends to answer itself.
        </P>

        <H2 id="where-distance-matters">Where distance really does matter</H2>
        <P>
          Here’s the twist. When someone searches “marketing agency near
          me,” Google leans heavily on distance, so it shows the agencies
          closest to where the searcher is standing. That tells you who’s
          nearby, not who’s good.
        </P>
        <P>
          The same rule applies to your customers searching for you. When
          a homeowner in your area searches for your trade, being close is
          one of the biggest things working in your favour, and it’s the
          one thing nobody can fake. So the distance that matters most in
          all of this isn’t between you and your agency. It’s between your
          business and your customers, and the job is to make sure that
          within your patch, you’re the obvious call.{" "}
          <a href="/blog/what-is-local-seo">
            That’s what local SEO is, in plain terms
          </a>
          .
        </P>

        <H2 id="quick-answers">Quick answers</H2>
        {FAQS.map((faq) => (
          <div key={faq.question}>
            <H3>{faq.question}</H3>
            <P>{faq.answer}</P>
          </div>
        ))}

        <Signoff>
          We’re a small Auckland agency, and we work with trade and local
          service businesses across New Zealand and Australia, from a{" "}
          <a href="/work/boaz-developments">builder in Mangawhai</a> to
          concreters in Gippsland. If you’d like to test us on your patch,{" "}
          <a href="/contact">ask for a free Presence Report</a> and we’ll
          show you who’s winning your area and why. Then ask us the four
          questions above.
        </Signoff>
      </BlogPost>
    </>
  );
}

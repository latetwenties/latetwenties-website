import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList, faqPage } from "@/lib/schema";

import {
  BlogPost,
  H2,
  H3,
  P,
  Pullquote,
  Signoff,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "The hidden risk of review gating: why shortcuts can kill your local rankings";
const DESCRIPTION =
  "Review gating means only sending happy customers to Google. It breaks Google’s rules, it can breach consumer law in NZ and Australia, and it can cost you the reviews you have. Here’s the safer way to grow them.";
const URL = "/blog/review-gating";

const TOC = [
  { id: "what-it-is", label: "What review gating is" },
  { id: "google-rules", label: "What Google’s rules say" },
  { id: "the-law", label: "What the law says in NZ and Australia" },
  { id: "rankings", label: "How it hurts your rankings" },
  { id: "customers", label: "Why customers can tell" },
  { id: "check-your-setup", label: "Check your own setup" },
  { id: "the-safe-way", label: "The safe way to get more reviews" },
  { id: "quick-answers", label: "Quick answers" },
];

const FAQS = [
  {
    question: "Is review gating illegal in New Zealand?",
    answer:
      "It can be. The Fair Trading Act bans conduct that misleads people, and a review profile built only from hand-picked happy customers can give a false picture of a business. The Commerce Commission has already fined a business for hiding its lower reviews. On Google it is a policy breach either way.",
  },
  {
    question: "Can I still ask unhappy customers for private feedback?",
    answer:
      "Yes, as long as it does not replace the public review link. Ask everyone the same way, give everyone the same public link, and offer private feedback as an extra. What crosses the line is using a happy-or-not question to decide who gets sent to Google.",
  },
  {
    question: "Is it OK to only ask the customers I get on well with?",
    answer:
      "Make asking a routine for every finished job, not a judgement call. Choosing who to ask based on whether you think they will leave five stars is the same thing as gating, just done by hand. A routine also gets you more reviews, because you stop forgetting the quiet customers.",
  },
  {
    question: "What happens if Google thinks my reviews are manipulated?",
    answer:
      "Google can remove the reviews it decides break its rules, and it can temporarily stop your profile taking new ones. Either way you lose ground on the review count and recency that help decide where you show in the map results.",
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
    datePublished: "2026-11-06",
  }),
  faqPage(FAQS),
];

export default function Post() {
  assertPostLive("review-gating");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="6 min read"
        lede="Review gating means asking customers if they were happy first, and only sending the happy ones to Google. It looks like a clever way to protect your star rating. It breaks Google’s rules, it can breach consumer law, and it puts at risk the reviews you already have."
        toc={TOC}
        keyStat={{
          label: "The safe rule",
          value: "Ask everyone",
          caption: "the same way, with the same link.",
        }}
        railCtaLine="Not sure if your review setup is safe?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          The short version: if your review request treats happy and unhappy
          customers differently, change it this week. Ask every customer the
          same way, give every customer the same public link, and let the
          reviews land where they land. That is the only setup that is safe with
          Google and with the law, and it builds a profile people believe.
        </P>
        <P>
          Most owners who are gating don’t know they are. It usually arrives
          built into a review tool, a booking system or a template someone set
          up years ago. So this is worth five minutes even if you’ve never heard
          the term.
        </P>

        <H2 id="what-it-is">What review gating actually is</H2>
        <P>
          Review gating is any setup that screens customers before they reach a
          public review site. The common version is a text or email that asks
          “How did we do?” with a thumbs up and a thumbs down. Thumbs up goes to
          your Google review box. Thumbs down goes to a private form that only
          you see.
        </P>
        <P>
          It also comes in quieter forms. A “rate us out of five” page where
          only fours and fives get the Google link. A staff habit of only
          handing the review card to customers who seemed chuffed. A rule that
          the office never asks the customer who complained about the invoice.
          The mechanism differs. The effect is the same: the public only hears
          from the people you chose.
        </P>

        <H2 id="google-rules">What Google’s rules say</H2>
        <P>
          Google bans it in plain words. Its rules for reviews on Maps list, as
          fake and misleading behaviour, businesses that “selectively solicit
          positive reviews from customers”. Discouraging negative reviews is on
          the same list.
        </P>
        <P>
          Google has been tightening this, not relaxing it. In April 2026 it
          added rules against telling staff to collect a set number of reviews,
          or reviews that mention particular wording or staff names. The
          direction is clear: Google wants reviews that come from customers,
          unprompted in what they say and unfiltered in who gets asked.
        </P>
        <P>
          The tricky part is that a gated request often looks harmless from the
          outside, so you can run one for a year with nothing happening. Then a
          review clean-up sweeps through your area, or a competitor reports your
          profile, and the reviews you collected that way are the ones at risk.
        </P>

        <H2 id="the-law">What the law says in New Zealand and Australia</H2>
        <P>
          This isn’t only a Google rule. In both countries, consumer law bans
          giving people a misleading picture of your business, and a review
          profile you’ve curated can do exactly that.
        </P>
        <P>
          <Strong>New Zealand.</Strong> The Fair Trading Act covers it, and the
          Commerce Commission has published guidance for businesses on handling
          customer reviews. It has acted on this before: in 2019 holiday rental
          company Bachcare was fined $117,000 for not publishing reviews below
          3.5 out of 5. Filtering who can review and filtering which reviews
          show are close cousins, and both leave the public with a rosier
          picture than the truth.
        </P>
        <P>
          <Strong>Australia.</Strong> The ACCC has said for years that
          businesses should not selectively invite customers they expect to
          leave good reviews. In 2018 the Federal Court ordered Meriton to pay
          $3 million after it stopped review invitations going to guests it
          thought might complain.
        </P>
        <P>
          We’re not lawyers, and this isn’t legal advice. But you don’t need a
          lawyer to see the pattern. Regulators on both sides of the Tasman
          treat a hand-picked review profile as misleading the public.
        </P>

        <H2 id="rankings">How it hurts your local rankings</H2>
        <P>
          Reviews help decide where you show in the Google map results. The
          number of reviews, how recent they are and how steadily they arrive
          all count. We cover the full list in{" "}
          <a href="/blog/google-ranking-factors">
            the things that decide where you show up
          </a>
          . Gating puts every one of those at risk.
        </P>
        <P>
          <Strong>You can lose reviews you already earned.</Strong> If Google
          decides reviews broke its rules, it can remove them. Losing a chunk of
          your count overnight can drop you below competitors you were sitting
          comfortably above.
        </P>
        <P>
          <Strong>Your profile can stop taking new ones.</Strong> Google has
          been pausing new reviews on profiles where it sees a suspicious burst,
          usually for a few days. That is the exact moment your recency signal
          should be building, and it goes flat instead.
        </P>
        <P>
          <Strong>You get fewer reviews in total.</Strong> Every step between
          the customer and the review box loses people. A happy customer asked a
          screening question, then sent to a second page, then to Google, drops
          off more often than one who just gets the link. The shortcut that
          feels like it protects your rating usually slows your review count.
        </P>

        <H2 id="customers">Why customers can tell</H2>
        <P>
          A profile that is wall-to-wall five stars, all glowing, with no four
          anywhere, doesn’t read as a great business. It reads as a managed one.
          People have learnt to look for the odd four, and for how a business
          replies when something went wrong.
        </P>
        <P>
          That second part matters more than most owners think. A calm, decent
          reply to a three-star review is one of the most persuasive things on
          your profile, because it shows a stranger how you behave when a job
          goes sideways. Gating takes that chance away from you. We go into how
          to write those replies in{" "}
          <a href="/blog/replying-to-google-reviews">
            our guide to replying to Google reviews
          </a>
          .
        </P>

        <H2 id="check-your-setup">Check your own setup in five minutes</H2>
        <P>
          Do this today. Ask yourself, or whoever sends your review requests,
          these three questions:
        </P>
        <P>
          <Strong>1. Does our request ask how we did before it shows the Google
          link?</Strong> If yes, look at what happens to an unhappy answer. If
          they never see the Google link, that is gating.
        </P>
        <P>
          <Strong>2. Does our review tool have a “filter”, “funnel” or
          “protect your rating” setting?</Strong> Some tools still offer one.
          Turn it off, so every customer gets the same path.
        </P>
        <P>
          <Strong>3. Do we decide who to ask?</Strong> If asking depends on how
          the job felt, swap it for a rule: every finished job gets the same
          ask.
        </P>
        <P>
          If any answer worries you, fix the setup and keep going. You don’t
          need to delete reviews you already have or announce anything. Just
          make every request from here on the same for everyone.
        </P>

        <H2 id="the-safe-way">The safe way to get more reviews</H2>
        <P>
          The honest method is also the one that gets you the most reviews.
          Ask every customer, at the moment the job is done and they feel the
          relief, and send the link before you leave. One gentle nudge a few
          days later, then let it go.
        </P>
        <Pullquote>
          “Thanks again for today. Here’s the link if you’ve got a minute to
          leave us a review: [link]. Saying what the job was helps the next
          person find us.”
        </Pullquote>
        <P>
          Want private feedback too? Fine. Put it alongside the review link, not
          in front of it, so everyone sees both and chooses. Unhappy customers
          will often take the private route anyway, which gives you the chance
          to put things right, without you blocking anyone from Google.
        </P>
        <P>
          Spread the asks out. A steady trickle of reviews every week looks
          natural and keeps your recency fresh. A burst of thirty after a quiet
          year is the kind of spike that gets a profile paused. We set out the
          full routine, including the exact words, in{" "}
          <a href="/blog/how-to-get-google-reviews">
            how to get 50 Google reviews without being weird about it
          </a>
          .
        </P>
        <P>
          The odd three-star will turn up. That’s fine. A profile of fifty
          real reviews with a few fours and a well-handled three earns more
          trust, and holds its ranking for longer, than twenty perfect ones that
          could vanish in a clean-up.
        </P>

        <H2 id="quick-answers">Quick answers</H2>
        {FAQS.map((faq) => (
          <div key={faq.question}>
            <H3>{faq.question}</H3>
            <P>{faq.answer}</P>
          </div>
        ))}

        <Signoff>
          Open your last review request today and check it sends everyone to
          the same link. If you’d like a second pair of eyes on it,{" "}
          <a href="/contact">get your free Presence Report</a>.
        </Signoff>
      </BlogPost>
    </>
  );
}

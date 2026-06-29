import type { Metadata } from "next";

import { article, breadcrumbList, faqPage } from "@/lib/schema";

import {
  BlogPost,
  H2,
  H3,
  P,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "How Much Would You Pay to Get One New Customer? “Dunno” Is Costing You.";
const DESCRIPTION =
  "The one number that turns marketing from a guess into a decision. Work out your ceiling, and every choice about ads, leads, and growth gets easier.";
const URL = "/blog/what-youd-pay-for-a-customer";

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
    datePublished: "2026-07-21",
  }),
  faqPage([
    {
      question: "How much should I pay to get one new customer?",
      answer:
        "Work out what a customer is worth to you over the whole time they stay with you, in profit, not revenue. Then decide how much of that you’ll spend to win one, usually around a quarter to a third of the lifetime profit. That figure is your ceiling. Anything that wins customers for less, you do more of. Anything that costs more, you don’t.",
    },
    {
      question: "What is a customer actually worth to my business?",
      answer:
        "Not the price of one job. A customer is rarely just one job, so add up what a typical customer spends with you over the whole relationship and take your profit on that. A $130 physio session can be worth $600 to $700 in profit once you count repeat visits and the mate they refer.",
    },
    {
      question: "What is customer lifetime value?",
      answer:
        "Customer lifetime value is the total profit a typical customer brings you across the whole time they stay with you, including repeat work and referrals, not just the first job. Knowing it lets you set a sensible ceiling on what you’ll spend to win a new customer.",
    },
  ]),
];

export default function Post() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="6 min read"
        lede="There’s one number that changes the way you run your whole business. Most owners don’t have it. The ones who do make better decisions, sleep better, and waste a lot less money."
        ctaTitle="Want to work out your ceiling number?"
        ctaBody="30 minutes, no pitch. We’ll come prepared with a look at what a customer is worth to you and the most you should ever pay to win one."
      >
        <P>It’s the answer to a simple question.</P>
        <P>How much are you willing to pay to win one new customer?</P>
        <P>
          Not what you’re paying now. What you’re willing to pay. On purpose.
          As a decision.
        </P>
        <P>
          When we ask this, we get the bewildered look. People stare at us like
          we’ve asked something rude. “How would I know that?” Fair enough.
          Nobody ever taught it. So let’s teach it now, because once you’ve got
          this number, everything else gets easier.
        </P>

        <H2>Why you need a ceiling</H2>
        <P>Picture two builders.</P>
        <P>
          The first one has no idea what a customer is worth to him. So when
          someone offers him more leads, or a new ad setup, or a spot in some
          directory, he’s flying blind. He says yes on a gut feel, or no out of
          fear. Either way it’s a guess.
        </P>
        <P>
          The second builder knows that, all up, a new customer is worth about
          $1,000 in profit to him over time. So he’s worked out he’s happy to
          spend up to $250 to win one. That’s his ceiling.
        </P>
        <P>Now watch what happens when someone pitches him.</P>
        <P>“We can get you customers for $180 each.”</P>
        <P>
          The first builder has no idea if that’s good or terrible. The second
          builder says yes on the spot, because $180 is well under his $250
          ceiling and he’ll make money on every single one.
        </P>
        <P>“We can get you customers for $400 each.”</P>
        <P>
          The first builder might jump at it. The second builder says no
          thanks, because $400 is above his ceiling and he’d lose money on
          every one.
        </P>
        <P>
          Same two offers. One man’s guessing. The other’s deciding. The
          ceiling is the difference.
        </P>

        <H2>How to work out your number</H2>
        <P>
          It’s two steps, and you can do it on the back of an invoice.
        </P>

        <H3>Step one. What’s a customer actually worth to you?</H3>
        <P>
          Not the price of one job. The profit, over the whole time they stay
          with you.
        </P>
        <P>
          This is the part people miss. A customer is rarely just one job. The
          physio doesn’t see a patient once. They see them eight times, and the
          patient tells their mate, and comes back next year when their back
          goes again. The builder does the deck this year and the kitchen in
          two years. The cleaner books in once and stays for three years.
        </P>
        <P>
          So add it up. What does a typical customer spend with you over the
          whole relationship, and what’s your profit on that?
        </P>
        <P>
          Say a physio session is $130. The patient comes for six sessions, and
          refers one mate who does the same. That’s roughly twelve sessions of
          value tied to winning that one patient. Even after the room, the time
          and the costs, the profit across all that might be $600 or $700.
        </P>
        <P>
          That’s what a customer is worth. Not $130. Closer to $700. Massive
          difference.
        </P>

        <H3>Step two. Decide how much of that you’ll spend to win them.</H3>
        <P>
          You don’t spend the whole lot, or you make nothing. You spend a slice
          and keep the rest.
        </P>
        <P>
          A common, sensible slice is somewhere around a quarter to a third of
          the lifetime profit. So if a customer’s worth $700 in profit, you
          might happily spend up to $175 to $230 winning them.
        </P>
        <P>That’s your ceiling. Write it down.</P>
        <P>
          Now you’ve got a rule. Anything that wins customers for less than
          that, you do more of. Anything that costs more than that, you don’t.
        </P>

        <H2>What the ceiling unlocks</H2>
        <P>Once you’ve got that number, the fog clears.</P>
        <P>
          You can look at your Google Ads and know, in one glance, whether
          they’re under the ceiling or over it. No more wondering.
        </P>
        <P>
          You can field every “we’ll get you leads” pitch with a straight face,
          because you know your own maths and theirs has to beat it.
        </P>
        <P>
          You can spend with confidence instead of fear. Most owners
          under-spend on the stuff that actually works, because spending money
          to get customers feels scary when you can’t see the return. Once you
          can see it, you stop being scared of the good spending and start
          cutting the bad.
        </P>
        <P>
          And you can grow on purpose. Growth stops being a gamble and becomes
          a tap you can turn, because you know that every customer under your
          ceiling makes you money.
        </P>

        <H2>The cost of “dunno”</H2>
        <P>
          Every month you go without this number, you’re making marketing
          decisions by feel.
        </P>
        <P>
          Sometimes you’ll get lucky. Often you won’t. You’ll keep ads running
          that lose you money because the report looked nice. You’ll turn down
          good opportunities because they felt expensive, when they were
          actually a bargain. You’ll under-invest in the foundations that bring
          customers in for next to nothing, because you never sat down and
          worked out what a customer’s truly worth.
        </P>
        <P>
          “Dunno” isn’t free. It’s one of the most expensive answers in your
          whole business.
        </P>
        <P>
          So here’s the homework, and it’s an afternoon, not a degree.
        </P>
        <P>
          Work out what a customer is worth to you over their whole life with
          you, profit, not revenue.
        </P>
        <P>Take a slice of that, a quarter to a third.</P>
        <P>That’s the most you should ever pay to win one.</P>
        <P>
          Write it on the wall if you have to. Next time someone asks how much
          you’d pay for a new customer, you’ll have a number. And the
          bewildered look will be on the other side of the table.
        </P>
        <P>
          At Latetwenties we help local service businesses across New Zealand
          get found online and chosen by the right customers. Often the
          cheapest customers you’ll ever win are the ones who find you and
          choose you without an ad in sight. Getting those foundations right is
          where we start.
        </P>
      </BlogPost>
    </>
  );
}

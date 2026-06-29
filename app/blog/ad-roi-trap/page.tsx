import type { Metadata } from "next";

import { article, breadcrumbList, faqPage } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "That Great ROI on Your Ads? You’d Probably Make More Without Them.";
const DESCRIPTION =
  "The report says your ads are crushing it. The bank account disagrees. Here’s the gap between a good-looking ROI number and money you actually keep.";
const URL = "/blog/ad-roi-trap";

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
    datePublished: "2026-07-07",
  }),
  faqPage([
    {
      question: "Why does a high return on ad spend not show up in my bank account?",
      answer:
        "Most ad reports measure revenue, the money that came in the top, not profit. A 5x return on $2,000 of ad spend can mean $10,000 of work, but once you take out the cost of doing that work and the ad spend itself, you might keep only a few hundred dollars. Revenue passes through your hands on the way to suppliers, labour, fuel and GST. Profit is what is left.",
    },
    {
      question: "How do I tell if my Google Ads are actually working?",
      answer:
        "Use two numbers. First, what did you keep in real profit from the work the ads brought in. Second, what did the ads cost you, including your time. If the first number is comfortably bigger than the second, the ads are earning their keep. If they are close or the wrong way round, you are paying to be busy.",
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
        lede="Someone runs your Google Ads. Maybe it’s an agency. Maybe it’s you, late at night, after the kids are down."
        ctaTitle="Been told your ads are working, but the bank account hasn’t noticed?"
        ctaBody="30 minutes, no pitch. We’ll come prepared with a look at what you’re actually keeping from your ad spend, and whether the foundations underneath are doing their job."
      >
        <P>
          And every month you get told a number that sounds great.
        </P>
        <P>
          “Your ads made a 5x return.” Or “every dollar in is bringing four
          dollars back.” It sounds like winning. It feels like winning. You
          keep paying, because why would you turn off the thing that’s printing
          money?
        </P>
        <P>Here’s the uncomfortable bit.</P>
        <P>
          For a lot of local businesses we look at, that great-sounding number
          is hiding the truth. And when you peel it back, you find something
          nobody wants to say out loud.
        </P>
        <P>
          They’d be making more money if they switched the ads off entirely.
        </P>

        <H2>The number that fools everyone</H2>
        <P>
          The number you usually get told is built on revenue. The money that
          came in the top.
        </P>
        <P>
          Ads brought in $10,000 of work this month, you spent $2,000 on the
          ads, so that’s a 5x return. Sounds unbeatable.
        </P>
        <P>
          But revenue isn’t yours. Revenue is the money that passes through
          your hands on the way to other people.
        </P>
        <P>
          The materials supplier gets a cut. The labour gets a cut. The fuel,
          the tools, the insurance, the GST. By the time it all clears out,
          what’s actually left, the profit, is a much smaller number.
        </P>
        <P>
          And the ad report never mentions that smaller number. It can’t. It
          doesn’t know your costs. It only knows what came in.
        </P>
        <P>
          So the report tells a story about revenue, and you make decisions
          about your life and your business based on a number that was never
          really yours to begin with.
        </P>

        <H2>Let’s peel it back</H2>
        <P>
          Same example. $10,000 of work came in from the ads. $2,000 spent on
          the ads. Looks like a 5x return.
        </P>
        <P>Now let’s do the real maths.</P>
        <P>
          That $10,000 of work cost you money to actually do. Say your jobs run
          at a 25% profit margin once everything’s paid, which is generous for
          a lot of trades. That means out of $10,000 of work, you keep $2,500.
        </P>
        <P>
          Out of that $2,500 you keep, you’ve still got to take out the $2,000
          you spent on ads.
        </P>
        <P>$2,500 minus $2,000.</P>
        <P>You’re left with $500.</P>
        <P>
          So the “5x return” that sounded incredible is actually $500 of real
          money in your pocket, for a month of extra jobs, extra stress, extra
          driving, extra late nights, and a chunk of your weekends.
        </P>
        <P>
          And here’s the kicker. That $500 doesn’t account for your time
          running it all. Once you price your own hours in, plenty of these
          setups go past break-even and start quietly costing you money to stay
          busy.
        </P>
        <P>
          You’d have made more by doing fewer jobs and going home earlier.
        </P>

        <H2>How does this happen to sensible people?</H2>
        <P>It’s not stupidity. It’s the way the number gets reported.</P>
        <P>
          Everyone in the marketing world talks in revenue because revenue is
          big and impressive and it makes the marketing look good. Nobody
          volunteers the profit version, because the profit version makes the
          marketing look ordinary, and ordinary doesn’t keep you on the
          retainer.
        </P>
        <P>
          So you get shown the flattering number, on repeat, until you believe
          the ads are essential.
        </P>
        <P>
          Meanwhile the actual question, “am I keeping more money because of
          this, yes or no,” never gets asked. Because to answer it, someone has
          to know your real costs. And the person running your ads almost never
          does.
        </P>

        <H2>We’re not anti-ads</H2>
        <P>
          Let’s be clear. Ads can be brilliant. For the right business, with
          the right margins, at the right time, paid advertising is a proper
          growth lever and we’ll happily tell you when it is.
        </P>
        <P>
          The point isn’t “ads bad.” The point is that you can’t tell whether
          yours are working until you measure them in profit, not revenue.
        </P>
        <P>Here’s the test. Two simple numbers.</P>
        <P>
          What did you keep, in real profit, from the work the ads brought in?
        </P>
        <P>What did the ads cost you, including your time?</P>
        <P>
          If the first number is comfortably bigger than the second, your ads
          are earning their keep. Keep going, maybe spend more.
        </P>
        <P>
          If they’re close, or the wrong way round, you’re paying to be busy.
          And busy is not the same as better off.
        </P>

        <H2>Foundations first, ads second</H2>
        <P>
          Here’s the part most agencies won’t tell you, because there’s less
          money in it for them.
        </P>
        <P>
          A lot of local businesses don’t need to be spending on ads at all
          yet.
        </P>
        <P>
          If your Google Business Profile is sorted, your listings are
          consistent, your reviews are flowing, and your website actually turns
          visitors into calls, you can win a steady stream of customers without
          paying for every single click. That’s people finding you when they
          search, and choosing you, for free.
        </P>
        <P>
          Ads layered on top of strong foundations can be powerful. Ads
          propping up weak foundations are just an expensive way to hide the
          problem.
        </P>
        <P>
          So before you celebrate the next 5x report, do the boring maths.
        </P>
        <P>Work out what you actually kept.</P>
        <P>
          You might find the ads are doing great. Good on you, keep at it.
        </P>
        <P>
          Or you might find the most profitable thing you could do this month
          is turn them off and fix what’s underneath instead.
        </P>
        <P>
          At Latetwenties we help local service businesses across New Zealand
          get found online and chosen by the right customers, by getting the
          foundations right first. If you’ve been told your ads are working but
          the bank account hasn’t noticed, that’s usually worth a proper look.
        </P>
      </BlogPost>
    </>
  );
}

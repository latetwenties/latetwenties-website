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

const TITLE = "What is local SEO? A plain answer for trade businesses";
const DESCRIPTION =
  "Local SEO is the work that gets your business shown when someone nearby searches for what you do. What it covers, the three places you can show up, how long it takes, and whether you need it.";
const URL = "/blog/what-is-local-seo";

const TOC = [
  { id: "what-it-is", label: "What local SEO is, in one paragraph" },
  { id: "three-places", label: "The three places you can show up" },
  { id: "the-work", label: "What the work actually is" },
  { id: "what-it-isnt", label: "What local SEO isn’t" },
  { id: "how-long", label: "How long it takes" },
  { id: "do-you-need-it", label: "Do you need it?" },
  { id: "quick-answers", label: "Quick answers" },
];

const FAQS = [
  {
    question: "Is local SEO different from normal SEO?",
    answer:
      "Yes. Normal SEO is about ranking a website for a topic anywhere. Local SEO is about being shown to people searching near you, which brings in your Google Business Profile, your reviews and your listings as well as your website, and it is judged street by street rather than nationally.",
  },
  {
    question: "Can I do local SEO without a website?",
    answer:
      "Partly. A complete Google Business Profile with steady reviews can put you in the map results on its own. But the website carries a lot of the weight for AI answers and for the organic results under the map, so a business with no site is only competing in one of the three places customers look.",
  },
  {
    question: "Does local SEO work if I don’t have a shopfront?",
    answer:
      "Yes. Most trades are service-area businesses: you go to the customer. Google lets you hide your home address on your Business Profile and list the areas you cover instead. You still rank best closest to where Google places you, so the work is about widening the circle you can win.",
  },
  {
    question: "Is local SEO worth it for a small trade business?",
    answer:
      "Usually, if your customers search before they call. Put the monthly cost next to what one extra job is worth to you. For a builder or concreter, the margin on a single job can cover several months of the work. For a business that is fully booked on referrals, it may not be worth it yet.",
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
    datePublished: "2026-10-09",
  }),
  faqPage(FAQS),
];

export default function Post() {
  assertPostLive("what-is-local-seo");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="8 min read"
        lede="Local SEO is the work that decides whether your business shows up when someone nearby searches for what you do. That’s the whole idea. Everything after this is detail, and most of the detail is less mysterious than it’s been made to sound."
        toc={TOC}
        keyStat={{
          label: "The map shows",
          value: "3 names",
          caption: "before anyone has to scroll. Be one of them.",
        }}
        railCtaLine="Not sure where you show up?"
        ctaTitle="Want to know where you actually show up?"
        ctaBody="Tell us your business name. We’ll search for you the way a customer in your area would, on Google, the map and in AI answers, and record you a short video with what we find. Some of it you can fix yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          Someone in your area types “builder near me” or “plumber
          Takapuna” into their phone. Google decides which handful of
          businesses to show them. Local SEO is everything you do to make
          sure yours is one of them, and that when they see you, they ring
          you rather than the next name down.
        </P>

        <H2 id="what-it-is">What local SEO is, in one paragraph</H2>
        <P>
          <Strong>
            Local SEO (local search engine optimisation) is the ongoing work
            of getting a business shown to nearby people who are searching
            for its services, across Google’s map results, the normal search
            results, and now AI answers.
          </Strong>{" "}
          It covers four things: your Google Business Profile, your reviews,
          your listings on other websites, and your own website. Get those
          four right and keep them current, and you’ll be found by the
          people most likely to hire you: the ones close by, with a job in
          mind, searching right now.
        </P>
        <P>
          The difference from ordinary SEO is the word “nearby.” A national
          online shop wants to rank everywhere. A roofer in Hamilton only
          cares about the people who can actually book a roofer in Hamilton.
          Google knows that, so it judges local searches differently, and
          where the searcher is standing matters as much as anything you do.
        </P>

        <H2 id="three-places">The three places you can show up</H2>
        <P>
          When someone searches for a local service, there are now three
          separate places your business can appear. They’re decided
          differently, which is why a business can be strong in one and
          missing from the other two.
        </P>
        <H3>1. The map results</H3>
        <P>
          The map with three businesses listed under it, usually near the
          top of the page. This is the prime real estate for a trade,
          because it comes with your star rating, your phone number and a
          button to ring you. It runs almost entirely off your Google
          Business Profile, your reviews, and how close you are to the
          person searching.
        </P>
        <H3>2. The normal results</H3>
        <P>
          The list of websites underneath. This is where your own website
          competes, and it’s decided by what your pages say, how clearly
          they say it, and how much the rest of the internet backs you up.
          A page about exactly the service someone searched for, in exactly
          the area they’re in, beats a homepage that lists everything.
        </P>
        <H3>3. The AI answer</H3>
        <P>
          Google’s AI overview at the top of the page, or ChatGPT when
          someone asks it who to hire. These don’t show a list. They name a
          few businesses in a sentence each. They build that sentence from
          your website, your reviews and what other sites say about you, so
          the work that earns the first two places mostly earns this one
          too.{" "}
          <a href="/blog/get-recommended-by-ai">
            How to get named by AI
          </a>{" "}
          goes through the extra layer.
        </P>

        <H2 id="the-work">What the work actually is</H2>
        <P>
          Strip out the jargon and local SEO is four piles of work. None of
          them is clever. All of them need doing properly, and then keeping
          up.
        </P>
        <P>
          <Strong>Your Google Business Profile.</Strong> The right primary
          category, every service listed, your areas, your hours, a proper
          description and real photos of real jobs. This is the biggest
          single lever for the map results, and{" "}
          <a href="/blog/google-business-profile">
            the full profile setup
          </a>{" "}
          is about fifteen minutes of focused work.
        </P>
        <P>
          <Strong>Reviews.</Strong> A steady flow of them, with words that
          describe the job and the suburb, and a reply to each one. Recent
          reviews count for more than old ones, so a system beats a
          one-off push.{" "}
          <a href="/blog/how-to-get-google-reviews">
            Here’s how to ask without it being awkward
          </a>
          .
        </P>
        <P>
          <Strong>Listings.</Strong> Your name, address and phone number,
          identical everywhere they appear: directories, Facebook, Bing,
          Apple Maps. Google cross-checks them, and mismatches cost you
          trust.{" "}
          <a href="/blog/fix-your-listings">
            Where the wrong ones usually hide
          </a>
          .
        </P>
        <P>
          <Strong>Your website.</Strong> A page for each main service,
          written in the words customers actually search (which are rarely
          the words the trade uses), with the towns you work in named in
          plain text. Fast on a phone, easy to ring from.{" "}
          <a href="/blog/what-customers-type-into-google">
            Finding the words your customers use
          </a>{" "}
          is where most sites go wrong first.
        </P>
        <P>
          If you want the ranking side of this in more depth,{" "}
          <a href="/blog/google-ranking-factors">
            the six things that decide where you show up
          </a>{" "}
          breaks each signal down.
        </P>

        <H2 id="what-it-isnt">What local SEO isn’t</H2>
        <P>
          <Strong>It isn’t ranking for your own name.</Strong> If someone
          already knows your business name, you’ll almost always come up.
          That proves nothing. Local SEO is about the people who don’t know
          you yet and search for the job instead.
        </P>
        <P>
          <Strong>It isn’t a one-off.</Strong> A profile set up perfectly
          and then left alone slides backwards, because competitors keep
          collecting reviews and posting work. That slow slide is behind a
          lot of the{" "}
          <a href="/blog/why-your-ranking-dropped">
            ranking drops that feel sudden
          </a>
          .
        </P>
        <P>
          <Strong>It isn’t stuffing suburb names into a page.</Strong>{" "}
          Twenty near-identical pages with the suburb swapped out used to
          work. Google now treats them as low quality, and they can drag
          the whole site down.
        </P>
        <P>
          <Strong>It isn’t a guaranteed position.</Strong> Nobody controls
          Google’s results, so anyone promising you the top spot is
          promising something they can’t deliver. What an honest agency can
          stand behind is the outcome you actually care about: more
          enquiries.
        </P>

        <H2 id="how-long">How long does local SEO take?</H2>
        <P>
          <Strong>
            The first results can come in days, and the steady gains take
            months.
          </Strong>{" "}
          Fixing a broken profile or launching a site that finally says what
          you do and where can bring an enquiry almost straight away. Moving
          up against established competitors in a busy area is slower,
          because you’re catching up on years of their reviews and content.
        </P>
        <P>
          Three of our own clients show the range. A Bairnsdale concreter
          with no website at all had{" "}
          <a href="/work/rbm-concrete">
            a stranger ask for a house slab quote four days after launch
          </a>
          , before his Google profile was even verified. A Christchurch
          bookkeeper’s re-aimed site brought{" "}
          <a href="/work/kd-bookworks">
            a Google enquiry that became a client within seven days
          </a>
          . And a Mangawhai builder went from not showing on the map to{" "}
          <a href="/work/boaz-developments">
            #2 across the neighbouring towns in under two months
          </a>
          .
        </P>
        <P>
          Those are good outcomes in smaller markets, and we’d rather tell
          you that than let you assume they’re typical everywhere. A
          plumber in central Auckland starts further back and climbs slower.
          The honest expectation: early signs in the first month, real
          movement over three to six.
        </P>

        <H2 id="do-you-need-it">Do you need it?</H2>
        <P>
          A two-minute test. On your phone, open a private browser window
          (so Google doesn’t personalise the results to you) and search for
          your main service plus your suburb. Then search it again as “near
          me.” Then ask ChatGPT who it would recommend for that job in your
          town.
        </P>
        <P>
          If you’re in the map three and named in the AI answer, you’re in
          good shape and the job is keeping it that way. If you’re not, the
          customers doing those searches are ringing someone else. Worth
          remembering that{" "}
          <a href="/blog/ranking-in-nearby-suburbs">
            your results change a few suburbs over
          </a>
          , so check from where your customers are, not just from home.
        </P>
        <P>
          And the honest exception: if you’re booked solid for months on
          referrals and don’t want more work, you don’t need local SEO yet.
          You’ll want it the week the referrals slow down, and it takes a
          while to build, which is the argument for starting before then.
        </P>

        <H2 id="quick-answers">Quick answers</H2>
        {FAQS.map((faq) => (
          <div key={faq.question}>
            <H3>{faq.question}</H3>
            <P>{faq.answer}</P>
          </div>
        ))}

        <Signoff>
          Local SEO isn’t magic and it isn’t a scam. It’s four piles of
          ordinary work, done properly and kept up. At Latetwenties that’s{" "}
          <a href="/how-it-works">what we do for local businesses</a>, and
          if you’d like to see where you stand first,{" "}
          <a href="/contact">ask us for a free Presence Report</a>. We’ll
          tell you straight what’s worth fixing, including the bits you can
          do yourself.
        </Signoff>
      </BlogPost>
    </>
  );
}

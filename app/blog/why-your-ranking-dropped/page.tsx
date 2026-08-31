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

const TITLE = "Your Google ranking dropped. Read this before you panic.";
const DESCRIPTION =
  "Most ranking drops are not penalties and half of them are not even real. How to tell a bad data day from a genuine slide, the usual causes, and what to check in what order.";
const URL = "/blog/why-your-ranking-dropped";

const TOC = [
  { id: "is-it-real", label: "First: is the drop even real?" },
  { id: "what-actually-happened", label: "The usual suspects" },
  { id: "the-checklist", label: "The checklist, in order" },
  { id: "what-not-to-do", label: "What not to do" },
  { id: "the-long-game", label: "The long game" },
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
    datePublished: "2026-10-02",
  }),
];

export default function Post() {
  assertPostLive("why-your-ranking-dropped");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="7 min read"
        lede="You searched your best keyword this morning and you’ve slipped. Last week you were third, today you’re seventh, and somewhere between the kettle and the ute you’ve already drafted the angry email to whoever built your website."
        toc={TOC}
        keyStat={{
          label: "Before you react",
          value: "2 weeks",
          caption: "watch a drop this long before treating it as real.",
        }}
        railCtaLine="Ranking slipped and not sure why?"
        ctaTitle="Want a straight answer on why you dropped?"
        ctaBody="Tell us your business name. We’ll look at where you actually rank across your area, what changed, and what’s worth doing about it, and record you a short video with what we find. Some of it you can fix yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          Hold that email. Most ranking drops aren’t what they look like,
          and the panicked reaction usually does more damage than the drop.
          Here’s how to work out what actually happened, in the order that
          saves you the most time.
        </P>

        <H2 id="is-it-real">First: is the drop even real?</H2>
        <P>
          Before diagnosing the disease, make sure there’s a patient. Three
          ways a “drop” turns out to be nothing:
        </P>
        <P>
          <Strong>You’re checking from your own phone.</Strong> Google
          personalises results. Your history, your account and above all
          your location change what you see. Local rankings shift street by
          street: the plumber who’s third from your house can be eighth
          from the other side of town, and{" "}
          <a href="/blog/ranking-in-nearby-suburbs">
            that’s normal, not a fault
          </a>
          . Check in a private browser window, and remember that one
          check from one spot is one pixel of the picture.
        </P>
        <P>
          <Strong>Results genuinely wobble.</Strong> Positions move around
          day to day without anything being wrong, and Google runs constant
          small updates and tests. A position that bounces between third
          and sixth across a fortnight isn’t a drop. It’s the weather.
        </P>
        <P>
          <Strong>The page changed shape.</Strong> Sometimes you didn’t
          move, but the results page did: an extra ad on top, a bigger map,
          an AI answer box. You can hold the same organic position and
          still be further down the physical screen. That matters, but
          it’s a different problem with different fixes.
        </P>
        <P>
          The rule: note the drop, check again from a private window over
          the next two weeks, and only treat it as real if it holds. If
          your calls and enquiries haven’t moved, it probably wasn’t real,
          because customers are the measurement that counts.
        </P>

        <H2 id="what-actually-happened">The usual suspects</H2>
        <P>When a drop is real and sustained, it’s nearly always one of these:</P>
        <P>
          <Strong>Somebody got better, and it wasn’t you.</Strong> The most
          common cause by far. A competitor rebuilt their site, gathered
          forty reviews, or started posting weekly. Rankings are a queue,
          and you can move backwards by standing still.{" "}
          <a href="/blog/competitor-outranking-you">
            Here’s exactly what they did
          </a>
          , and the same list read in reverse is your way back.
        </P>
        <P>
          <Strong>Something on your site broke.</Strong> A rebuild that
          changed page addresses without redirects. A renewal that lapsed.
          A page accidentally hidden from Google during an update. Sites
          break quietly all the time, and the ranking fades days or weeks
          later, which is why nobody connects the two.
        </P>
        <P>
          <Strong>Your profile took a hit.</Strong> A suspended or
          unverified Google Business Profile, a category someone changed, a
          stale flood of no-new-reviews. For local searches your profile
          carries as much weight as your website, and it can sink you on
          its own.
        </P>
        <P>
          <Strong>Google moved the goalposts.</Strong> A few times a year
          Google ships an update big enough to reshuffle local results.
          When that’s the cause, the shift is broad, not just you, and the
          fix is the boring one: keep doing the fundamentals well and let
          it settle.
        </P>

        <H2 id="the-checklist">The checklist, in order</H2>
        <P>
          <Strong>1. Check your Google Business Profile is alive.</Strong>{" "}
          Log in and look for warnings: suspended, pending verification,
          edits you didn’t make. Google sometimes applies suggested changes
          to categories and details, so confirm they’re still yours.
          Two minutes, and it catches the worst cases first.
        </P>
        <P>
          <Strong>2. Load your site like a stranger.</Strong> Private
          window, on your phone. Does it load, fast, on mobile data? Do
          the main pages exist at the addresses they’ve always had? If you
          changed anything on the site in the month before the drop, start
          your suspicion there.
        </P>
        <P>
          <Strong>3. Look at Search Console.</Strong> It’s free, it’s
          Google telling you directly, and most business owners have never
          opened it. If clicks and impressions fell off a cliff on a
          specific date, you have a diagnosis window. If Search Console
          shows errors on your key pages, you have the cause.
        </P>
        <P>
          <Strong>4. Study who’s above you now.</Strong> Search your main
          terms from a private window and read the businesses that took
          your spot. More reviews? Fresher photos? A page dedicated to the
          exact service, where you have a paragraph? They’re showing you
          the standard the position now costs.
        </P>
        <P>
          <Strong>5. Audit your own recent activity, honestly.</Strong>{" "}
          When did a review last come in? When did you last post a photo
          or update a page? Profiles and sites that go quiet drift
          backwards slowly, and the drift only becomes visible when
          someone busier arrives. The fix is the steady rhythm from{" "}
          <a href="/blog/google-ranking-factors">the six ranking
          factors</a>
          , not a burst of one-off activity.
        </P>

        <H2 id="what-not-to-do">What not to do</H2>
        <P>
          <Strong>Don’t rebuild the website in a panic.</Strong> A rushed
          rebuild is how a wobble becomes a genuine collapse, because
          page addresses change and history gets thrown away.
        </P>
        <P>
          <Strong>Don’t buy the phone-call fix.</Strong> A drop is exactly
          when the “we noticed your rankings fell” callers sound most
          convincing. Anyone who promises a guaranteed position is telling
          you something false for money;{" "}
          <a href="/blog/questions-to-ask-a-marketing-agency">
            here are the questions that sort the real ones from the
            cowboys
          </a>
          .
        </P>
        <P>
          <Strong>Don’t chase the algorithm.</Strong> Whatever trick a
          forum swears reversed an update will be stale by the time you’ve
          implemented it. The businesses that survive every update are the
          ones that never optimised for a loophole in the first place.
        </P>

        <H2 id="the-long-game">The long game</H2>
        <P>
          A real, sustained drop is almost always a message about
          maintenance: reviews slowed, content aged, a competitor worked
          harder, something broke unnoticed. Which means the recovery is
          rarely dramatic either. It’s the same fundamentals, done
          steadily, until the queue re-forms in your favour.
        </P>
        <P>
          And the businesses that never have to write the panicked email
          are the ones where the steady work never stopped.
        </P>
        <Signoff>
          Diagnosis before treatment, every time. At Latetwenties we get
          local service businesses found online and chosen by the right
          customers, and part of that is watching the rankings so you
          don’t have to. If the checklist points at a quiet profile,{" "}
          <a href="/blog/google-business-profile">
            the 15-minute profile task
          </a>{" "}
          is the place to start.
        </Signoff>
      </BlogPost>
    </>
  );
}

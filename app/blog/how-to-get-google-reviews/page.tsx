import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
  Pullquote,
  Signoff,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE = "How to get 50 Google reviews without being weird about it";
const DESCRIPTION =
  "Most local businesses have a handful of reviews and no system for getting more. Here’s how to ask without cringing, what to say, and what to do about the bad ones.";
const URL = "/blog/how-to-get-google-reviews";

const TOC = [
  { id: "reviews-matter-twice", label: "Why reviews matter twice" },
  { id: "three-numbers", label: "The three numbers" },
  { id: "why-youre-not-asking", label: "Why you’re not asking" },
  { id: "when-to-ask", label: "When to ask" },
  { id: "what-to-say", label: "What to say" },
  { id: "make-it-a-system", label: "Make it a system" },
  { id: "the-bad-review", label: "The bad review" },
  { id: "what-fifty-gets-you", label: "What fifty gets you" },
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
    datePublished: "2026-07-26",
  }),
];

export default function Post() {
  assertPostLive("how-to-get-google-reviews");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="8 min read"
        lede="Every local business owner we meet knows they need more reviews. Almost none of them ask for any."
        toc={TOC}
        keyStat={{
          label: "The trick",
          value: "1 a week",
          caption: "is 50 reviews in a year.",
        }}
        railCtaLine="Stuck on a handful of reviews?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          The reason is always the same, and it’s always said in the same
          slightly embarrassed voice: “I don’t want to be that guy.”
        </P>
        <P>
          Fair enough. Nobody wants to be the bloke who hands you an iPad before
          you’ve got your wallet away. But here’s what’s actually happening while
          you’re being polite about it.
        </P>
        <P>
          Your competitor up the road has 94 reviews. You’ve got seven, and the
          most recent one is from 2021. A customer looking at both of you doesn’t
          think “these two are equally good, one just asks more.” They think
          you’re smaller, newer, quieter, or possibly closed. They pick the other
          one, and neither of you ever knows it happened.
        </P>
        <P>
          Being humble about reviews costs you money. Let’s fix it without turning
          you into someone you’d cross the road to avoid.
        </P>

        <H2 id="reviews-matter-twice">Why reviews matter twice</H2>
        <P>
          Most people know reviews affect whether customers choose you. Fewer
          realise they affect whether customers see you at all.
        </P>
        <P>
          Google decides who shows up in the local map results using a handful of
          signals, and review quantity, review quality and review recency are
          three of them. We’ve written about{" "}
          <a href="/blog/google-ranking-factors">
            the six things that decide where you show up
          </a>
          , and reviews sit near the top of that list. So reviews are doing two
          jobs at once: getting you into the shortlist, then winning you the pick
          once you’re in it.
        </P>
        <P>
          That double effect is why a business with 90 reviews pulls away from a
          business with nine so fast. It’s not twice the advantage. It compounds.
        </P>

        <H2 id="three-numbers">The three numbers that matter</H2>
        <P>
          Not all review profiles are equal. Three things get looked at, by both
          Google and humans:
        </P>
        <P>
          <Strong>How many.</Strong> There’s no magic number, but there is a local
          one: roughly what your best competitor has. Go and look. That’s your
          target. If the top-ranking plumber in your area has 60, then 60 is the
          bar, and 80 wins.
        </P>
        <P>
          <Strong>How recent.</Strong> This one gets ignored and it’s brutal.
          Forty reviews that stop in 2022 look worse to a customer than twelve
          that run through to last month. A stale profile reads as a business
          that’s slowed down, changed hands, or stopped caring. Recency signals
          you’re alive and busy. Aim to never let a month pass empty.
        </P>
        <P>
          <Strong>How specific.</Strong> “Great service, highly recommend” is
          worth almost nothing. “Rang Tuesday about a leaking hot water cylinder,
          Dan was here Wednesday morning, sorted in an hour, cleaned up after
          himself” is worth a fortune, because it names the problem the next
          customer has, and it contains the words the next customer is typing into
          Google. Specific reviews sell, and they help you get found. We’ll come
          back to how you get those.
        </P>

        <H2 id="why-youre-not-asking">The actual reason you’re not asking</H2>
        <P>
          Let’s name it properly, because until you do, no script will help.
        </P>
        <P>
          You think asking for a review is asking for a favour. So it feels like
          taking something from someone who has already paid you.
        </P>
        <P>Flip it. A review is not a favour. It’s the last step of the job.</P>
        <P>
          That customer had a problem. They were nervous about who to call,
          because picking a stranger for a job that matters is nerve-wracking, and
          they had no way of knowing if you’d be any good. Someone else’s review
          is what got them to ring you. Their review is what gets the next person
          to ring you, the next nervous person in the same position they were in
          three weeks ago.
        </P>
        <P>
          You are not asking them to do you a favour. You are asking them to do
          for a stranger exactly what a stranger did for them.
        </P>
        <P>
          Once you actually believe that, the ask stops being weird. Tone follows
          belief. That’s why scripts alone never fix this.
        </P>

        <H2 id="when-to-ask">When to ask</H2>
        <P>
          Timing beats wording. Ask at the wrong moment and the best script in the
          world dies.
        </P>
        <P>
          The right moment is <Strong>the moment of relief</Strong>. Not when you
          send the invoice. Not a fortnight later. The moment their problem stops
          being a problem and they can feel it.
        </P>
        <P>
          For a plumber, that’s standing in the kitchen while the water’s running
          properly again. For a physio, it’s the appointment where they say
          “actually it’s heaps better.” For a bookkeeper, it’s when the GST return
          is filed and they exhale. For a groomer, it’s the handover, when the dog
          looks incredible and the owner does the voice.
        </P>
        <P>
          You know this moment. It’s the one where they say “oh, that’s so much
          better.” That sentence is your cue. It is the single highest-conversion
          second in your entire customer relationship, and most businesses let it
          pass in silence.
        </P>

        <H2 id="what-to-say">What to say, word for word</H2>
        <P>Say it out loud, at the moment of relief. Then follow with a text.</P>
        <P>
          <Strong>In person:</Strong>
        </P>
        <Pullquote>
          “Glad that’s sorted. Can I ask a favour? Most of our work comes from
          people finding us on Google, and reviews are pretty much the whole
          thing. If you’ve got two minutes sometime today, it’d genuinely help.
          I’ll text you the link so you don’t have to go looking.”
        </Pullquote>
        <P>
          Then, and this is the bit people miss,{" "}
          <Strong>send the link before you drive away.</Strong> Not that night.
          Not the next day. While you’re still in their driveway and they still
          feel grateful. Every hour you wait, the feeling fades and the odds
          halve.
        </P>
        <P>
          <Strong>The text:</Strong>
        </P>
        <Pullquote>
          “Thanks again for today, Sarah. Here’s that review link: [link]. If you
          get a sec, mentioning what the job actually was helps more than you’d
          think. It’s how the next person finds us. Cheers, Dave”
        </Pullquote>
        <P>
          That last line is doing quiet, serious work. “Mentioning what the job
          actually was” is how you convert generic five-stars into specific ones
          full of the words your next customer is searching. You are, very gently,
          telling them what to write. Nobody minds. Most people are relieved. The
          hardest part of leaving a review is not knowing what to say.
        </P>
        <P>
          <Strong>If they don’t do it,</Strong> one nudge, three or four days
          later, and then you let it go forever:
        </P>
        <Pullquote>
          “No stress if you’re flat out, just bumping that review link up your
          messages in case it got buried. [link]”
        </Pullquote>
        <P>
          One nudge. Never two. Two is where you become that guy.
        </P>

        <H2 id="make-it-a-system">Making it a system instead of a mood</H2>
        <P>
          Right now, asking for reviews probably depends on whether you remember
          and whether you feel like it. That’s why you’ve got seven. Systems beat
          moods.
        </P>
        <P>
          <Strong>Get the link, shorten it, save it.</Strong> Your Google Business
          Profile has a “get more reviews” link that goes straight to the review
          box. Get it. Shorten it. Save it as a text shortcut on your phone so
          it’s three taps, not a hunt.
        </P>
        <P>
          <Strong>Attach the ask to something that already happens.</Strong> The
          invoice. The job-complete text. The follow-up appointment reminder.
          Anything you already do without thinking. An ask bolted to an existing
          habit survives a busy fortnight. A standalone good intention doesn’t.
        </P>
        <P>
          <Strong>Count them monthly.</Strong> Write the number on the same bit of
          paper where you write everything else. If the number didn’t move, that’s
          the month you know about it, not six months later when you notice a
          competitor has pulled away.
        </P>
        <P>
          <Strong>Ask everyone, not just the delighted.</Strong> A quiet four-star
          from a perfectly satisfied customer is fine. Profiles that are 100%
          five-star with breathless wording actually read as suspicious. A few
          fours make the fives believable.
        </P>

        <H2 id="the-bad-review">The bad review</H2>
        <P>
          You’ll get one. Everyone does. Here’s the thing nobody tells you: a bad
          review handled well converts better than no bad review at all, because
          it’s the only chance a stranger gets to see how you behave when
          something goes wrong.
        </P>
        <P>Rules:</P>
        <P>
          <Strong>Reply within a day.</Strong> Slow replies look like you’re
          hiding.
        </P>
        <P>
          <Strong>Don’t argue the facts, even when you’re right.</Strong> You’re
          not writing to the reviewer. You’re writing to the two hundred people
          who’ll read it afterwards. Being right and sounding defensive loses you
          more work than the original complaint.
        </P>
        <P>
          <Strong>Short, human, take it offline.</Strong>
        </P>
        <Pullquote>
          “Hi Mark, sorry, that’s not how we like to leave a job. I’d genuinely
          like to sort it. I’ll give you a ring today, or you can get me on
          09-XXX-XXXX. Dave”
        </Pullquote>
        <P>
          That’s it. No paragraph explaining the delay. No “as we discussed.”
          Every reader of that reply thinks: if something goes wrong with this
          bloke, he’ll front up. That’s worth more than the star.
        </P>
        <P>
          <Strong>And don’t buy reviews.</Strong> Not from a service, not from
          your mates, not from your mum. Google is good at spotting them, the
          penalty is your visibility, and one fake glowing review in a profile of
          real ones is usually obvious to a careful reader anyway.
        </P>

        <H2 id="what-fifty-gets-you">What fifty reviews actually gets you</H2>
        <P>
          We worked with a building company in Mangawhai who{" "}
          <a href="/work/boaz-developments">
            went from not showing up at all to ranking second across the
            neighbouring towns
          </a>
          . Reviews weren’t the only thing we changed. The website, the profile,
          the listings all mattered. But the reviews were the part that kept
          working after we’d finished the build, because every new one told Google
          the business was still active and told customers it was still good.
        </P>
        <P>
          That’s the real prize. A website is a thing you build once. A review
          profile is a thing that compounds every month you feed it, and it
          belongs entirely to you.
        </P>
        <P>
          Fifty reviews is roughly one a week for a year. That’s the whole trick.
          Not a campaign. Not a push. One ask, at the moment of relief, with the
          link sent before you drive away.
        </P>
        <Signoff>
          Start with the customer you finished with yesterday. Text them now.
        </Signoff>
      </BlogPost>
    </>
  );
}

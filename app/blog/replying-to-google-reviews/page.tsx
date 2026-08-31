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

const TITLE = "How to reply to Google reviews, including the unfair one";
const DESCRIPTION =
  "Your replies are read by every future customer who checks you out, not just the person who left the review. What to write back to the good ones, the quiet ones, and the one that made your blood boil.";
const URL = "/blog/replying-to-google-reviews";

const TOC = [
  { id: "who-replies-are-for", label: "Who your replies are actually for" },
  { id: "the-good-ones", label: "Replying to the good ones" },
  { id: "the-quiet-ones", label: "The three-star mystery" },
  { id: "the-bad-one", label: "The bad one" },
  { id: "the-fake-one", label: "The one that isn’t even a customer" },
  { id: "the-habit", label: "Making it a habit" },
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
    datePublished: "2026-09-11",
  }),
];

export default function Post() {
  assertPostLive("replying-to-google-reviews");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="7 min read"
        lede="A stranger is on your Google profile right now, deciding between you and two other businesses. They’re not just reading your reviews. They’re reading what you wrote back."
        toc={TOC}
        keyStat={{
          label: "Reply window",
          value: "48 hrs",
          caption: "reply to every review within two days.",
        }}
        railCtaLine="Not sure how your profile reads?"
        ctaTitle="Want to know how your profile looks to a stranger?"
        ctaBody="Tell us your business name. We’ll look at your business the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find. Some of it you can fix yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          Most business owners treat review replies as admin. Something to
          clear when there’s a spare minute, or skip entirely. That’s a
          mistake, and it’s an expensive one, because the reply is the only
          part of a review you control.
        </P>

        <H2 id="who-replies-are-for">Who your replies are actually for</H2>
        <P>
          Here’s the reframe that makes the whole job easier:{" "}
          <Strong>
            you are not writing to the person who left the review.
          </Strong>{" "}
          They’ve already had their experience. You’re writing to the hundred
          people who will read that exchange over the next year while deciding
          whether to call you.
        </P>
        <P>
          Those readers are asking one question: what is this business like to
          deal with? A page of reviews with no replies says the owner isn’t
          paying attention. A page where every review gets a short, human
          answer says someone is home, and that they’ll probably answer the
          phone too. It’s the same signal that{" "}
          <a href="/blog/five-minute-rule">answering enquiries fast</a> sends:
          this business is switched on.
        </P>
        <P>
          Google also notices. Replies are activity on your profile, and an
          active profile is part of{" "}
          <a href="/blog/google-ranking-factors">
            what decides where you show up
          </a>
          . Not the biggest part, but a free part, and free parts are the ones
          to collect.
        </P>

        <H2 id="the-good-ones">Replying to the good ones</H2>
        <P>
          The five-star review deserves more than “Thanks!”, and less than a
          paragraph. Three moves, one or two sentences total:
        </P>
        <P>
          <Strong>Use their name, and name the job.</Strong> “Thanks Sarah,
          glad the new deck is getting used already.” Naming the job does two
          things: it proves the review is real to everyone reading, and it
          quietly puts the words customers search for on your profile. A
          reply that mentions the deck, the switchboard or the bathroom reno
          is more useful to you than one that says “your project”.
        </P>
        <P>
          <Strong>Don’t copy and paste.</Strong> Ten identical “Thanks for
          the kind words!” replies in a row read worse than no replies. A
          stranger scrolling your profile can spot a template in seconds, and
          it undoes the exact impression you were trying to make.
        </P>
        <P>
          <Strong>Skip the sales pitch.</Strong> No “don’t forget we also do
          driveways!”. The reader knows what you do. Gratitude, specifics,
          done.
        </P>

        <H2 id="the-quiet-ones">The three-star mystery</H2>
        <P>
          The hardest review to answer is the three or four stars with no
          text, or a vague “it was fine”. Something didn’t land, and you
          don’t know what.
        </P>
        <P>
          Reply anyway, and invite the rest of the story: “Thanks for the
          review. Sounds like we left room to do better, and I’d genuinely
          like to know where. Give me a call anytime.” You may never hear
          back, and it doesn’t matter. The reader sees a business that wants
          to know when it falls short. That’s rarer than a five-star rating,
          and it’s worth more.
        </P>

        <H2 id="the-bad-one">The bad one</H2>
        <P>
          At some point you’ll get one that stings. Maybe it’s exaggerated.
          Maybe it’s missing the part where they changed the scope twice and
          paid late. Your fingers will hover over a reply that sets the
          record straight, point by point.
        </P>
        <P>
          <Strong>Don’t send that reply.</Strong> Here’s the rule: the angry
          reply always reads worse than the review it answers. Every future
          customer who watches you fight a customer in public concludes the
          same thing, this owner is hard work. You can win the argument and
          lose the next twenty jobs.
        </P>
        <P>Instead, four beats, kept short:</P>
        <P>
          <Strong>1. Wait until you’re calm.</Strong> Overnight if you need
          to. Never reply angry, and never reply twice.
        </P>
        <P>
          <Strong>2. Acknowledge without grovelling.</Strong> “Sorry to hear
          this wasn’t the experience you expected.” You’re not admitting
          fault. You’re showing you take feedback like an adult.
        </P>
        <P>
          <Strong>3. Correct facts briefly, without heat.</Strong> If
          something material is wrong, one calm sentence: “Our records show
          the follow-up visit was completed on the Tuesday as arranged.” No
          adjectives, no sarcasm.
        </P>
        <P>
          <Strong>4. Take it offline.</Strong> “Happy to talk this through
          properly, call me on the number on our profile.” The reader sees a
          business that fronts up. That’s the whole win available here, so
          take it and stop typing.
        </P>
        <P>
          And keep perspective: a single bad review sitting among thirty good
          ones barely moves your rating, and a considered reply underneath it
          can genuinely earn you customers. A profile with nothing but
          five-star raves can even read as too clean. The bad review handled
          well is proof the rest are real.
        </P>

        <H2 id="the-fake-one">The one that isn’t even a customer</H2>
        <P>
          Occasionally you’ll get a review from someone you’ve never worked
          for. Wrong business, a competitor being grubby, or a scammer. Two
          steps: report it to Google through your profile (it can take a
          while, and removal isn’t guaranteed), and reply for the readers in
          the meantime: “We have no record of working with you, and we think
          this review may be intended for another business. If we’re wrong,
          please call us.” Calm, factual, done. Readers are better at
          spotting fakes than you’d think, and your reply helps them do it.
        </P>

        <H2 id="the-habit">Making it a habit</H2>
        <P>
          Reply to every review, and reply within about 48 hours. The rhythm
          matters more than the polish. Put it in the same weekly slot where
          you’re <a href="/blog/how-to-get-google-reviews">asking for
          reviews</a>, because the asking and the answering are one system:
          reviews come in steadily, replies go out steadily, and your profile
          reads like a business that’s awake.
        </P>
        <P>
          Ten minutes a week. That’s the entire cost of being the business
          whose profile answers back.
        </P>
        <Signoff>
          Review replies are the free half of your reputation, and most of
          your competitors are leaving them blank. At Latetwenties we get
          local service businesses found online and chosen by the right
          customers. If your review count is the problem rather than the
          replies, start with{" "}
          <a href="/blog/how-to-get-google-reviews">
            how to get 50 Google reviews without being weird about it
          </a>
          .
        </Signoff>
      </BlogPost>
    </>
  );
}

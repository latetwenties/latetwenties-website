import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  OL,
  P,
  Pullquote,
  Signoff,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "The five-minute rule: why the business that answers first wins the job";
const DESCRIPTION =
  "The business that replies first wins the job about half the time, regardless of price, reviews or reputation. Here’s the five-minute rule and how to actually run it.";
const URL = "/blog/five-minute-rule";

const TOC = [
  { id: "the-number", label: "The number that should annoy you" },
  { id: "why-not-answering", label: "Why you’re not answering" },
  { id: "the-rule", label: "The five-minute rule" },
  { id: "holding-response", label: "An honest holding response" },
  { id: "how-to-run-it", label: "How to actually run this" },
  { id: "not-about-speed", label: "The part that isn’t about speed" },
  { id: "this-week", label: "What to do this week" },
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
    datePublished: "2026-07-21",
  }),
];

export default function Post() {
  assertPostLive("five-minute-rule");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="7 min read"
        lede="A woman in Papakura needed a physio on a Tuesday morning. Her back had gone on the Sunday. She did what everyone does: typed “physio near me” into her phone, and rang the first three that came up."
        toc={TOC}
        keyStat={{
          label: "First to reply",
          value: "~50%",
          caption: "of the time, wins the job. Regardless of price or reviews.",
        }}
        railCtaLine="Missing enquiries you paid for?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>The first didn’t pick up. Voicemail. She didn’t leave one.</P>
        <P>
          The second picked up on the fourth ring. The woman on the other end
          asked what happened, said “that sounds miserable,” and offered her
          2:40 that afternoon.
        </P>
        <P>
          The third rang her back at 5:15pm. By then she’d been, been treated,
          and booked her follow-up.
        </P>
        <P>
          Clinic number three has better reviews than clinic number two. Better
          website. Been in the area eleven years longer. None of it mattered.
          The job went to whoever was standing there when she needed someone.
        </P>
        <P>
          That’s the whole article, really. But you’re going to want to argue
          with it, so let’s keep going.
        </P>

        <H2 id="the-number">The number that should annoy you</H2>
        <P>
          Study after study on this says roughly the same thing: the business
          that responds first to an enquiry wins it somewhere between forty and
          sixty percent of the time. Not the cheapest. Not the best. The first.
        </P>
        <P>
          And the window is narrower than anyone wants it to be. Reply inside
          five minutes and your odds of actually connecting with that person are
          many times better than replying inside thirty. After an hour, you’re
          mostly just leaving messages. After a day, you’re a name they don’t
          recognise on a screen.
        </P>
        <P>Here’s the part that should genuinely annoy you.</P>
        <P>
          You are already paying for those enquiries. If you’ve read{" "}
          <a href="/blog/what-a-customer-costs-you">
            what a customer actually costs you
          </a>
          , you’ll know the number is bigger than people think. The ads, the
          website, the listings, the Saturday mornings out quoting. You spend
          all of that to make the phone ring, and then the phone rings while
          you’re up a ladder, and the money walks up the road to someone who
          happened to be sitting down.
        </P>
        <P>
          You didn’t lose that job on price. You lost it on availability. And
          availability is free.
        </P>

        <H2 id="why-not-answering">Why you’re not answering</H2>
        <P>
          Nobody’s lazy here. The reasons are always the same three, and they’re
          all legitimate.
        </P>
        <P>
          <Strong>You’re doing the work.</Strong> You’re on a roof, under a
          sink, mid-treatment, elbow-deep in a dog. You physically cannot
          answer. Fair.
        </P>
        <P>
          <Strong>You don’t recognise the number.</Strong> So you let it go,
          planning to call back later, and later becomes tomorrow.
        </P>
        <P>
          <Strong>It came in after hours.</Strong> Half of all enquiries for
          local services land outside business hours, because that’s when normal
          people sit down and deal with their life. You saw it at 7am the next
          day. She’d already booked someone at 8:40 the night before.
        </P>
        <P>
          None of these are character flaws. They’re system problems. Which is
          good news, because systems are fixable and character isn’t.
        </P>

        <H2 id="the-rule">The five-minute rule</H2>
        <P>
          Here’s the rule, and it’s deliberately dumb so it survives a bad week:
        </P>
        <P>
          <Strong>
            Every enquiry gets a human response within five minutes, or an
            honest holding response within five minutes.
          </Strong>
        </P>
        <P>
          That’s it. Not a resolution. Not a quote. Not availability. A
          response. The job of the first five minutes is not to win the work.
          It’s to stop the search.
        </P>
        <P>
          Because that’s what’s actually happening. She hasn’t chosen you. She’s
          got three tabs open and she’s working down the list. Every minute you
          don’t reply is a minute she spends getting closer to someone else. A
          reply, even a two-line one, closes the other tabs.
        </P>

        <H2 id="holding-response">What an honest holding response looks like</H2>
        <P>
          Not automated-sounding. Not “your enquiry is important to us.”
          Something a person would write.
        </P>
        <Pullquote>
          Hi Sarah, got your message about the deck. I’m on site till about 3
          today, but I’ve read it and I can come have a look Thursday morning or
          Friday arvo. Which suits? Dave
        </Pullquote>
        <P>Thirty seconds to type. One thumb. Standing on a roof.</P>
        <P>
          Look at what it did. It confirmed a human read it. It named her. It
          named her actual problem, so she knows it’s not a bot. It was honest
          about why he can’t talk properly right now, which builds more trust
          than pretending he’s free. And it ended with a question that has two
          answers, both of which are yes.
        </P>
        <P>
          That message wins jobs against businesses with twice the reviews.
        </P>

        <H2 id="how-to-run-it">How to actually run this</H2>
        <P>
          <Strong>Turn on missed-call text-back.</Strong> If your phone or your
          booking system can do it, this is the single highest-value switch you
          will flip this year. Somebody rings, you don’t answer, they get a text
          within seconds: “Sorry, missed you, I’m on a job. Tell me what you
          need and I’ll come back to you shortly.” Most people reply to it.
          You’ve converted a missed call, which is worth nothing, into a text
          conversation, which is worth a lot. It works while you’re up the
          ladder. It works at 9pm.
        </P>
        <P>
          <Strong>Decide who is on the phone, and when.</Strong> If it’s you,
          it’s you, and you accept that you’ll answer between jobs. If you’ve got
          someone in the office, the enquiry line is their job and everything
          else waits. The failure mode is when it’s nobody’s job because you
          both assume the other has it.
        </P>
        <P>
          <Strong>Get your after-hours story straight.</Strong> You don’t have
          to be available at 9pm. You have to be responsive at 9pm. There’s a
          difference. An auto-reply that says “we’re closed, we’ll be in touch
          tomorrow morning” is worth having. It’s not as good as a person, but
          it’s dramatically better than silence, because it tells her someone’s
          alive and she can stop looking.
        </P>
        <P>
          <Strong>Make the enquiry easy to see.</Strong> A lot of missed
          enquiries aren’t missed at all. They’re sitting in the messages tab of
          a Google Business Profile nobody logs into, or a website contact form
          emailing an address you stopped checking in 2023. Go and check every
          single place a customer can contact you, right now, and confirm it
          lands somewhere you’ll actually see. We find dead form addresses on
          about a third of the sites we look at. Your{" "}
          <a href="/blog/google-business-profile">Google Business Profile</a> is
          the usual culprit.
        </P>
        <P>
          <Strong>Reply to the ones you don’t want, too.</Strong> “Sorry, that’s
          outside what we do, try Mike at ____, he’s good.” Costs you ninety
          seconds. Buys you a referral source, a reputation, and quite often a
          review from someone who never even hired you.
        </P>

        <H2 id="not-about-speed">The version of this that isn’t about speed</H2>
        <P>
          There’s a deeper thing underneath the five-minute rule, and it’s worth
          naming.
        </P>
        <P>
          When someone rings a local business, they are slightly braced for
          disappointment. They expect the voicemail. They expect the
          not-ringing-back. They’ve been trained by a lot of experiences that
          left them hanging.
        </P>
        <P>
          So when you reply in four minutes, you’re not just being fast. You’re
          being unusual. You are, in that moment, visibly different, before
          you’ve said a word about your work, your price or your experience.
          You’ve proven something about how it’ll feel to deal with you for the
          next six weeks.
        </P>
        <P>
          That’s why speed converts. It isn’t logistics. It’s the first piece of
          evidence they get about what kind of operator you are.
        </P>
        <P>
          One of our clients had no website at all when we started. We built
          one, got the foundations right, and{" "}
          <a href="/work/rbm-concrete">
            a stranger rang about a house slab four days later
          </a>
          . He answered. That’s the whole story. Getting found is half of it.
          Being there when they arrive is the other half, and nobody can do that
          part for you.
        </P>

        <H2 id="this-week">What to do this week</H2>
        <P>Three things. None take longer than an hour.</P>
        <OL>
          <li>
            Ring your own business from a number it doesn’t recognise. Don’t
            answer it. See what happens. Nothing? That’s your first fix.
          </li>
          <li>
            Fill in your own website contact form with a fake name. See where it
            lands, and how long it takes to get to you.
          </li>
          <li>
            Pick a number. Five minutes during work hours, an hour after. Write
            it on the wall. Tell whoever else touches the phone.
          </li>
        </OL>
        <Signoff>
          The businesses beating you locally are not always better at the work.
          Sometimes they just pick up. At Latetwenties we get local service
          businesses found online and chosen by the right customers. Being there
          when the enquiry lands is the half nobody can do for you.
        </Signoff>
      </BlogPost>
    </>
  );
}

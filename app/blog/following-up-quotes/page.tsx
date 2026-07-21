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

const TITLE =
  "The jobs you didn’t lose. You just never followed them up.";
const DESCRIPTION =
  "Most local businesses quote, send it, and wait. The work you think you lost is usually just sitting there unclaimed. Here’s the follow-up system and the exact words to send.";
const URL = "/blog/following-up-quotes";

const TOC = [
  { id: "silence-not-a-no", label: "Silence is not a no" },
  { id: "cheapest-work", label: "Why this is the cheapest work you’ll get" },
  { id: "the-system", label: "The system: three touches, then let go" },
  { id: "same-channel", label: "Do it in the same channel they used" },
  { id: "keep-the-list", label: "Where to keep the list" },
  { id: "beyond-quotes", label: "The version that isn’t about quotes" },
  { id: "start-ugliest", label: "Start with the ugliest one" },
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
    datePublished: "2026-08-15",
  }),
];

export default function Post() {
  assertPostLive("following-up-quotes");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="6 min read"
        lede="Go and look at the quotes you sent in the last three months."
        toc={TOC}
        keyStat={{
          label: "The system",
          value: "3 touches",
          caption: "then close the file, properly.",
        }}
        railCtaLine="Missing enquiries you paid for?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          Count the ones that came back with a yes. Count the ones that came back
          with a no.
        </P>
        <P>Now count the third pile. The ones that never came back at all.</P>
        <P>
          For most local businesses, that third pile is the biggest of the
          three, and it’s treated as if it doesn’t exist. Those aren’t losses.
          Nobody said no. They’re just sitting there, unclaimed, quietly costing
          you the most profitable work available to you, because you’ve already
          done the expensive part.
        </P>

        <H2 id="silence-not-a-no">Silence is not a no</H2>
        <P>
          This is the belief that has to go first, or none of the tactics below
          will get used.
        </P>
        <P>
          When a quote goes quiet, the owner’s internal story is always the same:
          they went with someone cheaper. And because that story is a bit
          humiliating, chasing it up feels like begging for a job you’ve already
          lost.
        </P>
        <P>
          Here’s what’s actually happening on the other end, most of the time.
        </P>
        <P>
          Her partner hadn’t seen the quote yet. The renovation got pushed
          because her mother got sick. She read it on her phone in the
          supermarket carpark, meant to reply properly at home, and never did.
          She’s comparing three quotes and yours is in a different format so it’s
          hard to line up. She’s waiting for the insurance. She’s waiting for
          payday. She got busy, and a $9,000 decision is exactly the sort of
          thing that gets postponed by a busy fortnight.
        </P>
        <P>
          None of that is rejection. All of it is life. And every single one of
          those people would say yes to a polite nudge, because your quote is
          still sitting in their inbox and they still have the problem.
        </P>
        <P>
          The ones who genuinely picked someone cheaper? They’re in there too.
          But they’re the minority, and you’ve been treating the whole pile like
          they’re all that.
        </P>

        <H2 id="cheapest-work">Why this is the cheapest work you’ll ever get</H2>
        <P>Think about what it cost you to produce one quote.</P>
        <P>
          The ad spend or the website or the years of reputation that made them
          ring. The phone call. The drive out. The hour on site. The evening
          pricing it up. Everything we talked about in{" "}
          <a href="/blog/what-a-customer-costs-you">
            what a customer actually costs you
          </a>
          .
        </P>
        <P>All of that is spent. It’s gone whether they say yes or not.</P>
        <P>
          A follow-up text costs you thirty seconds and nothing else. It is,
          without exception, the highest return-per-minute activity available to
          a local service business. And most owners do zero of them, because
          they’re busy chasing new enquiries, which cost full price.
        </P>
        <P>You are stepping over money to go looking for money.</P>

        <H2 id="the-system">The system: three touches, then let it go</H2>
        <P>You don’t need software. You need a rule and a calendar.</P>
        <P>
          <Strong>Touch one, 48 hours after you send it.</Strong> Not to ask for
          a decision. To check it arrived and make sense.
        </P>
        <Pullquote>
          Hi Sarah, just checking that quote landed alright, the PDF’s been going
          to junk for a few people. Happy to walk you through any of it if
          something’s unclear. No rush. Dave
        </Pullquote>
        <P>
          This is deliberately not a chase. It’s service. It’s also completely
          honest, because quotes really do land in junk, and roughly one in ten
          of these will get “oh! I never got that.”
        </P>
        <P>
          <Strong>Touch two, one week later.</Strong> Now you’re allowed to ask a
          question, but make it a useful one.
        </P>
        <Pullquote>
          Hi Sarah, how are you getting on with the deck? If it’s a timing thing
          rather than a price thing, worth knowing I’m booking into September now,
          so I’d want to pencil you if you’re keen.
        </Pullquote>
        <P>
          Two things happening there. You’ve given her permission to say it’s
          about timing, which is easier for her to admit than money. And you’ve
          introduced a real, honest constraint, not a fake deadline, an actual
          booking calendar, which is what turns “sometime” into “now.”
        </P>
        <P>
          Never invent scarcity. If you’re not booked to September, don’t say you
          are. People can smell it and it’s the fastest way to lose someone who
          was going to say yes.
        </P>
        <P>
          <Strong>Touch three, three to four weeks later.</Strong> The
          permission-to-close-the-file message. This one converts far better than
          it has any right to.
        </P>
        <Pullquote>
          Hi Sarah, I’m tidying up my quotes from last month. Are you right to go
          ahead, or should I close this one off? Either’s completely fine, just
          don’t want to keep bothering you if you’ve sorted it.
        </Pullquote>
        <P>
          That message works because it makes silence uncomfortable in the
          gentlest possible way. It’s easy to ignore someone asking for your
          business. It’s oddly hard to ignore someone politely offering to go
          away. And “either’s completely fine” is what keeps it from being
          pressure.
        </P>
        <P>
          <Strong>Then stop.</Strong> Three touches and you close the file
          properly. Anything more and you become a nuisance, and being a nuisance
          costs you the referral as well as the job.
        </P>

        <H2 id="same-channel">Do it in the same channel they used</H2>
        <P>
          If they texted you, text back. If they emailed, email. If they rang,
          ring.
        </P>
        <P>
          People have a channel they actually check, and it’s usually the one
          they contacted you on. A beautiful follow-up email to someone who lives
          in text messages is a follow-up that never happened.
        </P>
        <P>
          And where you’ve got the choice, pick the text. Emails from businesses
          get filed. Texts get read within minutes. If that feels too familiar
          for a $40,000 job, remember that the entire renovation industry now
          runs on text messages, and formality has never once won anyone a
          contract.
        </P>

        <H2 id="keep-the-list">Where to keep the list</H2>
        <P>
          The system fails at the same place every time: you can’t remember who
          you sent what to, and when.
        </P>
        <P>
          You don’t need a CRM. Genuinely. You need one list where every quote
          goes in with a date, and a rule that you look at it every Friday
          afternoon for fifteen minutes.
        </P>
        <P>
          A notebook works. A spreadsheet works. The notes app works. What
          doesn’t work is your memory, because your memory is full of the job
          you’re currently on.
        </P>
        <P>
          Fifteen minutes, every Friday, for the rest of the business’s life.
          That’s the whole implementation.
        </P>

        <H2 id="beyond-quotes">The version of this that isn’t about quotes</H2>
        <P>Widen it. It isn’t just quotes.</P>
        <P>
          The physio client who came twice and stopped. The bookkeeper’s prospect
          who asked about the annual package in March. The customer who said “ring
          me in spring.” The person who booked a consult and didn’t show.
        </P>
        <P>
          All of these are the same pile: people who raised their hand, didn’t say
          no, and got forgotten. Same rule applies. Same three touches.
        </P>
        <P>
          And it pairs directly with{" "}
          <a href="/blog/five-minute-rule">
            answering fast in the first place
          </a>
          . Speed gets you into the conversation. Follow-up gets you the job. Most
          businesses are mediocre at both, which is why doing either one properly
          is a genuine advantage.
        </P>

        <H2 id="start-ugliest">Start with the ugliest one</H2>
        <P>
          Right now, think of the quote you’re most sure you lost. The one that
          went quiet weeks ago and stung a bit.
        </P>
        <P>Send them touch three. Word for word from above.</P>
        <Signoff>
          You’ll be surprised roughly a third of the time. And the two-thirds who
          say “sorry, went with someone else” cost you nothing to find out, and
          now you know, instead of wondering.
        </Signoff>
      </BlogPost>
    </>
  );
}

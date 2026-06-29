import type { Metadata } from "next";

import { article, breadcrumbList, faqPage } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
  Signoff,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE =
  "You Started a Business to Do Good Work and Make Good Money. Right Now It Just Feels Like Good Work.";
const DESCRIPTION =
  "Booked solid, working harder than ever, and the money still doesn’t reflect it. You’re not imagining it. Busy and profitable are two different things.";
const URL = "/blog/good-work-good-money";

const TOC = [
  { id: "more-work", label: "More work doesn’t mean more money" },
  { id: "the-2000-job", label: "The job that wasn’t really $2,000" },
  { id: "revenue-lies", label: "Revenue is the number that lies" },
  { id: "what-to-do", label: "So what do you do about it" },
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
    datePublished: "2026-07-14",
  }),
  faqPage([
    {
      question: "Why am I busy but not making more money?",
      answer:
        "Busy and profitable are two different things. Every extra job carries a cost inside it: more materials, more fuel, more hours, more wear on the gear, more admin. If the profit baked into each job is thin, doing more of them just means more work for the same money. You can work yourself into the ground and go backwards.",
    },
    {
      question: "What is the difference between revenue and profit for a small business?",
      answer:
        "Revenue is the money coming in the top. It is a story about how busy you are, not how well off you are. Profit is what’s left for you after everyone and everything else has been paid. You can have big revenue and tiny profit, which is why a calendar can be full while the bank account stays flat.",
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
        lede="Cast your mind back to why you started this thing."
        toc={TOC}
        keyStat={{
          label: "The real number",
          value: "$300",
          caption: "actual profit in a “$2,000” job, once everything’s paid.",
        }}
        railCtaLine="Want to know what your jobs really leave?"
        ctaTitle="Want to know what your most common job actually leaves you?"
        ctaBody="30 minutes, no pitch. We’ll come prepared with a look at where the money goes and which jobs are worth chasing."
      >
        <P>
          Two reasons, usually. You wanted to do good work, the proper kind,
          done your way, without someone hovering over your shoulder. And you
          wanted to make good money doing it. Build something. Look after the
          family. Have a bit left over.
        </P>
        <P>
          Here’s what we hear, again and again, from owners a few years in.
        </P>
        <P>
          The first part came true. You are doing good work. You’re busy,
          you’re booked, you’ve got more on than you can handle some weeks.
        </P>
        <P>
          The second part didn’t follow. The money never scaled the way the
          work did. You’re working twice as hard as you were three years ago,
          and you’re not twice as well off. Not even close.
        </P>
        <P>If that’s you, we want to say something plainly.</P>
        <P>
          You’re not imagining it. And it’s not because you’re not good enough.
          It’s because busy and profitable are two completely different things,
          and almost nobody tells you that when you start.
        </P>

        <H2 id="more-work">More work doesn’t mean more money</H2>
        <P>
          This is the trap, and it’s a sneaky one, because it feels like the
          opposite should be true.
        </P>
        <P>
          You think: I just need more jobs. More customers. Fill the calendar
          and the money will sort itself out.
        </P>
        <P>
          So you fill the calendar. And the money doesn’t sort itself out.
        </P>
        <P>
          Because every extra job has a cost buried inside it. More materials
          to buy. More fuel. More hours, yours or someone else’s. More wear on
          the gear. More admin, more invoicing, more chasing.
        </P>
        <P>
          If the profit baked into each job is thin, then doing more of them
          just means more work for the same money, or worse, more work for
          less, because now you’re rushing, making mistakes, and saying yes to
          jobs you should’ve turned down.
        </P>
        <P>
          You can absolutely work yourself into the ground and go backwards.
          We’ve watched it happen to people who are excellent at what they do.
        </P>

        <H2 id="the-2000-job">The job that wasn’t really $2,000</H2>
        <P>Let’s make it real.</P>
        <P>
          A builder tells us proudly that his average job is two grand. Good
          money, he reckons.
        </P>
        <P>
          So we ask the next question, the one nobody asks him.
        </P>
        <P>“Right, two grand. What’s left when it’s done?”</P>
        <P>
          And we go through it. Materials. The labourer’s hours. His own hours,
          which he’s never once put a price on. Fuel out to the site and back,
          twice, three times. The quote he did to win it. The tools. A slice of
          the insurance and the phone and the ute.
        </P>
        <P>
          By the time we’re done, the $2,000 job has maybe $300 of actual
          profit in it.
        </P>
        <P>
          He’d never seen it laid out like that. On paper it’s a $2,000 job. In
          reality it’s a $300 job that takes a week and a lot of his life.
        </P>
        <P>
          And now the busy-but-broke thing makes complete sense. He’s not
          failing. He’s doing loads of $300 jobs and calling them $2,000 jobs,
          and wondering why the calendar’s full but the account isn’t.
        </P>

        <H2 id="revenue-lies">Revenue is the number that lies to you</H2>
        <P>Here’s the heart of it.</P>
        <P>
          Revenue, the money coming in the top, is the number everyone talks
          about. It’s the number you tell people at the barbecue. It feels like
          the score.
        </P>
        <P>
          But revenue is a story about how busy you are. It is not a story
          about how well off you are.
        </P>
        <P>
          Profit is the well-off number. Profit is what’s left for you after
          everyone and everything else has been paid. Profit is what turns into
          a holiday, a renovation, a day off, breathing room.
        </P>
        <P>
          You can have big revenue and tiny profit. Loads of local businesses
          do. Big-looking, quietly struggling. Busy as anything, owner hasn’t
          had a proper break in two years.
        </P>
        <P>
          The goal was never to be busy. Busy was just supposed to be the way
          you got to the money. Somewhere along the line the busy became the
          whole thing, and the money got left behind.
        </P>

        <H2 id="what-to-do">So what do you actually do about it</H2>
        <P>
          You stop chasing more and start looking at what you’ve got.
        </P>
        <P>
          Pick your most common type of job. Sit down, maybe with whoever does
          your books, and work out honestly what’s left when it’s truly done
          and dusted. Your time included. Be brutal about it.
        </P>
        <P>That one number changes everything.</P>
        <P>
          Because once you know it, you can stop doing the jobs that barely pay
          and chase the ones that do. You can put your prices where they need
          to be without the guilt, because now you can see what you’ve been
          quietly giving away. You can stop measuring your business by how full
          the week is and start measuring it by what you keep.
        </P>
        <P>
          And then, when you go looking for more customers, you go looking for
          the right ones. The jobs worth winning. Not just bodies to keep the
          calendar busy.
        </P>
        <P>
          That’s a different business. Same hands, same skill, same good work.
          But the money finally starts to follow the effort.
        </P>
        <P>
          You set out to do good work and make good money. The good work was
          never the problem. Let’s go sort out the other half.
        </P>
        <Signoff>
          At Latetwenties we help local service businesses across New Zealand
          get found online and chosen by the right customers. The right ones,
          not just any ones. Because filling the calendar was never really the
          goal.
        </Signoff>
      </BlogPost>
    </>
  );
}

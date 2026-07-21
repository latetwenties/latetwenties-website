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

const TITLE =
  "Seven questions to ask a marketing agency before you pay them a cent";
const DESCRIPTION =
  "Seven questions that separate a marketing agency worth paying from one that will take your money and send you a report. Ask them before you sign anything.";
const URL = "/blog/questions-to-ask-a-marketing-agency";

const TOC = [
  { id: "q1-what-changes", label: "What changes, and by when" },
  { id: "q2-if-it-doesnt-work", label: "What if it doesn’t work" },
  { id: "q3-who-does-the-work", label: "Who does the work" },
  { id: "q4-do-i-own-everything", label: "Do I own everything" },
  { id: "q5-someone-like-me", label: "Someone like me" },
  { id: "q6-what-you-need-from-me", label: "What you need from me" },
  { id: "q7-not-going-to-do", label: "What you won’t do" },
  { id: "the-one-you-ask-yourself", label: "The one you ask yourself" },
  { id: "use-these-on-us", label: "Use these on us" },
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
    datePublished: "2026-08-10",
  }),
];

export default function Post() {
  assertPostLive("questions-to-ask-a-marketing-agency");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="6 min read"
        lede="We’re a marketing agency writing about how to interrogate marketing agencies. You should factor that in."
        toc={TOC}
        keyStat={{
          label: "Before you pay",
          value: "7",
          caption: "questions that sort the field.",
        }}
        railCtaLine="Weighing up an agency?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          But we get a version of the same conversation constantly: someone’s
          been burned, paid six months of a retainer, and still can’t tie the
          spend to a single new job. They’re not stupid. They just didn’t know
          what to ask, because nobody had told them.
        </P>
        <P>So here are the seven. Ask us the same ones.</P>

        <H2 id="q1-what-changes">
          1. “What will change in my business, and by when?”
        </H2>
        <P>
          The answer you want is a number and a date. More enquiries, in this
          range, within this window.
        </P>
        <P>
          The answer you don’t want is a list of activities. “We’ll be posting
          three times a week, optimising your profile, and running a content
          strategy.” That’s a description of effort, not a promise of a result.
          You can be extremely busy on someone’s behalf and change nothing.
        </P>
        <P>
          Watch for the swerve to vanity metrics. Impressions, reach, followers,
          “brand awareness.” None of those pay a supplier. If someone leads with
          reach, ask them to translate it into enquiries. If they can’t, that’s
          the whole answer.
        </P>

        <H2 id="q2-if-it-doesnt-work">2. “What happens if it doesn’t work?”</H2>
        <P>
          Most agencies have no answer to this, because the honest answer is
          “nothing happens to us, you just paid.”
        </P>
        <P>
          There’s an asymmetry in this industry that people accept without
          noticing. You take all the risk. They take none. You pay in advance,
          and if the results don’t arrive, you’ve lost money and time and
          they’ve lost a client who was probably leaving anyway.
        </P>
        <P>
          You don’t necessarily need a written guarantee. But you need to see
          them think about it. Someone who says “if we’re not shifting your
          numbers by month three, we’d tell you and we’d stop charging you” is
          telling you something real about how they operate. Someone who looks
          uncomfortable is telling you something too.
        </P>
        <P>
          (We put ours in writing: more enquiries in 90 days than the 90 days
          before us, or we keep working free until you get them. That’s not a
          flex. It’s just the answer to this question, and you should demand one
          from everyone you talk to.)
        </P>

        <H2 id="q3-who-does-the-work">3. “Who actually does the work?”</H2>
        <P>
          You’ll meet a good salesperson. Ask who does the work after you sign.
        </P>
        <P>
          It’s a fair question and a good agency answers it plainly. What you’re
          testing for is the gap between the person who won you and the person
          who’s got you. Sometimes the work goes to a junior, sometimes offshore,
          sometimes to a subcontractor you’ll never meet. None of that is
          automatically bad. Not being told is.
        </P>
        <P>
          Follow-up:{" "}
          <Strong>“Who do I ring when something’s wrong?”</Strong> If the answer
          is a support desk and a ticket number, you’re a small account in a big
          system. Decide if you’re okay with that.
        </P>

        <H2 id="q4-do-i-own-everything">4. “Do I own everything?”</H2>
        <P>
          Website. Domain. Google Business Profile. Ad accounts. Content. Photos.
          Analytics data.
        </P>
        <P>
          Get it in writing that you own all of it and can take it with you.
        </P>
        <P>
          This is the one that quietly ruins people. We regularly meet businesses
          who want to move on and discover the ad account with three years of
          history was built inside the agency’s own account, or the domain is
          registered to a company they’ve never dealt with, or the website is on
          a proprietary platform that can’t be exported. They have to start from
          zero. Some of that is deliberate lock-in. Some is laziness. It costs
          you the same either way.
        </P>
        <P>
          Ask flat out: “If I left in twelve months, what do I walk away with?”
        </P>

        <H2 id="q5-someone-like-me">
          5. “What have you done for someone like me?”
        </H2>
        <P>
          Not a portfolio of logos. A specific business, roughly your size, in
          roughly your industry, with a before number and an after number.
        </P>
        <P>
          An agency that has genuinely moved the needle for a local service
          business will tell you the story immediately and in detail, because
          it’s the thing they’re proudest of. A strong answer names the business
          and the numbers straight away. If instead the reply stays up at
          process, methodology and approach in the abstract, that gap is your
          answer.
        </P>
        <P>
          Then ask the follow-up almost nobody asks:{" "}
          <Strong>“Can I ring them?”</Strong> Watch what happens next. That
          single question sorts the field faster than anything else on this list.
        </P>

        <H2 id="q6-what-you-need-from-me">6. “What do you need from me?”</H2>
        <P>
          This one’s a trap in the nicest way, and it reveals more than the
          others.
        </P>
        <P>
          An agency that says “nothing, we’ll handle it all” is either lying or
          about to produce generic work. Nobody can market your business well
          without your photos, your job details, your knowledge of what customers
          actually ask, and half an hour of your time now and then.
        </P>
        <P>
          The right answer is specific and slightly demanding. We need photos
          from your jobs. We need to know your five most profitable services. We
          need you to answer the phone. We need twenty minutes a month.
        </P>
        <P>
          That answer tells you they intend to do real work, and it tells you
          where it’ll fall over if you don’t hold up your end. It also lets you
          decide honestly whether you’ve got the capacity. Half the failed
          engagements we hear about failed because nobody said this bit out loud.
        </P>

        <H2 id="q7-not-going-to-do">7. “What are you not going to do?”</H2>
        <P>
          A good answer sounds like: we’re not going to run ads until your site
          converts, because you’d be paying to send people somewhere that doesn’t
          work. We’re not going to do TikTok, because your customers aren’t
          there. We don’t do rebrands.
        </P>
        <P>
          Anyone who does everything for everyone specialises in nothing. And an
          agency willing to talk you out of something is demonstrating the only
          thing that actually matters in this relationship, which is whether
          they’ll tell you the truth when the truth costs them money.
        </P>
        <P>
          We turn down ads work regularly, because{" "}
          <a href="/blog/google-ads-framework">
            running ads to a broken foundation
          </a>{" "}
          is the fastest way to spend money and learn nothing. That’s not
          restraint for its own sake. It’s just the order the work has to happen
          in.
        </P>

        <H2 id="the-one-you-ask-yourself">The one you ask yourself</H2>
        <P>
          Before any of the seven:{" "}
          <Strong>do you know what a customer is worth to you?</Strong>
        </P>
        <P>
          If you don’t, you cannot evaluate a single proposal you’re given,
          because you have no way of knowing whether $2,000 a month is expensive
          or a bargain. You’ll end up choosing on price, or on who you liked,
          which is how most of these decisions actually get made.
        </P>
        <P>
          We wrote about{" "}
          <a href="/blog/what-a-customer-costs-you">working out that number</a>.
          Do it before you take the meeting. It changes the meeting.
        </P>

        <H2 id="use-these-on-us">Use these on us</H2>
        <P>Ring us and ask all seven. If we fumble any of them, don’t hire us.</P>
        <Signoff>
          That’s not a line. It’s the point of the article. The bar in this
          industry is low enough that simply asking good questions puts you ahead
          of most business owners who’ve ever signed an agency contract. At
          Latetwenties we get local service businesses found online and chosen by
          the right customers, and we’d rather you asked us these before you sign
          than after.
        </Signoff>
      </BlogPost>
    </>
  );
}

import type { Metadata } from "next";

import { article, breadcrumbList, faqPage } from "@/lib/schema";

import {
  BlogPost,
  H2,
  P,
  UL,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE = "Do You Actually Know What a Customer Costs You?";
const DESCRIPTION =
  "Most local business owners can’t say what they pay to win one new customer. Not because they’re not smart. Because nobody’s ever added it up. Here’s how to.";
const URL = "/blog/what-a-customer-costs-you";

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
    datePublished: "2026-06-30",
  }),
  faqPage([
    {
      question: "How do I work out what a new customer costs me?",
      answer:
        "Add up everything you spent on getting work over a month: Google Ads, your website and listings, plus your fuel and the time you spent quoting jobs you didn’t win. Divide that total by the number of new customers you actually won that month. The result is what a customer costs you.",
    },
    {
      question: "Why does the cost of winning a customer matter?",
      answer:
        "On its own the number tells you nothing. It only means something next to what a customer is worth to you, which is what you keep after the job is done and paid for. Without both numbers, every marketing decision you make is a guess.",
    },
  ]),
];

export default function Post() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="5 min read"
        lede="We sit across from a lot of business owners. Good ones. People who turn up, do proper work, and have built something real out of a van, a phone, and a lot of long days."
        ctaTitle="Want us to work out your number with you?"
        ctaBody="30 minutes, no pitch. We’ll come prepared with a look at where you sit and what it’s costing you to win a customer right now."
      >
        <P>
          And we ask them one question that nearly always stops the
          conversation dead.
        </P>
        <P>“How much are you willing to spend to get one new customer?”</P>
        <P>Most can’t answer it.</P>
        <P>
          Not because they’re not smart. They run the whole operation in their
          head, every day, and it works. But that one number, the price of a
          customer, has never been written down anywhere. So the question gets
          a shrug. Or a guess. Or “I dunno, whatever works?”
        </P>
        <P>
          Here’s the thing. You’re already paying to get customers. You just
          haven’t added it up.
        </P>

        <H2>You’re already spending it</H2>
        <P>
          Think about everything that has to happen before someone hands you a
          job.
        </P>
        <P>
          You might run Google Ads. That’s money out the door whether the
          phone rings or not.
        </P>
        <P>
          You pay for your website to sit there and be found. You’ve maybe paid
          an agency, or paid for listings, or chucked some money at Facebook.
        </P>
        <P>
          You spend Saturday mornings driving out to quote jobs you don’t win.
          That’s fuel, and it’s your time, which is the one thing you can’t make
          more of.
        </P>
        <P>
          You give your best customers a discount to send their mates your way.
        </P>
        <P>
          Every one of those is a cost of getting a customer. Add them all up
          over a month, divide by how many new customers you actually won, and
          you’ve got a number.
        </P>
        <P>That number is what a customer costs you.</P>

        <H2>Let’s do the maths</H2>
        <P>Say you’re a builder. Last month you spent:</P>
        <UL>
          <li>$600 on Google Ads</li>
          <li>
            $200 on your website and listings (spread across the year, but call
            it $200 that month)
          </li>
          <li>
            A full Saturday quoting three jobs you didn’t get. Call your time
            $400.
          </li>
        </UL>
        <P>That’s $1,200 spent on getting work.</P>
        <P>That month, you won four new jobs.</P>
        <P>$1,200 divided by 4 is $300.</P>
        <P>
          So right now, it costs you $300 to win one new customer. That’s your
          number. We call it your cost per customer, or your acquisition cost
          if you want the fancy version, but the plain word is fine.
        </P>
        <P>Now. Is $300 good or bad?</P>
        <P>
          You can’t answer that yet. And this is where most people come
          unstuck.
        </P>

        <H2>$300 means nothing on its own</H2>
        <P>
          A $300 cost to win a customer is brilliant if that customer is worth
          $5,000 to you.
        </P>
        <P>It’s a disaster if that customer is worth $250.</P>
        <P>
          The number on its own tells you nothing. It only means something when
          you put it next to what a customer is actually worth to your
          business. Not the price of the job. What you keep after the job is
          done and paid for.
        </P>
        <P>
          That’s the part nearly everyone skips. They look at the job price,
          feel good about it, and never ask what’s left over once the
          materials, the labour, the fuel, the tools, the insurance, and the
          GST have all been paid.
        </P>
        <P>
          We’ll get into that properly in another piece, because it’s the bit
          that quietly sinks good businesses. For now, just sit with the gap.
        </P>
        <P>You probably know roughly what a job sells for.</P>
        <P>You probably don’t know what it costs you to win one.</P>
        <P>
          And without both numbers, every marketing decision you make is a
          guess.
        </P>

        <H2>Why the guessing is dangerous</H2>
        <P>
          When you don’t know what a customer costs you, a few things happen,
          and none of them are good.
        </P>
        <P>
          You can’t tell which marketing is working. The ads might be carrying
          you. The ads might be bleeding you dry. You genuinely cannot say, so
          you keep paying for both the good and the bad.
        </P>
        <P>
          You can’t say yes to growth with any confidence. Someone offers you a
          way to get more customers, and you’ve got no way of knowing if it’s
          worth it, so you either jump in on a gut feel or freeze and do
          nothing.
        </P>
        <P>
          And worst of all, you stay busy without getting ahead. The work comes
          in, the days are full, the bank account just sort of sits there. We
          see this one constantly. Booked solid, and somehow no better off.
        </P>

        <H2>The good news</H2>
        <P>
          You don’t need a finance degree to fix this. You don’t need fancy
          software. You need one afternoon and a willingness to look.
        </P>
        <P>
          Pull your last three months. Add up everything you spent on getting
          work, fuel and quoting time included. Count the new customers you
          won. Divide.
        </P>
        <P>
          That’s your number. Write it down. It’s probably the single most
          useful number in your whole business, and most of your competitors
          don’t know theirs either.
        </P>
        <P>
          Once you can see what a customer costs you, you can start to manage
          it. Push it down. Spend more where it’s working and less where it
          isn’t. Decide, on purpose, what you’re willing to pay.
        </P>
        <P>
          But none of that happens until you stop shrugging at the question.
        </P>
        <P>
          So we’ll ask it again, and this time we’d love you to have an answer.
        </P>
        <P>How much does one new customer cost you?</P>
        <P>
          At Latetwenties we help local service businesses across New Zealand
          get found online and chosen by the right customers. Getting the
          foundations right, the website, the Google Business Profile, the
          listings, the reviews, is how we make the phone ring with work worth
          winning. Knowing your numbers is how you keep it that way.
        </P>
      </BlogPost>
    </>
  );
}

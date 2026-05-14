import type { Metadata } from "next";

import { breadcrumbList, faqPage, service } from "@/lib/schema";

import { Eyebrow } from "../components/Eyebrow";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Foundations is $3,700 and includes the first 30 days of Presence Care. After that, Presence Care is $1,200 a month. Two products, plainly priced. No long lock-ins.",
};

const FAQS = [
  {
    question: "How long does Foundations take?",
    answer:
      "Two to four weeks, end to end. The first week is research: your brief, your market, your competitors, and the search queries that matter. Weeks two and three are the build: site, Google Business Profile, listings, review system. Week four is launch and handover. From launch, the first 30 days of Presence Care run automatically while the new work is still fresh.",
  },
  {
    question: "Why is the first 30 days of Presence Care included?",
    answer:
      "Because that's when the work moves the most. A new site takes time to get indexed, a refreshed Google Business Profile takes time to be re-ranked, citations take time to propagate. We use those 30 days to run the cadence dense rather than light: frequent new pages and articles, Google Business Profile updates, review prompts. By day 30 you've already felt the shape of Presence Care, not just been pitched it.",
  },
  {
    question: "What happens after the first 30 days?",
    answer:
      "Presence Care continues at $1,200 a month. We ask for two more months so the work has time to land in search results and review velocity has time to lift. That's three months total, including the one bundled with Foundations. After that it's month-to-month. We don't lock you in beyond what's needed to give the work a fair shot.",
  },
  {
    question: "Do you work with businesses outside Auckland?",
    answer:
      "Yes. We work across New Zealand and Australia. Most of what we do is remote. The location of your customers matters more than yours.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll take a look at it before we recommend anything. Sometimes the right answer is a rebuild, usually because the existing site can't be optimised for local search without significant rework. Sometimes the right answer is to leave it and focus on Presence Care. We'll tell you straight.",
  },
  {
    question: "Do I own everything when we're done?",
    answer:
      "Yes. The website, the domain, the Google Business Profile, every account we set up. All in your name, all yours to keep. If you ever want to move on or take over, there's nothing to untangle.",
  },
  {
    question: "Why aren't you on hourly rates?",
    answer:
      "Hourly rates reward slow work. Fixed pricing rewards getting the work done properly. Foundations is $3,700 because that's what it costs to do it once, properly, including the first 30 days of care while the work is still fresh. Presence Care is $1,200 a month because that's what it costs to keep the signals strong.",
  },
  {
    question: "What if it's not working?",
    answer:
      "Then we'll tell you. We're honest about what's landing and what isn't. If after three months Presence Care isn't moving the needle in your area, we'll have an honest conversation about whether to keep going, change approach, or stop. We're not in the business of taking your money for work that isn't earning.",
  },
];

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "How it works", href: "/how-it-works" },
  ]),
  service({
    name: "Foundations",
    description:
      "A one-time build covering the website, Google Business Profile, listings, SEO and AI search foundations, and review systems. Built in two to four weeks, with the first 30 days of Presence Care included from launch.",
    price: "3700",
    url: "/how-it-works",
  }),
  service({
    name: "Presence Care",
    description:
      "Ongoing care that keeps your signals strong: posts, reviews, listings, iterative SEO, and a regular update on what's working. The first 30 days are included with Foundations. After that, $1,200 a month with two further months minimum, then month-to-month.",
    price: "1200",
    unitText: "MON",
    url: "/how-it-works",
  }),
  faqPage(FAQS),
];

const FOUNDATIONS_INCLUDED = [
  {
    title: "A website you can stand behind",
    body: "Fast, plain-spoken, structured around the work you actually sell. Service-led pages, not generic templates.",
  },
  {
    title: "Google Business Profile, set up properly",
    body: "Categories, photos, hours, service area, review settings. The decisions that determine whether you appear on the map pack.",
  },
  {
    title: "Local listings, consistent",
    body: "Cleaned up and aligned across the directories that matter. Inconsistent listings cost you calls; we don't leave them inconsistent.",
  },
  {
    title: "SEO and AI search foundations",
    body: "Schema, structure, internal linking, the technical bits. Built so people searching on Google find you, and so AI tools can cite you when they answer.",
  },
  {
    title: "Review systems",
    body: "A simple way to ask, capture, and display reviews. The good ones come in steadily rather than in occasional bursts.",
  },
];

const PRESENCE_INCLUDED = [
  {
    title: "Google Business Profile posts",
    body: "Posts that keep you active. The kind of signal Google reads as a healthy, current business.",
  },
  {
    title: "Review generation",
    body: "We help you ask. You stay close to your customers. The good reviews come in at a steady cadence rather than in occasional bursts.",
  },
  {
    title: "Listings monitoring",
    body: "We watch the directories that matter and catch the broken ones before they cost you calls.",
  },
  {
    title: "Iterative SEO",
    body: "We keep watching what's working. New service pages, ranking opportunities, content that earns its keep. Tuned, not bloated.",
  },
  {
    title: "A regular update on what's working",
    body: "What was done, what changed, what's next. So you always know where it sits.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Brief",
    body: "A conversation about your business, your customers, and what you actually want from this. No long forms, no jargon.",
  },
  {
    num: "02",
    title: "Market",
    body: "Who searches in your area and what they search for. The size and shape of the demand we're trying to capture.",
  },
  {
    num: "03",
    title: "Competition",
    body: "Who shows up now, where the gaps sit, and which competitors we can credibly outrank without overpromising.",
  },
  {
    num: "04",
    title: "Keywords",
    body: "The queries and questions your ideal customer is asking. The ones we'll structure the site around.",
  },
  {
    num: "05",
    title: "Language",
    body: "How your customers talk about what they need. We listen for the words they use so the site sounds like you, not like a marketer.",
  },
  {
    num: "06",
    title: "Structure",
    body: "The site architecture that earns rankings and reads well to a real human. Service pages, supporting pages, the way they link.",
  },
  {
    num: "07",
    title: "Build",
    body: "We build the site, the GMB, the listings, the review systems. Working from the keywords and the brief, no decks or wireframes to sign off.",
  },
];

type ProductItem = { title: string; body: string };

type ProductBlockProps = {
  num: string;
  productName: string;
  headline: React.ReactNode;
  lede: string;
  price: string;
  priceMeta: React.ReactNode;
  items: ProductItem[];
};

function ProductBlock({
  num,
  productName,
  headline,
  lede,
  price,
  priceMeta,
  items,
}: ProductBlockProps) {
  return (
    <section className="prod-block">
      <div className="wrap">
        <div className="prod-grid">
          <div className="prod-left">
            <Reveal>
              <Eyebrow num={num}>{productName}</Eyebrow>
              <h2 className="prod-h2">{headline}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="prod-lede">{lede}</p>
            </Reveal>
            <Reveal delay={160}>
              <div className="prod-price">
                <div className="prod-price-amt">{price}</div>
                <div className="prod-price-meta">{priceMeta}</div>
              </div>
            </Reveal>
          </div>

          <div className="prod-right">
            <Reveal>
              <div className="eyebrow">What&rsquo;s included</div>
            </Reveal>
            <ul className="prod-items">
              {items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={80 + i * 60}
                  className="prod-item"
                >
                  <h3 className="prod-item-h">{item.title}</h3>
                  <p className="prod-item-p">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HowItWorks() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header current="how-it-works" />
      <main>
        <section className="hiw-hero">
          <div className="wrap">
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hiw-h1">
                Two products. <em>Plainly priced.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hiw-lede">
                Foundations gets you showing up. Presence Care moves you up
                the list. We bundle the first 30 days of care into
                Foundations, so the two run as one engagement, in order.
              </p>
            </Reveal>
          </div>
        </section>

        <ProductBlock
          num="01"
          productName="Foundations"
          headline={
            <>
              Once,
              <br />
              <em>properly.</em>
            </>
          }
          lede="Everything you need to be findable when someone searches. Built once, properly, then carried into the first 30 days of Presence Care while the work is still fresh, so the gains compound from launch instead of stalling."
          price="$3,700."
          priceMeta={
            <>
              One-time build. Yours to keep when it&rsquo;s done.
              <br />
              Two to four weeks, then the first 30 days of Presence Care
              included.
            </>
          }
          items={FOUNDATIONS_INCLUDED}
        />

        <section className="hiw-process">
          <div className="wrap">
            <div className="proc-grid">
              <div className="proc-left">
                <Reveal>
                  <Eyebrow>Inside Foundations</Eyebrow>
                  <h2 className="proc-h2">
                    How a Foundations
                    <br />
                    build runs.
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <p className="proc-lede">
                    Six research steps, then we build. We do the work because
                    it&rsquo;s the difference between a website that looks
                    good and a website that earns calls.
                  </p>
                </Reveal>
              </div>

              <ol className="proc-steps">
                {PROCESS_STEPS.map((step, i) => (
                  <Reveal
                    as="li"
                    key={step.num}
                    delay={i * 50}
                    className="proc-step"
                  >
                    <span className="proc-step-num">{step.num}</span>
                    <div className="proc-step-body">
                      <h3 className="proc-step-h">{step.title}</h3>
                      <p className="proc-step-p">{step.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <ProductBlock
          num="02"
          productName="Presence Care"
          headline={
            <>
              Keep the
              <br />
              signals <em>active.</em>
            </>
          }
          lede="Foundations sets the engine. Presence Care keeps it running. The first 30 days are included with Foundations; from day 31 it continues as the steady, visible care that moves you up the list. Reviews come in, content goes up, listings stay clean, the technical bits stay current."
          price="$1,200 a month."
          priceMeta={
            <>
              First 30 days included with Foundations.
              <br />
              From month two, two further months minimum so the work has
              time to land. Month-to-month after that. No long lock-ins.
            </>
          }
          items={PRESENCE_INCLUDED}
        />

        <section className="hiw-working">
          <div className="wrap">
            <div className="work-grid">
              <div className="work-left">
                <Reveal>
                  <Eyebrow>Working with us</Eyebrow>
                  <h2 className="work-h2">
                    We treat
                    <br />
                    your business
                    <br />
                    like our own.
                  </h2>
                </Reveal>
              </div>

              <div className="work-right">
                <Reveal as="div" className="work-body" delay={80}>
                  <p>
                    We aim to be the marketing partner you forget about, in
                    the good way. We do the work, we show our working, and we
                    only pull you in when we genuinely need a decision only
                    you can make. A specific accreditation, a claim about your
                    service area, the kind of thing the owner has to confirm.
                  </p>
                  <p className="work-pull">
                    No status meetings for the sake of status meetings. No
                    jargon. No upsells masquerading as recommendations. Each
                    month you get a single page or a short Loom from us with
                    what&rsquo;s been done, what&rsquo;s changed, and
                    what&rsquo;s next.
                  </p>
                  <p>
                    The wins get celebrated. The bits that aren&rsquo;t
                    landing get said out loud, not hidden under a softer
                    chart.
                  </p>
                  <p>
                    Everything we put out, we scrutinise the way{" "}
                    <em>you</em> would.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-block">
          <div className="wrap">
            <div className="faq-grid">
              <div className="faq-left">
                <Reveal>
                  <Eyebrow>FAQ</Eyebrow>
                  <h2 className="faq-h2">
                    The questions
                    <br />
                    we hear <em>most.</em>
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <p className="faq-lede">
                    If you&rsquo;ve got something else on your mind, the
                    quickest way to ask is the free presence check.
                  </p>
                </Reveal>
              </div>

              <ol className="faq-list">
                {FAQS.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.question}
                    className="faq-item"
                    delay={i * 60}
                  >
                    <h3 className="faq-q">{item.question}</h3>
                    <p className="faq-a">{item.answer}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <FinalCTA num="06" label="Free presence check" />
      </main>
      <Footer />
    </>
  );
}

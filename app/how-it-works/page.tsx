import type { Metadata } from "next";

import { breadcrumbList, faqPage } from "@/lib/schema";

import { Eyebrow } from "../components/Eyebrow";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How we get you found online and chosen by local customers: one system, three parts. Get Found, Stay Chosen, Ring This Week. More local enquiries in 90 days, or we work free until you get them.",
  alternates: { canonical: "/how-it-works" },
};

const FAQS = [
  {
    question: "How long does Get Found take?",
    answer:
      "Two to four weeks, end to end. The first week is research: your brief, your market, your competitors, and the search queries that matter. Weeks two and three are the build: site, Google Business Profile, listings, review system. Week four is launch and handover. From there it's yours, and you can pick up Stay Chosen or Ring This Week whenever you're ready.",
  },
  {
    question: "When should Stay Chosen start?",
    answer:
      "Whenever you're ready. Most clients pick it up the week Get Found goes live, so the signals get worked on while the new build is still fresh in Google's eyes. Others wait a month or two and start it once they've seen how the new site lands. Either way works; we'll tell you straight which makes more sense for your patch.",
  },
  {
    question: "What does Ring This Week actually do?",
    answer:
      "It puts your business in front of the people searching right now. Get Found makes you findable. Stay Chosen moves you up the organic list over months. Ring This Week is the lever you pull when you want enquiries this week, not next quarter. We set up campaigns on Google and Meta, point them at the jobs you actually want, write the ads, build the landing pages they go to, and track the calls and form fills so you can see what the spend is buying.",
  },
  {
    question: "Can I run Ring This Week on its own?",
    answer:
      "Yes. Get Found, Stay Chosen, and Ring This Week each work on their own and they're stronger together, but you don't have to do all three. Some clients start with just Get Found. Some come to us already with a site they're happy with and want Ring This Week only. We'll walk you through what makes sense for where you're at.",
  },
  {
    question: "Do you work with businesses outside Auckland?",
    answer:
      "Yes. We work across New Zealand and Australia. Most of what we do is remote. The location of your customers matters more than yours.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll take a look at it before we recommend anything. Sometimes the right answer is a rebuild, usually because the existing site can't be optimised for local search without significant rework. Sometimes the right answer is to leave it and focus on Stay Chosen or Ring This Week. We'll tell you straight.",
  },
  {
    question: "Do I own everything when we're done?",
    answer:
      "Yes. The website, the domain, the Google Business Profile, every account we set up. All in your name, all yours to keep. If you ever want to move on or take over, there's nothing to untangle.",
  },
  {
    question: "Why aren't you on hourly rates?",
    answer:
      "Hourly rates reward slow work. Fixed pricing rewards getting it done properly. Get Found is a one-time fixed price for the build. Stay Chosen is a fixed monthly that holds the signals strong. Ring This Week is your ad budget plus a fixed management fee. We'll walk you through the numbers on your free Presence Report.",
  },
  {
    question: "What if it's not working?",
    answer:
      "Then we keep working, free. That's the guarantee: run the full 90 days with us, the build plus your first three months of Stay Chosen, and if you don't have more enquiries than the 90 days before us, we keep going for free until you do. No lock-in either way. We're honest about what's landing and what isn't, and we're not in the business of taking your money for work that isn't earning.",
  },
];

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "How it works", href: "/how-it-works" },
  ]),
  faqPage(FAQS),
];

const GET_FOUND_INCLUDED = [
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

const RING_THIS_WEEK_INCLUDED = [
  {
    title: "Campaigns set up properly",
    body: "Structured around the jobs you actually want, on the platforms your customers are actually on. Google for the active searcher, Meta for the one who hasn't started looking yet. Locations, match types, negatives, audiences, sorted before a dollar goes out.",
  },
  {
    title: "Ads that sound like you",
    body: "Plain-spoken copy that matches what your customers are actually searching for. No hype, no fluff, no headlines we'd be embarrassed to read aloud.",
  },
  {
    title: "Landing pages that earn the click",
    body: "If the page they land on isn't ready for the ad, the ad doesn't earn its keep. We make sure both sides match up.",
  },
  {
    title: "Conversion tracking that counts enquiries",
    body: "Calls, form fills, and the actions that actually mean a lead. So you can see what the spend is buying, not just how many clicks it bought.",
  },
  {
    title: "Budget and bids, managed",
    body: "Started conservative, scaled when it's earning, paused when it isn't. We don't chase impressions for the sake of the chart.",
  },
  {
    title: "A regular update on the spend",
    body: "What went out, what came in, what to do next. So you always know whether to turn the tap up, down, or off.",
  },
];

const STAY_CHOSEN_INCLUDED = [
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
  meta?: React.ReactNode;
  items: ProductItem[];
};

function ProductBlock({
  num,
  productName,
  headline,
  lede,
  meta,
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
            {meta ? (
              <Reveal delay={160}>
                <div className="prod-price">
                  <div className="prod-price-meta">{meta}</div>
                </div>
              </Reveal>
            ) : null}
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
                How we get you <em>found and chosen.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hiw-lede">
                One system, three parts. Get Found builds your presence so you
                show up. Stay Chosen keeps you climbing. Ring This Week brings
                enquiries in fast. Run one or all three, no lock-ins. And the
                promise holds across all of it: more local enquiries in 90
                days, or we work free until you get them.
              </p>
            </Reveal>
          </div>
        </section>

        <ProductBlock
          num="01"
          productName="Get Found"
          headline={
            <>
              Once,
              <br />
              <em>properly.</em>
            </>
          }
          lede="Everything you need to be findable when someone searches. Built once, properly, so every signal points to you from launch instead of pulling in different directions."
          meta={
            <>
              One-time build. Yours to keep when it&rsquo;s done.
              <br />
              Two to four weeks, end to end.
            </>
          }
          items={GET_FOUND_INCLUDED}
        />

        <section className="hiw-process">
          <div className="wrap">
            <div className="proc-grid">
              <div className="proc-left">
                <Reveal>
                  <Eyebrow>Inside Get Found</Eyebrow>
                  <h2 className="proc-h2">
                    How a Get Found
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
          productName="Stay Chosen"
          headline={
            <>
              Keep the
              <br />
              signals <em>active.</em>
            </>
          }
          lede="The steady, visible care that moves you up the list over months. Reviews come in, content goes up, listings stay clean, the technical bits stay current. Each month the signals get stronger; each month you climb a little further into the searches that bring you work."
          meta={
            <>
              Month-to-month. No lock-ins.
              <br />
              Start it whenever you&rsquo;re ready.
            </>
          }
          items={STAY_CHOSEN_INCLUDED}
        />

        <ProductBlock
          num="03"
          productName="Ring This Week"
          headline={
            <>
              Straight to the
              <br />
              <em>enquiry.</em>
            </>
          }
          lede="Paid placement on Google and Meta, built to put your business in front of the people searching right now. The fastest route from a search to a call landing with you. Campaigns pointed at the jobs you actually want, ads that sound like you, landing pages ready for the click, and conversions tracked so you know what the spend is buying."
          meta={
            <>
              Your ad budget plus a fixed monthly management fee.
              <br />
              On when you want it, off when you don&rsquo;t. No lock-ins.
            </>
          }
          items={RING_THIS_WEEK_INCLUDED}
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
                  <p>
                    Your side of it stays light. We do the website copywriting
                    and we source the images. At onboarding you upload your own
                    project photos, and that&rsquo;s the bulk of your part
                    done. After that it&rsquo;s the odd new photo for a Google
                    update, and a quick yes by email when fresh content goes
                    live.
                  </p>
                  <p className="work-pull">
                    No status meetings for the sake of status meetings. No
                    jargon. No upsells masquerading as recommendations. Each
                    month you get a single page or a short Loom from us with
                    what&rsquo;s been done, what&rsquo;s changed, and
                    what&rsquo;s next.
                  </p>
                  <p>
                    Your build goes live in two to four weeks. From the day it
                    does and Stay Chosen begins, the 90-day guarantee clock
                    starts: more local enquiries than the 90 days before us, or
                    we keep working free until you get them.
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
                    quickest way to ask is the free Presence Report.
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

        <FinalCTA num="06" label="Free Presence Report" />
      </main>
      <Footer />
    </>
  );
}

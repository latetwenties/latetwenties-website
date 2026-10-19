import type { Metadata } from "next";

import { breadcrumbList, faqPage } from "@/lib/schema";

import Link from "next/link";

import { CaseTileGrid, FEATURED_CASES } from "../components/CaseTileGrid";
import { Eyebrow } from "../components/Eyebrow";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ThePromise } from "../components/home/ThePromise";
import { Stage, SystemStages } from "../components/how-it-works/SystemStages";
import { JsonLd } from "../components/JsonLd";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How we get you found online and chosen by local customers: one system, three parts. Groundwork, Momentum, Fast Track. More local enquiries in 90 days, or we work free until you get them.",
  alternates: { canonical: "/how-it-works" },
};

const FAQS = [
  {
    question: "How long does Groundwork take?",
    answer:
      "Two to four weeks, end to end. The first week is research: your brief, your market, your competitors, and the search queries that matter. Weeks two and three are the build: site, Google Business Profile, listings, review system. Week four is launch, and Momentum starts the same week.",
  },
  {
    question: "When does Momentum start?",
    answer:
      "The week your build goes live. That's when the new site is fresh in Google's eyes, so it's when steady care moves you up fastest. Your first three months of Momentum are part of the 90-day run the guarantee covers. After that it's month to month.",
  },
  {
    question: "What does Fast Track actually do?",
    answer:
      "It puts your business in front of the people searching right now. Groundwork makes you findable. Momentum moves you up the list over months. Fast Track is the accelerator on top, for when you want enquiries in weeks, not months. We set up campaigns on Google and Meta, point them at the jobs you actually want, write the ads, build the pages they land on, and track the calls and form fills so you can see what the spend is buying.",
  },
  {
    question: "Do you work with businesses outside Auckland?",
    answer:
      "Yes. We work across New Zealand and Australia. Most of what we do is remote. The location of your customers matters more than yours.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We rebuild it onto our platform, because that's what lets us make changes the same day instead of waiting on someone else. It's also what lets us put the 90-day guarantee in writing. The new site, the domain and every account stay in your name.",
  },
  {
    question: "Do I own everything when we're done?",
    answer:
      "Yes. The website, the domain, the Google Business Profile, every account we set up. All in your name, all yours to keep. If you ever want to move on or take over, there's nothing to untangle.",
  },
  {
    question: "Why aren't you on hourly rates?",
    answer:
      "Hourly rates reward slow work. Fixed pricing rewards getting it done properly. The Groundwork build is a one-time fixed price, and Momentum is a fixed monthly that keeps you climbing. When Fast Track runs on top, it's your ad budget plus a fixed management fee. We'll walk you through the numbers on your free Presence Report.",
  },
];

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "How it works", href: "/how-it-works" },
  ]),
  faqPage(FAQS),
];

// Each item leads with the problem it removes or the result it brings, then
// says what the work is. Proof figures come from the confirmed case studies.
const GET_FOUND_INCLUDED = [
  {
    title: "Visitors who turn into calls",
    body: "A fast, plain-spoken website built around the jobs you want. A page for each service, so someone after a new driveway lands on driveways, not a generic home page. TMT's rebuild gave each of its seven services a page of its own.",
  },
  {
    title: "You show up on the map",
    body: "Your Google Business Profile set up properly: categories, photos, hours, service area, review settings. These are the decisions that decide whether you appear when someone nearby searches. Boaz went from not showing to #2 across its neighbouring towns.",
  },
  {
    title: "Every directory tells the same story",
    body: "Your name, address and number cleaned up and matched across the directories that matter. When they disagree, Google trusts you less and customers ring the wrong number. We sort it before launch.",
  },
  {
    title: "Found on Google, and named by AI tools",
    body: "Schema, structure, internal linking, the technical bits you never see. Built so people searching on Google find you, and so tools like ChatGPT can name you when someone asks who to call.",
  },
  {
    title: "Reviews that keep coming in",
    body: "A simple way to ask every happy customer, capture the review, and show it on your site. New reviews land steadily, not in a rush every couple of years.",
  },
];

const STAY_CHOSEN_INCLUDED = [
  {
    title: "Google sees a business that's open and busy",
    body: "Regular posts on your Google Business Profile, made from your own job photos. Google reads that as a current, active business. So do the customers deciding who to ring.",
  },
  {
    title: "Your newest review is from this month",
    body: "We make asking easy and prompt it at the right moment, after a job goes well. Reviews keep landing, so the first one a customer reads is recent.",
  },
  {
    title: "Nobody gets your old number",
    body: "We check every directory monthly, so a customer never rings a disconnected line or drives to your old yard.",
  },
  {
    title: "You keep climbing, not sliding",
    body: "Search shifts every month, and newer businesses are always working their way up. We watch what's ranking, add service pages where there's demand, and tune what's already there.",
  },
  {
    title: "You always know where you stand",
    body: "Each month, a single page or a short video: what was done, what changed, what's next. What isn't landing gets said out loud.",
  },
];

const FAST_TRACK_INCLUDED = [
  {
    title: "No spend on jobs you don't want",
    body: "Campaigns built around the work you want, in the towns you cover. Google for the person searching now, Meta for the one who hasn't started looking. Locations, negatives and audiences sorted before a dollar goes out.",
  },
  {
    title: "The right people click",
    body: "Plain-spoken ads that match what your customers type and say what you do and where. The people who click are the people with the job you want.",
  },
  {
    title: "Clicks turn into enquiries",
    body: "Every ad lands on a page made for it, with the service, the area and a way to get in touch up top. A paid click on a page that isn't ready is a click you paid for and lost.",
  },
  {
    title: "You see what each dollar bought",
    body: "Calls and form fills tracked back to the ad that brought them. At TMT, 7 of the 12 enquiries in the first full month came from a small search campaign, each at about a third of the cost we'd allowed.",
  },
  {
    title: "Spend goes where it's earning",
    body: "Start conservative, scale what's working, pause what isn't. We don't chase clicks for the sake of a chart.",
  },
  {
    title: "You decide when to turn the tap",
    body: "A regular update on what went out, what came in, and what we'd do next. Turn it up when you want more work, down when you're booked out.",
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
    body: "Who shows up now, where the gaps sit, and where you can credibly move up without overpromising.",
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
    body: "We build the site, the Google Business Profile, the listings, the review systems. Working from the keywords and the brief, no decks or wireframes to sign off.",
  },
];

const PROCESS = (
  <div className="sys-process">
    <div className="eyebrow">How the build runs</div>
    <p className="sys-process-lede">
      Six research steps, then we build. It&rsquo;s the difference between a
      website that looks good and a website that earns calls.
    </p>
    <ol className="proc-steps">
      {PROCESS_STEPS.map((step) => (
        <li key={step.num} className="proc-step">
          <span className="proc-step-num">{step.num}</span>
          <div className="proc-step-body">
            <h5 className="proc-step-h">{step.title}</h5>
            <p className="proc-step-p">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

const STAGES: Stage[] = [
  {
    id: "get-found",
    num: "01",
    name: "Groundwork",
    when: "Weeks 1 to 4",
    headline: (
      <>
        Show up when
        <br />
        <em>locals search.</em>
      </>
    ),
    summary:
      "We research your market, then build your website, Google Business Profile, listings and reviews around the jobs you want. Live in two to four weeks.",
    lede: "Everything you need to be findable when someone searches. Built once, properly, so every signal points to you from launch instead of pulling in different directions.",
    meta: (
      <>
        One-time build. Yours to keep when it&rsquo;s done.
        <br />
        Two to four weeks, end to end.
      </>
    ),
    items: GET_FOUND_INCLUDED,
    extra: PROCESS,
  },
  {
    id: "stay-chosen",
    num: "02",
    name: "Momentum",
    when: "From launch, every month",
    headline: (
      <>
        Keep climbing,
        <br />
        <em>month after month.</em>
      </>
    ),
    summary:
      "The monthly upkeep that keeps you climbing: fresh reviews, regular posts, clean listings and ongoing SEO. Starts the week your build goes live.",
    lede: "The steady, visible care that moves you up the list over months. Reviews come in, content goes up, listings stay clean, the technical bits stay current. Each month you climb a little further into the searches that bring you work.",
    meta: (
      <>
        Starts the week your build goes live.
        <br />
        The first three months are part of the guarantee run.
      </>
    ),
    items: STAY_CHOSEN_INCLUDED,
  },
  {
    id: "fast-track",
    num: "03",
    name: "Fast Track",
    when: "On top, when you want calls sooner",
    headline: (
      <>
        Calls in weeks,
        <br />
        <em>not months.</em>
      </>
    ),
    summary:
      "Google and Meta ads aimed at the jobs you want, in the towns you cover. The accelerator for enquiries now, while the rest of the system builds.",
    lede: "Paid placement on Google and Meta, built to put your business in front of the people searching right now. The fastest route from a search to a call landing with you.",
    meta: (
      <>
        The accelerator, run on top of the system.
        <br />
        Your ad budget plus a fixed monthly management fee.
      </>
    ),
    items: FAST_TRACK_INCLUDED,
  },
];

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
                The Found &amp; Chosen System.
                <br />
                <em>How it works.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hiw-lede">
                One system, run together. Groundwork builds the presence that
                gets you found. Momentum keeps you there, month after month.
                Fast Track is the accelerator on top when you want the
                phone ringing sooner.
              </p>
            </Reveal>
          </div>
        </section>

        <ThePromise num="01" />

        <section className="hiw-working">
          <div className="wrap">
            <div className="work-grid">
              <div className="work-left">
                <Reveal>
                  <Eyebrow num="02">Working with us</Eyebrow>
                  <h2 className="work-h2">
                    Your side of it
                    <br />
                    <em>stays light.</em>
                  </h2>
                </Reveal>
              </div>

              <div className="work-right">
                <Reveal as="div" className="work-body" delay={80}>
                  <p>
                    We do the website copywriting and we source the images. At
                    onboarding you upload your own project photos, and
                    that&rsquo;s the bulk of your part done. After that
                    it&rsquo;s the odd new photo for a Google update, and a
                    quick yes by email when fresh content goes live.
                  </p>
                  <p>
                    We only pull you in when we need a decision only you can
                    make. A specific accreditation, a claim about your service
                    area, the kind of thing the owner has to confirm.
                  </p>
                  <p className="work-pull">
                    No status meetings for the sake of status meetings. No
                    jargon. No upsells dressed up as recommendations. Each
                    month you get a single page or a short Loom from us with
                    what&rsquo;s been done, what&rsquo;s changed, and
                    what&rsquo;s next.
                  </p>
                  <p>
                    Your build goes live in two to four weeks. We treat your
                    business like our own, and everything we put out, we
                    scrutinise the way <em>you</em> would.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="sys" id="the-system">
          <div className="wrap">
            <div className="sys-head">
              <Reveal>
                <Eyebrow num="03">The system</Eyebrow>
                <h2 className="sys-h2">
                  Three stages.
                  <br />
                  <em>One system.</em>
                </h2>
              </Reveal>
              <Reveal as="p" className="sys-lede" delay={80}>
                Groundwork and Momentum always run together, in that order.
                Fast Track goes on top when you want the phone ringing
                sooner. Open any stage to see exactly what&rsquo;s in it.
              </Reveal>
            </div>
            <Reveal delay={140}>
              <SystemStages stages={STAGES} />
            </Reveal>
          </div>
        </section>

        <section className="case" id="proof">
          <div className="wrap">
            <div className="case-head">
              <Reveal>
                <p className="case-pull">
                  The same system,
                  <br />
                  <em>already working.</em>
                </p>
              </Reveal>
              <Reveal as="p" className="case-meta" delay={80}>
                <span className="case-meta-num">04</span> The proof · Real
                clients · Real numbers · Recent work
              </Reveal>
              <Reveal delay={120}>
                <Link className="ghost-link" href="/work">
                  See all case studies →
                </Link>
              </Reveal>
            </div>

            <CaseTileGrid only={FEATURED_CASES} />
          </div>
        </section>

        <section className="faq-block">
          <div className="wrap">
            <div className="faq-grid">
              <div className="faq-left">
                <Reveal>
                  <Eyebrow num="05">FAQ</Eyebrow>
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
                  <p className="faq-lede">
                    New to this? Start with{" "}
                    <a href="/blog/what-is-local-seo">
                      what local SEO actually is
                    </a>
                    , or read{" "}
                    <a href="/blog/marketing-agency-near-me">
                      whether your agency needs to be near you
                    </a>
                    .
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
                    <details className="faq-details">
                      <summary className="faq-summary">
                        <h3 className="faq-q">{item.question}</h3>
                        <span className="faq-icon" aria-hidden="true" />
                      </summary>
                      <p className="faq-a">{item.answer}</p>
                    </details>
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

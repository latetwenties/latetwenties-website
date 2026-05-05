import type { Metadata } from "next";

import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  H3,
  P,
  Strong,
  UL,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title:
    "Should you run Google Ads? A framework for service businesses",
  description:
    "Google Ads can be a powerful lead generator or an expensive lesson in how fast money disappears. A practical framework for deciding which one it’ll be for you.",
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "Should you run Google Ads? A framework for service businesses",
      href: "/blog/google-ads-framework",
    },
  ]),
  article({
    headline:
      "Should you run Google Ads? A framework for service businesses",
    description:
      "Google Ads can be a powerful lead generator or an expensive lesson in how fast money disappears. A practical framework for deciding which one it'll be for you.",
    url: "/blog/google-ads-framework",
    datePublished: "2026-03-22",
  }),
];

export default function Post() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
    <BlogPost
      title="Should you run Google Ads? A framework for service businesses"
      readTime="7 min read"
      lede="Few conversations with business owners go in circles quite like the Google Ads conversation. One business owner swears it’s the best money they’ve ever spent. Another says they burned through $3,000 and got nothing. Both are probably telling the truth."
    >
      <P>
        That apparent contradiction is the entire point. Google Ads can
        be an incredibly powerful tool for generating leads, or an
        expensive lesson in how fast money disappears when a campaign is
        set up without proper strategy.
      </P>
      <P>
        The answer to “should I run Google Ads?” isn’t a universal yes
        or no. It’s a framework question. Here’s how to think through
        it honestly, so you can make the right call for your business
        rather than guessing.
      </P>

      <H2>First, understand what Google Ads actually is (and isn’t)</H2>
      <P>
        Google Ads for service businesses primarily means Search Ads.
        Your business appearing at the top of Google results when
        someone types in a relevant query like “emergency plumber [your
        suburb]” or “physiotherapist near me.”
      </P>
      <P>
        You pay per click, not per impression. So if 100 people see your
        ad and 10 click it, you pay for those 10 clicks. Whether those
        10 people actually call you or book a job is determined by your
        landing page, your pricing, your reviews, and a dozen other
        factors that have nothing to do with the ad itself.
      </P>
      <P>
        This distinction matters enormously, and it’s where many
        business owners get confused. They measure Google Ads by clicks
        (or even impressions) rather than by calls and booked jobs. If
        you can’t track what happens after the click, you don’t actually
        know whether Ads is working.
      </P>
      <P>
        There’s also a separate product worth knowing about:{" "}
        <Strong>Google Local Service Ads (LSAs)</Strong>. Unlike regular
        Search Ads, LSAs charge per lead rather than per click, appear
        at the very top of the search results page (above regular ads),
        and display your rating and number of reviews prominently. For
        home service businesses that qualify, LSAs often deliver better
        ROI than regular Search Ads because you’re only paying when
        someone actually contacts you. If you haven’t explored LSAs,
        start there before building a regular Ads campaign.
      </P>

      <H2>
        The core framework: five questions to answer before you spend a
        dollar
      </H2>

      <H3>1. Is your Google Business Profile already optimised?</H3>
      <P>If the answer is no, stop here. Don’t run ads yet.</P>
      <P>
        This might feel counterintuitive. What does your GBP have to do
        with paid ads? More than you’d think. A significant portion of
        your ad clicks will result in people then Googling your business
        name to check your reviews and photos before they call. If your
        GBP looks neglected, few reviews, no photos, incomplete
        information, you’re paying for ad clicks that your own
        reputation is killing at the finish line.
      </P>
      <P>
        Get your GBP right first. It’s free, it takes less time than
        setting up an Ads campaign, and it directly impacts your
        conversion rate from ads.
      </P>

      <H3>2. Do you have enough reviews to convert ad traffic?</H3>
      <P>
        Related to the above. Google Ads can drive visibility, but they
        can’t create trust. Trust is built by reviews.
      </P>
      <P>
        A business running ads with 8 reviews averaging 4.1 stars will
        consistently underperform against a competitor with 45 reviews
        averaging 4.8 stars, even if the first business is bidding
        higher and appearing at the top of results. People click the
        ad, see the reviews, and call someone else.
      </P>
      <P>
        The general threshold for running ads effectively is a minimum
        of <Strong>15 to 20 reviews with an average above 4.5 stars</Strong>.
        If you’re below that, put the ad budget into a concerted
        review-generation push first. The economics work out much
        better.
      </P>

      <H3>
        3. What’s your margin on a job, and what’s your close rate?
      </H3>
      <P>
        This is a cold, arithmetical question that most small business
        owners skip, and then wonder why they can’t tell if Ads is
        profitable.
      </P>
      <P>Here’s a simplified framework:</P>
      <UL>
        <li>Average job value for your business: let’s say $650</li>
        <li>Your profit margin per job: say 40%, so $260 profit per job</li>
        <li>Your close rate from a qualified lead: say 60%</li>
        <li>Therefore: you need roughly 1.7 leads to generate one job</li>
        <li>
          Maximum you can afford per lead while breaking even: $260
          divided by 1.7, approximately $153
        </li>
      </UL>
      <P>
        Now look at the average cost-per-click in your trade and market.
        In competitive home service markets, clicks for high-intent
        terms like “emergency plumber” can cost $15 to $40 per click or
        more. If your landing page converts 10% of clicks into
        enquiries, you’re paying $150 to $400 per lead. For some trades
        and markets, that works. For others, it doesn’t.
      </P>
      <P>
        Run your own numbers. If the maths shows that Ads could be
        profitable, proceed. If the numbers don’t work at realistic CPC
        rates, you have two options: improve your conversion rate
        (better landing page, stronger offer) or wait until your
        organic and GBP presence generates leads at lower cost first.
      </P>

      <H3>4. Do you have the capacity to handle more leads?</H3>
      <P>
        This sounds like a luxury problem, but it’s real and it matters.
      </P>
      <P>
        Google Ads can generate a significant volume of leads quickly.
        If you’re already stretched, or if you can’t reliably answer
        your phone during business hours, you’ll burn money on leads
        you can’t convert. A missed call from an ad click is a wasted
        click.
      </P>
      <P>
        Before scaling up ad spend, make sure your lead handling is
        solid: you or someone in your business answers calls during
        business hours, you have a system for after-hours enquiries
        (even a well-worded voicemail with a callback promise), and you
        can actually schedule the volume of work that results.
      </P>

      <H3>
        5. Are you prepared to manage the campaign actively, or pay
        someone competent to do it?
      </H3>
      <P>
        Google Ads is not a set-and-forget system. A campaign that
        isn’t monitored and optimised regularly will drift toward
        inefficiency, burning budget on irrelevant searches, failing
        to capitalise on what’s working, missing negative keyword
        opportunities that are wasting spend.
      </P>
      <P>
        The most expensive Ads mistake isn’t a high cost-per-click.
        It’s a campaign that runs for six months with no refinement
        while silently losing money on searches like “plumber jobs near
        me” (someone looking for employment, not a plumber) or “how to
        fix a leaky tap myself.”
      </P>
      <P>
        If you’re going to manage it yourself, commit to spending at
        least 30 to 60 minutes per week in the account, reviewing
        search terms, checking conversion data, and making
        adjustments. If you’re going to hire someone, find an agency
        or freelancer that specifically works with home service
        businesses and can demonstrate results. Not just someone who
        manages Google Ads generically.
      </P>

      <H2>When Google Ads makes clear sense</H2>
      <P>
        With the framework applied, here are the situations where
        Google Ads is typically a strong investment for home service
        businesses:
      </P>
      <P>
        <Strong>You’re in a competitive market and need leads now.</Strong>{" "}
        SEO and GBP optimisation build over months. If you need the
        phone ringing next week because you’ve just started your
        business or you’ve had a quiet period, Ads can bridge the gap
        while your organic presence builds.
      </P>
      <P>
        <Strong>You offer high-value, urgent services.</Strong>{" "}
        Emergency trades (plumbing, HVAC, electrical, locksmithing) see
        some of the highest conversion rates in all of Google Ads,
        because the intent is immediate. Someone whose hot water has
        died at 6pm and is searching “emergency hot water replacement”
        is going to call someone. You want to be there.
      </P>
      <P>
        <Strong>You have high job values.</Strong> If a single job is
        worth $3,000 to $10,000 (major bathroom renovation, full ducted
        air installation, roofing replacement), even a relatively
        expensive cost-per-lead can be highly profitable. The maths
        change dramatically when the revenue per job is large.
      </P>
      <P>
        <Strong>You want to expand into a new service area.</Strong>{" "}
        Organic rankings take time to develop in new suburbs. Ads can
        establish a presence immediately while you build the organic
        signals over time.
      </P>

      <H2>When Google Ads should wait</H2>
      <P>
        <Strong>Your GBP has fewer than 15 reviews.</Strong> Fix the
        trust problem first.
      </P>
      <P>
        <Strong>You can’t track conversions.</Strong> If you don’t know
        how many of your ad clicks are turning into calls or enquiries,
        you’re flying blind. Set up call tracking before spending a
        dollar.
      </P>
      <P>
        <Strong>Your budget is under $800 to $1,000 per month.</Strong>{" "}
        Google Ads requires sufficient data to optimise. A campaign
        spending $300 per month in a competitive market will accumulate
        data too slowly to make informed decisions, and the algorithm’s
        automated bidding won’t have enough signal to work well. Either
        commit to a realistic budget or wait until you can.
      </P>
      <P>
        <Strong>
          Your website is slow, outdated, or hard to use on mobile.
        </Strong>{" "}
        Ad clicks that land on a poor mobile experience are largely
        wasted money. Fix the landing experience first.
      </P>

      <H2>The honest summary: Ads vs SEO for service businesses</H2>
      <P>The perennial question. Here’s an honest take, grounded in what the data actually shows.</P>
      <P>
        SEO and GBP optimisation, done well, deliver better long-term
        ROI than Google Ads. Studies across service businesses show
        that organic leads typically cost 60% less than paid leads over
        time, and that SEO investment compounds in value while ad spend
        stops the moment you turn it off.
      </P>
      <P>
        But SEO takes time. A new or under-optimised business can spend
        6 to 12 months building organic rankings while needing revenue
        now. That’s where Ads earns its place. Not as a substitute for
        organic strategy, but as a bridge that buys you time while the
        longer-term foundations build.
      </P>
      <P>
        The smartest approach for most service businesses: prioritise
        your GBP and local SEO as the permanent infrastructure, and use
        Google Ads tactically. To cover quiet periods, to launch in new
        markets, to capitalise on peak seasonal demand.
      </P>
      <P>
        One final thing: the businesses that get the best results from
        Google Ads are rarely the ones spending the most money. They’re
        the ones who have done the less glamorous work first. The
        reviews, the GBP, the service pages, the fast website. So that
        when a paid click lands on their business, it converts.
      </P>
      <P>
        <Strong>
          Build the foundation. Then run the ads. That sequence almost
          always outperforms the reverse.
        </Strong>
      </P>
    </BlogPost>
    </>
  );
}

import type { Metadata } from "next";

import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  H3,
  P,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title:
    "Google Business Profile: the 15-minute setup most owners skip",
  description:
    "Your Google Business Profile is not a side note. For service businesses, it is the strategy. Here’s exactly how to optimise it in fifteen minutes.",
  alternates: { canonical: "/blog/google-business-profile" },
};

const SCHEMA = [
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    {
      name: "Google Business Profile: the 15-minute task that doubles your calls",
      href: "/blog/google-business-profile",
    },
  ]),
  article({
    headline:
      "Google Business Profile: the 15-minute task that doubles your calls",
    description:
      "Your Google Business Profile is not a side note. For service businesses, it is the strategy. Here's exactly how to optimise it.",
    url: "/blog/google-business-profile",
    datePublished: "2026-03-15",
  }),
];

export default function Post() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
    <BlogPost
      title="Google Business Profile: the 15-minute task that doubles your calls"
      readTime="8 min read"
      lede="If someone tells you there’s a single free task that can measurably increase the number of calls coming into your business within weeks, you’d probably be sceptical. And fair enough. Most marketing promises are noise."
    >
      <P>
        But this one is different. Your Google Business Profile (GBP) is
        not a side note in your digital marketing strategy. For service
        businesses, <Strong>it is the strategy</Strong>. It’s the first
        thing potential customers see. It’s the thing that determines
        whether your phone number, reviews, and photos show up before a
        competitor’s. And unlike your website, or Google Ads, or social
        media, the baseline version of it is completely free, and the
        optimised version of it takes about 15 minutes to dramatically
        improve.
      </P>
      <P>Here’s exactly how to do it.</P>

      <H2>Why your GBP matters more than your website right now</H2>
      <P>
        Let’s establish something first, because it changes how you
        approach this.
      </P>
      <P>
        According to recent research, nearly two-thirds of Google
        searches now end without a click to any website. The person
        searched, Google gave them everything they needed (a business
        name, phone number, reviews, hours), and they made a decision
        without ever visiting a website.
      </P>
      <P>
        For service businesses, this is your operating environment.
        Someone searching for what you do at 7pm isn’t reading blog
        posts. They’re looking at the map results, skimming star
        ratings, and calling whoever looks most credible and available.
      </P>
      <P>Your GBP is your 7pm pitch. It needs to be good.</P>

      <H2>The 15-minute optimisation walkthrough</H2>
      <P>
        Open your Google Business Profile manager (business.google.com)
        and work through these in order. Don’t skip anything.
      </P>

      <H3>Step 1. Verify your profile is actually claimed and verified</H3>
      <P>
        Sounds obvious. You’d be surprised how many business owners
        think their profile is live when it’s actually either unclaimed
        (meaning anyone can edit it) or unverified (meaning Google is
        treating it as low-confidence). An unverified profile ranks
        significantly worse and is vulnerable to incorrect edits from
        strangers.
      </P>
      <P>
        Check for the blue verified checkmark. If it’s not there, start
        the verification process now.
      </P>

      <H3>Step 2. Nail your primary category</H3>
      <P>
        This is the most important field in your entire GBP and the one
        most businesses get wrong by being too generic.
      </P>
      <P>
        Your primary category tells Google what searches you should
        appear for. “Contractor” is useless. “Plumber” is okay.
        “Emergency Plumber” or “Drain Cleaning Service,” if that’s your
        core business, is far better, because it matches exactly how
        customers search.
      </P>
      <P>
        Pull up a competitor who outranks you in maps. Use a free Chrome
        extension like GMB Everywhere to see what primary and secondary
        categories they’re using. Then choose the single most accurate,
        specific primary category that reflects your core service. Add
        up to 9 secondary categories for your other services.
      </P>
      <P>
        <Strong>One important warning:</Strong> do not add categories for
        services you don’t offer just to expand your reach. Google’s
        algorithm is sophisticated enough to identify and penalise this,
        and it can result in profile suspension.
      </P>

      <H3>Step 3. Rewrite your business description</H3>
      <P>
        You have 750 characters. Most businesses use 60 of them on
        something generic like “Family-owned plumbing company. Quality
        work at fair prices.”
      </P>
      <P>That’s wasted space.</P>
      <P>
        Your description should do four things: mention your primary
        location (your suburb or city), explain what you do and who for,
        include something that builds trust (years in business,
        guarantees, licensed and insured, specialisations), and finish
        with a soft call to action.
      </P>
      <P>
        Here’s the structure:{" "}
        <Strong>
          “We are [what you do] serving [location], specialising in
          [specific services]. [Trust signal, e.g., ‘Licensed for over
          15 years, with 200+ five-star reviews’]. [One thing that
          differentiates you]. Call us for [primary service], we [key
          benefit, e.g., ‘offer same-day service for urgent jobs’].”
        </Strong>
      </P>
      <P>
        Don’t keyword-stuff. Write like a human who knows their trade.
        Google has become very good at detecting, and discounting,
        artificial keyword cramming.
      </P>

      <H3>Step 4. List every service with a description</H3>
      <P>
        Under “Services” in your GBP dashboard, you can add individual
        service entries. Most businesses either leave this blank or list
        three vague items.
      </P>
      <P>
        This is a significant missed opportunity. Each service you list
        becomes a keyword signal. Each service description you write
        (keep them to 2 to 3 sentences each) adds more context about
        what you do and for whom.
      </P>
      <P>
        Be specific. Don’t just write “Plumbing.” Write “Hot Water
        System Replacement,” “Emergency Leak Repair,” “Bathroom
        Renovation Plumbing,” “Gas Fitting.” Every service is a search
        term someone types in. Every search term you’re not listing is
        visibility you’re leaving on the table.
      </P>

      <H3>Step 5. Add real photos</H3>
      <P>
        Photos are one of the clearest signals to both Google and
        potential customers that your business is active, professional,
        and real.
      </P>
      <P>
        Google tracks engagement with your photos. Listings with
        regular, high-quality photos get more profile views and more
        calls. The data is consistent: active photo uploading correlates
        directly with improved visibility.
      </P>
      <P>
        You don’t need a professional photographer. You need a phone
        habit. After every job, take one or two photos of the completed
        work. Add them to your GBP. Over time, this builds a portfolio
        that shows customers exactly what your work looks like, and
        tells Google you’re a thriving, active business.
      </P>
      <P>
        Today, upload at least five photos if you haven’t already: your
        van or truck (this helps enormously with trust), two or three
        completed job images, and your team if possible.
      </P>

      <H3>Step 6. Post an update right now</H3>
      <P>
        GBP posts are short updates that appear on your profile. They
        can be a recent job, a seasonal tip, a promotion, or simply a
        quick “what we’re up to” update.
      </P>
      <P>
        Most businesses never post. This means that if you post even
        once a week, you immediately stand out from the majority of
        competitors in your area.
      </P>
      <P>
        Posts also improve your ranking. Google interprets regular
        posting as a signal that your business is active and engaged.
        Exactly the kind of business it wants to recommend.
      </P>
      <P>
        Write your first post right now. 100 to 150 words. A job you
        completed recently, what it involved, and a call to action.
        Mention your suburb naturally. Hit publish.
      </P>

      <H2>After the 15 minutes: the habits that keep it working</H2>
      <P>
        The initial optimisation is a one-time effort. But the
        businesses that dominate local search don’t set it and forget
        it. They maintain a simple, repeatable rhythm:
      </P>
      <P>
        <Strong>Weekly:</Strong> Post one GBP update. Respond to any new
        reviews (every single one, positive and negative). Check for and
        answer any Q&amp;A submissions.
      </P>
      <P>
        <Strong>After every job:</Strong> Take one photo and upload it
        to GBP. Send a review request to the customer with your direct
        Google review link.
      </P>
      <P>
        <Strong>Monthly:</Strong> Check your GBP insights. Look at how
        many people called from your profile, requested directions, or
        visited your website. These are your real metrics. Not vanity
        stats like impressions.
      </P>
      <P>
        That’s it. That’s the system. Fifteen minutes to set it up
        properly, fifteen minutes a week to keep it active.
      </P>

      <H2>One more thing: respond to every review</H2>
      <P>
        This gets its own section because it’s both commonly skipped and
        more impactful than most business owners realise.
      </P>
      <P>
        When you respond to a review, you’re not just talking to that
        one customer. You’re talking to every potential customer who
        reads that review in the future. Your response is visible,
        permanently, as part of your profile.
      </P>
      <P>
        Responding to positive reviews with something specific,
        mentioning the service you did and the suburb, adds additional
        keyword signals to your profile naturally. Responding to
        negative reviews professionally and constructively demonstrates
        to future customers that you take quality seriously.
      </P>
      <P>
        A business that responds to all its reviews looks like a
        business that gives a damn. That’s exactly what you want
        potential customers to think when they’re deciding who to call.
      </P>

      <H2>The results you can expect</H2>
      <P>None of this is overnight. But the trajectory is faster than most people expect.</P>
      <P>
        Businesses that optimise their GBP properly and maintain the
        weekly habits typically see measurably more profile views within
        4 to 6 weeks. Call volume from Google Maps increases as your
        ranking improves. And because calls generated through an
        optimised GBP are high-intent (the person specifically searched
        for your service in your area) conversion rates are strong.
      </P>
      <P>
        Your GBP isn’t a checkbox. It’s the most powerful free marketing
        tool available to any service business. Treat it that way.
      </P>
    </BlogPost>
    </>
  );
}

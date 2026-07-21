import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  H3,
  P,
  Signoff,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE = "What should a website actually cost in New Zealand?";
const DESCRIPTION =
  "Real price ranges for a New Zealand small business website in 2026, what you get at each level, what the hidden costs are, and how to tell if you’re being overcharged.";
const URL = "/blog/what-a-website-costs-nz";

const TOC = [
  { id: "broken-question", label: "Why the question is broken" },
  { id: "price-bands", label: "The four price bands, honestly" },
  { id: "hidden-costs", label: "The costs nobody puts in the quote" },
  { id: "overcharged", label: "How to tell if you’re being overcharged" },
  { id: "worth-to-you", label: "The question that matters more than price" },
  { id: "tell-a-friend", label: "What we’d tell a friend" },
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
    datePublished: "2026-08-05",
  }),
];

export default function Post() {
  assertPostLive("what-a-website-costs-nz");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="9 min read"
        lede="Nobody in this industry wants to answer this question in public. That’s precisely why you should be suspicious of us, and precisely why we’re going to answer it."
        toc={TOC}
        keyStat={{
          label: "Most land at",
          value: "$4k-8k",
          caption: "for a proper NZ small-business build.",
        }}
        railCtaLine="Wondering if your site earns its keep?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>Here’s the honest version, up front, before the explanation.</P>
        <P>
          <Strong>
            A decent website for a New Zealand local service business costs
            between $3,000 and $12,000 to build, plus somewhere between $30 and
            $300 a month to keep running.
          </Strong>{" "}
          Most small service businesses land between $4,000 and $8,000.
        </P>
        <P>
          If someone quotes you $800, something is missing. If someone quotes
          you $40,000 for a six-page site for a plumbing company, the price and
          the scope aren’t lining up, and it’s worth asking what the extra is
          buying.
        </P>
        <P>
          Now the part that matters, which is why the range is that wide and
          where in it you belong.
        </P>

        <H2 id="broken-question">
          Why “how much does a website cost” is a broken question
        </H2>
        <P>
          Asking what a website costs is like asking what a vehicle costs. A ute
          is a vehicle. A digger is a vehicle. Both get you to work.
        </P>
        <P>
          The number changes based on what the site has to actually do. And
          here’s where most business owners go wrong: they buy based on how it
          looks, then wonder why it doesn’t bring in work.
        </P>
        <P>
          A website has two jobs. Get found, and get chosen. Design is only part
          of the second one. Plenty of beautiful sites do neither, and they cost
          the same as the ones that do.
        </P>

        <H2 id="price-bands">The four price bands, honestly</H2>

        <H3>Under $1,500: DIY and templates</H3>
        <P>
          Squarespace, Wix, a Wordpress theme you set up yourself, or a mate’s
          nephew.
        </P>
        <P>
          <Strong>What you get:</Strong> something exists. It has your name, your
          phone number, and a photo. For a brand new business with no money,
          this genuinely beats nothing, and anyone who tells you otherwise is
          selling something.
        </P>
        <P>
          <Strong>What you don’t get:</Strong> any of the technical work that
          decides whether Google shows you. Page speed, structure, the way your
          services and areas are laid out, the signals that connect your site to
          your Google Business Profile. It’ll look fine and sit invisible.
          That’s the deal.
        </P>
        <P>
          <Strong>Who it’s for:</Strong> someone testing whether the business
          works at all.
        </P>

        <H3>$3,000 to $6,000: the proper small business site</H3>
        <P>This is where most local service businesses should be.</P>
        <P>
          <Strong>What you get:</Strong> a custom build, five to ten pages,
          written properly for what you actually do and where you do it. Service
          pages. Area pages. A gallery of real work. Fast on a phone. Structured
          so search engines understand it. Contact forms that land somewhere you
          check. Reviews displayed properly rather than buried.
        </P>
        <P>
          <Strong>What it should include, and you must ask:</Strong> the words. A
          huge number of quotes in this range quietly assume you’ll write your
          own content. You won’t. You’ll mean to, and then six weeks will pass,
          and the site will launch with placeholder text about your “passion for
          excellence.” Ask directly: is copywriting included? If it isn’t,
          either add it or accept the site won’t be finished.
        </P>
        <P>
          <Strong>Who it’s for:</Strong> an established local business that needs
          the phone to ring.
        </P>

        <H3>$8,000 to $20,000: more moving parts</H3>
        <P>
          Online booking that talks to your calendar. Payments. A customer
          login. Many services across many locations. Multiple staff profiles.
          Something that plugs into your job management software.
        </P>
        <P>
          <Strong>What you’re paying for:</Strong> not prettiness. Plumbing.
          Every system that has to talk to another system adds real hours.
        </P>
        <P>
          <Strong>Who it’s for:</Strong> multi-location, multi-service, or
          anything where the website does actual operational work rather than
          just presenting you.
        </P>

        <H3>$25,000 and up</H3>
        <P>
          E-commerce at scale, custom software, a business with a marketing
          team. If you’re a local service business reading this article, this
          isn’t you, and if you’ve been quoted it, ask what specifically in your
          business requires it. There may be a good answer. Make them give it to
          you.
        </P>

        <H2 id="hidden-costs">The costs nobody puts in the quote</H2>
        <P>
          This is where people get stung, and it’s almost never malice. It’s
          just not mentioned.
        </P>
        <P>
          <Strong>Domain name.</Strong> $25 to $60 a year. Yours. Make sure it’s
          registered in your name, not your web person’s. This is the single
          most common ugly surprise we see. Someone wants to move on and
          discovers they don’t own their own address.
        </P>
        <P>
          <Strong>Hosting.</Strong> $15 to $80 a month for a small business site.
          Cheap hosting is slow hosting, and slow sites rank worse and convert
          worse. Not the place to save $20.
        </P>
        <P>
          <Strong>Maintenance.</Strong> $50 to $250 a month, or a nasty bill when
          something breaks. Websites are not fences. Software updates, plugins
          break, security holes appear. A site left alone for three years is a
          liability, not an asset.
        </P>
        <P>
          <Strong>Content updates.</Strong> New photos, new services, new prices,
          new staff. Either you can do it yourself (ask to be shown, at
          handover, on video) or you’re paying someone every time.
        </P>
        <P>
          <Strong>Email.</Strong> Often assumed to be included. Often isn’t.
          Around $10 a month per address.
        </P>
        <P>
          <Strong>Ask for the five-year number, not the build number.</Strong> A
          $3,000 build with $250/month attached costs more over three years than
          a $7,000 build with $50/month. Nobody presents it that way. Do the
          maths yourself before you sign.
        </P>

        <H2 id="overcharged">How to tell if you’re being overcharged</H2>
        <P>Not by the number. By the answers.</P>
        <P>
          <Strong>Ask what the site is supposed to achieve.</Strong> A good
          answer sounds like: more enquiries, from these types of jobs, in these
          areas. A bad answer talks about modern design, clean aesthetics, and
          your brand story. Design is a means. If it’s presented as the end,
          they’re selling you a picture.
        </P>
        <P>
          <Strong>Ask who writes the words.</Strong> Covered above. It’s the
          difference between a finished site and an unfinished one.
        </P>
        <P>
          <Strong>Ask what happens after launch.</Strong> “It goes live” is not
          an answer. Who watches it? Who fixes it? What does month two look like?
          A site that launches and is never touched again starts declining
          immediately.
        </P>
        <P>
          <Strong>Ask if you own everything.</Strong> Domain, hosting, content,
          images, the site itself. Get it in writing. “Can I take this elsewhere
          in two years?” A hesitation is your answer.
        </P>
        <P>
          <Strong>
            Ask to see something they built two years ago, and check it still
            works.
          </Strong>{" "}
          Anyone can show you a launch-day screenshot. Check the sites that had
          to survive.
        </P>

        <H2 id="worth-to-you">
          The question that matters more than the price
        </H2>
        <P>
          Here’s the one almost nobody asks, and it’s the one that decides
          whether any of this was a good idea.
        </P>
        <P>
          <Strong>What is a customer worth to you?</Strong>
        </P>
        <P>
          We’ve written about{" "}
          <a href="/blog/what-a-customer-costs-you">
            what a customer actually costs you
          </a>
          , and the same logic applies here. A website isn’t an expense you
          compare to other websites. It’s an investment you compare to what it
          brings back.
        </P>
        <P>
          If your average job is $800 and you keep $250 of it, a $6,000 website
          needs to bring you 24 extra jobs to break even. Over three years,
          that’s eight a year. Fine.
        </P>
        <P>
          If your average job is $40,000 and you keep $6,000, that website breaks
          even on <Strong>one job</Strong>. One. And every job after that, for as
          long as the site keeps working, is profit against a cost you already
          paid.
        </P>
        <P>
          That’s why the same $6,000 is expensive for one business and almost
          free for another. The number on the quote is meaningless until you put
          it next to what a customer is worth to you. Work that out before you go
          shopping and you’ll negotiate completely differently, because you’ll
          know what you’re actually buying.
        </P>
        <P>
          Two of our clients make the point. A Christchurch bookkeeper’s re-aimed
          site produced{" "}
          <a href="/work/kd-bookworks">
            a Google enquiry that became a client within seven days
          </a>
          . A concreting business in Victoria had no website at all, then{" "}
          <a href="/work/rbm-concrete">
            a stranger rang about a house slab four days after launch
          </a>
          . Neither of those sites was expensive. Both paid for themselves before
          the invoice was due, because the work went into what the site had to
          do, not what it had to look like.
        </P>

        <H2 id="tell-a-friend">What we’d tell a friend</H2>
        <P>
          If you’re an established local service business in New Zealand doing
          decent revenue, budget <Strong>$5,000 to $8,000</Strong> for the build
          and <Strong>$80 to $150 a month</Strong> to keep it healthy. Insist
          copywriting is included. Insist you own the domain. Ask what happens in
          month two.
        </P>
        <P>
          And know this: a $6,000 site that gets found beats a $15,000 site that
          doesn’t, every single time. Most of the money that gets wasted on
          websites in this country gets wasted on the parts customers never see
          and Google never rewards.
        </P>
        <Signoff>
          If you want to know whether your current site is earning its keep,{" "}
          <a href="/contact">ask us for a Presence Report</a>. We’ll tell you
          honestly if it’s fine. Sometimes it is.
        </Signoff>
      </BlogPost>
    </>
  );
}

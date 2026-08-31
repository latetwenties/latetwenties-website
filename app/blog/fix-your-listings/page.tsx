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

const TITLE = "Your business details are wrong somewhere online right now";
const DESCRIPTION =
  "An old phone number on a directory you forgot exists can quietly cost you calls and rankings. Where the wrong listings hide, why they matter to Google, and how to clean them up in an afternoon.";
const URL = "/blog/fix-your-listings";

const TOC = [
  { id: "why-it-matters", label: "Why a wrong listing costs you" },
  { id: "where-they-hide", label: "Where the wrong ones hide" },
  { id: "the-audit", label: "The 20-minute audit" },
  { id: "the-cleanup", label: "The cleanup" },
  { id: "keeping-it-clean", label: "Keeping it clean" },
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
    datePublished: "2026-09-18",
  }),
];

export default function Post() {
  assertPostLive("fix-your-listings");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="6 min read"
        lede="Somewhere out there is a directory listing for your business with your old number on it. Or the address from two premises ago, or a version of your name you stopped using in 2019. You didn’t put it there, you can’t remember it existing, and it’s working against you anyway."
        toc={TOC}
        keyStat={{
          label: "One rule",
          value: "NAP",
          caption: "name, address, phone: identical everywhere.",
        }}
        railCtaLine="Wonder what your listings say?"
        ctaTitle="Want us to check your listings for you?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, directories, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          This is one of the least glamorous jobs in local marketing, and one
          of the better-value afternoons you can spend on your business.
          Here’s why, and how to do it once, properly.
        </P>

        <H2 id="why-it-matters">Why a wrong listing costs you</H2>
        <P>Two ways, and the second one is sneakier than the first.</P>
        <P>
          <Strong>The obvious way: customers hit a dead end.</Strong>{" "}
          Someone finds your business on an old directory, rings the number,
          and gets a disconnected tone or a stranger. They don’t dig further.
          They call the next name on the list, and you never know the enquiry
          existed. A wrong listing doesn’t look like lost work. It looks like
          a quiet week.
        </P>
        <P>
          <Strong>The quiet way: Google trusts you a little less.</Strong>{" "}
          Google builds its picture of your business from everywhere your
          name, address and phone number appear, not just your website and
          profile. That trio gets called NAP: name, address, phone. When
          every mention agrees, Google can be confident the business is real,
          established, and where it says it is. When the mentions disagree,
          that confidence drops, and confidence is part of{" "}
          <a href="/blog/google-ranking-factors">
            what decides where you show up
          </a>
          . Your consistency is one of the few ranking inputs you fully
          control.
        </P>
        <P>
          Neither effect is dramatic on its own. But listings rot silently
          for years, and the damage compounds while you’re busy doing the
          actual work.
        </P>

        <H2 id="where-they-hide">Where the wrong ones hide</H2>
        <P>
          The usual suspects for a New Zealand or Australian service
          business:
        </P>
        <P>
          <Strong>The directories that came free with something.</Strong>{" "}
          Yellow, White Pages, Localist, and their Australian cousins. Many
          businesses got listed automatically years ago, from a phone
          account or a long-forgotten sign-up, with whatever details were
          current at the time.
        </P>
        <P>
          <Strong>Trade and industry sites.</Strong> Builderscrack,
          NoCowboys, hipages, industry association member pages. If you
          joined, trialled or claimed anything, there’s a listing, and it has
          whatever you typed on the day.
        </P>
        <P>
          <Strong>Social profiles you don’t use.</Strong> The Facebook page
          from 2016 still shows your old number to everyone who finds it.
          Facebook pages rank in Google searches for your business name, so
          people do find it.
        </P>
        <P>
          <Strong>Map and data services.</Strong> Apple Maps and Bing Places
          run their own listings. So do the data companies that feed dozens
          of smaller sites: fix the source and the copies slowly follow.
        </P>
        <P>
          <Strong>Your own website.</Strong> Genuinely worth checking. We
          regularly see a site whose footer, contact page and header show
          two different numbers, usually because one got updated and the
          others didn’t.
        </P>

        <H2 id="the-audit">The 20-minute audit</H2>
        <P>
          <Strong>First, write down the correct version.</Strong> One exact
          name, one address (or service area), one phone number, one
          website. Character for character, the way it appears on your
          Google Business Profile. This is your master copy, and everything
          else gets matched to it. If your profile itself needs work, sort
          that first with{" "}
          <a href="/blog/google-business-profile">the 15-minute profile
          task</a>
          .
        </P>
        <P>
          <Strong>Then go looking for yourself.</Strong> Search your
          business name in a private browser window. Search your old phone
          number in quotes. Search your name plus your old suburb. Go three
          or four pages deep, past where customers usually stop, because
          Google reads all of it even when customers don’t. List every place
          you appear and what each one says.
        </P>
        <P>
          Most businesses find something within ten minutes. Old numbers
          are the most common, followed by old addresses and spelling
          variations of the business name.
        </P>

        <H2 id="the-cleanup">The cleanup</H2>
        <P>
          Work through the list, worst first: a wrong phone number beats a
          missing listing for urgency, because it actively sends your calls
          into the void.
        </P>
        <P>
          <Strong>Claim before you correct.</Strong> Most directories let
          you claim a listing with an email or phone verification. Once
          claimed, update every field to the master copy, then paste in a
          decent description and a few real photos while you’re there. A
          claimed, complete listing is worth more than a bare correct one.
        </P>
        <P>
          <Strong>Can’t claim it? Ask.</Strong> Nearly every directory has a
          report or contact option for corrections. Slow, but it works more
          often than not.
        </P>
        <P>
          <Strong>Kill the true orphans.</Strong> A listing for a business
          name you no longer trade under, or a location you left years ago,
          is better removed than corrected. Most sites will remove a listing
          when the owner asks.
        </P>
        <P>
          Don’t chase every tiny site to zero. Get your Google Business
          Profile, your website, the major maps and the top handful of
          directories perfectly aligned, and you’ve captured most of the
          value. The long tail can wait for a rainy day.
        </P>

        <H2 id="keeping-it-clean">Keeping it clean</H2>
        <P>
          Listings only go wrong when something changes, so tie the check to
          the change: new number, new premises, new trading name, rebrand.
          That’s the moment the rot starts, and the moment to spend the
          afternoon again. In between, a once-a-year search of your own name
          is plenty.
        </P>
        <P>
          And keep the master copy written down somewhere you’ll find it.
          The whole discipline is one sentence: everywhere your business
          appears, it appears identically.
        </P>
        <Signoff>
          Clean listings are foundation work: invisible when right, costly
          when wrong. At Latetwenties we get local service businesses found
          online and chosen by the right customers, and listing cleanup is
          part of every build we do. If you’d rather see the whole picture
          first,{" "}
          <a href="/blog/google-ranking">
            the five reasons a business doesn’t show up on Google
          </a>{" "}
          is a good place to start.
        </Signoff>
      </BlogPost>
    </>
  );
}

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
  "Nine photos, and why they’re worth more than your last $2,000 of ads";
const DESCRIPTION =
  "The nine photos every local business should have on its Google Business Profile, why they beat a lot of paid advertising, and how to take them on a phone this week.";
const URL = "/blog/google-business-profile-photos";

const TOC = [
  { id: "why-photos", label: "Why photos punch above their weight" },
  { id: "the-nine", label: "The nine" },
  { id: "doing-it-properly", label: "Doing it properly" },
  { id: "the-habit", label: "The habit that fixes this permanently" },
  { id: "right-now", label: "Right now" },
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
    datePublished: "2026-08-30",
  }),
];

export default function Post() {
  assertPostLive("google-business-profile-photos");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="5 min read"
        lede="Two businesses come up next to each other. Same star rating, near enough. Same distance. One profile has a few older photos on it. The other has thirty-something, all recent: a face, the inside of the workshop, the team."
        toc={TOC}
        keyStat={{
          label: "Before you leave a job",
          value: "3 photos",
          caption: "wide, detail, one with a person.",
        }}
        railCtaLine="Missing enquiries you paid for?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>
          The one with the full, current profile gets the call, and it isn’t
          close.
        </P>
        <P>
          That’s the whole case for this. Photos are the cheapest, fastest,
          most-ignored lever on your Google Business Profile, and almost every
          local business we look at is sitting on an empty one.
        </P>

        <H2 id="why-photos">Why photos punch above their weight</H2>
        <P>Two reasons, and they stack.</P>
        <P>
          <Strong>They’re the only real evidence at the moment of choosing.</Strong>{" "}
          Everything else on your listing is a claim. Your description is a
          claim. Your services are a claim. Even your star rating is other
          people’s claims. A photo of a finished job is the one piece of evidence
          a stranger can assess with their own eyes in half a second, and it’s
          the closest thing they get to seeing your work before they hand over
          money. For a nervous customer choosing between three names, that’s
          decisive.
        </P>
        <P>
          <Strong>They’re a signal you’re still trading.</Strong> A profile with
          photos from 2021 reads as a business that’s slowed down, changed hands,
          or closed. Fresh photos say this outfit is busy right now. That matters
          to customers and it’s part of what activity signals do for{" "}
          <a href="/blog/google-ranking-factors">
            where you show up in the first place
          </a>
          .
        </P>
        <P>
          And they cost nothing. That’s the bit that should sting slightly. You
          can spend $2,000 driving people to a listing that gives them nothing to
          look at, or spend a Tuesday afternoon giving them something to look at.
        </P>

        <H2 id="the-nine">The nine</H2>
        <P>
          Take these on your phone. Today’s phone is more than good enough.
          Nobody wants a photoshoot.
        </P>
        <P>
          <Strong>1. Your face.</Strong> Yours, or whoever turns up to the job.
          Not a logo. People hire people, and a face on a listing does more than
          most business owners believe. If you hate photos of yourself,
          everybody does, get someone to take it while you’re working and pick
          the least offensive one.
        </P>
        <P>
          <Strong>2. Your van, ute or shopfront.</Strong> Branded, ideally. It’s
          how they’ll recognise you’re actually there when you turn up, and it
          quietly proves you’re a real operation with real gear.
        </P>
        <P>
          <Strong>3. A finished job.</Strong> Your best recent one. The whole
          thing, well lit, from a sensible distance.
        </P>
        <P>
          <Strong>4. A before and after.</Strong> The highest-performing photo
          type there is, across nearly every service. Deck, garden, bathroom,
          dog, teeth, spreadsheet, filing cabinet. The pair does something a
          single photo can’t: it shows the change, which is the actual thing
          they’re buying.
        </P>
        <P>
          <Strong>5. Work in progress.</Strong> Halfway through. Slightly messy.
          This one feels unpolished and that’s precisely why it works, it looks
          like real work rather than marketing, and it shows how you operate on
          site.
        </P>
        <P>
          <Strong>6. Your team.</Strong> Even if it’s two of you. Especially if
          it’s two of you.
        </P>
        <P>
          <Strong>7. Your workspace.</Strong> Workshop, yard, clinic room,
          office. Tidy it first. It’s proof you exist somewhere physical, which
          is worth more than you’d think.
        </P>
        <P>
          <Strong>8. Detail work.</Strong> Close up. The join, the weld, the
          finish, the trim. This one is for the small number of customers who
          actually care about quality, and they’re usually the ones with the
          bigger budgets.
        </P>
        <P>
          <Strong>9. Something with a person in it.</Strong> You handing over the
          keys. You explaining something to a customer. A dog looking delighted.
          Photos with people in them get looked at longer than photos without,
          every time.
        </P>

        <H2 id="doing-it-properly">Doing it properly</H2>
        <P>
          <Strong>Take them in daylight.</Strong> Outside or near a window. Phone
          cameras are excellent in good light and terrible in bad light. This is
          80% of it.
        </P>
        <P>
          <Strong>Landscape, mostly.</Strong> It’s how they’ll be displayed.
        </P>
        <P>
          <Strong>Don’t filter them.</Strong> Heavy editing reads as a stock
          photo, and stock photos are worse than no photos because they signal
          that you had nothing real to show.
        </P>
        <P>
          <Strong>Never use stock.</Strong> The handshake. The generic smiling
          tradie. The suspiciously American kitchen. Everyone can spot them and
          they actively cost you trust.
        </P>
        <P>
          <Strong>Post regularly, not all at once.</Strong> A steady trickle, a
          few a fortnight, looks like a working business. Thirty in one afternoon
          and then silence for a year looks like someone did a marketing push in
          2024.
        </P>
        <P>
          <Strong>Geotagging isn’t the trick people claim.</Strong> You’ll read
          advice about embedding location data in your images to rank in other
          suburbs. Don’t build your plan around it. Take photos in the places you
          actually work and let the{" "}
          <a href="/blog/ranking-in-nearby-suburbs">rest of your area strategy</a>{" "}
          do the work.
        </P>

        <H2 id="the-habit">The habit that fixes this permanently</H2>
        <P>Here’s the system, and it’s one sentence.</P>
        <P>
          <Strong>Before you leave a job, take three photos.</Strong>
        </P>
        <P>
          Wide shot, detail shot, and one with a person in it if you can. Thirty
          seconds. Same moment you’re already{" "}
          <a href="/blog/how-to-get-google-reviews">asking for the review</a>, so
          it attaches to a habit that already exists.
        </P>
        <P>
          Do that for a year and you’ll have several hundred photos, a
          permanently fresh profile, endless material for your website and
          socials, and a visual record of your work that’s genuinely worth money
          when someone’s deciding between you and the other bloke.
        </P>
        <P>
          Do it for a fortnight and you’ll already be ahead of most of your local
          market.
        </P>

        <H2 id="right-now">Right now</H2>
        <P>
          Open your Google Business Profile on your phone. Count your photos.
          Check the date on the most recent one.
        </P>
        <P>
          If that number is under twenty, or that date is over three months ago,
          you’ve found something you can fix this week for free, and it’ll do
          more for your enquiries than the next thousand dollars you were about
          to spend.
        </P>
        <Signoff>
          Photos are the cheapest lever on your profile and the one almost
          everyone leaves alone. At Latetwenties we get local service businesses
          found online and chosen by the right customers. If you want to sort the
          rest of your profile while you’re in there, the{" "}
          <a href="/blog/google-business-profile">full profile checklist</a> is a
          good next step.
        </Signoff>
      </BlogPost>
    </>
  );
}

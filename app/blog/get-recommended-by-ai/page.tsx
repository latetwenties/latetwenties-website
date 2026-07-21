import type { Metadata } from "next";

import { assertPostLive } from "@/lib/posts";
import { article, breadcrumbList } from "@/lib/schema";

import {
  BlogPost,
  H2,
  OL,
  P,
  Signoff,
  Strong,
} from "../../components/blog/BlogPost";
import { JsonLd } from "../../components/JsonLd";

const TITLE = "How to get ChatGPT to recommend your business";
const DESCRIPTION =
  "People are asking AI who to hire instead of searching Google. Here’s what decides which local businesses get named, and what you can actually do about it.";
const URL = "/blog/get-recommended-by-ai";

const TOC = [
  { id: "whats-changed", label: "What’s actually changed" },
  { id: "good-news", label: "The good news nobody’s noticed" },
  { id: "five-things", label: "The five things that get you named" },
  { id: "what-doesnt-work", label: "What doesn’t work" },
  { id: "test-it", label: "Go and test it" },
  { id: "old-advice", label: "The old advice, with higher stakes" },
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
    datePublished: "2026-08-25",
  }),
];

export default function Post() {
  assertPostLive("get-recommended-by-ai");
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <BlogPost
        title={TITLE}
        readTime="7 min read"
        lede="Open ChatGPT. Type: “Who’s a good [your trade] in [your town]?”"
        toc={TOC}
        keyStat={{
          label: "AI answers with",
          value: "3 names",
          caption: "no page two. Be one of them.",
        }}
        railCtaLine="Missing enquiries you paid for?"
        ctaTitle="Want to see exactly what’s costing you enquiries?"
        ctaBody="Tell us your business name. We’ll go looking the way a customer would, Google, maps, reviews, your website, and record you a short video walking through what we find and how to fix each part. Some of it you can sort yourself this week, free. No pitch. It’s yours either way."
      >
        <P>Somebody gets named. It might not be you.</P>
        <P>
          That’s a new way to lose a customer, and it’s happening quietly, at
          volume, without ever showing up in your website analytics. We wrote
          about{" "}
          <a href="/blog/ai-search-shift">
            why traffic is falling while rankings hold steady
          </a>
          . This is the other half of that story. That piece diagnosed the
          problem. This one’s about the fix.
        </P>

        <H2 id="whats-changed">What’s actually changed</H2>
        <P>
          For twenty years, search worked one way. You typed something, you got
          ten blue links, you clicked. Your job was to be one of those links.
        </P>
        <P>
          Now a growing share of people type a question and get an answer. Three
          names, a sentence each, no clicking. ChatGPT does it. Google’s AI
          overviews do it. So does Perplexity, and Copilot, and whatever the
          phone assistant does when someone asks it out loud in the car.
        </P>
        <P>
          The consequence for you is blunt:{" "}
          <Strong>
            being on page one used to be enough. Now you need to be in the
            answer.
          </Strong>{" "}
          There’s no page two in an AI recommendation. There’s a shortlist of
          three, and everyone else does not exist.
        </P>
        <P>Which sounds terrifying until you realise something useful.</P>

        <H2 id="good-news">The good news nobody’s noticed</H2>
        <P>
          These systems don’t have their own opinion of your business. They
          can’t come and look at your work.
        </P>
        <P>
          They’re assembling an answer from what’s already written about you,
          across the internet, by other people and by you. Your Google Business
          Profile. Your reviews. Your website. Directory listings. Local news.
          Community pages. Anywhere your name appears alongside what you do and
          where you do it.
        </P>
        <P>
          Which means the work is not mysterious and it’s not new.{" "}
          <Strong>
            The businesses winning at AI recommendation are, overwhelmingly, the
            businesses that already did local search properly.
          </Strong>{" "}
          Same foundations, one extra layer.
        </P>
        <P>
          If you’ve been putting off getting your profile, your reviews and your
          website sorted, this is simply another reason it now costs you more to
          keep putting it off.
        </P>

        <H2 id="five-things">The five things that get you named</H2>
        <P>
          <Strong>1. Your Google Business Profile, complete and current.</Strong>
        </P>
        <P>
          This is the raw material. Categories, services, hours, service areas,
          description, photos. Filled in fully, in plain language, matching what
          you actually do.
        </P>
        <P>
          Half-finished profiles get skipped, because an AI assembling a
          recommendation reaches for the businesses it has clear information
          about. A profile that says “Building Contractor” and nothing else
          gives it nothing to say about you. A profile that lists your services,
          areas and specialities gives it a sentence to write.{" "}
          <a href="/blog/google-business-profile">
            The full profile checklist is here.
          </a>
        </P>
        <P>
          <Strong>2. Reviews with words in them.</Strong>
        </P>
        <P>
          This is the big one, and it’s the one businesses are least prepared
          for.
        </P>
        <P>
          A five-star rating with no text is a number. It contributes nothing to
          a recommendation, because there’s nothing to quote and nothing to
          summarise.
        </P>
        <P>
          A review that says “came out to us in Silverdale the same day,
          replaced the hot water cylinder, tidied up after himself, fair price”
          is a paragraph of usable evidence. It names the place, the service,
          the speed, and the character of the person. That’s exactly what an AI
          recommendation is made of, and it’s exactly the sort of thing that
          gets quoted back at the person asking.
        </P>
        <P>
          So the practice changes slightly. It’s no longer just “get more
          reviews.” It’s{" "}
          <Strong>get more reviews that describe the job.</Strong> Which is why
          we tell people to ask customers to mention what the work actually was,{" "}
          <a href="/blog/how-to-get-google-reviews">covered in full here</a>.
        </P>
        <P>
          <Strong>3. A website that says plainly what you do and where.</Strong>
        </P>
        <P>
          AI systems read your site the way a hurried person does. They want to
          know, quickly and without inference: what services, what areas, what
          type of customer.
        </P>
        <P>
          This is where a lot of nice-looking websites fall over. A homepage
          that opens with “Crafting exceptional spaces since 2009” tells a
          machine nothing it can use. “We build decks, fences and pergolas
          across South Auckland” tells it everything.
        </P>
        <P>
          Plain beats clever. It always did for customers, too. The difference
          now is that being clever is actively expensive.
        </P>
        <P>
          <Strong>4. Mentions somewhere other than your own site.</Strong>
        </P>
        <P>
          Anything you say about yourself is weak evidence. Everything other
          sites say about you is strong evidence.
        </P>
        <P>
          Local directories. Industry association listings. The community
          Facebook page. A supplier’s “who we work with.” Local news, a
          sponsorship, a trade body register. Each one is a place your name,
          your service and your location appear together, written by someone
          else.
        </P>
        <P>
          This is slow and boring and it’s most of the moat. It’s also the thing
          that almost nobody in your local market is doing deliberately, which
          is exactly why it’s still available.
        </P>
        <P>
          <Strong>5. Consistency across all of it.</Strong>
        </P>
        <P>
          Same business name, same address, same phone number, everywhere. If
          three listings say three different things, all three get trusted less,
          and the confident-looking competitor gets named instead.
        </P>
        <P>
          Go and check yours. Old listings from a previous address are the usual
          offender.
        </P>

        <H2 id="what-doesnt-work">What doesn’t work</H2>
        <P>
          <Strong>Trying to trick it.</Strong> Hidden text, instructions buried
          in your page, keyword stuffing. These get filtered, and they’ll do
          real damage to your normal search visibility on the way past.
        </P>
        <P>
          <Strong>
            Paying someone for “AI optimisation” as a separate product.
          </Strong>{" "}
          Be careful here. As of now, the work that gets you named by AI is the
          same work that gets you found in local search: profile, reviews, clear
          website, real mentions, consistency. If someone’s offering a distinct
          AI service at a premium, it’s fair to ask exactly what they’d do that
          differs from good local SEO. A clear answer is easy to give. If the
          answer is vague, you may be paying twice for one thing.
        </P>
        <P>
          <Strong>Waiting to see how it shakes out.</Strong> The tools will
          change. Which model people use will change. What’s being assembled,
          profiles, reviews, mentions, clear content, will not. That’s the bit
          worth building, and it takes months, which is the argument for
          starting now rather than when it’s obvious.
        </P>

        <H2 id="test-it">Go and test it</H2>
        <P>Ten minutes, free, and slightly confronting.</P>
        <OL>
          <li>
            Ask ChatGPT for the best in your trade in your town. Note who’s
            named.
          </li>
          <li>
            Ask it about your business by name. See what it says. Check whether
            it’s right.
          </li>
          <li>Do the same thing in Google’s AI overview.</li>
          <li>
            Ask a version a real customer would ask: “I need a [trade] in
            [suburb] who can come this week.”
          </li>
        </OL>
        <P>
          If you’re not there, you now know. If a competitor is there, go and
          look at their profile and their reviews, and you’ll usually see
          exactly why within about ninety seconds.
        </P>

        <H2 id="old-advice">The old advice, with higher stakes</H2>
        <P>Here’s the summary, and it’s deliberately unexciting.</P>
        <P>
          Fill in your profile properly. Get reviews that describe the work.
          Write plainly about what you do and where. Get mentioned by other
          local sites. Keep your details consistent everywhere.
        </P>
        <Signoff>
          That’s the same list as five years ago. What’s changed is the penalty.
          It used to mean ranking sixth instead of second. Now it increasingly
          means being one of three names, or not existing in the conversation at
          all. Same work. Much sharper edge.
        </Signoff>
      </BlogPost>
    </>
  );
}

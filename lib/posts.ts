import { notFound } from "next/navigation";

// Single source of truth for the listed blog. Each post carries a `publishedAt`
// (ISO date, interpreted in NZ time) so posts can be committed ahead of time,
// future-dated, and published automatically on their day by the daily cron at
// app/api/cron/publish-check. Resources, the sitemap, and each post route all
// read the date-gated view, so a future-dated post stays hidden (and 404s)
// until its date. See ~/.claude/playbooks/scheduled-content-lifecycle.md.
export type Post = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  publishedAt: string; // YYYY-MM-DD, NZ time
};

export const POSTS: Post[] = [
  {
    slug: "five-minute-rule",
    title:
      "The five-minute rule: why the business that answers first wins the job",
    description:
      "The business that replies first wins the job about half the time, regardless of price, reviews or reputation. Here’s the five-minute rule and how to actually run it.",
    readTime: "7 min read",
    publishedAt: "2026-07-21",
  },
  {
    slug: "how-to-get-google-reviews",
    title: "How to get 50 Google reviews without being weird about it",
    description:
      "Most local businesses have a handful of reviews and no system for getting more. Here’s how to ask without cringing, what to say, and what to do about the bad ones.",
    readTime: "8 min read",
    publishedAt: "2026-07-26",
  },
  {
    slug: "ranking-in-nearby-suburbs",
    title: "You show up in your suburb. Three suburbs over, you don’t exist.",
    description:
      "Why your business ranks well close to home and vanishes a few suburbs away, and what you can honestly do about it without faking an address.",
    readTime: "6 min read",
    publishedAt: "2026-07-31",
  },
  {
    slug: "what-a-website-costs-nz",
    title: "What should a website actually cost in New Zealand?",
    description:
      "Real price ranges for a New Zealand small business website in 2026, what you get at each level, what the hidden costs are, and how to tell if you’re being overcharged.",
    readTime: "9 min read",
    publishedAt: "2026-08-05",
  },
  {
    slug: "questions-to-ask-a-marketing-agency",
    title:
      "Seven questions to ask a marketing agency before you pay them a cent",
    description:
      "Seven questions that separate a marketing agency worth paying from one that will take your money and send you a report. Ask them before you sign anything.",
    readTime: "6 min read",
    publishedAt: "2026-08-10",
  },
  {
    slug: "following-up-quotes",
    title: "The jobs you didn’t lose. You just never followed them up.",
    description:
      "Most local businesses quote, send it, and wait. The work you think you lost is usually just sitting there unclaimed. Here’s the follow-up system and the exact words to send.",
    readTime: "6 min read",
    publishedAt: "2026-08-15",
  },
  {
    slug: "google-ads-vs-facebook-ads",
    title:
      "Google Ads or Facebook Ads? For a local business, the answer isn’t close.",
    description:
      "Which one should a local service business run first? The honest answer, the one exception, and why running both badly is worse than running one well.",
    readTime: "7 min read",
    publishedAt: "2026-08-20",
  },
  {
    slug: "get-recommended-by-ai",
    title: "How to get ChatGPT to recommend your business",
    description:
      "People are asking AI who to hire instead of searching Google. Here’s what decides which local businesses get named, and what you can actually do about it.",
    readTime: "7 min read",
    publishedAt: "2026-08-25",
  },
  {
    slug: "google-business-profile-photos",
    title: "Nine photos, and why they’re worth more than your last $2,000 of ads",
    description:
      "The nine photos every local business should have on its Google Business Profile, why they beat a lot of paid advertising, and how to take them on a phone this week.",
    readTime: "5 min read",
    publishedAt: "2026-08-30",
  },
  {
    slug: "competitor-outranking-you",
    title: "Someone newer is outranking you. Here’s exactly what they did.",
    description:
      "A competitor half your age is above you in Google. It’s not luck and it’s not a trick. Here’s the checklist of what they almost certainly did, and how to take the spot back.",
    readTime: "8 min read",
    publishedAt: "2026-09-04",
  },
  {
    slug: "what-a-customer-costs-you",
    title: "Do you actually know what a customer costs you?",
    description:
      "Most local business owners can’t say what they pay to win one new customer. Not because they’re not smart. Because nobody’s ever added it up. Here’s how to.",
    readTime: "5 min read",
    publishedAt: "2026-06-30",
  },
  {
    slug: "ai-search-shift",
    title: "The year your customers stopped clicking",
    description:
      "Why local service businesses are seeing traffic fall while their Google rankings hold steady, and the diagnostic that explains where their customers actually went.",
    readTime: "8 min read",
    publishedAt: "2026-05-09",
  },
  {
    slug: "google-ads-framework",
    title: "Should you run Google Ads? A framework for service businesses",
    description:
      "When ads make sense, when they don’t, and the structure that keeps the spend honest. Written for owners, not marketers.",
    readTime: "7 min read",
    publishedAt: "2026-03-22",
  },
  {
    slug: "google-business-profile",
    title:
      "Google Business Profile: the 15-minute task that doubles your calls",
    description:
      "Your Google Business Profile is not a side note. For service businesses, it is the strategy. Here’s exactly how to optimise it.",
    readTime: "8 min read",
    publishedAt: "2026-03-15",
  },
  {
    slug: "google-ranking-factors",
    title: "The 6 things that decide where you show up on Google",
    description:
      "The six actual ranking factors that decide whether your business shows up in local search. Almost nobody gets all six right.",
    readTime: "5 min read",
    publishedAt: "2026-03-08",
  },
  {
    slug: "google-ranking",
    title: "5 reasons your business isn’t showing up on Google",
    description:
      "Five very fixable mistakes that keep local service businesses invisible on Google, and the simple fixes that change everything.",
    readTime: "7 min read",
    publishedAt: "2026-03-01",
  },
];

const TZ = "Pacific/Auckland";

// Today's date as YYYY-MM-DD in NZ. en-CA formats as ISO, so string comparison
// against `publishedAt` is a valid date comparison.
export function nzToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(now);
}

export function isLive(post: Post, now?: Date): boolean {
  return post.publishedAt <= nzToday(now);
}

// Live posts, newest first. This is what the site shows.
export function getLivePosts(now?: Date): Post[] {
  return POSTS.filter((p) => isLive(p, now)).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

// Future-dated posts still waiting to publish, soonest first (the queue).
export function getScheduledPosts(now?: Date): Post[] {
  return POSTS.filter((p) => !isLive(p, now)).sort((a, b) =>
    a.publishedAt.localeCompare(b.publishedAt),
  );
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

// Route guard for a blog page: 404 until the post is in the registry and live.
// Call at the top of a scheduled post's page component.
export function assertPostLive(slug: string): void {
  const post = getPost(slug);
  if (!post || !isLive(post)) notFound();
}

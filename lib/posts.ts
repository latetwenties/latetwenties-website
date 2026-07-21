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

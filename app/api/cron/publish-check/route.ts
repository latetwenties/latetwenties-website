import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import {
  LOW_QUEUE_THRESHOLD,
  notifyBackfillDue,
  notifyBlogLive,
  notifyQueueStatus,
  notifyRevealFailure,
} from "@/lib/notify";
import { POSTS, getScheduledPosts, nzToday, type Post } from "@/lib/posts";

// Daily publish-check. The cron (vercel.json) runs every day; this route decides
// whether anything came due today, reveals it without a manual deploy, pings
// Slack per post, and nudges the channel when the queue drains or runs low.
// See ~/.claude/playbooks/scheduled-content-lifecycle.md (the six clauses).
export const dynamic = "force-dynamic";

// Verification fetches (with one 3s-pause retry each) plus Slack calls can
// exceed the default function window on a publish day.
export const maxDuration = 60;

export async function GET(request: Request): Promise<NextResponse> {
  // Clause 6: cron auth. When CRON_SECRET is set, require it so the endpoint
  // isn't publicly triggerable. Vercel Cron sends it as a bearer token.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const today = nzToday();
  const dueToday = POSTS.filter((p) => p.publishedAt === today);

  // Clause 3: reveal newly-live posts without a deploy. Purge the listing, the
  // sitemap, and each due post so caches reflect them on this run.
  if (dueToday.length > 0) {
    revalidatePath("/resources");
    revalidatePath("/sitemap.xml");
    for (const post of dueToday) revalidatePath(`/blog/${post.slug}`);
  }

  // Verify the reveal actually worked before telling anyone it did. On 25 Aug
  // 2026 this route pinged "post live" for a URL that served a cached 404 for
  // the next six days: each run only revalidates that day's due posts, so a
  // single failed reveal is permanent and silent. Now the cron fetches what it
  // revealed (the post URL and the live sitemap) and alerts on any miss.
  const problems = dueToday.length > 0 ? await verifyReveal(dueToday) : [];
  if (problems.length > 0) {
    await notifyRevealFailure(problems);
  }

  // Clause 4: one Slack go-live ping per post published today, but only for a
  // post whose URL verified. A failed post gets the failure alert instead of a
  // false go-live ping.
  const failedSlugs = new Set(
    problems
      .map((p) => /^\/blog\/([\w-]+) /.exec(p)?.[1])
      .filter((s): s is string => Boolean(s)),
  );
  for (const post of dueToday) {
    if (!failedSlugs.has(post.slug)) await notifyBlogLive(post);
  }

  // Clause 5 (+ low-queue enhancement): only nudge on a run that published
  // something, so the channel isn't spammed once the queue is empty.
  const remaining = getScheduledPosts();
  if (dueToday.length > 0 && remaining.length <= LOW_QUEUE_THRESHOLD) {
    await notifyQueueStatus(remaining.length);
  }

  // One-off: the launch pack's closer landing is the cue to backfill the
  // original six posts' forward-links (all targets are now live).
  if (dueToday.some((p) => p.slug === "competitor-outranking-you")) {
    await notifyBackfillDue();
  }

  return NextResponse.json({
    ok: problems.length === 0,
    date: today,
    published: dueToday.map((p) => p.slug),
    verificationProblems: problems,
    remaining: remaining.length,
  });
}

const SITE = "https://latetwenties.agency";

// Fetch what this run just revealed, from the outside, the way a reader or a
// crawler would. Returns human-readable problem lines (empty = all good).
// Each post URL must serve 200 and the live sitemap must list each due slug.
// Retries once after a short pause so a single flaky fetch cannot raise a
// false alarm (same rule as the CRM's content-health check).
async function verifyReveal(dueToday: Post[]): Promise<string[]> {
  const problems: string[] = [];

  for (const post of dueToday) {
    const url = `${SITE}/blog/${post.slug}`;
    const status = await fetchStatusWithRetry(url);
    if (status !== 200) {
      problems.push(
        `/blog/${post.slug} is not serving 200 after reveal (got ${status})`,
      );
    }
  }

  const sitemap = await fetchTextWithRetry(`${SITE}/sitemap.xml`);
  if (sitemap === null) {
    problems.push("/sitemap.xml could not be fetched after reveal");
  } else {
    for (const post of dueToday) {
      if (!sitemap.includes(`/blog/${post.slug}<`)) {
        problems.push(`/blog/${post.slug} missing from the live sitemap`);
      }
    }
  }

  return problems;
}

async function fetchStatusWithRetry(url: string): Promise<number> {
  const first = await safeFetch(url);
  if (first === 200) return first;
  await sleep(3000);
  return safeFetch(url);
}

async function fetchTextWithRetry(url: string): Promise<string | null> {
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) await sleep(3000);
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) return await res.text();
    } catch {
      // fall through to retry
    }
  }
  return null;
}

async function safeFetch(url: string): Promise<number> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    return res.status;
  } catch {
    return 0;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

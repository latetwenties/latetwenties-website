import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import {
  LOW_QUEUE_THRESHOLD,
  notifyBackfillDue,
  notifyBlogLive,
  notifyQueueStatus,
} from "@/lib/notify";
import { POSTS, getScheduledPosts, nzToday } from "@/lib/posts";

// Daily publish-check. The cron (vercel.json) runs every day; this route decides
// whether anything came due today, reveals it without a manual deploy, pings
// Slack per post, and nudges the channel when the queue drains or runs low.
// See ~/.claude/playbooks/scheduled-content-lifecycle.md (the six clauses).
export const dynamic = "force-dynamic";

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

  // Clause 4: one Slack go-live ping per post published today.
  for (const post of dueToday) {
    await notifyBlogLive(post);
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
    ok: true,
    date: today,
    published: dueToday.map((p) => p.slug),
    remaining: remaining.length,
  });
}

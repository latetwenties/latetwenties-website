import { Resend } from "resend";

import type { Post } from "./posts";
import { postToSlack } from "./slack";

// Blog lifecycle alerts. Slack is the primary channel; if the bot token or
// channel is missing (or the send logically fails), fall back to email via
// Resend so the pipeline never goes silent. Mirrors lib/presence-report.ts:
// FROM must stay on the verified latetwenties.agency domain.
const SITE = "https://latetwenties.agency";
const FROM_ADDRESS = "Latetwenties <noreply@latetwenties.agency>";

// Warn when the queue drops to this many remaining, not only when empty, so the
// pipeline gets topped up before it runs dry.
export const LOW_QUEUE_THRESHOLD = 2;

async function emailFallback(subject: string, text: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BLOG_ALERT_EMAIL;
  if (!apiKey || !to) {
    console.error(
      "Blog alert could not send: Slack failed and no email fallback configured.",
    );
    return;
  }
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to,
      subject,
      text,
    });
    if (error) console.error("Blog alert email failed:", error);
  } catch (err) {
    console.error("Blog alert email threw:", err);
  }
}

async function notify(
  subject: string,
  text: string,
  blocks?: unknown[],
): Promise<void> {
  const slack = await postToSlack({ text, blocks });
  if (slack.ok) return;
  console.error(`Slack blog alert failed (${slack.error}); trying email.`);
  await emailFallback(subject, text);
}

// One per post that went live today.
export async function notifyBlogLive(post: Post): Promise<void> {
  const url = `${SITE}/blog/${post.slug}`;
  const subject = `New blog live: ${post.title}`;
  const text = `New blog live: ${post.title}\n${post.description}\n${url}`;
  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*New blog live*\n<${url}|${post.title}>\n${post.description}`,
      },
    },
  ];
  await notify(subject, text, blocks);
}

// Fired when the publish cron checks its own work and finds a miss: a
// revealed post URL that is not serving 200, or a due slug absent from the
// live sitemap. Without this, a failed reveal is a cached 404 that nothing
// ever re-checks: get-recommended-by-ai (due 25 Aug 2026) sat unreachable for
// six days while the "post live" ping said it was fine.
export async function notifyRevealFailure(problems: string[]): Promise<void> {
  const subject = "Blog publish check FAILED";
  const text = `Blog publish check failed. The cron revealed today's posts but verification found:\n${problems.map((p) => `- ${p}`).join("\n")}\nFix: redeploy the site, or investigate the reveal path.`;
  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:rotating_light: *Blog publish check FAILED*\n${problems.map((p) => `• ${p}`).join("\n")}\nFix: redeploy the site, or investigate the reveal path.`,
      },
    },
  ];
  await notify(subject, text, blocks);
}

// One-off nudge for the July 2026 launch pack: fires the day its closer
// (competitor-outranking-you) publishes, when all ten internal-link targets are
// finally live and the forward-links can be backfilled into the original six
// posts (see the pack's production notes). Wired in the publish-check route.
export async function notifyBackfillDue(): Promise<void> {
  const subject = "Blog pack complete: time for the backfill";
  const text =
    "The launch pack’s closer is live, so all ten new posts are now published. Time to backfill the forward-links from the original six posts into the new ones (map is in the content pack’s production notes). One-off job.";
  const blocks = [
    { type: "section", text: { type: "mrkdwn", text: `:link: ${text}` } },
  ];
  await notify(subject, text, blocks);
}

// Fires only on a run that published something, when the queue is at or below
// the low-queue threshold (0 = drained). Prompts the next batch.
export async function notifyQueueStatus(remaining: number): Promise<void> {
  const subject =
    remaining === 0 ? "Blog queue empty" : `Blog queue low: ${remaining} left`;
  const text =
    remaining === 0
      ? "The blog queue is empty. Time to line up the next batch of posts."
      : `The blog queue is running low: ${remaining} post${remaining === 1 ? "" : "s"} left to publish. Worth topping it up soon.`;
  const blocks = [
    { type: "section", text: { type: "mrkdwn", text: `:calendar: ${text}` } },
  ];
  await notify(subject, text, blocks);
}

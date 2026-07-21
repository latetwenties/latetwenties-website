// Posts to Slack via the agency bot token (the same app latetwenties-crm uses,
// one Slack app across the agency). SLACK_BOT_TOKEN is a Vercel team-shared env;
// SLACK_CHANNEL is this project's channel. The bot must be a member of the
// channel (or hold chat:write.public for public channels).
//
// Gotcha: chat.postMessage returns HTTP 200 even on logical failure
// (channel_not_found, not_in_channel). Trust the response body's `ok`.
type SlackResult = { ok: boolean; error?: string };

export async function postToSlack(opts: {
  text: string;
  blocks?: unknown[];
}): Promise<SlackResult> {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL;
  if (!token || !channel) return { ok: false, error: "missing_config" };

  try {
    const res = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        channel,
        text: opts.text,
        blocks: opts.blocks,
        unfurl_links: false,
      }),
    });
    const data = (await res.json()) as { ok: boolean; error?: string };
    return { ok: !!data.ok, error: data.error };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "fetch_failed" };
  }
}

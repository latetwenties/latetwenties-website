/**
 * IndexNow: tell Bing a URL changed, the moment it changes.
 *
 * Why this exists: the Bing index is what feeds ChatGPT search, Copilot and
 * DuckDuckGo, so how fast Bing sees a new post is an AI-visibility question,
 * not just a Bing-traffic one. Google does not support IndexNow and never
 * reads any of this, so nothing here affects Google rankings either way.
 * Google's own side stays what it has always been: a truthful sitemap
 * `lastmod` (app/sitemap.xml/route.ts), internal links, and a manual Request
 * Indexing in the Search Console UI. The Indexing API is JobPosting and
 * BroadcastEvent only, so marketing pages never go through it.
 *
 * Where it is called from matters. This site drip-publishes: every post is
 * already in the repo, date-gated, and goes live when the daily publish-check
 * cron passes its publishedAt date. No deploy happens when a post goes live.
 * So pinging only on deploy would miss every blog post, which is exactly the
 * URL worth submitting. The ping belongs on the publish transition.
 *
 * Failure is always soft. A missed ping costs a few days of Bing latency and
 * nothing else, so it must never fail a publish run or a cron.
 */

const ENDPOINT = "https://api.indexnow.org/indexnow";

export type IndexNowResult =
  | { ok: true; submitted: number; status: number }
  | { ok: false; submitted: 0; error: string; status?: number };

/**
 * Submit up to 10,000 URLs for one host. All URLs must be on `host`, which is
 * the rule IndexNow enforces most strictly: a single off-host URL rejects the
 * whole batch (422), so they are filtered rather than trusted.
 */
export async function pingIndexNow(
  urls: string[],
  opts: { siteUrl: string; key?: string; timeoutMs?: number },
): Promise<IndexNowResult> {
  const key = opts.key ?? process.env.INDEXNOW_KEY;
  if (!key) {
    // Unset is a normal state on a site that has not been wired yet.
    return { ok: false, submitted: 0, error: "INDEXNOW_KEY not set" };
  }
  if (!opts.siteUrl) {
    return { ok: false, submitted: 0, error: "siteUrl required" };
  }

  let host: string;
  try {
    host = new URL(opts.siteUrl).host;
  } catch {
    return { ok: false, submitted: 0, error: `bad siteUrl: ${opts.siteUrl}` };
  }

  const onHost = urls.filter((u) => {
    try {
      return new URL(u).host === host;
    } catch {
      return false;
    }
  });
  if (onHost.length === 0) {
    return { ok: false, submitted: 0, error: "no valid on-host urls" };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), opts.timeoutMs ?? 8000);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `${opts.siteUrl.replace(/\/$/, "")}/${key}.txt`,
        urlList: onHost.slice(0, 10000),
      }),
      signal: controller.signal,
    });

    // 200 accepted, 202 accepted-pending-key-validation. Both are success.
    if (res.status === 200 || res.status === 202) {
      return { ok: true, submitted: onHost.length, status: res.status };
    }
    return {
      ok: false,
      submitted: 0,
      status: res.status,
      error: `IndexNow returned ${res.status}`,
    };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    return { ok: false, submitted: 0, error: reason };
  } finally {
    clearTimeout(timer);
  }
}

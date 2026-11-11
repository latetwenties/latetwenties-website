import { NextResponse } from "next/server";

import { guard, text } from "@/lib/wgtc/guard";
import type { SiteResult } from "@/lib/wgtc/types";

export const maxDuration = 60;

// The visitor's homepage as a phone sees it: Google PageSpeed (free) gives a
// screenshot and the time until the main content shows (Largest Contentful
// Paint). Google's own "good" mark for that is 2.5 seconds (web.dev).
// Needs GOOGLE_PAGESPEED_API_KEY; without it the page leaves this step out.
export async function POST(req: Request) {
  const key = process.env.GOOGLE_PAGESPEED_API_KEY;
  if (!key) return NextResponse.json({ error: "Website check is not set up." }, { status: 503 });
  const blocked = guard(req);
  if (blocked) return blocked;

  const body = await req.json().catch(() => ({}));
  const domain = text(body.domain, 120).replace(/^https?:\/\//, "").split("/")[0];
  if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain)) {
    return NextResponse.json({ error: "No website to check." }, { status: 400 });
  }
  const url = `https://${domain}`;

  try {
    // One lab run is noisy (the same homepage can read 9s, then 3s a minute
    // later). Run two at once and keep the faster, so a single slow roll
    // never gets reported to a business owner as their speed.
    const runOnce = async () => {
      const res = await fetch(
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?" +
          new URLSearchParams({ url, strategy: "mobile", category: "performance", key }),
        { cache: "no-store" },
      );
      const d = await res.json();
      if (d.error) throw new Error(d.error.message);
      return d;
    };
    const runs = (await Promise.allSettled([runOnce(), runOnce()]))
      .filter((r): r is PromiseFulfilledResult<any> => r.status === "fulfilled") // eslint-disable-line @typescript-eslint/no-explicit-any
      .map((r) => r.value);
    if (!runs.length) throw new Error("both PageSpeed runs failed");
    const loadOf = (x: any) => // eslint-disable-line @typescript-eslint/no-explicit-any
      x.lighthouseResult?.audits?.["largest-contentful-paint"]?.numericValue ??
      x.lighthouseResult?.audits?.["speed-index"]?.numericValue ??
      Infinity;
    const d = runs.reduce((best, x) => (loadOf(x) < loadOf(best) ? x : best));
    const audits = d.lighthouseResult?.audits ?? {};
    // Some pages (heavy animation) give NO_LCP; fall back to Speed Index,
    // labelled as a different measure with its own "good" mark (3.4s).
    const lcp = audits["largest-contentful-paint"]?.numericValue;
    const si = audits["speed-index"]?.numericValue;
    const ms = typeof lcp === "number" ? lcp : si;
    if (typeof ms !== "number") throw new Error("no load time in the result");
    const result: SiteResult = {
      url,
      loadSeconds: Math.round(ms / 100) / 10,
      measure: typeof lcp === "number" ? "main content" : "page to fill in",
      goodMark: typeof lcp === "number" ? 2.5 : 3.4,
      screenshot: audits["final-screenshot"]?.details?.data ?? null,
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/site]", err);
    return NextResponse.json({ error: "The website check didn't come back." }, { status: 502 });
  }
}

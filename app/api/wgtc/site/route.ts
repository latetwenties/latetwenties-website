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
    const res = await fetch(
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?" +
        new URLSearchParams({ url, strategy: "mobile", category: "performance", key }),
      { cache: "no-store" },
    );
    const d = await res.json();
    if (d.error) throw new Error(d.error.message);
    const audits = d.lighthouseResult?.audits ?? {};
    const lcp = audits["largest-contentful-paint"]?.numericValue;
    if (typeof lcp !== "number") throw new Error("no load time in the result");
    const result: SiteResult = {
      url,
      loadSeconds: Math.round(lcp / 100) / 10,
      screenshot: audits["final-screenshot"]?.details?.data ?? null,
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/site]", err);
    return NextResponse.json({ error: "The website check didn't come back." }, { status: 502 });
  }
}

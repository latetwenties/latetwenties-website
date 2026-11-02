import { NextResponse } from "next/server";

// Spend guard for the paid routes.
// - WGTC_ENABLED must be "1" or nothing is spent (a kill switch per environment).
// - A per-IP cap per warm instance. This is a speed bump, not a wall: serverless
//   instances do not share memory. Before the tool goes public, add a Vercel
//   Firewall rate-limit rule on /api/wgtc/* as the real limit.
// Each run makes six calls: find, search, grid, ai, worth and site.
const RUNS_PER_IP_PER_HOUR = 6;
const hits = new Map<string, number[]>();

export function guard(req: Request, cost = 1): NextResponse | null {
  if (process.env.WGTC_ENABLED !== "1") {
    return NextResponse.json({ error: "The live search is switched off." }, { status: 503 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  if (recent.length + cost > RUNS_PER_IP_PER_HOUR * 6) {
    return NextResponse.json(
      { error: "That's a few searches in a row. Give it an hour, or just get in touch." },
      { status: 429 },
    );
  }
  for (let i = 0; i < cost; i++) recent.push(now);
  hits.set(ip, recent);
  return null;
}

export function text(v: unknown, max = 80): string {
  return typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";
}

export function num(v: unknown): number | null {
  const n = typeof v === "number" ? v : Number.NaN;
  return Number.isFinite(n) ? n : null;
}

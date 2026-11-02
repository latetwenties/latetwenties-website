import { NextResponse } from "next/server";

import { type Business, isYou, localFinder, toBusiness } from "@/lib/wgtc/dataforseo";
import { gridPoints, nameGrid, type Point } from "@/lib/wgtc/geo";
import { guard, num, text } from "@/lib/wgtc/guard";
import type { GridResult } from "@/lib/wgtc/types";

export const maxDuration = 90;

// Map position for the job, searched from 9 points around the area, plus one
// from the business's own address when it sits outside that grid (up to 10
// Local Finder calls, $0.04). Per-point ranks only; never averaged.
export async function POST(req: Request) {
  const blocked = guard(req);
  if (blocked) return blocked;

  const body = await req.json().catch(() => ({}));
  const job = text(body.job);
  const area = text(body.centre?.name);
  const lat = num(body.centre?.lat);
  const lng = num(body.centre?.lng);
  const you = body.you as Business | undefined;
  if (!job || !area || lat === null || lng === null || !you?.name) {
    return NextResponse.json({ error: "Missing search details." }, { status: 400 });
  }

  const km = Math.min(Math.max(num(body.centre?.km) ?? 2.5, 1), 10);
  const pts = gridPoints({ name: area, lat, lng }, km);
  const base = basePoint(you, pts);
  try {
    // Search what people type: the job plus the area, from every point.
    const keyword = `${job} ${area}`.toLowerCase();
    const all = base ? [...pts, base] : pts;
    const [gridNames, allResults] = await Promise.all([
      nameGrid(pts, area),
      Promise.all(all.map((p) => localFinder(keyword, p.lat, p.lng).catch(() => null))),
    ]);
    // Drop points that landed in the sea (named grid points keep their order).
    const keep = [...gridNames.map((p) => !p.sea), ...(base ? [true] : [])];
    const named = [...gridNames, ...(base ? [base] : [])].filter((_, k) => keep[k]);
    const results = allResults.filter((_, k) => keep[k]);
    if (results.every((r) => r === null)) throw new Error("every grid point failed");

    const tally = new Map<string, GridResult["leaders"][number]>();
    const cells = named.map((p, k) => {
      const items = results[k];
      if (!items) return { name: p.name, rank: null, shown: 0, ...(p === base ? { base: true } : {}) };
      const idx = items.findIndex((i) => isYou(i, you));
      for (const i of items.slice(0, 3)) {
        const b = toBusiness(i);
        if (isYou(b, you)) continue;
        const t = tally.get(b.name) ?? { name: b.name, top3: 0, rating: b.rating, reviews: b.reviews };
        t.top3 += 1;
        tally.set(b.name, t);
      }
      return {
        name: p.name,
        rank: idx >= 0 ? idx + 1 : null,
        shown: items.length,
        ...(p === base ? { base: true } : {}),
      };
    });

    // Review benchmark: the average review count of the top three searched
    // from the centre, the visitor left out.
    const centreIdx = named.findIndex((p) => p.name === area);
    const centreTop = (results[centreIdx] ?? [])
      .map(toBusiness)
      .filter((b) => !isYou(b, you))
      .slice(0, 3)
      .map((b) => b.reviews)
      .filter((n): n is number => typeof n === "number");

    const result: GridResult = {
      cells,
      leaders: [...tally.values()].sort((a, b) => b.top3 - a.top3).slice(0, 3),
      topReviews: centreTop.length ? Math.round(centreTop.reduce((a, b) => a + b, 0) / centreTop.length) : null,
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/grid]", err);
    return NextResponse.json({ error: "The map search didn't come back." }, { status: 502 });
  }
}

// The listing's own location, named by its suburb, when it is more than about
// 2.5 km from every grid point (otherwise a grid cell already covers it).
// Service-area listings hide their address and their pin is only approximate,
// so they get no base cell.
function basePoint(you: Business, pts: Point[]): Point | null {
  if (typeof you.lat !== "number" || typeof you.lng !== "number" || !you.address) return null;
  const near = pts.some((p) => Math.hypot((p.lat - you.lat!) * 111, (p.lng - you.lng!) * 89) < 2.5);
  if (near) return null;
  const parts = you.address.split(",").map((x) => x.replace(/\d{4}/g, "").trim()).filter(Boolean);
  if (parts.length < 3) return null;
  return { name: parts[parts.length - 2], lat: you.lat, lng: you.lng };
}

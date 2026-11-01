import { NextResponse } from "next/server";

import { type Business, isYou, mapsSearch, toBusiness } from "@/lib/wgtc/dataforseo";
import { gridPoints, nameGrid } from "@/lib/wgtc/geo";
import { guard, num, text } from "@/lib/wgtc/guard";
import type { GridResult } from "@/lib/wgtc/types";

export const maxDuration = 60;

// Map position for the job, searched from 9 points around the area
// (9 Maps calls, $0.018). Per-point ranks only; never averaged.
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

  const pts = gridPoints({ name: area, lat, lng });
  try {
    const [named, results] = await Promise.all([
      nameGrid(pts, area),
      Promise.all(pts.map((p) => mapsSearch(job, p.lat, p.lng).catch(() => null))),
    ]);
    if (results.every((r) => r === null)) throw new Error("every grid point failed");

    const tally = new Map<string, GridResult["leaders"][number]>();
    const cells = named.map((p, k) => {
      const items = results[k];
      if (!items) return { name: p.name, rank: null, shown: 0 };
      const idx = items.findIndex((i) => isYou(i, you));
      for (const i of items.slice(0, 3)) {
        const b = toBusiness(i);
        if (isYou(b, you)) continue;
        const t = tally.get(b.name) ?? { name: b.name, top3: 0, rating: b.rating, reviews: b.reviews };
        t.top3 += 1;
        tally.set(b.name, t);
      }
      return { name: p.name, rank: idx >= 0 ? idx + 1 : null, shown: items.length };
    });

    const result: GridResult = {
      cells,
      leaders: [...tally.values()].sort((a, b) => b.top3 - a.top3).slice(0, 3),
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/grid]", err);
    return NextResponse.json({ error: "The map search didn't come back." }, { status: 502 });
  }
}

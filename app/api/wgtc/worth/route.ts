import { NextResponse } from "next/server";

import { adsLocation, searchVolume } from "@/lib/wgtc/dataforseo";
import { guard, text } from "@/lib/wgtc/guard";
import type { WorthResult } from "@/lib/wgtc/types";
import { MIN_SEARCHES, topThree } from "@/lib/wgtc/worth";

export const maxDuration = 60;

// Search demand for the job in the area, from Google Ads data. Two requests
// (about $0.15): "job area" from anywhere in the country, plus "job" and
// "job near me" searched from inside the area. No phrase is counted twice.
export async function POST(req: Request) {
  const blocked = guard(req);
  if (blocked) return blocked;

  const body = await req.json().catch(() => ({}));
  const job = text(body.job).toLowerCase();
  const area = text(body.centre?.name);
  const country = body.centre?.country === "Australia" ? "Australia" : "New Zealand";
  if (!job || !area) return NextResponse.json({ error: "Missing search details." }, { status: 400 });

  const phrase = `${job} ${area.toLowerCase()}`;
  try {
    const loc = await adsLocation(area, country === "Australia" ? "AU" : "NZ");
    const [national, local] = await Promise.all([
      searchVolume([phrase], { location_name: country }),
      loc ? searchVolume([job, `${job} near me`], { location_code: loc.location_code }) : Promise.resolve({}),
    ]);

    const phrases: WorthResult["phrases"] = [
      { keyword: phrase, from: `anywhere in ${country}`, volume: national[phrase] ?? 0 },
      ...Object.entries(local as Record<string, number>).map(([keyword, volume]) => ({
        keyword,
        from: `people in ${area}`,
        volume,
      })),
    ];
    const total = phrases.reduce((n, p) => n + p.volume, 0);
    const counted = total >= MIN_SEARCHES;
    const share = counted ? topThree(total) : null;

    const result: WorthResult = {
      searches: counted ? total : null,
      phrases,
      topThreeLow: share?.low ?? null,
      topThreeHigh: share?.high ?? null,
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/worth]", err);
    return NextResponse.json({ error: "Search numbers didn't come back." }, { status: 502 });
  }
}

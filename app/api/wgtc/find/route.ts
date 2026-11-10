import { NextResponse } from "next/server";

import { mapsSearch, toBusiness } from "@/lib/wgtc/dataforseo";
import { geocode } from "@/lib/wgtc/geo";
import { guard, text } from "@/lib/wgtc/guard";
import type { FindResult } from "@/lib/wgtc/types";

// Step 1: find the place, then the visitor's own Google listing near it.
// Returns a short list for them to confirm, because a name lookup's top hit
// is often a different business. One Maps call ($0.002).
export async function POST(req: Request) {
  const blocked = guard(req);
  if (blocked) return blocked;

  const body = await req.json().catch(() => ({}));
  const business = text(body.business);
  const place = text(body.place);
  if (!business || !place) {
    return NextResponse.json({ error: "We need your business name and your area." }, { status: 400 });
  }

  try {
    const centre = await geocode(place);
    if (!centre) {
      return NextResponse.json(
        { error: `We couldn't find "${place}" in New Zealand or Australia. Try a suburb and city.` },
        { status: 404 },
      );
    }
    const items = await mapsSearch(business, centre.lat, centre.lng, 5, "12z");
    const result: FindResult = {
      centre,
      candidates: items.slice(0, 4).map(toBusiness).filter((b) => b.name),
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/find]", err);
    return NextResponse.json({ error: "The search didn't come back. Try again in a minute." }, { status: 502 });
  }
}

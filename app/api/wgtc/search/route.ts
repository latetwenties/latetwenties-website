import { NextResponse } from "next/server";

import {
  type Business,
  cleanDomain,
  googleSearch,
  isYou,
  plain,
  textNamesYou,
  toBusiness,
} from "@/lib/wgtc/dataforseo";
import { guard, num, text } from "@/lib/wgtc/guard";
import type { SearchResult } from "@/lib/wgtc/types";

export const maxDuration = 60;

// The Google results page a customer sees on their phone from the centre
// point: ads, the map pack, the AI Overview and the website results. One call ($0.004).
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

  try {
    // If Google's page for "job area" can't be read, the job on its own,
    // still searched from the area, is what a phone there would show.
    const { items, keyword: query } = await googleSearch(`${job} ${area}`.toLowerCase(), lat, lng, job.toLowerCase());

    const paid = items.filter((i) => i.type === "paid");
    const pack = items.filter((i) => i.type === "local_pack").map(toBusiness);
    const aioItem = items.find((i) => i.type === "ai_overview");
    const organic = items.filter((i) => i.type === "organic");

    const packIdx = pack.findIndex((b) => isYou(b, you));
    const orgIdx = you.domain
      ? organic.findIndex((i) => cleanDomain(i.domain as string) === you.domain)
      : -1;
    const aioText = typeof aioItem?.markdown === "string" ? aioItem.markdown : "";

    const result: SearchResult = {
      query,
      ads: paid.slice(0, 3).map((i) => ({
        name: String(i.title ?? ""),
        domain: cleanDomain(i.domain as string),
        line: plain(String(i.description ?? ""), 110),
      })),
      youAdvertising: paid.some(
        (i) => !!you.domain && cleanDomain(i.domain as string) === you.domain,
      ),
      pack: pack.slice(0, 3),
      youInPack: packIdx >= 0 ? packIdx + 1 : null,
      aio: aioText ? { text: plain(aioText, 300), namesYou: textNamesYou(aioText, you) } : null,
      organicRank: orgIdx >= 0 ? orgIdx + 1 : null,
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/search]", err);
    return NextResponse.json({ error: "Google results didn't come back." }, { status: 502 });
  }
}

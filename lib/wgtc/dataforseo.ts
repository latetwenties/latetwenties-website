// DataForSEO calls for the "Who gets the call?" tool. Server-only.
// Credentials come from DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD on the Vercel
// project. Measured cost (Nov 2026): Google SERP $0.004, ChatGPT $0.004,
// Google AI Mode $0.004, Perplexity $0.006, Claude $0.046, Maps $0.002,
// Local Finder $0.004 a call, search volume about $0.075 a request.
// One full run is about US$0.20.

import { brandName } from "./names";

const API = "https://api.dataforseo.com/v3/";

function auth(): string {
  const login = process.env.DATAFORSEO_LOGIN;
  const pw = process.env.DATAFORSEO_PASSWORD;
  if (!login || !pw) throw new Error("DataForSEO credentials are not set");
  return "Basic " + Buffer.from(`${login}:${pw}`).toString("base64");
}

export type Item = Record<string, unknown> & { type?: string };

// One live task, returning the first result's items. Throws on any non-Ok
// status so a route can report the source as unavailable rather than empty.
export async function dfs(endpoint: string, task: Record<string, unknown>): Promise<Item[]> {
  const result = await dfsResult(endpoint, task);
  return ((result[0] as { items?: Item[] } | undefined)?.items ?? []) as Item[];
}

// The task's whole `result` array, for endpoints that don't wrap rows in items.
// Pass no task for a GET.
// DataForSEO sometimes fails one call with "Internal SE Server Error" and
// answers the same call fine a second later, so every call gets one retry.
export async function dfsResult(endpoint: string, task?: Record<string, unknown>): Promise<unknown[]> {
  try {
    return await dfsOnce(endpoint, task);
  } catch (err) {
    console.warn("[wgtc] retrying", endpoint, (err as Error).message);
    await new Promise((r) => setTimeout(r, 600));
    return dfsOnce(endpoint, task);
  }
}

async function dfsOnce(endpoint: string, task?: Record<string, unknown>): Promise<unknown[]> {
  const res = await fetch(API + endpoint, {
    method: task ? "POST" : "GET",
    headers: { Authorization: auth(), "Content-Type": "application/json" },
    body: task ? JSON.stringify([task]) : undefined,
    cache: "no-store",
  });
  const data = await res.json();
  const t = data?.tasks?.[0];
  if (data?.status_code !== 20000 || t?.status_code !== 20000) {
    throw new Error(`DataForSEO ${endpoint}: ${t?.status_message ?? data?.status_message ?? res.status}`);
  }
  return (t.result ?? []) as unknown[];
}

export function mapsSearch(keyword: string, lat: number, lng: number, depth = 20, zoom = "14z") {
  return dfs("serp/google/maps/live/advanced", {
    keyword,
    language_code: "en",
    depth,
    location_coordinate: `${lat},${lng},${zoom}`,
  }).then((items) => items.filter((i) => i.type === "maps_search"));
}

// The full "More places" list behind the map pack. Used for map positions:
// checked against manual searches for Boaz (2 Nov 2026), it found the business
// in all four searches where the Maps endpoint found it in none, and ranked
// them in the same order. 12z tracked the manual checks best (tested 12z,
// 14z, 16z). Returns items shaped like Maps results.
export function localFinder(keyword: string, lat: number, lng: number, depth = 40, zoom = "12z") {
  return dfs("serp/google/local_finder/live/advanced", {
    keyword,
    language_code: "en",
    depth,
    location_coordinate: `${lat},${lng},${zoom}`,
  }).then((items) => items.filter((i) => i.type === "local_pack"));
}

export function googleSearch(keyword: string, lat: number, lng: number) {
  return dfs("serp/google/organic/live/advanced", {
    keyword,
    language_code: "en",
    device: "mobile",
    depth: 10,
    location_coordinate: `${lat},${lng}`,
    load_async_ai_overview: true,
  });
}

export function chatgpt(prompt: string, country: string) {
  return dfs("ai_optimization/chat_gpt/llm_scraper/live/advanced", {
    keyword: prompt,
    location_name: country,
    language_code: "en",
    force_web_search: true,
  });
}

// Google's AI Mode answer, searched from the area.
export async function aiMode(question: string, lat: number, lng: number): Promise<string> {
  const items = await dfs("serp/google/ai_mode/live/advanced", {
    keyword: question,
    language_code: "en",
    device: "mobile",
    location_coordinate: `${lat},${lng}`,
  });
  return items.map((i) => String(i.markdown ?? "")).join("\n");
}

// An assistant's answer through its API with web search on (Perplexity, Claude).
export async function llm(type: "perplexity" | "claude", model: string, prompt: string): Promise<string> {
  const items = await dfs(`ai_optimization/${type}/llm_responses/live`, {
    user_prompt: prompt,
    model_name: model,
    web_search: true,
  });
  return items
    .filter((i) => i.type === "message")
    .flatMap((i) => (i.sections as { type?: string; text?: string }[] | undefined) ?? [])
    .filter((sec) => sec.type === "text")
    .map((sec) => sec.text ?? "")
    .join("");
}

// ---- Search demand ----------------------------------------------------------

type AdsLocation = { location_code: number; location_name: string; location_type: string };
const locationCache = new Map<string, AdsLocation[]>();

const fold = (v: string) => v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

// The Google Ads location for a place name (a city or suburb), or null. The
// country list is fetched once per warm instance; the endpoint is free.
export async function adsLocation(name: string, country: "NZ" | "AU"): Promise<AdsLocation | null> {
  let list = locationCache.get(country);
  if (!list) {
    list = (await dfsResult(`keywords_data/google_ads/locations/${country.toLowerCase()}`)) as AdsLocation[];
    locationCache.set(country, list);
  }
  const want = fold(name);
  const hits = list.filter((l) => fold(l.location_name.split(",")[0]) === want);
  const rank = (t: string) => ["City", "Neighborhood", "Municipality", "District"].indexOf(t) + 1 || 9;
  return hits.sort((a, b) => rank(a.location_type) - rank(b.location_type))[0] ?? null;
}

// Average monthly Google searches per keyword (Google Ads data), searched from
// a location, or from the whole country when no location code is given.
export async function searchVolume(
  keywords: string[],
  where: { location_code?: number; location_name?: string },
): Promise<Record<string, number>> {
  const rows = (await dfsResult("keywords_data/google_ads/search_volume/live", {
    keywords,
    language_code: "en",
    ...where,
  })) as { keyword: string; search_volume?: number | null }[];
  return Object.fromEntries(rows.map((r) => [r.keyword, r.search_volume ?? 0]));
}

// ---- Matching the visitor's own business --------------------------------

export type Business = {
  name: string;
  cid?: string;
  domain?: string;
  phone?: string;
  address?: string;
  rating?: number;
  reviews?: number;
  category?: string;
  lat?: number;
  lng?: number;
};

export function toBusiness(i: Item): Business {
  const rating = i.rating as { value?: number; votes_count?: number } | undefined;
  return {
    name: String(i.title ?? ""),
    cid: i.cid ? String(i.cid) : undefined,
    domain: cleanDomain(i.domain as string | undefined),
    phone: (i.phone as string | undefined) ?? undefined,
    address: (i.address as string | undefined) ?? undefined,
    rating: rating?.value,
    reviews: rating?.votes_count,
    category: (i.category as string | undefined) ?? undefined,
    lat: typeof i.latitude === "number" ? i.latitude : undefined,
    lng: typeof i.longitude === "number" ? i.longitude : undefined,
  };
}

export function cleanDomain(d?: string | null): string | undefined {
  if (!d) return undefined;
  const v = d.toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  // Google's own redirect domains are not the business's website.
  return v && !v.endsWith("google.com") ? v : undefined;
}

const phoneKey = (p?: string | null) => {
  const d = (p ?? "").replace(/\D/g, "");
  return d.length >= 8 ? d.slice(-8) : "";
};

const nameKey = (n?: string | null) =>
  (n ?? "")
    .toLowerCase()
    .replace(/\b(ltd|limited|pty|nz|co|company|the)\b/g, "")
    .replace(/[^a-z0-9]/g, "");

// Google listing names are often keyword-stuffed ("Lewis Build – Luxury Home
// Builders Auckland"), but people and AI answers use the brand part. Match on
// that, and on the website's name ("lewisbuild" from lewisbuild.co.nz).

function keys(b: Business): string[] {
  const out = [nameKey(b.name), nameKey(brandName(b.name))];
  const stem = b.domain?.split(".")[0];
  if (stem) out.push(nameKey(stem));
  return [...new Set(out)].filter((k) => k.length >= 5);
}

// Same order as agency-layer lib/prospect/maps_grid.py: id, domain, phone, name.
export function isYou(i: Item | Business, you: Business): boolean {
  const b = "type" in i ? toBusiness(i as Item) : (i as Business);
  if (you.cid && b.cid && you.cid === b.cid) return true;
  if (you.domain && b.domain && you.domain === b.domain) return true;
  if (phoneKey(you.phone) && phoneKey(you.phone) === phoneKey(b.phone)) return true;
  const theirs = keys(b);
  return keys(you).some((a) => theirs.includes(a));
}

// Whether free text (an AI answer) names the business, by name or website.
export function textNamesYou(text: string, you: Business): boolean {
  const t = text.toLowerCase();
  if (you.domain && t.includes(you.domain)) return true;
  const flat = nameKey(text);
  return keys(you).some((k) => flat.includes(k));
}

// Strip markdown, links, images and citation junk to readable plain text.
export function plain(md: string, max = 700): string {
  let s = md
    .replace(/^\s*(Source|Sources|Website)\b.*$/gim, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\S*turn\d+\w*\d+\S*/g, "")
    .replace(/\(\s*\)/g, "")
    .replace(/[*_`#>]+/g, "")
    .replace(/\\([.:\-!])/g, "$1")
    .replace(/^-{3,}$/gm, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (s.length > max) {
    const cut = s.lastIndexOf("\n", max);
    s = s.slice(0, cut > max * 0.5 ? cut : max).trim() + " …";
  }
  return s;
}

// DataForSEO calls for the "Who gets the call?" tool. Server-only.
// Credentials come from DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD on the Vercel
// project. Measured cost (Nov 2026): Google SERP $0.004, ChatGPT $0.004,
// Maps $0.002 a call. One full run is about US$0.03.

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
  const res = await fetch(API + endpoint, {
    method: "POST",
    headers: { Authorization: auth(), "Content-Type": "application/json" },
    body: JSON.stringify([task]),
    cache: "no-store",
  });
  const data = await res.json();
  const t = data?.tasks?.[0];
  if (data?.status_code !== 20000 || t?.status_code !== 20000) {
    throw new Error(`DataForSEO ${endpoint}: ${t?.status_message ?? data?.status_message ?? res.status}`);
  }
  return (t.result?.[0]?.items ?? []) as Item[];
}

export function mapsSearch(keyword: string, lat: number, lng: number, depth = 20, zoom = "14z") {
  return dfs("serp/google/maps/live/advanced", {
    keyword,
    language_code: "en",
    depth,
    location_coordinate: `${lat},${lng},${zoom}`,
  }).then((items) => items.filter((i) => i.type === "maps_search"));
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

// Same order as agency-layer lib/prospect/maps_grid.py: id, domain, phone, name.
export function isYou(i: Item | Business, you: Business): boolean {
  const b = "type" in i ? toBusiness(i as Item) : (i as Business);
  if (you.cid && b.cid && you.cid === b.cid) return true;
  if (you.domain && b.domain && you.domain === b.domain) return true;
  if (phoneKey(you.phone) && phoneKey(you.phone) === phoneKey(b.phone)) return true;
  const a = nameKey(you.name);
  const c = nameKey(b.name);
  return a.length >= 5 && c.length >= 5 && (a === c || c.includes(a) || a.includes(c));
}

// Whether free text (an AI answer) names the business, by name or website.
export function textNamesYou(text: string, you: Business): boolean {
  const t = text.toLowerCase();
  if (you.domain && t.includes(you.domain)) return true;
  const key = nameKey(you.name);
  return key.length >= 5 && nameKey(text).includes(key);
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

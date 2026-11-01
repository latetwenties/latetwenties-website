// Free geocoding via OpenStreetMap Nominatim, same as maps_grid.py.
// Usage policy: identify the app and stay at or under one request a second.

const UA = "latetwenties-who-gets-the-call/1.0 (team@latetwenties.agency)";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export type Point = { name: string; lat: number; lng: number };

export async function geocode(place: string): Promise<(Point & { country: string }) | null> {
  const url =
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({ q: place, format: "json", limit: "1", countrycodes: "nz,au", addressdetails: "1" });
  const res = await fetch(url, { headers: { "User-Agent": UA }, cache: "no-store" });
  const hits = (await res.json()) as Array<{
    lat: string;
    lon: string;
    address?: Record<string, string>;
  }>;
  const h = hits[0];
  if (!h) return null;
  const a = h.address ?? {};
  return {
    name: a.suburb ?? a.town ?? a.city ?? a.village ?? place.split(",")[0].trim(),
    lat: +(+h.lat).toFixed(5),
    lng: +(+h.lon).toFixed(5),
    country: a.country_code === "au" ? "Australia" : "New Zealand",
  };
}

async function reverseName(lat: number, lng: number): Promise<string | null> {
  const url =
    "https://nominatim.openstreetmap.org/reverse?" +
    new URLSearchParams({ lat: String(lat), lon: String(lng), format: "json", zoom: "14" });
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA }, cache: "no-store" });
    const a = ((await res.json()) as { address?: Record<string, string> }).address ?? {};
    return a.suburb ?? a.neighbourhood ?? a.quarter ?? a.village ?? a.town ?? a.city_district ?? null;
  } catch {
    return null;
  }
}

// 3 x 3 grid around the centre, spaced in km. Points are named by the suburb
// they fall in (one reverse lookup a second); a compass label is the fallback.
const COMPASS = [
  ["NW", "N", "NE"],
  ["W", "", "E"],
  ["SW", "S", "SE"],
];

export function gridPoints(centre: Point, km = 2.5): Point[] {
  const dLat = km / 111;
  const dLng = km / (111 * Math.cos((centre.lat * Math.PI) / 180));
  const pts: Point[] = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const lat = +(centre.lat + (1 - r) * dLat).toFixed(5);
      const lng = +(centre.lng + (c - 1) * dLng).toFixed(5);
      pts.push({ name: r === 1 && c === 1 ? centre.name : `${COMPASS[r][c]} of ${centre.name}`, lat, lng });
    }
  }
  return pts;
}

export async function nameGrid(pts: Point[], centreName: string): Promise<Point[]> {
  // A suburb already used keeps its compass label, so no two cells share a name.
  const out: Point[] = [];
  const used = new Set([centreName]);
  for (const p of pts) {
    if (p.name === centreName) {
      out.push(p);
      continue;
    }
    const n = await reverseName(p.lat, p.lng);
    if (n && !used.has(n)) {
      used.add(n);
      out.push({ ...p, name: n });
    } else {
      out.push(p);
    }
    await sleep(1050);
  }
  return out;
}

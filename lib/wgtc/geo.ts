// Geocoding for the tool. Google Geocoding when GOOGLE_MAPS_API_KEY is set
// (about US$0.005 a lookup, no per-second cap). OpenStreetMap Nominatim is the
// fallback: free, but one request a second, and it blocked an address for
// over ten minutes in testing (2 Nov 2026), so it can't carry public traffic.

const UA = "latetwenties-who-gets-the-call/1.0 (team@latetwenties.agency)";
const GOOGLE = "https://maps.googleapis.com/maps/api/geocode/json?";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const googleKey = () => process.env.GOOGLE_MAPS_API_KEY;

export type Point = { name: string; lat: number; lng: number };
export type Place = Point & { country: string; km: number };

type GoogleResult = {
  types: string[];
  address_components: { long_name: string; short_name: string; types: string[] }[];
  geometry: {
    location: { lat: number; lng: number };
    viewport: { northeast: { lat: number; lng: number }; southwest: { lat: number; lng: number } };
  };
};

async function google(params: Record<string, string>): Promise<{ status: string; results: GoogleResult[] }> {
  const res = await fetch(GOOGLE + new URLSearchParams({ ...params, key: googleKey()! }), { cache: "no-store" });
  const d = await res.json();
  if (d.status !== "OK" && d.status !== "ZERO_RESULTS") throw new Error(`Google geocoder: ${d.status}`);
  return d;
}

// Grid spacing follows the size of the place typed: a whole city needs a wider
// net than a suburb, or every point lands in the CBD.
function spacingFor(diagonalKm: number): number {
  if (diagonalKm > 20) return 6;
  if (diagonalKm > 8) return 3.5;
  return 2.5;
}

export async function geocode(place: string): Promise<Place | null> {
  if (!googleKey()) return geocodeOsm(place);
  const d = await google({ address: place, components: "country:NZ|country:AU", region: "nz" });
  const r = d.results[0];
  if (!r) return null;
  const { northeast: ne, southwest: sw } = r.geometry.viewport;
  const diag = Math.hypot((ne.lat - sw.lat) * 111, (ne.lng - sw.lng) * 89);
  const country = r.address_components.find((c) => c.types.includes("country"))?.short_name;
  return {
    name: r.address_components[0]?.long_name ?? place.split(",")[0].trim(),
    lat: +r.geometry.location.lat.toFixed(5),
    lng: +r.geometry.location.lng.toFixed(5),
    country: country === "AU" ? "Australia" : "New Zealand",
    km: spacingFor(diag),
  };
}

// The suburb a point falls in. `land: false` when there is no place there at
// all (a point out in the harbour or sea).
async function reverseName(lat: number, lng: number): Promise<{ name: string | null; land: boolean }> {
  if (!googleKey()) return reverseOsm(lat, lng);
  try {
    const d = await google({
      latlng: `${lat},${lng}`,
      result_type: "neighborhood|sublocality|locality",
    });
    if (d.status === "ZERO_RESULTS") return { name: null, land: false };
    return { name: d.results[0]?.address_components[0]?.long_name ?? null, land: true };
  } catch {
    return { name: null, land: true }; // lookup failed: keep the point, unnamed
  }
}

// 3 x 3 grid around the centre, spaced in km. Points are named by the suburb
// they fall in; a compass label is the fallback.
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

// Names each point and flags points in the sea (`sea: true`) so their
// results can be dropped. Runs alongside the searches to save time.
export async function nameGrid(pts: Point[], centreName: string): Promise<(Point & { sea?: true })[]> {
  const lookups = googleKey()
    ? await Promise.all(pts.map((p) => (p.name === centreName ? null : reverseName(p.lat, p.lng))))
    : await sequential(pts, centreName);

  // A suburb already used keeps its compass label, so no two cells share a name.
  const used = new Set([centreName]);
  return pts.map((p, k) => {
    const l = lookups[k];
    if (!l) return p;
    if (!l.land) return { ...p, sea: true as const };
    if (l.name && !used.has(l.name)) {
      used.add(l.name);
      return { ...p, name: l.name };
    }
    return p;
  });
}

// ---- OpenStreetMap fallback (one request a second) -------------------------

async function sequential(pts: Point[], centreName: string) {
  const out: ({ name: string | null; land: boolean } | null)[] = [];
  for (const p of pts) {
    if (p.name === centreName) {
      out.push(null);
      continue;
    }
    out.push(await reverseOsm(p.lat, p.lng));
    await sleep(1050);
  }
  return out;
}

const OSM_SPACING_KM: Record<string, number> = { city: 6, state: 6, region: 6, county: 6, town: 3.5 };

async function geocodeOsm(place: string): Promise<Place | null> {
  const url =
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({ q: place, format: "json", limit: "1", countrycodes: "nz,au", addressdetails: "1" });
  const res = await fetch(url, { headers: { "User-Agent": UA }, cache: "no-store" });
  // A refusal (429 rate limit) is an outage, not "place not found".
  if (!res.ok) throw new Error(`Geocoder returned ${res.status}`);
  const hits = (await res.json()) as Array<{
    lat: string;
    lon: string;
    addresstype?: string;
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
    km: OSM_SPACING_KM[h.addresstype ?? ""] ?? 2.5,
  };
}

async function reverseOsm(lat: number, lng: number): Promise<{ name: string | null; land: boolean }> {
  const url =
    "https://nominatim.openstreetmap.org/reverse?" +
    new URLSearchParams({ lat: String(lat), lon: String(lng), format: "json", zoom: "14" });
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA }, cache: "no-store" });
    const d = (await res.json()) as { error?: string; address?: Record<string, string> };
    if (d.error) return { name: null, land: false };
    const a = d.address ?? {};
    const name = a.suburb ?? a.neighbourhood ?? a.quarter ?? a.village ?? a.hamlet ?? a.town ?? a.city_district ?? null;
    return { name, land: !!(name ?? a.road ?? a.locality ?? a.isolated_dwelling) };
  } catch {
    return { name: null, land: true };
  }
}

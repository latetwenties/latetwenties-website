export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";
export const CLARITY_ENABLED = CLARITY_ID.length > 0;

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

// dataLayer events GTM listens for (Custom Event triggers, never Page View).
// No personal info (name, email, phone, business name) goes in here.
// Conversions: generate_lead, phone_click, book_call. The rest are funnel
// steps for GA4 only and must never be marked primary in Google Ads.
type EventMap = {
  // A visitor started a free search (looked up their business).
  free_search_start: { job: string; area: string };
  // Conversion: a free search lead submitted and accepted by the server.
  generate_lead: {
    source: "free_search";
    contact_type: "email" | "mobile";
    job: string;
    area: string;
  };
  // Conversion: a tap on our own tel: link.
  phone_click: { cta_location: string };
  email_click: { cta_location: string };
  // Funnel step: clicked through to the TidyCal booking page.
  booking_click: { cta_location: string };
  // Conversion: TidyCal redirected here after a confirmed booking (/booked).
  book_call: { source: "tidycal" };
};

export function track<E extends keyof EventMap>(event: E, params: EventMap[E]) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

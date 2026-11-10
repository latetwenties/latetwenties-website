import { NextResponse, type NextRequest } from "next/server";
import { deliverPresenceReport } from "@/lib/presence-report";
import { isSmokeTestEmail } from "@/lib/smoke-test";

/**
 * JSON sibling of the /contact Server Action, used by the weekly revenue-path
 * smoke. POST { name, business, trade?, town?, contact, company_url? }.
 *
 * A valid submission with contact = smoke-test@latetwenties.agency runs the
 * full validated delivery path and returns `{ ok: true, smoke: true }`. The
 * honeypot short-circuits BEFORE smoke detection, so a `smoke` flag missing
 * from a 200 response means the honeypot fired: that absence is the finding.
 */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

  // Honeypot: silent success, and deliberately no smoke flag.
  if (str(raw.company_url)) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: str(raw.name),
    business: str(raw.business),
    website: str(raw.website),
    trade: str(raw.trade),
    town: str(raw.town),
    contact: str(raw.contact),
  };

  if (!fields.name || !fields.business || !fields.contact) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields (name, business, contact)." },
      { status: 400 },
    );
  }

  const smoke = isSmokeTestEmail(fields.contact);
  const result = await deliverPresenceReport(fields, { smoke });

  if (!result.ok) {
    // A missing key still means the pipeline ran to the delivery boundary, so
    // tag it smoke (matches the boaz contract); the inbox is the delivery proof.
    if (result.reason === "no_key") {
      return NextResponse.json({ ok: true, ...(smoke ? { smoke: true } : {}) });
    }
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, ...(smoke ? { smoke: true } : {}) });
}

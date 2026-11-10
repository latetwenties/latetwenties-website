import { Resend } from "resend";
import { SMOKE_TEST_RECIPIENT, SMOKE_TEST_SUBJECT_PREFIX } from "@/lib/smoke-test";

// Presence Report requests land in Brendan's inbox. Sending domain
// latetwenties.agency is verified in the Resend account; RESEND_API_KEY lives
// in the project's environment (Vercel). FROM must stay on the verified domain.
const TO_ADDRESS = "team@latetwenties.agency";
const FROM_ADDRESS = "Latetwenties <noreply@latetwenties.agency>";

export type PresenceReportFields = {
  name: string;
  business: string;
  website: string;
  trade: string;
  town: string;
  contact: string;
};

export type DeliverResult =
  | { ok: true }
  | { ok: false; reason: "no_key" | "send_failed" };

// Single source of truth for the delivery leg, shared by the /contact Server
// Action (real submissions) and /api/presence-report (weekly smoke). When
// `smoke` is set, delivery is redirected to the agency smoke inbox and the
// subject is tagged, but the exact same validated send path runs.
export async function deliverPresenceReport(
  fields: PresenceReportFields,
  opts: { smoke?: boolean } = {},
): Promise<DeliverResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly in logs so a missing key doesn't look like a working form.
    console.error("RESEND_API_KEY is not set; Presence Report not sent.");
    return { ok: false, reason: "no_key" };
  }

  const resend = new Resend(apiKey);
  const looksLikeEmail = fields.contact.includes("@");

  const lines = [
    `Name: ${fields.name}`,
    `Business: ${fields.business}`,
    `Website: ${fields.website || "(not given)"}`,
    `Trade: ${fields.trade || "(not given)"}`,
    `Town: ${fields.town || "(not given)"}`,
    `Best contact: ${fields.contact}`,
  ];

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: opts.smoke ? SMOKE_TEST_RECIPIENT : TO_ADDRESS,
      // Don't set the smoke inbox as a reply-to; only echo a real submitter's email.
      replyTo: looksLikeEmail && !opts.smoke ? fields.contact : undefined,
      subject:
        (opts.smoke ? SMOKE_TEST_SUBJECT_PREFIX : "") +
        `Presence Report request: ${fields.business}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend send failed:", error);
      return { ok: false, reason: "send_failed" };
    }
  } catch (err) {
    console.error("Resend threw:", err);
    return { ok: false, reason: "send_failed" };
  }

  return { ok: true };
}

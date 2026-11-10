import { NextResponse } from "next/server";
import { Resend } from "resend";

import { cleanReport, renderReport } from "@/lib/wgtc/email";
import { text } from "@/lib/wgtc/guard";

// The unlock step: the visitor leaves a mobile or email to see their moves.
// Brendan gets the full run (competitor names included) at the team inbox;
// a visitor who left an email also gets their own branded copy, with no
// competitor names, replying to the team inbox.
const TO_ADDRESS = "team@latetwenties.agency";
const FROM_ADDRESS = "Latetwenties <noreply@latetwenties.agency>";

// Copies to visitors, per IP per warm instance: a speed bump against using
// the form to send mail (the Vercel Firewall rule is the real limit).
const COPIES_PER_IP_PER_HOUR = 5;
const copies = new Map<string, number[]>();

const asHtml = (t: string) =>
  `<div style="font:14px/1.55 -apple-system,Helvetica,Arial,sans-serif;color:#1a1814;">${t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")}</div>`;

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // Honeypot: real people leave this empty, bots fill it.
  if (text(body.company_url)) return NextResponse.json({ ok: true });

  const contact = text(body.contact, 120);
  const business = text(body.business, 120);
  const summary = typeof body.summary === "string" ? body.summary.slice(0, 6000) : "";
  if (!contact || !business) {
    return NextResponse.json({ error: "We need a mobile or email." }, { status: 400 });
  }
  const isEmail = contact.includes("@");
  if (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact)) {
    return NextResponse.json({ error: "That email doesn't look right. Check for a missing dot." }, { status: 400 });
  }
  if (!isEmail && contact.replace(/\D/g, "").length < 8) {
    return NextResponse.json({ error: "Enter a mobile number or an email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; Who gets the call lead not sent.");
    return NextResponse.json({ error: "Something went wrong on our end." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const internal = [`Business: ${business}`, `Contact: ${contact}`, "", summary].join("\n");
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    replyTo: isEmail ? contact : undefined,
    subject: `Who gets the call: ${business}`,
    text: internal,
    html: asHtml(internal),
  });
  if (error) {
    console.error("[wgtc/lead] Resend failed:", error);
    return NextResponse.json({ error: "That didn't send." }, { status: 502 });
  }

  // Their copy. The lead is already safe in the team inbox, so a failure here
  // is logged, not shown.
  const report = cleanReport(body.report);
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const now = Date.now();
  const recent = (copies.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  if (isEmail && report && recent.length < COPIES_PER_IP_PER_HOUR) {
    copies.set(ip, [...recent, now]);
    const mail = renderReport(report, business);
    const sent = await resend.emails.send({
      from: FROM_ADDRESS,
      to: contact,
      replyTo: TO_ADDRESS,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });
    if (sent.error) console.error("[wgtc/lead] copy to visitor failed:", sent.error);
  }
  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

import { text } from "@/lib/wgtc/guard";

// The unlock step: the visitor leaves a mobile or email to see their three
// moves. Lands in the same inbox as Presence Report requests, with the run
// attached so Brendan can follow up without re-running anything.
const TO_ADDRESS = "team@latetwenties.agency";
const FROM_ADDRESS = "Latetwenties <noreply@latetwenties.agency>";

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

  const { error } = await new Resend(apiKey).emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    replyTo: isEmail ? contact : undefined,
    subject: `Who gets the call: ${business}`,
    text: [`Business: ${business}`, `Contact: ${contact}`, "", summary].join("\n"),
  });
  if (error) {
    console.error("[wgtc/lead] Resend failed:", error);
    return NextResponse.json({ error: "That didn't send." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

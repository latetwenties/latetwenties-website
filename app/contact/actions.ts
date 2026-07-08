"use server";

import { Resend } from "resend";

// Presence Report requests land in Brendan's inbox. Sending domain
// latetwenties.agency is verified in the Resend account; RESEND_API_KEY lives
// in the project's environment (Vercel). FROM must stay on the verified domain.
const TO_ADDRESS = "team@latetwenties.agency";
const FROM_ADDRESS = "Latetwenties <noreply@latetwenties.agency>";

export type PresenceReportState = {
  status: "idle" | "success" | "error";
  message: string;
};

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitPresenceReport(
  _prev: PresenceReportState,
  formData: FormData,
): Promise<PresenceReportState> {
  // Honeypot: real people leave this empty, bots fill it.
  if (clean(formData.get("company_url"))) {
    return { status: "success", message: "Thanks, we'll be in touch shortly." };
  }

  const name = clean(formData.get("name"));
  const business = clean(formData.get("business"));
  const trade = clean(formData.get("trade"));
  const town = clean(formData.get("town"));
  const contact = clean(formData.get("contact"));

  if (!name || !business || !contact) {
    return {
      status: "error",
      message:
        "We need your name, your business name, and one way to reach you.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly in logs so a missing key doesn't look like a working form.
    console.error("RESEND_API_KEY is not set; Presence Report not sent.");
    return {
      status: "error",
      message:
        "Something went wrong on our end. Email team@latetwenties.agency and we'll sort it.",
    };
  }

  const resend = new Resend(apiKey);
  const looksLikeEmail = contact.includes("@");

  const lines = [
    `Name: ${name}`,
    `Business: ${business}`,
    `Trade: ${trade || "(not given)"}`,
    `Town: ${town || "(not given)"}`,
    `Best contact: ${contact}`,
  ];

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: looksLikeEmail ? contact : undefined,
      subject: `Presence Report request: ${business}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend send failed:", error);
      return {
        status: "error",
        message:
          "Something went wrong sending that. Email team@latetwenties.agency and we'll sort it.",
      };
    }
  } catch (err) {
    console.error("Resend threw:", err);
    return {
      status: "error",
      message:
        "Something went wrong sending that. Email team@latetwenties.agency and we'll sort it.",
    };
  }

  return {
    status: "success",
    message:
      "Got it. We'll go looking and send your video walkthrough within a couple of days.",
  };
}

"use server";

import { deliverPresenceReport } from "@/lib/presence-report";

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

  const fields = {
    name: clean(formData.get("name")),
    business: clean(formData.get("business")),
    website: clean(formData.get("website")),
    trade: clean(formData.get("trade")),
    town: clean(formData.get("town")),
    contact: clean(formData.get("contact")),
  };

  if (!fields.name || !fields.business || !fields.contact) {
    return {
      status: "error",
      message:
        "We need your name, your business name, and one way to reach you.",
    };
  }

  const result = await deliverPresenceReport(fields);

  if (!result.ok) {
    const message =
      result.reason === "no_key"
        ? "Something went wrong on our end. Email team@latetwenties.agency and we'll sort it."
        : "Something went wrong sending that. Email team@latetwenties.agency and we'll sort it.";
    return { status: "error", message };
  }

  return {
    status: "success",
    message:
      "Got it. We'll go looking and send your video walkthrough within a couple of days.",
  };
}

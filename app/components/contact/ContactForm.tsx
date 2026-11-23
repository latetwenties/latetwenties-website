"use client";

import { useActionState, useEffect } from "react";

import { track } from "@/lib/analytics";
import {
  submitPresenceReport,
  type PresenceReportState,
} from "../../contact/actions";

const INITIAL: PresenceReportState = { status: "idle", message: "" };

// The /contact form. Sends to the team inbox via Resend (lib/presence-report).
export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitPresenceReport,
    INITIAL,
  );

  useEffect(() => {
    if (state.status === "success") {
      track("generate_lead", {
        source: "contact_form",
        contact_type: state.contactType ?? "email",
      });
    }
  }, [state.status, state.contactType]);

  if (state.status === "success") {
    return (
      <div className="pr-done" role="status" aria-live="polite">
        <div className="pr-done-tag">Sent</div>
        <p className="pr-done-msg">{state.message}</p>
      </div>
    );
  }

  return (
    <form className="pr-form" action={formAction} noValidate>
      <div className="pr-form-tag">Send us a message</div>

      <div className="pr-field-row">
        <div className="pr-field">
          <label htmlFor="pr-name">Your name</label>
          <input id="pr-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="pr-field">
          <label htmlFor="pr-business">Business name</label>
          <input
            id="pr-business"
            name="business"
            type="text"
            autoComplete="organization"
            required
          />
        </div>
      </div>

      <div className="pr-field">
        <label htmlFor="pr-contact">Best email or phone</label>
        <input id="pr-contact" name="contact" type="text" autoComplete="email" required />
      </div>

      <div className="pr-field">
        <label htmlFor="pr-message">What can we help with?</label>
        <textarea
          id="pr-message"
          name="message"
          rows={5}
          placeholder="Your trade, your area, and what you'd like more of."
        />
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="pr-hp" aria-hidden="true">
        <label htmlFor="pr-company-url">Company URL</label>
        <input
          id="pr-company-url"
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" ? (
        <p className="pr-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button className="pr-submit" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
        <span aria-hidden="true"> →</span>
      </button>
    </form>
  );
}

"use client";

import { useActionState } from "react";

import {
  submitPresenceReport,
  type PresenceReportState,
} from "../../contact/actions";

const INITIAL: PresenceReportState = { status: "idle", message: "" };

export function PresenceReportForm() {
  const [state, formAction, pending] = useActionState(
    submitPresenceReport,
    INITIAL,
  );

  if (state.status === "success") {
    return (
      <div className="pr-done" role="status" aria-live="polite">
        <div className="pr-done-tag">Sent</div>
        <p className="pr-done-msg">{state.message}</p>
        <p className="pr-done-sub">
          No pitch on the video. It&rsquo;s yours either way.
        </p>
      </div>
    );
  }

  return (
    <form className="pr-form" action={formAction} noValidate>
      <div className="pr-form-tag">Free Presence Report</div>

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

      <div className="pr-field-row">
        <div className="pr-field">
          <label htmlFor="pr-trade">Your trade</label>
          <input
            id="pr-trade"
            name="trade"
            type="text"
            placeholder="e.g. concreting"
          />
        </div>
        <div className="pr-field">
          <label htmlFor="pr-town">Your town</label>
          <input id="pr-town" name="town" type="text" placeholder="e.g. Bairnsdale" />
        </div>
      </div>

      <div className="pr-field">
        <label htmlFor="pr-contact">Best email or phone</label>
        <input
          id="pr-contact"
          name="contact"
          type="text"
          autoComplete="email"
          required
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
        {pending ? "Sending…" : "Get my free Presence Report"}
        <span aria-hidden="true"> →</span>
      </button>

      <p className="pr-note">
        We&rsquo;ll go looking the way a customer would and send a short video
        walkthrough within a couple of days. No pitch.
      </p>
    </form>
  );
}

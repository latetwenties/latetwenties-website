# Tracking handoff: latetwenties.agency (`GTM-WCQNQ9LN`)

Last updated 2026-11-11. Goal: pass the Google Ads launch gate (`ads-standard.md` §0.1) for
the new account **Latetwenties, 164-164-0942** (NZD, under the 509-494-2382 manager).

## What the site already does (shipped in code)

Every event below is pushed to the dataLayer. No personal info is sent: no names, emails,
phone numbers or business names.

| Event | When | Params | Role |
|---|---|---|---|
| `generate_lead` | Free search lead accepted by the server (not the bot honeypot) | source, contact_type (email/mobile), job, area | **Conversion, primary** |
| `phone_click` | Tap on our own `tel:` link, anywhere | cta_location | **Conversion, primary** |
| `book_call` | `/booked` loads after a TidyCal booking (once per session) | source | **Conversion, primary** |
| `email_click` | Tap on a `mailto:` link | cta_location | GA4 only |
| `booking_click` | Click through to tidycal.com | cta_location | GA4 only, never primary |
| `free_search_start` | A free search starts running | job, area | GA4 only, never primary |

All six were verified firing on localhost on 2026-11-11 (the lead with the final submit
mocked so no email went out).

## What GTM already has

Published container: a Google tag for GA4 **G-6CFXX0R7X2** on initialisation, plus one paused
tag. GA4 exists, it just hasn't been receiving any events beyond page views.

## Step 1. TidyCal redirect (2 minutes)

TidyCal → the "15 Minute Meeting" booking type → after-booking settings → redirect to
`https://latetwenties.agency/booked`. Without this, `book_call` never fires.

## Step 2. Import into GTM

1. GTM → Admin → Import Container → `infra/gtm-container.json`
2. Existing workspace (Default) → **Merge** → **Rename conflicting**
3. Expect: 6 tags added (`GA4 Event - generate_lead`, `phone_click`, `book_call`,
   `email_click`, `booking_click`, `free_search_start`), 6 triggers (`CE - …`), 5 variables
   (`DLV - source`, `contact_type`, `job`, `area`, `cta_location`), 0 modified.
4. Preview → on latetwenties.agency tap the phone number, click "or book a call", and check
   each tag fires once. Then **Publish** ("Conversion events for Google Ads").

## Step 3. GA4 (property for G-6CFXX0R7X2)

1. Admin → Events → mark **generate_lead**, **phone_click**, **book_call** as key events. (If
   they haven't arrived yet, Key events → New key event and type the names.)
2. Admin → Custom definitions → event-scoped dimensions: `source`, `contact_type`, `job`,
   `area`, `cta_location`.
3. Admin → Product links → Google Ads → link **164-164-0942**.

## Step 4. Google Ads 164-164-0942

1. Admin → Account settings → **Auto-tagging on**.
2. Goals → Conversions → New → Import → Google Analytics 4 → web → tick
   `generate_lead`, `phone_click`, `book_call`.
3. For each: **Primary**, Count **One**, click-through window 30 days. Nothing else primary.

## Step 5. Live test (the gate)

On the live site, with Tag Assistant open:
- Tap the phone link → `phone_click` hits GA4 Realtime.
- Run a free search for a real business and leave your own email → `generate_lead` in
  Realtime (this one sends a real lead to team@ and a Slack ping).
- Book a test slot in TidyCal → lands on /booked → `book_call` in Realtime. Cancel the slot.

All three seen in Realtime = gate green. The campaign stays paused until then.

## Status (2026-11-11, done by Claude in Brendan's browser, with his approval)

- [x] Step 1. TidyCal "15 min checkin" (the `/15-minute-meeting` link the site uses) redirects
      to `https://latetwenties.agency/booked`.
- [x] Step 2. Imported as Merge (17 added, 0 modified, 0 deleted), published as GTM version 5
      "Conversion events for Google Ads". GTM account 6353495442, container 251426909.
- [x] Step 3. GA4 property **536088700** (account 393589953): generate_lead, phone_click,
      book_call are key events (no default value); 5 event-scoped dimensions created; linked to
      Ads 164-164-0942 with auto-tagging enabled.
- [x] Step 4. Ads 164-164-0942: auto-tagging on (API-verified). Conversion actions imported from
      GA4, all ENABLED, primary, ONE_PER_CLICK, 90-day click window (kept Google's default; an
      agency decision runs longer than 30 days): phone_click 7898301550, generate_lead
      7898301553, book_call 7898301556. GA4's default purchase / qualify_lead /
      close_convert_lead actions are HIDDEN and not primary.
- [x] GTM to GA4 leg verified in Realtime for all three (phone tap on /contact, /booked load,
      a test generate_lead pushed to the dataLayer; no email sent).
- [x] End to end proven 2026-11-11: a real free search lead and a real TidyCal booking
      landing on /booked. Note: Google Ads uses these as campaign-level goals, so the campaign
      build must select the three goals (the console warns they aren't account defaults).

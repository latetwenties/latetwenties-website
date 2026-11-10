// Weekly revenue-path smoke test. The Monday /weekly-digest run POSTs a valid
// payload with the recipient below to /api/presence-report and asserts the
// response carries `smoke: true`. That flag only appears when the full pipeline
// (validation, honeypot pass, delivery attempt) ran, so its absence on a 200
// means the honeypot short-circuited. Delivery itself is proven by the tagged
// email landing in the agency inbox. Mirrors boaz/tmt/rbm lib/smoke-test.
export const SMOKE_TEST_RECIPIENT = "smoke-test@latetwenties.agency";
export const SMOKE_TEST_SUBJECT_PREFIX = "[SMOKE TEST latetwenties] ";

export function isSmokeTestEmail(value: string): boolean {
  return value.trim().toLowerCase() === SMOKE_TEST_RECIPIENT;
}

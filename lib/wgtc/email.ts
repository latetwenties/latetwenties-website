// The visitor's own copy of their result: the scores and the moves, never a
// competitor's name, and the 15-minute call. Table layout with inline styles
// so it renders the same in Gmail, Outlook and Apple Mail. Colours are the
// site's tokens (app/globals.css); fonts fall back to email-safe faces.
export type ReportScore = { label: string; value: string; tone: "good" | "mid" | "bad" };
export type Report = {
  query: string;
  headline: string;
  scores: ReportScore[];
  moves: { title: string; body: string }[];
};

export const BOOKING_URL = "https://tidycal.com/latetwenties/15-minute-meeting";
const SITE = "https://latetwenties.agency";
const PHOTO = `${SITE}/_next/image?url=%2Fimages%2Fbrendan.png&w=128&q=75`;

const C = {
  ground: "#f2ece0",
  paper: "#faf6ec",
  ink: "#1a1814",
  soft: "#4a4339",
  mute: "#5e5644",
  rule: "#ddd5c5",
  accent: "#b85a2e",
  good: "#5c7a3e",
  mid: "#b85a2e",
  bad: "#b23a2e",
};
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "'SFMono-Regular', Menlo, Consolas, monospace";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderReport(r: Report, business: string) {
  const subject = `Your result for "${r.query}"`;

  const scores = r.scores
    .map(
      (s) => `<tr>
        <td style="padding:12px 0;border-top:1px solid ${C.rule};font:15px/1.4 ${SANS};color:${C.soft};">${esc(s.label)}</td>
        <td align="right" style="padding:12px 0;border-top:1px solid ${C.rule};font:600 15px/1.4 ${SANS};color:${C[s.tone]};">${esc(s.value)}</td>
      </tr>`,
    )
    .join("");

  const moves = r.moves
    .map(
      (m, i) => `<tr><td style="padding:0 0 22px;">
        <p style="margin:0 0 6px;font:600 16px/1.35 ${SANS};color:${C.ink};"><span style="color:${C.accent};">${i + 1}.</span> ${esc(m.title)}</p>
        <p style="margin:0;font:15px/1.55 ${SANS};color:${C.soft};">${esc(m.body)}</p>
      </td></tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:${C.ground};">
<div style="display:none;max-height:0;overflow:hidden;">${esc(r.headline)} Here are your moves.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.ground};">
<tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
    <tr><td style="padding:0 4px 18px;font:700 22px/1 ${SERIF};color:${C.ink};letter-spacing:-0.02em;">latetwenties.</td></tr>
    <tr><td style="background:${C.paper};border:1px solid ${C.rule};border-radius:20px;padding:32px 28px;">
      <p style="margin:0 0 14px;font:12px/1.4 ${MONO};letter-spacing:0.12em;text-transform:uppercase;color:${C.mute};">Your result for &ldquo;${esc(r.query)}&rdquo;</p>
      <h1 style="margin:0 0 24px;font:400 28px/1.2 ${SERIF};color:${C.ink};">${esc(r.headline)}</h1>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 30px;border-bottom:1px solid ${C.rule};">${scores}</table>
      <p style="margin:0 0 18px;font:400 22px/1.3 ${SERIF};color:${C.ink};">What would get more of these calls to ${esc(business)}</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${moves}</table>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 0;">
        <tr><td align="center" style="border-radius:999px;background:${C.ink};">
          <a href="${BOOKING_URL}" style="display:block;padding:16px 24px;font:500 16px/1 ${SANS};color:${C.paper};text-decoration:none;border-radius:999px;">Talk it through with Brendan, 15 min &rarr;</a>
        </td></tr>
      </table>
      <p style="margin:14px 0 0;text-align:center;font:13px/1.5 ${SANS};color:${C.mute};">No pitch, no lock-ins. Just what I'd do first.</p>
    </td></tr>
    <tr><td style="padding:26px 4px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
        <td style="padding-right:14px;vertical-align:middle;"><img src="${PHOTO}" width="52" height="52" alt="Brendan" style="display:block;border-radius:999px;border:0;"></td>
        <td style="vertical-align:middle;font:14px/1.45 ${SANS};color:${C.soft};"><strong style="color:${C.ink};">Brendan MacDonald</strong><br>Latetwenties, local search and Google Ads for NZ trades<br><a href="${SITE}" style="color:${C.accent};text-decoration:none;">latetwenties.agency</a></td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:24px 4px 0;font:12px/1.5 ${SANS};color:${C.mute};">You're getting this because you asked for your result on latetwenties.agency. It's a one-off: you're not on a mailing list. Results are live from Google and the AI assistants at the time you ran it, and can differ from your own phone.</td></tr>
  </table>
</td></tr></table>
</body></html>`;

  const text = [
    `Your result for "${r.query}"`,
    "",
    r.headline,
    "",
    ...r.scores.map((s) => `${s.label}: ${s.value}`),
    "",
    `What would get more of these calls to ${business}:`,
    ...r.moves.map((m, i) => `${i + 1}. ${m.title}\n   ${m.body}`),
    "",
    `Talk it through with Brendan, 15 min: ${BOOKING_URL}`,
    "",
    "Brendan MacDonald, Latetwenties",
    SITE,
  ].join("\n");

  return { subject, html, text };
}

// The report arrives from the visitor's browser, so the server only accepts
// short plain text in known shapes: no links, no markup, capped lengths. That
// keeps the send from being usable to mail arbitrary content.
export function cleanReport(v: unknown): Report | null {
  if (!v || typeof v !== "object") return null;
  const r = v as Record<string, unknown>;
  const str = (x: unknown, max: number) => {
    if (typeof x !== "string") return null;
    const s = x.replace(/\s+/g, " ").trim();
    if (!s || s.length > max || /https?:|www\.|<|>/i.test(s)) return null;
    return s;
  };
  const query = str(r.query, 80);
  const headline = str(r.headline, 120);
  if (!query || !headline || !Array.isArray(r.scores) || !Array.isArray(r.moves)) return null;
  const scores: ReportScore[] = [];
  for (const s of r.scores.slice(0, 6) as Record<string, unknown>[]) {
    const label = str(s?.label, 40);
    const value = str(s?.value, 40);
    const tone = s?.tone === "good" || s?.tone === "bad" ? s.tone : "mid";
    if (!label || !value) return null;
    scores.push({ label, value, tone });
  }
  const moves: Report["moves"] = [];
  for (const m of r.moves.slice(0, 5) as Record<string, unknown>[]) {
    const title = str(m?.title, 80);
    const body = str(m?.body, 500);
    if (!title || !body) return null;
    moves.push({ title, body });
  }
  return { query, headline, scores, moves };
}

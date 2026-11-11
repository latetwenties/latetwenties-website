import { after } from "next/server";

import { postToSlack } from "@/lib/slack";

// Tells Brendan someone used the free search. Runs after the response is
// sent, so a slow or failing Slack call never slows the visitor down.
export function alertBrendan(text: string) {
  after(async () => {
    const r = await postToSlack({ text });
    if (!r.ok) console.error(`[wgtc/alert] Slack failed (${r.error}): ${text}`);
  });
}

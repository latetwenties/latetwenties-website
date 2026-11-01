import { NextResponse } from "next/server";

import { type Business, chatgpt, isYou, plain, textNamesYou } from "@/lib/wgtc/dataforseo";
import { guard, text } from "@/lib/wgtc/guard";
import type { AiResult } from "@/lib/wgtc/types";

export const maxDuration = 90;

// Ask ChatGPT (the real chatgpt.com answer, with web search) the question a
// customer would. One call ($0.004), about 25 seconds.
export async function POST(req: Request) {
  const blocked = guard(req);
  if (blocked) return blocked;

  const body = await req.json().catch(() => ({}));
  const job = text(body.job);
  const area = text(body.centre?.name);
  const country = body.centre?.country === "Australia" ? "Australia" : "New Zealand";
  const you = body.you as Business | undefined;
  if (!job || !area || !you?.name) {
    return NextResponse.json({ error: "Missing search details." }, { status: 400 });
  }

  const question = `Who's the best ${job} in ${area}? Name up to 5 local businesses.`;
  try {
    const items = await chatgpt(question, country);

    const answer = items
      .filter((i) => i.type === "chat_gpt_text")
      .map((i) => String(i.markdown ?? ""))
      .join("");

    const named: string[] = [];
    let youNamed = textNamesYou(answer, you);
    for (const i of items) {
      for (const e of (i.brand_entities as { title?: string }[] | undefined) ?? []) {
        if (e.title && !named.includes(e.title)) named.push(e.title);
      }
      if (i.type === "chat_gpt_local_businesses") {
        for (const b of (i.items as Record<string, unknown>[] | undefined) ?? []) {
          if (isYou({ ...b, type: "local" }, you)) youNamed = true;
          const t = String(b.title ?? "");
          if (t && !named.includes(t)) named.push(t);
        }
      }
    }

    const result: AiResult = {
      question,
      answer: plain(answer, 650),
      named: named.slice(0, 6),
      youNamed,
    };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[wgtc/ai]", err);
    return NextResponse.json({ error: "ChatGPT didn't answer this time." }, { status: 502 });
  }
}

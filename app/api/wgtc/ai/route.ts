import { NextResponse } from "next/server";

import { aiMode, type Business, chatgpt, isYou, llm, plain, textNamesYou } from "@/lib/wgtc/dataforseo";
import { guard, num, text } from "@/lib/wgtc/guard";
import type { AiAnswer, AiResult } from "@/lib/wgtc/types";

export const maxDuration = 90;

// Ask four AI assistants the question a customer would, all at once:
// ChatGPT (the real chatgpt.com answer), Google's AI Mode searched from the
// area, Perplexity and Claude, both with web search. About $0.06 and 25 seconds,
// set by ChatGPT. An assistant that fails is left out, never guessed.
export async function POST(req: Request) {
  const blocked = guard(req);
  if (blocked) return blocked;

  const body = await req.json().catch(() => ({}));
  const job = text(body.job);
  const area = text(body.centre?.name);
  const lat = num(body.centre?.lat);
  const lng = num(body.centre?.lng);
  const country = body.centre?.country === "Australia" ? "Australia" : "New Zealand";
  const you = body.you as Business | undefined;
  if (!job || !area || lat === null || lng === null || !you?.name) {
    return NextResponse.json({ error: "Missing search details." }, { status: 400 });
  }

  const question = `Who's the best ${job} in ${area}? Name up to 5 local businesses.`;
  // The API assistants don't know where the asker is, so they get the country.
  const withCountry = `Who's the best ${job} in ${area}, ${country}? Name up to 5 local businesses.`;

  const settle = async (
    engine: AiAnswer["engine"],
    label: string,
    run: () => Promise<{ text: string; named?: boolean }>,
  ): Promise<AiAnswer | null> => {
    try {
      const { text: answer, named } = await run();
      if (!answer.trim()) return null;
      return { engine, label, answer: plain(answer, 520), youNamed: !!named || textNamesYou(answer, you) };
    } catch (err) {
      console.error(`[wgtc/ai] ${engine}`, err);
      return null;
    }
  };

  const answers = await Promise.all([
    settle("chatgpt", "ChatGPT", async () => {
      const items = await chatgpt(question, country);
      const answer = items
        .filter((i) => i.type === "chat_gpt_text")
        .map((i) => String(i.markdown ?? ""))
        .join("");
      // ChatGPT also returns structured business cards; match those too.
      const named = items
        .filter((i) => i.type === "chat_gpt_local_businesses")
        .flatMap((i) => (i.items as Record<string, unknown>[] | undefined) ?? [])
        .some((b) => isYou({ ...b, type: "local" }, you));
      return { text: answer, named };
    }),
    settle("aimode", "Google AI Mode", async () => ({ text: await aiMode(question, lat, lng) })),
    settle("perplexity", "Perplexity", async () => ({ text: await llm("perplexity", "sonar", withCountry) })),
    settle("claude", "Claude", async () => ({ text: await llm("claude", "claude-sonnet-5-5", withCountry) })),
  ]);

  const result: AiResult = { question, answers: answers.filter((a): a is AiAnswer => a !== null) };
  if (!result.answers.length) {
    return NextResponse.json({ error: "None of the AI assistants answered this time." }, { status: 502 });
  }
  return NextResponse.json(result);
}

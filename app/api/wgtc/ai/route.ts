import { NextResponse } from "next/server";

import { aiMode, type Business, chatgpt, isYou, llm, plain, textNamesYou } from "@/lib/wgtc/dataforseo";
import { aiQuestion, parseJob } from "@/lib/wgtc/job";
import { guard, num, text } from "@/lib/wgtc/guard";
import type { AiAnswer, AiResult, Engine } from "@/lib/wgtc/types";

export const maxDuration = 90;

// An assistant still thinking after this long is left out, so one slow
// answer can't hold the whole run up. ChatGPT (the real chatgpt.com answer)
// is the slowest and the one people care about most, so it gets its own
// request from the page and longer to answer.
const TIMEOUT_MS: Record<Engine, number> = { chatgpt: 45_000, aimode: 24_000, perplexity: 24_000, claude: 24_000 };
const ENGINES: Engine[] = ["chatgpt", "aimode", "perplexity", "claude"];

// Ask four AI assistants the question a customer would, all at once:
// ChatGPT (the real chatgpt.com answer), Google's AI Mode searched from the
// area, Perplexity and Claude, both with web search. About $0.06 and 25 seconds
// at most. An assistant that fails or runs late is left out, never guessed.
export async function POST(req: Request) {
  const blocked = guard(req);
  if (blocked) return blocked;

  const body = await req.json().catch(() => ({}));
  const job = parseJob(text(body.job));
  const area = text(body.centre?.name);
  const lat = num(body.centre?.lat);
  const lng = num(body.centre?.lng);
  const country = body.centre?.country === "Australia" ? "Australia" : "New Zealand";
  const you = body.you as Business | undefined;
  // Optional subset of assistants to ask; all four when not given.
  const wanted = Array.isArray(body.engines)
    ? ENGINES.filter((e) => (body.engines as unknown[]).includes(e))
    : ENGINES;
  if (!job.search || !area || lat === null || lng === null || !you?.name) {
    return NextResponse.json({ error: "Missing search details." }, { status: 400 });
  }

  const question = aiQuestion(job, area);
  // The API assistants don't know where the asker is, so they get the country.
  const withCountry = aiQuestion(job, area, `${area}, ${country}`);

  const settle = async (
    engine: AiAnswer["engine"],
    label: string,
    run: () => Promise<{ text: string; named?: boolean }>,
  ): Promise<AiAnswer | null> => {
    if (!wanted.includes(engine)) return null;
    const ms = TIMEOUT_MS[engine];
    try {
      const { text: answer, named } = await Promise.race([
        run(),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error(`no answer in ${ms / 1000}s`)), ms),
        ),
      ]);
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

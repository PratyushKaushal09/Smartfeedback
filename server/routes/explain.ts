import type { RequestHandler } from "express";
import { SPORTS } from "../../shared/sports";
import type { ExplainRequest, ExplainResponse } from "../../shared/api";

export const handleExplain: RequestHandler = async (req, res) => {
  try {
    const body = req.body as ExplainRequest;
    const { sport, answers, topTeams } = body;
    if (!sport || !SPORTS[sport]) {
      return res.status(400).json({ error: "Unsupported or missing sport" });
    }
    if (!Array.isArray(answers) || !Array.isArray(topTeams)) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const data = SPORTS[sport];
    const attrById = new Map(data.attributes.map((a) => [a.id, a] as const));

    const explainLocally = () => {
      const top = topTeams[0];
      const chosen = answers.filter((a) => a.choice === "yes").slice(0, 5);
      const attrList = chosen.map((a) => attrById.get(a.attributeId)?.name).filter(Boolean);
      const parts: string[] = [];
      parts.push(`Top pick: ${top?.name ?? "N/A"} (score ${top?.score ?? 0}).`);
      if (attrList.length) {
        parts.push(`Key alignments: ${attrList.join(", ")}.`);
      }
      parts.push("This is a rule-based summary generated without an LLM.");
      return parts.join(" ");
    };

    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || process.env.LLM_API_KEY;

    if (!OPENROUTER_API_KEY) {
      const response: ExplainResponse = {
        explanation: explainLocally(),
        usedLLM: false,
      };
      return res.json(response);
    }

    // Prepare prompt for LLM
    const topText = topTeams
      .slice(0, 3)
      .map((t, i) => `#${i + 1} ${t.name} (score ${t.score})`)
      .join("; ");

    const answerText = answers
      .map((a) => `${attrById.get(a.attributeId)?.name ?? a.attributeId}: ${a.choice}`)
      .join("; ");

    const systemPrompt = `You are a helpful sports assistant. Explain clearly and concisely why the predicted teams fit the user's preferences based on the listed attributes. Keep it under 120 words, use plain language, and avoid speculation beyond the provided attributes.`;

    const userPrompt = `Sport: ${sport}\nUser choices: ${answerText}\nPredicted top teams: ${topText}\nExplain the result.`;

    // Call OpenRouter (compatible with OpenAI-style)
    const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini", // small, cost-effective model id on OpenRouter
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.2,
        max_tokens: 200,
      }),
    });

    if (!resp.ok) {
      const response: ExplainResponse = {
        explanation: explainLocally(),
        usedLLM: false,
      };
      return res.json(response);
    }

    const json = await resp.json();
    const text = json?.choices?.[0]?.message?.content?.trim();

    const response: ExplainResponse = {
      explanation: text || explainLocally(),
      usedLLM: Boolean(text),
    };
    res.json(response);
  } catch (err) {
    const response: ExplainResponse = {
      explanation: "We could not generate an explanation right now.",
      usedLLM: false,
    };
    res.status(200).json(response);
  }
};

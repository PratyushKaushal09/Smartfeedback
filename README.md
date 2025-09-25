# Mystic Zone – Sports Team Predictor

This app includes a questionnaire that predicts the best matching teams for Football and Cricket based on your attribute preferences. It also supports an optional AI explanation for the results via a secure server-side API.

## Quick Start

- Install deps: `pnpm i`
- Start dev server: `pnpm dev`
- Open http://localhost:8080 and click a sport to take the quiz.

## Environment Variables

Public variables go in `.env`:

- `VITE_PUBLIC_BUILDER_KEY` – Your Builder.io Public API key (already set for demo).

Secrets must NOT be committed. Set them in your dev environment (not in `.env`):

- `OPENROUTER_API_KEY` – Optional. Used by `/api/explain` to generate AI explanations.

If `OPENROUTER_API_KEY` is not set, the explanation falls back to a local, rule-based summary.

## New API

- `POST /api/explain`
  - Request body (JSON):
    ```json
    {
      "sport": "football" | "cricket",
      "answers": [{ "attributeId": 1, "choice": "yes" }],
      "topTeams": [{ "id": 1, "name": "Manchester City", "score": 7 }]
    }
    ```
  - Response body (JSON):
    ```json
    {
      "explanation": "...",
      "usedLLM": true
    }
    ```

## Where Things Live

- Questionnaire UI: `client/pages/Quiz.tsx`
- Shared sports data: `shared/sports.ts`
- Scoring engine: `shared/scoring.ts`
- Explain API route: `server/routes/explain.ts` (registered in `server/index.ts`)

## Notes

- The scorer uses a simple, symmetric rule: saying "Yes" to an attribute gives +1 if a team has that attribute and -1 if it does not. "No" is the inverse. "Neutral" contributes 0.
- Node 18+ is recommended (for native `fetch`). If on older Node, install `undici` or `node-fetch` and wire it in the route.
- Never hardcode private keys in source control. Set them in your environment.

---
title: API Reference
---

This document lists server API endpoints exposed by the Express app.

## Base

- All endpoints are prefixed with `/api`.
- JSON in/out. The server uses `express.json()`.

## Endpoints

### GET `/api/ping`

- Description: Health check / simple ping.
- Env: Uses optional `PING_MESSAGE` environment variable.
- Response:
  ```json
  { "message": "ping" }
  ```

### GET `/api/demo`

- Description: Demo endpoint. See `server/routes/demo.ts` for implementation.
- Response: `DemoResponse` from `@shared/api` (if used).

### POST `/api/explain`

- Description: Generates an explanation for quiz results.
- Env: Optional `OPENROUTER_API_KEY` to use LLM; otherwise falls back to a rule-based summary.
- Request body:
  ```json
  {
    "sport": "football" | "cricket",
    "answers": [{ "attributeId": 1, "choice": "yes" }],
    "topTeams": [{ "id": 1, "name": "Manchester City", "score": 7 }]
  }
  ```
- Response:
  ```json
  {
    "explanation": "...",
    "usedLLM": true
  }
  ```

## Notes

- Source: `server/index.ts` registers these routes.
- New routes should be added under `server/routes/` and registered in `server/index.ts`.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

---
title: Routing Map (SPA + API)
---

Overview of application routes.

## SPA Routes (`client/App.tsx`)

- `/` → `Index`
- `/quiz/:sport` → `Quiz`
- `/b/*` → `BuilderPage`
- `*` → `NotFound`

Routes are wrapped by `Layout`.

## API Routes (`server/index.ts`)

- `GET /api/ping` → health/ping
- `GET /api/demo` → demo handler
- `POST /api/explain` → returns explanation for quiz results (LLM optional)

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

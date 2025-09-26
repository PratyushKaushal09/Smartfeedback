---
title: Getting started with Mystic Zone
---

Welcome to the Mystic Zone – Sports Team Predictor.

This short guide shows how to run the app locally and how to work with documentation using Swimm.

## Run locally

- Requirements:
  - Node 18+
  - PNPM installed (`npm i -g pnpm`)
- Install dependencies:
  - `pnpm i`
- Start dev server:
  - `pnpm dev`
- Open the app:
  - http://localhost:8080

## Project structure

- `client/` – React SPA (Vite + React Router 6 + TailwindCSS)
- `server/` – Express API (integrated with Vite dev in development)
- `shared/` – Shared, type-safe modules between client and server
- `.swm/` – Swimm documentation

Key files:
- UI quiz page: `client/pages/Quiz.tsx`
- Sports data: `shared/sports.ts`
- Scoring engine: `shared/scoring.ts`
- Explain API route: `server/routes/explain.ts` (registered in `server/index.ts`)

## Swimm docs workflow

- Docs live in `.swm/` and are versioned in Git.
- On every PR, GitHub Actions runs Swimm Verify to ensure docs are in sync with code.
- If verification fails, open the Swimm app, update docs, and push changes.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

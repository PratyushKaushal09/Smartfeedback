---
title: Architecture Overview
---

This document provides a high-level overview of the Mystic Zone codebase and how the pieces fit together.

## Tech Stack

- Frontend: React 18, React Router 6 (SPA), Vite, TailwindCSS
- Backend: Express server (integrated with Vite dev server)
- Types: TypeScript (client, server, shared)
- Testing: Vitest
- UI: Radix UI + Tailwind components

## Folder Structure

- `client/` – React SPA
  - `pages/` – Route components (e.g., `Index.tsx`, `Quiz.tsx`)
  - `components/` – Reusable UI and sections
  - `global.css` – Tailwind theme and global styles
  - `App.tsx` – Router and app entry
- `server/` – Express API routes and server setup
  - `index.ts` – Express configuration and route registration
  - `routes/` – API handlers (e.g., `explain.ts`)
- `shared/` – Shared logic & types
  - `sports.ts` – Sports and attributes data model
  - `scoring.ts` – Scoring engine used by the quiz
- `.swm/` – Swimm documentation

## Key Flows

- Quiz flow: `client/pages/Quiz.tsx` renders questions using data from `shared/sports.ts`. After user answers, `shared/scoring.ts` computes team scores.
- Explain API: `server/routes/explain.ts` optionally calls a large language model (LLM) if `OPENROUTER_API_KEY` is set; otherwise falls back to a rule-based summary.
- SPA routing: Routes defined in `client/App.tsx` using `react-router-dom`.

## Running Locally

- Install deps: `pnpm i`
- Dev server: `pnpm dev`
- Visit: http://localhost:8080

## CI & Docs with Swimm

- Docs live in `.swm/` and are versioned.
- CI runs Swimm Verify on PRs to keep docs in sync.
- If verification fails, update the relevant doc in `.swm/` and push.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

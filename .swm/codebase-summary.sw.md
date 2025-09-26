---
title: Codebase Summary – Mystic Zone
---

This document summarizes the entire Mystic Zone project: architecture, directories, key modules, build/runtime, CI/CD, and deployment paths. Use this as your high-level map before diving into feature docs.

## Goals & Stack

- Predict favorite teams in Football, Cricket, and drivers in F1 via a fun quiz.
- Show ranked results with premium visuals, including winning images and celebrations.
- Tech stack:
  - Client: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
  - Server: Express (integrated with Vite dev server)
  - Testing: Vitest
  - UI: Radix UI + Tailwind + Lucide icons
  - Package manager: pnpm

## Repository Layout

- `client/` – React SPA frontend
  - `pages/` – Route components (e.g., `Index.tsx`, `Quiz.tsx`, `NotFound.tsx`, `BuilderPage.tsx`)
  - `components/` – UI and layout components
    - `layout/` – `Layout.tsx` (wraps routes), `SiteHeader.tsx`, `SiteFooter.tsx`, `BackgroundFX.tsx`
    - `sections/` – Features, Stats, Testimonials, Logos strip
    - `hero/` – `Hero.tsx`, animated hero banner
  - `builder/` – `BuilderProvider` integration for Builder.io content
  - `global.css` – Tailwind theme tokens, animations, background themes
  - `App.tsx` – App entry, React Router setup, MotionConfig for reduced-motion
- `server/` – Express backend
  - `index.ts` – Express app setup, routes registration (`/api/*`)
  - `routes/` – API handlers (e.g., `explain.ts`, `ping`, `demo`)
- `shared/` – Shared TypeScript types and utilities for client/server
  - `api.ts` – Shared API typings (example)
  - `sports.ts` – Sports/team/driver data
  - `scoring.ts` – Scoring engine for quiz answers
- `public/` – Static assets served as-is
  - `winners/` – Winner images by sport
    - `football/`, `cricket/`, `f1/` – place `<slug>.jpg` (and optional `.webp`)
    - `placeholders/` – sport fallbacks: `football.svg`, `cricket.svg`, `f1.svg`
- `k8s/` – Kubernetes manifests (optional)
  - `deployment.yaml`, `service.yaml`
- CI & infra
  - `.github/workflows/swimm-verify.yml` – Swimm docs verification on PR/main
  - `.github/workflows/docker-build.yml` – Docker build on PR/main
  - `Dockerfile`, `docker-compose.yml` – Containerization
  - `.github/CODEOWNERS` – Reviews required for `.swm/**`, `server/**`, `client/**`

## How the Quiz Works

- Source: `client/pages/Quiz.tsx`
  - Loads sports/team data from `shared/sports.ts`
  - Uses `shared/scoring.ts` to rank top teams/drivers based on answers
  - Shows results with animated winner card and team/driver images:
    - `winnerImgPath(sport, name)` computes `/winners/{sport}/<slug>.jpg`
    - `<picture>` used for F1 to prefer WebP with JPG fallback
    - Missing images fall back to sport placeholders
  - Auto-scrolls to results upon completion
  - Optional: calls `/api/explain` to generate an explanation
- API: `server/routes/explain.ts`
  - If `OPENROUTER_API_KEY` set, uses LLM; else returns rule-based summary

## Visual & Motion System

- Background effects: `client/components/layout/BackgroundFX.tsx`
  - Subtle grid, radial vignette, gradient blobs, noise overlay
- Global theme and animations: `client/global.css`
- Route transitions: `client/components/layout/Layout.tsx` with `AnimatePresence`
- Hero polish: gradient text, top shine, float animation (`client/components/hero/Hero.tsx`)
- Glass cards: features, stats, testimonials, logos strip under `client/components/sections/`
- Respect reduced motion via `MotionConfig reducedMotion="user"` (in `App.tsx`)

## Development & Running

- Local dev: `pnpm i` then `pnpm dev` → http://localhost:8080
- Docker:
  - Build: `docker build -t mystic-zone:latest .`
  - Run: `docker run --rm -p 8080:8080 mystic-zone:latest`
  - Compose: `docker compose up --build`
- Environment variables
  - Public (in `.env`): `VITE_PUBLIC_BUILDER_KEY`
  - Private (shell/CI only): `OPENROUTER_API_KEY`

## CI/CD & Governance

- Swimm Verify prevents stale docs (see `.github/workflows/swimm-verify.yml`)
- Docker Build workflow checks containerization on PR/main
- CODEOWNERS enforce reviews for app code and docs

## Kubernetes (optional)

- Manifests under `k8s/` for Deployment + Service
- Add `k8s/ingress.yaml` and GHCR image publishing workflow for cloud providers upon request
- Local Desktop Kubernetes or Minikube can run with local images

## Where to Go Next

- Getting started: `.swm/getting-started.sw.md`
- Architecture overview: `.swm/architecture-overview.sw.md`
- UI Aesthetics & Motion: `.swm/ui-aesthetics-and-motion.sw.md`
- Add winner photos: `.swm/add-winner-photos.sw.md`
- Release process: `.swm/release-guide.sw.md`

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

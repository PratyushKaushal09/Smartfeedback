---
title: Netlify Deploy Guide
---

This guide explains how to deploy and maintain the site on Netlify.

## Live Site

- https://charminarpredicts.netlify.app/

## Build Settings (Site settings → Build & deploy)

- Base directory: `/`
- Build command: `pnpm i --frozen-lockfile && pnpm build`
- Publish directory: If your current site works, keep the same setting. Common values:
  - `dist`
  - or `dist/client` (depending on server bundling)

## Environment Variables (Site settings → Environment)

- `VITE_PUBLIC_BUILDER_KEY` (optional) → enables Builder.io content
- `OPENROUTER_API_KEY` (optional) → enables AI explanations in `/api/explain`

## Triggers

- Enable “Deploys from Git” for the `main` branch to auto-deploy on every push.

## Troubleshooting

- Blank page after deploy:
  - Try switching Publish directory between `dist` and `dist/client` and redeploy.
- Missing API features:
  - Ensure `OPENROUTER_API_KEY` is set if you expect LLM explanations.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

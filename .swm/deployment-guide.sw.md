---
title: Deployment Guide
---

This project can be deployed in multiple ways.

## Standard build

```bash
pnpm build
pnpm start
```

- `pnpm build` builds client and server into `dist/`.
- `pnpm start` runs the production server: `dist/server/node-build.mjs`.

## Docker

- Build: `docker build -t mystic-zone:latest .`
- Run: `docker run --rm -p 8080:8080 mystic-zone:latest`
- Compose: `docker compose up --build`

## Cloud

- Netlify / Vercel are recommended (see README for starter notes).

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

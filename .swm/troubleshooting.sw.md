---
title: Troubleshooting
---

Common issues and fixes.

## Dev server doesn’t start

- Ensure Node 18+ and PNPM installed.
- Run `pnpm i` then `pnpm dev`.

## Docker image fails to build

- Make sure `.dockerignore` doesn’t exclude required source (server, types).
- Rebuild with `docker build --no-cache -t mystic-zone:latest .`.

## Swimm Verify fails on PR

- Check action logs for which doc is out of sync.
- Update docs in `.swm/` using the Swimm app, commit, and push.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

---
title: Release Guide
---

This guide describes the steps to prepare and ship a release.

## Pre-release checklist

- [ ] Update Swimm docs for any code or workflow changes (`.swm/`)
- [ ] Ensure CI is green (Swimm Verify + tests)
- [ ] Update `README.md` if user-facing behavior changed
- [ ] Verify Docker build (`docker build -t mystic-zone:latest .`)

## Versioning

- We follow semantic versioning. Tag format: `vX.Y.Z`.
- Keep changes small and scoped.

## Release steps

1. Create a release branch (e.g. `release/vX.Y.Z`)
2. Update docs/tests as needed, ensure CI is green
3. Merge to `main`
4. Create a GitHub Release:
   - Title: `vX.Y.Z`
   - Notes: bullet points of changes
5. Tag the commit: `git tag vX.Y.Z && git push --tags`

## Post-release

- Announce changes (if applicable)
- Monitor issues/feedback

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

---
title: Contributing with Swimm
---

This guide describes how to keep documentation up to date with your code changes using Swimm.

## When to update docs

- You changed a public API or route
- You modified folder/file structure
- You added a new feature or removed an old one
- You changed setup, build, or run instructions

## Workflow

1. Make your code changes in a feature branch.
2. Open the Swimm app and load this repository.
3. Update existing docs in `.swm/` or create a new `*.sw.md` document.
4. Keep docs short, scoped, and close to the part of code that changed.
5. Commit docs with your code.
6. Open a PR. CI will run Swimm Verify and indicate if docs are out of sync.
7. If CI fails, follow the hints, update the doc(s), and push again.

## Tips

- Link to specific files using Swimm blocks so they auto-sync on code changes.
- Prefer task-focused docs ("How to add a new API route") over long encyclopedias.
- Co-locate docs logically with features they describe.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

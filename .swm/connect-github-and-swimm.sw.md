---
title: Connect GitHub and Swimm (Step-by-step)
---

This guide shows how to connect your GitHub repository to Swimm so documentation is verified on every pull request.

## Prerequisites

- You have push access to this repo.
- The repo contains the Swimm Verify workflow:
  - `.github/workflows/swimm-verify.yml` (already added in this project).
- Swimm docs live in `.swm/` (already in this project).

## 1) Install the Swimm GitHub App

1. Go to https://github.com/apps/swimm-io
2. Click "Configure".
3. Choose the account/org that owns this repository.
4. Select "Only select repositories" and add `PratyushKaushal09/Smartfeedback` (or choose "All repositories" if you prefer).
5. Save.

## 2) Verify the workflow

- Open `.github/workflows/swimm-verify.yml` and confirm it exists.
- It should use:
  - `actions/checkout@v4` with `fetch-depth: 0`
  - `swimmio/swimm-verify-action@v1.4`

## 3) Protect the main branch (recommended)

GitHub → Settings → Branches → Branch protection rules → New rule:

- Branch name pattern: `main`
- Check: "Require a pull request before merging"
- Check: "Require status checks to pass before merging"
- Select the "Swimm Verify" job as a required check
- Save.

## 4) Open a test PR

1. Create a new branch and change a file.
2. Optionally update or add a Swimm doc under `.swm/`.
3. Push and open a pull request.
4. Wait for CI to run. Look for the "Swimm Verify" job.

If the job fails, open the logs and follow the hints. Update the doc(s) and push again.

## 5) Ongoing workflow

- Whenever you change code behavior, folder structure, or developer workflow, update `.swm/` docs in the same PR.
- The CI will keep docs fresh and catch mismatches.
- The PR template in `.github/PULL_REQUEST_TEMPLATE.md` reminds you to update docs.

## Troubleshooting

- "Swimm Verify job missing":
  - Ensure the action file exists at `.github/workflows/swimm-verify.yml`.
  - Ensure the Swimm GitHub App is installed for this repo.
  - Confirm the PR is opened against `main` or that your workflow triggers include your branch.
- "Permission errors":
  - Make sure the GitHub App has access to this repository.
- "Verify fails":
  - Open the action logs for details.
  - Update or sync the relevant docs in `.swm/` and push.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

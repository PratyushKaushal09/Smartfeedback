# Mystic Zone – Sports Team Predictor

Live: https://charminarpredicts.netlify.app/

![Swimm Verify](https://github.com/PratyushKaushal09/Smartfeedback/actions/workflows/swimm-verify.yml/badge.svg)

This app includes a questionnaire that predicts the best matching teams for Football and Cricket based on your attribute preferences. It also supports an optional AI explanation for the results via a secure server-side API.

## Quick Start

- Install deps: `pnpm i`
- Start dev server: `pnpm dev`
- Open http://localhost:8080 and click a sport to take the quiz.

## Documentation

- Swimm docs live in `.swm/`:
  - Getting Started: `.swm/getting-started.sw.md`
  - Architecture Overview: `.swm/architecture-overview.sw.md`
- CI runs Swimm Verify on PRs to ensure docs stay in sync (see `.github/workflows/swimm-verify.yml`).
- After pushing to GitHub, you can optionally add a status badge to this README that points to the Swimm Verify workflow.

## Contributing

Please read the contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

### Connect GitHub + Swimm

1. Install the Swimm GitHub App on your repository:
   - https://github.com/apps/swimm-io → Configure → Select `PratyushKaushal09/Smartfeedback`.
2. Ensure the workflow file exists: `.github/workflows/swimm-verify.yml` (already added).
3. Protect the `main` branch (recommended):
   - GitHub → Settings → Branches → Branch protection rules → Add rule for `main`.
   - Check “Require status checks to pass before merging”.
   - Select the “Swimm Verify” job as a required check.
4. Open a test PR and confirm the “Swimm Verify” job appears and runs.

## Docker

You can run the app in a container using Docker or Docker Compose.

### Build & run with Docker

```bash
# Build the image
docker build -t mystic-zone:latest .

# Run the container (exposes port 8080)
docker run --rm -p 8080:8080 \
  -e VITE_PUBLIC_BUILDER_KEY="$VITE_PUBLIC_BUILDER_KEY" \
  -e OPENROUTER_API_KEY="$OPENROUTER_API_KEY" \
  mystic-zone:latest
```

Open http://localhost:8080

### Using docker-compose

```bash
# Build and start
docker compose up --build

# Stop
docker compose down
```

Compose reads environment variables from your shell (and `.env` if present). Public Vite vars must be prefixed `VITE_`.

## Netlify Deployment

- This project is deployed to Netlify: https://charminarpredicts.netlify.app/
- Recommended settings (Site settings → Build & deploy):
  - Base directory: `/`
  - Build command: `pnpm i --frozen-lockfile && pnpm build`
  - Publish directory: keep whichever is already working for your site (commonly `dist` or `dist/client` depending on your server bundle). If unsure, try `dist` first.
- Environment variables (Site settings → Environment):
  - `VITE_PUBLIC_BUILDER_KEY` (optional)
  - `OPENROUTER_API_KEY` (optional)
- Optional: Add a deploy status badge once you have your Site ID from Netlify.

## Environment Variables

Public variables go in `.env`:

- `VITE_PUBLIC_BUILDER_KEY` – Your Builder.io Public API key (already set for demo).

Secrets must NOT be committed. Set them in your dev environment (not in `.env`):

- `OPENROUTER_API_KEY` – Optional. Used by `/api/explain` to generate AI explanations.

If `OPENROUTER_API_KEY` is not set, the explanation falls back to a local, rule-based summary.

## New API

- `POST /api/explain`
  - Request body (JSON):
    ```json
    {
      "sport": "football" | "cricket",
      "answers": [{ "attributeId": 1, "choice": "yes" }],
      "topTeams": [{ "id": 1, "name": "Manchester City", "score": 7 }]
    }
    ```
  - Response body (JSON):
    ```json
    {
      "explanation": "...",
      "usedLLM": true
    }
    ```

## Where Things Live

- Questionnaire UI: `client/pages/Quiz.tsx`
- Shared sports data: `shared/sports.ts`
- Scoring engine: `shared/scoring.ts`
- Explain API route: `server/routes/explain.ts` (registered in `server/index.ts`)

## Notes

- The scorer uses a simple, symmetric rule: saying "Yes" to an attribute gives +1 if a team has that attribute and -1 if it does not. "No" is the inverse. "Neutral" contributes 0.
- Node 18+ is recommended (for native `fetch`). If on older Node, install `undici` or `node-fetch` and wire it in the route.
- Never hardcode private keys in source control. Set them in your environment.

## Swimm Docs

- Swimm documentation lives under the `.swm/` directory at the repository root. Example: `.swm/untitled-doc.m5qh15u1.sw.md`.
- Docs are tracked in Git and are not ignored (see `.gitignore` rules for `!.swm/` and `!*.sw.md`).
- To view and edit docs, install the Swimm app and open this repository. Learn more: https://swimm.io/

### CI Verification

- A GitHub Actions workflow is configured at `.github/workflows/swimm-verify.yml`.
- On every pull request (and pushes to `main`), it runs the Swimm Verify action: `swimmio/swimm-verify-action@v1.4`.
- This ensures docs stay in sync with code changes. If verification fails, follow the action logs to update or sync the relevant docs in `.swm/`.

### Contributing Docs

1. Open the Swimm app and connect to this repo.
2. Create or update docs under `.swm/`.
3. Commit the changes (the `.swm/` folder and `*.sw.md` files are included in version control).
4. Open a PR — CI will verify docs automatically.

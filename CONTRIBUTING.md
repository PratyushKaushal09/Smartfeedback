# Contributing

Thank you for contributing to Mystic Zone!

## Development

- Install dependencies: `pnpm i`
- Start dev server: `pnpm dev`
- Open http://localhost:8080

## Swimm Documentation Workflow

We keep developer docs with [Swimm](https://swimm.io/). Docs live in the `.swm/` directory and are versioned in Git.

1. If your PR changes code behavior, file structure, or developer workflows, update or add a Swimm doc under `.swm/`.
2. Commit your doc changes together with code changes.
3. Open a PR. CI runs Swimm Verify via `.github/workflows/swimm-verify.yml`. Fix any issues if it fails.
4. Reviewers may request updates to docs. Keep docs short, scoped, and close to code.

Recommended docs:
- Getting started for new devs
- Architecture overview for high-level context
- Feature-specific guides co-located near changed files

## Branching & PRs

- Branch from `main`.
- Keep PRs small and focused.
- Fill out the PR template and check the box for docs if applicable.

## Coding Standards

- TypeScript across the project.
- Use existing patterns in `client/`, `server/`, and `shared/`.
- Run `pnpm typecheck` and `pnpm test` (if tests are included).
- Format with Prettier: `pnpm format.fix`.

## Security & Secrets

- Do not commit secrets. Use environment variables.
- Public Vite variables must be prefixed `VITE_`.

## Docker

- Build: `docker build -t mystic-zone:latest .`
- Run: `docker run --rm -p 8080:8080 mystic-zone:latest`
- Or use `docker compose up --build`

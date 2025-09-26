---
title: Untitled doc (2)
---
<SwmSnippet path="/.dockerignore" line="38">

---

&nbsp;

```
# server source should be included in Docker build context
# server
tmp
# types should be included if used by the build
# types
```

---

</SwmSnippet>

<SwmSnippet path="/.gitignore" line="28">

---

&nbsp;

```
 
# Swimm documentation files should NOT be ignored
!.swm/
!*.sw.md
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="3">

---

&nbsp;

```markdown
![Swimm Verify](https://github.com/PratyushKaushal09/Smartfeedback/actions/workflows/swimm-verify.yml/badge.svg)

```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="13">

---

&nbsp;

```markdown
## Documentation

- Swimm docs live in `.swm/`:
  - Getting Started: `.swm/getting-started.sw.md`
  - Architecture Overview: `.swm/architecture-overview.sw.md`
- CI runs Swimm Verify on PRs to ensure docs stay in sync (see `.github/workflows/swimm-verify.yml`).
- After pushing to GitHub, you can optionally add a status badge to this README that points to the Swimm Verify workflow.
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="21">

---

&nbsp;

```markdown
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
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="36">

---

&nbsp;

````markdown
## Docker

You can run the app in a container using Docker or Docker Compose.

### Build & run with Docker

```bash
# Build the image
docker build -t mystic-zone:latest .
````

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="46">

---

&nbsp;

````markdown
# Run the container (exposes port 8080)
docker run --rm -p 8080:8080 \
  -e VITE_PUBLIC_BUILDER_KEY="$VITE_PUBLIC_BUILDER_KEY" \
  -e OPENROUTER_API_KEY="$OPENROUTER_API_KEY" \
  mystic-zone:latest
```

Open http://localhost:8080
````

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="55">

---

&nbsp;

````markdown
### Using docker-compose

```bash
# Build and start
docker compose up --build

# Stop
docker compose down
```
````

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="65">

---

&nbsp;

```markdown
Compose reads environment variables from your shell (and `.env` if present). Public Vite vars must be prefixed `VITE_`.
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="111">

---

&nbsp;

```markdown
## Swimm Docs

- Swimm documentation lives under the `.swm/` directory at the repository root. Example: `.swm/untitled-doc.m5qh15u1.sw.md`.
- Docs are tracked in Git and are not ignored (see `.gitignore` rules for `!.swm/` and `!*.sw.md`).
- To view and edit docs, install the Swimm app and open this repository. Learn more: https://swimm.io/

### CI Verification
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="119">

---

&nbsp;

```markdown
- A GitHub Actions workflow is configured at `.github/workflows/swimm-verify.yml`.
- On every pull request (and pushes to `main`), it runs the Swimm Verify action: `swimmio/swimm-verify-action@v1.4`.
- This ensures docs stay in sync with code changes. If verification fails, follow the action logs to update or sync the relevant docs in `.swm/`.

### Contributing Docs

1. Open the Swimm app and connect to this repo.
2. Create or update docs under `.swm/`.
3. Commit the changes (the `.swm/` folder and `*.sw.md` files are included in version control).
4. Open a PR — CI will verify docs automatically.
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

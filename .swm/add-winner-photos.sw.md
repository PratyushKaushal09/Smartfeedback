---
title: Add Winner Photos (Results UI)
---

The results UI can show a winning photo for each predicted team/driver.

## Where to put images

- Place images under the public folder so they are served statically:
  - Football teams: `public/winners/football/<slug>.jpg`
  - Cricket teams: `public/winners/cricket/<slug>.jpg`
  - F1 drivers: `public/winners/f1/<slug>.jpg`
- Placeholders already exist:
  - `public/winners/placeholders/football.svg`
  - `public/winners/placeholders/cricket.svg`
  - `public/winners/placeholders/f1.svg`

## Slug rules

We derive `<slug>` from the team/driver name as displayed in results:

- Lowercase
- Replace any non-alphanumeric with `-`
- Trim leading/trailing `-`

Examples:

- `Manchester City` → `manchester-city.jpg`
- `Paris Saint-Germain` → `paris-saint-germain.jpg`
- `Max Verstappen` → `max-verstappen.jpg`

## How it works

- Logic lives in `client/pages/Quiz.tsx`:
  - `winnerImgPath(sport, name)` builds the expected image URL.
  - If the image 404s, the UI falls back to a sport-specific placeholder.

## Tips

- Prefer 3:2 or 16:9 landscape JPGs around 800–1200px wide for good quality.
- Keep filenames in ASCII; avoid special characters.
- Commit images to Git to deploy them with the app.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

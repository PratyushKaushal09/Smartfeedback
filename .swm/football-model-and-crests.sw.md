---
title: Football Model & Club Crests
---

This doc explains how football scoring works and how club crests are displayed in results.

## Scoring Model (Football)

- Source: `shared/scoring.ts` → `getWeightsForSport('football')`
- Emphasis (kept bounded so attributes dominate, not biases):
  - Identity/playstyle (pressing, possession, build-from-back, technical midfield)
  - Competitive edge (set-piece threat, aerial dominance, compact defense)
  - Organization/culture (youth pipeline, sports science, analytics)
  - Narrative/history is mild (historic success, European pedigree)
- Tie-breakers: positives, weightedPositive, matches, then club name.

## Winner Card and Rankings

- File: `client/pages/Quiz.tsx`
  - Football Winner: `FootballWinner()` shows crest, club name, and score.
  - Rankings: `ResultList()` adds club crest per row for football.
- Logos and fallback:
  - `clubLogoPath(name)`: `/logos/football/<slug>.svg`
  - Fallback: `/logos/football/_placeholder.svg`

## Adding Crests

- Place SVG files in `public/logos/football/`.
- Filenames are slugs derived from club names displayed in results:
  - Lowercase, non-alphanumeric → `-`, trimmed.
  - Examples:
    - `AC Milan` → `ac-milan.svg`
    - `Paris Saint-Germain` → `paris-saint-germain.svg`
    - `Bayern Munich` → `bayern-munich.svg`

## Files Changed (UI)

- `client/pages/Quiz.tsx`
  - Added `FootballWinner()` and `clubLogoPath()`
  - Enhanced `ResultList()` to show crests for football
- `public/logos/football/`
  - Added basic SVG crests for top clubs and `_placeholder.svg`

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

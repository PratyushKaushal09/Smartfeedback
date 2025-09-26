---
title: Data Model (sports)
---

This document describes the shared data model used by the quiz.

## Types (from `shared/sports.ts`)

```ts
export type SportKey = "football" | "cricket" | "f1";

export interface AttributeDef {
  id: number;
  name: string;
  description: string | null;
  active: boolean;
}

export interface TeamDef {
  id: number;
  name: string;
  meta: Record<string, any>;
  attributes: Record<string, 0 | 1>;
}

export interface SportData {
  attributes: AttributeDef[];
  teams: TeamDef[];
}

export const SPORTS: Record<SportKey, SportData> = { /* ... */ };
```

## Notes

- `SPORTS` contains `attributes` and `teams` for each sport.
- Each team has a map of `attributes` keyed by attribute id as string, value `0 | 1`.
- Use `asQuestions()` to convert `AttributeDef[]` to quiz questions.

```ts
export function asQuestions(attr: AttributeDef[]): { id: number; text: string }[] {
  return attr.map((a) => ({ id: a.id, text: `Does this describe your preference: ${a.name}?` }));
}
```

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

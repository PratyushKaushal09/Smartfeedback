---
title: How to add a new quiz attribute
---

Add a new attribute to the quiz for a sport.

## Steps

1) Update the model in `shared/sports.ts`:

```ts
// shared/sports.ts (snippet)
// Add attribute in the right sport's attributes array
```

2) Review scoring in `shared/scoring.ts` if the new attribute needs special handling.

3) Launch the app and verify the new attribute renders in `client/pages/Quiz.tsx` and affects team scores.

## Tips

- Keep attribute IDs unique per sport.
- Provide clear labels and optional descriptions.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

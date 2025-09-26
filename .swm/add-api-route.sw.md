---
title: How to add a new API route
---

This guide shows how to add an Express API endpoint to Mystic Zone.

## Steps

1) Create a handler in `server/routes/`:

```ts
// server/routes/my-route.ts
import { RequestHandler } from "express";

export const handleMyRoute: RequestHandler = (req, res) => {
  res.json({ message: "Hello from my endpoint!" });
};
```

2) Register the route in `server/index.ts`:

```ts
// server/index.ts (snippet)
import { handleMyRoute } from "./routes/my-route";

app.get("/api/my-endpoint", handleMyRoute);
```

3) Consume from the client:

```ts
// client example
const res = await fetch("/api/my-endpoint");
const data = await res.json();
```

4) Update docs (this file) if behavior changes.

## Tips

- Prefix all routes with `/api/*`.
- Use shared types from `shared/` for responses if needed.
- Don’t expose secrets in client code. Server-side only.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

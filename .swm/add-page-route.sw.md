---
title: How to add a new page route (SPA)
---

Add a new React Router page in the SPA.

## Steps

1) Create the page component in `client/pages/`:

```tsx
// client/pages/MyPage.tsx
export default function MyPage() {
  return <div className="container py-10">My new page</div>;
}
```

2) Register the route in `client/App.tsx` above the catch-all `*` route:

```tsx
// client/App.tsx (snippet)
import MyPage from "@/pages/MyPage";

<Routes>
  <Route path="/my-page" element={<MyPage />} />
  {/* keep this above the catch-all */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

3) Navigate to `/my-page`.

## Tips

- Co-locate page-specific components in `client/components/` as needed.
- Keep routes shallow and consistent.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

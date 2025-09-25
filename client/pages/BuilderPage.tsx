import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { BuilderComponent, builder } from "@builder.io/react";

export default function BuilderPage() {
  const loc = useLocation();
  const [content, setContent] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const urlPath = useMemo(() => {
    const p = loc.pathname.replace(/^\/b/, "");
    return p === "" ? "/" : p;
  }, [loc.pathname]);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const model = "page";
        const cnt = await builder.get(model, { url: urlPath }).promise();
        if (!active) return;
        setContent(cnt || null);
        setError(null);
      } catch (e: any) {
        setError("Failed to load page");
        setContent(null);
      }
    }
    load();
    return () => { active = false; };
  }, [urlPath]);

  if (error) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold mb-2">Content unavailable</h1>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="container py-16">
        <div className="h-8 w-40 rounded bg-muted animate-pulse" />
        <div className="mt-4 h-24 w-full max-w-xl rounded bg-muted animate-pulse" />
      </div>
    );
  }

  return (
    <div className="container py-6">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}

import { PropsWithChildren, useEffect } from "react";
import { builder } from "@builder.io/react";

const KEY = (import.meta as any).env?.VITE_BUILDER_PUBLIC_KEY as string | undefined;

export default function BuilderProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (KEY && typeof KEY === "string") {
      builder.init(KEY);
    } else {
      // eslint-disable-next-line no-console
      console.warn("VITE_BUILDER_PUBLIC_KEY not set. Builder pages will not load.");
    }
  }, []);
  return children as any;
}

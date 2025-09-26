import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import BackgroundFX from "./BackgroundFX";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <BackgroundFX />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default Layout;

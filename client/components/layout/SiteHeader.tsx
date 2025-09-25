import { Link } from "react-router-dom";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden className="text-primary">
            <g fill="currentColor">
              <rect x="28" y="10" width="8" height="30" rx="2" />
              <rect x="18" y="18" width="8" height="22" rx="2" />
              <rect x="38" y="18" width="8" height="22" rx="2" />
              <rect x="10" y="40" width="44" height="6" rx="3" />
              <circle cx="16" cy="54" r="3" />
              <circle cx="48" cy="54" r="3" />
            </g>
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold tracking-tight text-lg">Charminar Predicts</span>
            <span className="text-xs text-muted-foreground">Play. Predict. Passion.</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;

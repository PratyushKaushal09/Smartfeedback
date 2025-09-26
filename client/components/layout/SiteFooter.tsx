export function SiteFooter() {
  return (
    <footer className="border-t bg-white/55 dark:bg-background/60 backdrop-blur-md relative">
      {/* subtle gradient divider */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Char Minar Sports</p>
        <p className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-primary/60" />
          Built with passion for Football, Cricket and F1
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;

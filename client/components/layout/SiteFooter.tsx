export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Char Minar Sports</p>
        <p>Built with passion for Football, Cricket and F1</p>
      </div>
    </footer>
  );
}

export default SiteFooter;

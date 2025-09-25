export function FootballIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden {...props}>
      <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M32 12l8 6-3 9h-10l-3-9z" fill="currentColor" />
      <path d="M20 26l-7 5 3 9 9 3 5-7-5-6z" fill="currentColor" opacity="0.9" />
      <path d="M44 26l7 5-3 9-9 3-5-7 5-6z" fill="currentColor" opacity="0.9" />
      <path d="M27 38l10 0 3 9-8 6-8-6z" fill="currentColor" />
    </svg>
  );
}
export default FootballIcon;

export function F1Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 32" aria-hidden {...props}>
      <rect x="2" y="14" width="60" height="6" rx="3" fill="currentColor" opacity="0.15" />
      <path d="M6 20h20l6-8h10l6-6h10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="22" cy="24" r="4" fill="currentColor" />
      <circle cx="44" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}
export default F1Icon;

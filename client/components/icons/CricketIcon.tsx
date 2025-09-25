export function CricketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden {...props}>
      <rect x="10" y="38" width="36" height="12" rx="6" fill="currentColor" opacity="0.15" />
      <rect x="28" y="8" width="6" height="36" rx="3" transform="rotate(35 31 26)" fill="currentColor" />
      <circle cx="46" cy="20" r="8" fill="currentColor" opacity="0.9" />
      <line x1="41" y1="16" x2="51" y2="24" stroke="white" strokeWidth="2" />
      <line x1="41" y1="24" x2="51" y2="16" stroke="white" strokeWidth="2" />
    </svg>
  );
}
export default CricketIcon;

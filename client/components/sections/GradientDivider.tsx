export default function GradientDivider({ height = 64, from = "#a5b4fc", to = "#fbcfe8" }: { height?: number; from?: string; to?: string }) {
  return (
    <div className="w-full" style={{ height }} aria-hidden>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full block">
        <defs>
          <linearGradient id="gd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path d="M0,64 C240,128 480,0 720,64 C960,128 1200,0 1440,64 L1440,160 L0,160 Z" fill="url(#gd)" opacity="0.35" />
        <path d="M0,72 C240,136 480,8 720,72 C960,136 1200,8 1440,72 L1440,160 L0,160 Z" fill="url(#gd)" opacity="0.55" />
      </svg>
    </div>
  );
}

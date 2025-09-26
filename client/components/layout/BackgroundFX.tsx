import { memo } from "react";

/**
 * BackgroundFX renders tasteful, performance-friendly background flourishes:
 * - Soft gradient blobs with blur
 * - Subtle grid and radial vignette
 * - Animated or static depending on prefers-reduced-motion
 */
const BackgroundFX = memo(function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_50%_-20%,hsl(var(--accent)/0.10),transparent_70%)]" />

      {/* Subtle grid overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 32 32" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Gradient blobs (top-right / bottom-left) */}
      <div className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-[hsl(var(--accent)/0.35)] via-[hsl(var(--primary)/0.28)] to-[hsl(var(--accent)/0.18)] blur-3xl opacity-60 motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-[hsl(var(--primary)/0.30)] via-[hsl(var(--accent)/0.24)] to-[hsl(var(--primary)/0.16)] blur-3xl opacity-60 motion-safe:animate-[pulse_9s_ease-in-out_infinite]" />

      {/* Center glow behind main content */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[22rem] w-[32rem] rounded-[999px] bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--primary)/0.22),hsl(var(--accent)/0.22),transparent)] blur-2xl opacity-40" />

      {/* Noise overlay for subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\">\
  <filter id=\"n\">\
    <feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/>\
    <feColorMatrix type=\"saturate\" values=\"0\"/>\
  </filter>\
  <rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.8\"/>\
</svg>')",
          backgroundSize: '140px 140px',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
});

export default BackgroundFX;

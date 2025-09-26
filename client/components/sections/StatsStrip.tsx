import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const from = 0;
    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const val = Math.round(from + (target - from) * eased);
      if (ref.current) ref.current.textContent = String(val);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return ref;
}

export default function StatsStrip({ stats = [] as { label: string; value: number; suffix?: string }[] }) {
  const items = stats.length
    ? stats
    : [
        { label: "Questions", value: 14 },
        { label: "Drivers", value: 18 },
        { label: "Animations", value: 12 },
        { label: "Confetti", value: 999, suffix: "+" },
      ];
  return (
    <div className="py-10">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((s, i) => (
          <StatCard key={i} {...s} />)
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const ref = useCountUp(value);
  return (
    <div className="group relative rounded-xl border p-5 text-center bg-white/55 dark:bg-background/50 backdrop-blur-md ring-1 ring-inset ring-border shadow-sm transition-transform duration-300 hover:shadow-lg hover:translate-y-[-2px]">
      {/* gradient accent bar */}
      <div className="pointer-events-none absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-primary/30 via-accent/30 to-transparent" />
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-extrabold"
      >
        <span ref={ref as any}>0</span>
        {suffix || ""}
      </motion.span>
      <div className="text-xs uppercase tracking-widest mt-2 text-muted-foreground">{label}</div>
    </div>
  );
}

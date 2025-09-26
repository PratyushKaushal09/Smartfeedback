import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export type HeroProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
};

export function Hero(props: HeroProps) {
  const fallback = "/hero/charminar.svg";
  const initialSrc = useMemo(() => props.imageSrc || "/hero/user-hero.png", [props.imageSrc]);
  const [src, setSrc] = useState<string>(initialSrc);
  return (
    <section className="relative overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-10 items-center py-20">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-primary/70">
            {props.title || "Charminar Predicts"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose">
            {props.subtitle || "Choose your sport and take a quick 10-question pulse. We'll analyze your answers and reveal your fan profile."}
          </p>
          <div className="mt-3 h-[2px] w-24 rounded-full bg-gradient-to-r from-primary/70 via-accent/70 to-transparent relative overflow-hidden">
            <span className="absolute inset-0 animate-[shimmer_1.8s_ease_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ y: 12, rotate: -1 }}
            animate={{ y: -12, rotate: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.2, ease: "easeInOut" }}
            className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/20 p-3 shadow-xl ring-1 ring-inset ring-border"
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            <motion.img
              src={src}
              onError={() => setSrc(fallback)}
              alt="Hero"
              className="h-full w-full object-cover rounded-2xl"
              loading="eager"
              initial={{ scale: 1.02, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-white/0 animate-[shimmer_2.2s_ease_infinite]" />
            {/* Subtle top shine */}
            <div className="pointer-events-none absolute -top-px left-0 right-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <div className="absolute inset-0 animate-wave-slow">
          <svg className="w-[200%] h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64 C240,128 480,0 720,64 C960,128 1200,0 1440,64 L1440,160 L0,160 Z" fill="hsl(var(--primary)/0.10)" />
          </svg>
        </div>
        <div className="absolute inset-0 animate-wave">
          <svg className="w-[200%] h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64 C240,128 480,0 720,64 C960,128 1200,0 1440,64 L1440,160 L0,160 Z" fill="hsl(var(--accent)/0.18)" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { motion } from "framer-motion";

export default function LogosStrip({ logos = [] as string[] }: { logos?: string[] }) {
  const items = logos.length ? logos : [
    "/logos/f1/redbull.svg",
    "/logos/f1/ferrari.svg",
    "/logos/f1/mclaren.svg",
    "/logos/f1/mercedes.svg",
    "/logos/f1/astonmartin.svg",
  ];
  return (
    <div className="py-8">
      <div className="relative overflow-hidden rounded-2xl border bg-white/55 dark:bg-background/60 backdrop-blur-md ring-1 ring-inset ring-border">
        {/* gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex items-center gap-10 opacity-80 px-10 py-6"
          initial={false}
          animate={{ x: [0, -240] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {[...items, ...items].map((src, i) => (
            <img key={i} src={src} alt="" className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

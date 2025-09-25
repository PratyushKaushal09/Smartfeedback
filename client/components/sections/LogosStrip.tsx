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
    <div className="py-8 overflow-hidden">
      <motion.div
        className="flex items-center gap-8 opacity-80"
        initial={false}
        animate={{ x: [0, -200] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {[...items, ...items].map((src, i) => (
          <img key={i} src={src} alt="" className="h-8 w-auto" loading="lazy" />
        ))}
      </motion.div>
    </div>
  );
}

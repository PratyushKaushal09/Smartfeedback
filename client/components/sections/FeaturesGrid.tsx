import { motion } from "framer-motion";

export type Feature = {
  icon?: string; // emoji or image url
  title: string;
  description?: string;
};

export default function FeaturesGrid({ heading = "Why Charminar Predicts", subheading = "Fast, clear and beautiful predictions.", features = [] as Feature[] }: { heading?: string; subheading?: string; features?: Feature[] }) {
  const items = features.length
    ? features
    : [
        { icon: "⚡", title: "Fast", description: "Instant rankings with clean explanations." },
        { icon: "🎯", title: "Accurate", description: "Data-tuned weights and penalties." },
        { icon: "🎉", title: "Delightful", description: "Premium animations and celebrations." },
        { icon: "🧩", title: "Composable", description: "Builder-powered marketing pages." },
      ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{heading}</h2>
          {subheading && <p className="mt-2 text-muted-foreground">{subheading}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group relative rounded-xl border p-5 bg-white/55 dark:bg-background/60 backdrop-blur-md ring-1 ring-inset ring-border shadow-sm transition-transform duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <div className="pointer-events-none absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-primary/30 via-accent/30 to-transparent" />
              {f.icon && (
                <div className="text-2xl mb-2">
                  {f.icon.startsWith("/") ? (
                    <img src={f.icon} alt="" className="h-6 w-6" />
                  ) : (
                    <span>{f.icon}</span>
                  )}
                </div>
              )}
              <h3 className="font-bold">{f.title}</h3>
              {f.description && <p className="text-sm text-muted-foreground mt-1">{f.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

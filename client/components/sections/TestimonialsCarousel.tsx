import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Testimonial = { quote: string; author: string; role?: string; avatar?: string };

export default function TestimonialsCarousel({ testimonials = [] as Testimonial[] }: { testimonials?: Testimonial[] }) {
  const items = testimonials.length
    ? testimonials
    : [
        { quote: "The predictions feel spot-on and the finish is gorgeous.", author: "A. Fan", role: "F1 Enthusiast" },
        { quote: "Loved the celebrations. Super fun!", author: "R. Supporter", role: "Football Fan" },
        { quote: "Clean UI and great insights.", author: "C. Analyst", role: "Cricket Analyst" },
      ];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border p-6 bg-white/70 backdrop-blur-sm"
            >
              <p className="text-lg font-medium">“{items[idx].quote}”</p>
              <div className="mt-3 text-sm text-muted-foreground">
                <strong className="text-foreground">{items[idx].author}</strong>
                {items[idx].role ? ` — ${items[idx].role}` : null}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-4">
            <button onClick={prev} className="text-sm rounded-md border px-3 py-1 hover:bg-accent">Prev</button>
            <button onClick={next} className="text-sm rounded-md border px-3 py-1 hover:bg-accent">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

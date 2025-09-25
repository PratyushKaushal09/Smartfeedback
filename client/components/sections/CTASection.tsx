import { motion } from "framer-motion";

export default function CTASection({
  eyebrow = "Get started",
  title = "Predict smarter, celebrate louder.",
  subtitle = "Join Charminar Predicts and experience premium, data-driven sports predictions.",
  buttonText = "Start a Quiz",
  buttonHref = "/",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <p className="uppercase tracking-widest text-xs text-primary mb-2">{eyebrow}</p>}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.a
          href={buttonHref}
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="inline-flex mt-6 rounded-md bg-primary px-5 py-3 text-white shadow hover:bg-primary/90 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-primary"
        >
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
}

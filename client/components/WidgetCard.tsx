import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WidgetCardProps {
  to: string;
  title: string;
  description: string;
  accentClass: string;
  icon: React.ReactNode;
}

export function WidgetCard({ to, title, description, accentClass, icon }: WidgetCardProps) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm",
        "hover:shadow-lg transition-shadow duration-300",
      )}
    >
      <div className={cn("absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-30", accentClass)} />
      <div className="flex items-start gap-4">
        <div className={cn("p-3 rounded-xl text-primary", accentClass)}>
          <motion.div animate={{ rotate: [0, -6, 6, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
            {icon}
          </motion.div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <Link
          to={to}
          className={cn(
            "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium",
            "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
        >
          Start Quiz
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default WidgetCard;

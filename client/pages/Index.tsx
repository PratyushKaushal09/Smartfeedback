import { Hero } from "@/components/hero/Hero";
import WidgetCard from "@/components/WidgetCard";
import FootballIcon from "@/components/icons/FootballIcon";
import CricketIcon from "@/components/icons/CricketIcon";
import F1Icon from "@/components/icons/F1Icon";

export default function Index() {
  return (
    <div>
      <Hero />
      <section className="container py-8">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground">Choose one to proceed</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <WidgetCard
            to="/quiz/football"
            title="Football"
            description="Tactics, drama and beautiful play."
            accentClass="bg-emerald-200/60 text-emerald-600"
            icon={<FootballIcon width={48} height={48} />}
          />
          <WidgetCard
            to="/quiz/cricket"
            title="Cricket"
            description="Strategy, patience and clutch finishes."
            accentClass="bg-amber-200/60 text-amber-600"
            icon={<CricketIcon width={48} height={48} />}
          />
          <WidgetCard
            to="/quiz/f1"
            title="Formula 1"
            description="Speed, precision and engineering."
            accentClass="bg-rose-200/60 text-rose-600"
            icon={<F1Icon width={64} height={32} />}
          />
        </div>
      </section>
    </div>
  );
}

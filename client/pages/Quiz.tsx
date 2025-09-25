import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useParams, Link } from "react-router-dom";
import type { SportKey } from "@shared/sports";
import { SPORTS, asQuestions } from "@shared/sports";
import type { Choice, UserAnswer } from "@shared/scoring";
import { pickQuestionAttributes, rankTeams } from "@shared/scoring";

const LABELS: Record<string, { title: string; color: string }> = {
  football: { title: "Football", color: "text-emerald-600" },
  cricket: { title: "Cricket", color: "text-amber-600" },
  f1: { title: "F1", color: "text-indigo-600" },
};

export default function Quiz() {
  const params = useParams();
  const key = (params.sport || "").toLowerCase() as SportKey;

  const baseData = SPORTS[key as SportKey];
  const [f1Override, setF1Override] = useState<Record<string, Record<string, 0 | 1>> | null>(null);

  // Load runtime overrides for F1 calibration
  useEffect(() => {
    if (key !== "f1") return;
    fetch("/overrides/f1_attrs.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((json: any) => {
        if (!json || !Array.isArray(json.drivers)) return;
        const map: Record<string, Record<string, 0 | 1>> = {};
        for (const d of json.drivers) {
          if (d?.name && d?.attributes) map[d.name] = d.attributes as Record<string, 0 | 1>;
        }
        setF1Override(map);
      })
      .catch(() => {});
  }, [key]);

  const data = useMemo(() => {
    if (key !== "f1" || !baseData) return baseData;
    if (!f1Override) return baseData;
    // Clone and override team attributes by driver name
    const teams = baseData.teams.map((t) => {
      const attrs = f1Override[t.name];
      return attrs ? { ...t, attributes: { ...attrs } } : t;
    });
    return { ...baseData, teams };
  }, [key, baseData, f1Override]);
  const QUESTIONS = useMemo(() => {
    if (!data) return [] as { id: number; text: string }[];
    const attrIds = data.attributes.map((a) => a.id);
    // Sport-specific question strategy
    if (key === "cricket") {
      const critical = [49, 63, 65, 66, 47, 55, 56, 60, 81, 77, 78];
      const must = critical.filter((id) => attrIds.includes(id));
      const remainingIds = attrIds.filter((id) => !must.includes(id));
      const needed = Math.max(16 - must.length, 0);
      const spread = pickQuestionAttributes(remainingIds, needed);
      const chosen = [...new Set([...must, ...spread])];
      const filtered = data.attributes.filter((a) => chosen.includes(a.id));
      return asQuestions(filtered);
    }
    if (key === "f1") {
      const critical = [101, 102, 103, 104, 105, 107, 108, 109, 113];
      const must = critical.filter((id) => attrIds.includes(id));
      const remainingIds = attrIds.filter((id) => !must.includes(id));
      const needed = Math.max(14 - must.length, 0);
      const spread = pickQuestionAttributes(remainingIds, needed);
      const chosen = [...new Set([...must, ...spread])];
      const filtered = data.attributes.filter((a) => chosen.includes(a.id));
      return asQuestions(filtered);
    }
    const chosen = pickQuestionAttributes(attrIds, 12); // default 12
    const filtered = data.attributes.filter((a) => chosen.includes(a.id));
    return asQuestions(filtered);
  }, [data]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const progress = useMemo(() => (QUESTIONS.length ? (index / QUESTIONS.length) * 100 : 0), [index, QUESTIONS.length]);

  if (!data || !QUESTIONS.length) {
    return (
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Choose a supported sport</h1>
        <p className="text-muted-foreground">Go back and select Football or Cricket.</p>
        <Link to="/" className="mt-6 inline-block text-primary underline">Return to Home</Link>
      </div>
    );
  }

  const onPick = (choice: Choice) => {
    const q = QUESTIONS[index];
    const next: UserAnswer[] = [...answers, { attributeId: q.id, choice }];
    setAnswers(next);
    if (index + 1 < QUESTIONS.length) {
      setIndex(index + 1);
    }
  };

  const finished = answers.length === QUESTIONS.length;
  const top = useMemo(() => (finished ? rankTeams(data, answers, 3, key) : []), [finished, data, answers, key]);
  const [explaining, setExplaining] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [explainError, setExplainError] = useState<string | null>(null);
  const [soundOn, setSoundOn] = useState(true);
  const [volume, setVolume] = useState(0.8); // 0..1
  const audioCtxRef = useRef<AudioContext | null>(null);

  function ensureAudioContext() {
    if (!audioCtxRef.current) {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      if (Ctx) audioCtxRef.current = new Ctx();
    }
    return audioCtxRef.current;
  }

  function playPop(freq = 600, duration = 0.12, gain = 0.08) {
    if (!soundOn) return;
    const ctx = ensureAudioContext();
    if (!ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "triangle";
    o.frequency.value = freq;
    g.gain.value = gain * Math.max(0, Math.min(1, volume));
    o.connect(g);
    g.connect(ctx.destination);
    const t = ctx.currentTime;
    o.start(t);
    // quick pitch drop for a satisfying pop
    o.frequency.exponentialRampToValueAtTime(Math.max(80, freq / 10), t + duration);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    o.stop(t + duration + 0.02);
  }

  function playCelebrateSound(sportKey: SportKey) {
    if (!soundOn) return;
    // sequence of pops with varied frequencies
    if (sportKey === "football") {
      playPop(700); setTimeout(() => playPop(520), 100); setTimeout(() => playPop(440), 220);
    } else if (sportKey === "cricket") {
      playPop(680); setTimeout(() => playPop(840), 120); setTimeout(() => playPop(520), 260);
    } else if (sportKey === "f1") {
      playPop(880); setTimeout(() => playPop(660), 120); setTimeout(() => playPop(520), 240);
    }
  }

  async function requestExplanation() {
    try {
      setExplainError(null);
      setExplanation(null);
      setExplaining(true);
      const payload = {
        sport: key,
        answers: answers.map((a) => ({ attributeId: a.attributeId, choice: a.choice })),
        topTeams: top.map((t) => ({ id: t.team.id, name: t.team.name, score: t.score })),
      };
      const resp = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) throw new Error(`Status ${resp.status}`);
      const data = (await resp.json()) as { explanation: string };
      setExplanation(data.explanation);
    } catch (e: any) {
      setExplainError("Could not fetch explanation. Please try again later.");
    } finally {
      setExplaining(false);
    }
  }

  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-baseline justify-between">
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            {LABELS[key]?.title || "Quiz"}
          </h1>
          <span className="text-sm text-muted-foreground">{answers.length}/{QUESTIONS.length}</span>
        </div>

        {!finished ? (
          <>
            <div className="h-2 w-full rounded bg-muted overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-8 rounded-2xl border p-6 bg-card shadow-sm">
              <p className="text-lg sm:text-xl font-semibold">
                {QUESTIONS[index].text}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button onClick={() => onPick("yes")} className="rounded-md px-4 py-3 bg-emerald-600 text-white hover:bg-emerald-700">Yes</button>
                <button onClick={() => onPick("neutral")} className="rounded-md px-4 py-3 bg-muted hover:bg-muted/80">Neutral</button>
                <button onClick={() => onPick("no")} className="rounded-md px-4 py-3 bg-rose-600 text-white hover:bg-rose-700">No</button>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-6 rounded-2xl border p-6 bg-card shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
              <button onClick={() => setSoundOn((s) => !s)} className="text-sm rounded-md border px-3 py-1 hover:bg-accent">
                {soundOn ? "Mute" : "Unmute"} Sounds
              </button>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Volume</span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-32"
                />
              </div>
            </div>
            {key === "f1" && (
              <>
                <F1Winner />
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-2">Full Rankings</h2>
                  <p className="text-muted-foreground mb-4">Based on your choices for {LABELS[key]?.title} attributes.</p>
                  <ResultList sportKey={key} />
                </div>
              </>
            )}
            {key === "football" && (
              <>
                <FootballCelebrate />
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-2">Full Rankings</h2>
                  <p className="text-muted-foreground mb-4">Based on your choices for {LABELS[key]?.title} attributes.</p>
                  <ResultList sportKey={key} />
                </div>
              </>
            )}
            {key === "cricket" && (
              <>
                <CricketCelebrate />
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-2">Full Rankings</h2>
                  <p className="text-muted-foreground mb-4">Based on your choices for {LABELS[key]?.title} attributes.</p>
                  <ResultList sportKey={key} />
                </div>
              </>
            )}
            {key !== "f1" && key !== "football" && key !== "cricket" && (
              <>
                <h2 className="text-xl font-bold mb-2">Top Team Predictions</h2>
                <p className="text-muted-foreground mb-4">Based on your choices for {LABELS[key]?.title} attributes.</p>
                <ResultList sportKey={key} />
              </>
            )}
            <div className="mt-4">
              <button
                onClick={requestExplanation}
                disabled={explaining}
                className="rounded-md px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:opacity-60"
              >
                {explaining ? "Generating explanation..." : "Explain with AI"}
              </button>
              {explainError && <p className="mt-2 text-sm text-rose-600">{explainError}</p>}
              {explanation && (
                <div className="mt-3 rounded-md bg-muted p-3 text-sm whitespace-pre-wrap">
                  {explanation}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function ResultList({ sportKey }: { sportKey: SportKey }) {
    const attrById = new Map(data.attributes.map((a) => [a.id, a] as const));
    return (
      <div className="space-y-4">
        {top.map((ts, i) => (
          <div key={ts.team.id} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">#{i + 1}</p>
                <h3 className="text-lg font-bold">{ts.team.name}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Score</p>
                <p className="text-xl font-extrabold">{Number(ts.score).toFixed(2)}</p>
              </div>
            </div>
            {ts.matchedAttributes.length > 0 && (
              <ul className="mt-3 text-sm list-disc pl-6 text-muted-foreground">
                {ts.matchedAttributes.slice(0, 5).map((id) => (
                  <li key={id}>Matches your preference for <span className="font-medium text-foreground">{attrById.get(id)?.name}</span></li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }

  function F1Winner() {
    const winner = top[0];
    const logo = (winner?.team.meta?.logo as string) || "";
    // Lazy-load confetti to avoid SSR issues
    import("canvas-confetti").then((confetti) => {
      const c = confetti.default || (confetti as any);
      // Fire a nice burst
      c({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => c({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 } }), 300);
      setTimeout(() => c({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 } }), 500);
    }).catch(() => {});

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="winner-card rounded-2xl border p-6 text-center shadow-sm"
      >
        <div className="winner-badge mx-auto inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
          <span className="pop-bottle text-lg">🍾</span>
          <span className="text-xs font-semibold tracking-wider uppercase">Winner</span>
        </div>
        <h2 className="mt-3 text-3xl font-extrabold">{winner?.team.name}</h2>
        {logo && (
          <motion.div
            className="mt-4 flex items-center justify-center"
            initial={{ rotate: -2, y: 6, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <img src={logo} alt={String(winner?.team.meta?.team || "Team")} className="h-12 w-auto drop-shadow" />
          </motion.div>
        )}
        <p className="mt-2 text-sm text-muted-foreground">{String(winner?.team.meta?.team || "")}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-700">
          <span className="text-sm font-semibold">Score</span>
          <span className="text-lg font-extrabold">{winner ? Number(winner.score).toFixed(2) : "--"}</span>
        </div>
      </motion.div>
    );
  }

  function FootballCelebrate() {
    const [data, setData] = useState<any | null>(null);
    useEffect(() => {
      fetch("/lottie/football_goal.json").then((r) => (r.ok ? r.json() : null)).then(setData).catch(() => setData(null));
    }, []);
    useEffect(() => { playCelebrateSound("football"); }, []);
    // Confetti burst
    import("canvas-confetti").then((confetti) => {
      const c = (confetti as any).default || (confetti as any);
      const common = { spread: 70, scalar: 0.9, ticks: 180 };
      c({ particleCount: 80, origin: { y: 0.7 }, colors: ["#22c55e", "#10b981", "#3b82f6"], ...common });
      setTimeout(() => c({ particleCount: 60, angle: 60, origin: { x: 0 }, colors: ["#f59e0b", "#22c55e"], ...common }), 180);
      setTimeout(() => c({ particleCount: 60, angle: 120, origin: { x: 1 }, colors: ["#ef4444", "#3b82f6"], ...common }), 320);
    }).catch(() => {});
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="celebration-box p-4 text-center"
      >
        <p className="text-sm uppercase tracking-wider text-muted-foreground">Full Time</p>
        <h2 className="mt-1 text-3xl font-extrabold">Goal!</h2>
        <motion.div className="mt-4 flex items-center justify-center" initial={{ rotate: -2, scale: 0.98 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>
          {data ? (
            <Lottie animationData={data} loop={false} style={{ height: 160 }} />
          ) : (
            <img src="/celebrations/football_goal.svg" alt="Goal celebration" className="h-40 w-auto" />
          )}
        </motion.div>
      </motion.div>
    );
  }

  function CricketCelebrate() {
    const [data, setData] = useState<any | null>(null);
    useEffect(() => {
      fetch("/lottie/cricket_six.json").then((r) => (r.ok ? r.json() : null)).then(setData).catch(() => setData(null));
    }, []);
    useEffect(() => { playCelebrateSound("cricket"); }, []);
    // Confetti burst
    import("canvas-confetti").then((confetti) => {
      const c = (confetti as any).default || (confetti as any);
      const common = { spread: 70, scalar: 0.9, ticks: 200 };
      c({ particleCount: 90, origin: { y: 0.7 }, colors: ["#f59e0b", "#22c55e", "#ef4444"], ...common });
      setTimeout(() => c({ particleCount: 70, angle: 60, origin: { x: 0 }, colors: ["#22c55e", "#3b82f6"], ...common }), 220);
      setTimeout(() => c({ particleCount: 70, angle: 120, origin: { x: 1 }, colors: ["#f59e0b", "#ef4444"], ...common }), 380);
    }).catch(() => {});
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="celebration-box p-4 text-center"
      >
        <p className="text-sm uppercase tracking-wider text-muted-foreground">Match Winner</p>
        <h2 className="mt-1 text-3xl font-extrabold">Six! Out of the park</h2>
        <motion.div className="mt-4 flex items-center justify-center" initial={{ rotate: 2, scale: 0.98 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>
          {data ? (
            <Lottie animationData={data} loop={false} style={{ height: 160 }} />
          ) : (
            <img src="/celebrations/cricket_six.svg" alt="Cricket six celebration" className="h-40 w-auto" />
          )}
        </motion.div>
      </motion.div>
    );
  }
}

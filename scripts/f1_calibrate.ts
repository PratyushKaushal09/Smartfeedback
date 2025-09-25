/*
  F1 calibration script
  - Reads data/f1_stats.json with numeric metrics
  - Converts metrics into 0/1 attributes (101-114)
  - Writes public/overrides/f1_attrs.json for the client to load at runtime

  Run with: pnpm tsx scripts/f1_calibrate.ts
*/
import fs from 'fs';
import path from 'path';

interface DriverStats {
  name: string;
  avgQualGap: number; // negative is better (in seconds)
  racecraft: number; // 0-1
  tyreMgmt: number; // 0-1
  wetPerf: number; // 0-1
  consistency: number; // 0-1
  starts: number; // 0-1
  strategy: number; // 0-1
  feedback: number; // 0-1
  pressure: number; // 0-1
  fitness: number; // 0-1
}

interface StatsFile {
  drivers: DriverStats[];
}

function readJSON<T>(p: string): T {
  const raw = fs.readFileSync(p, 'utf-8');
  return JSON.parse(raw) as T;
}

function quantile(values: number[], q: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
    return sorted[base];
  }
}

function run() {
  const root = process.cwd();
  const statsPath = path.join(root, 'data', 'f1_stats.json');
  const outDir = path.join(root, 'public', 'overrides');
  const outPath = path.join(outDir, 'f1_attrs.json');

  if (!fs.existsSync(statsPath)) {
    console.error('Missing data/f1_stats.json');
    process.exit(1);
  }
  const data = readJSON<StatsFile>(statsPath);
  const drivers = data.drivers;

  // Prepare arrays for thresholds
  const qualGaps = drivers.map((d) => d.avgQualGap); // smaller/negative is better
  const racecraftArr = drivers.map((d) => d.racecraft);
  const tyreArr = drivers.map((d) => d.tyreMgmt);
  const wetArr = drivers.map((d) => d.wetPerf);
  const consistArr = drivers.map((d) => d.consistency);
  const startsArr = drivers.map((d) => d.starts);
  const stratArr = drivers.map((d) => d.strategy);
  const feedArr = drivers.map((d) => d.feedback);
  const pressArr = drivers.map((d) => d.pressure);
  const fitArr = drivers.map((d) => d.fitness);

  // Thresholds (top quartile as 1). For qualifying gap, use lower quartile (more negative) as good.
  const tRace = quantile(racecraftArr, 0.75);
  const tTyre = quantile(tyreArr, 0.75);
  const tWet = quantile(wetArr, 0.75);
  const tCons = quantile(consistArr, 0.75);
  const tStart = quantile(startsArr, 0.75);
  const tStrat = quantile(stratArr, 0.75);
  const tFeed = quantile(feedArr, 0.75);
  const tPress = quantile(pressArr, 0.75);
  const tFit = quantile(fitArr, 0.75);
  const tQualGood = quantile(qualGaps, 0.25); // more negative is better

  const mapped = drivers.map((d) => {
    const attrs: Record<string, 0 | 1> = {};
    // 101 Qualifying Pace: 1 if faster than lower quartile (more negative)
    attrs['101'] = d.avgQualGap <= tQualGood ? 1 : 0;
    // 102 Racecraft
    attrs['102'] = d.racecraft >= tRace ? 1 : 0;
    // 103 Tyre Management
    attrs['103'] = d.tyreMgmt >= tTyre ? 1 : 0;
    // 104 Wet Weather Skill
    attrs['104'] = d.wetPerf >= tWet ? 1 : 0;
    // 105 Consistency
    attrs['105'] = d.consistency >= tCons ? 1 : 0;
    // 106 Starts/Launch
    attrs['106'] = d.starts >= tStart ? 1 : 0;
    // 107 Strategy Adaptability
    attrs['107'] = d.strategy >= tStrat ? 1 : 0;
    // 108 Technical Feedback
    attrs['108'] = d.feedback >= tFeed ? 1 : 0;
    // 109 Pressure Handling
    attrs['109'] = d.pressure >= tPress ? 1 : 0;
    // 113 Fitness
    attrs['113'] = d.fitness >= tFit ? 1 : 0;
    // Neutral defaults for less central traits (teamwork, energy, track knowledge, dev direction)
    attrs['110'] = 1; // teamwork
    attrs['111'] = 1; // energy/fuel
    attrs['112'] = 1; // track knowledge
    attrs['114'] = 1; // development direction

    return { name: d.name, attributes: attrs };
  });

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify({ drivers: mapped }, null, 2));
  console.log('Wrote', outPath);
}

run();

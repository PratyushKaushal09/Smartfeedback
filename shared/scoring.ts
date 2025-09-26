import type { SportKey, SportData, TeamDef } from "./sports";

export type Choice = "yes" | "no" | "neutral";

export interface QAItem {
  id: number; // attribute id
  text: string;
}

export interface UserAnswer {
  attributeId: number;
  choice: Choice;
}

export interface TeamScore {
  team: TeamDef;
  score: number;
  matches: number;
  positives: number;
  negatives: number;
  matchedAttributes: number[]; // attribute ids that contributed positively
  weightedPositive: number; // sum of positive weighted contributions (for tie-breaks)
}

const weight = (c: Choice) => (c === "yes" ? 1 : c === "no" ? -1 : 0);

// scoreTeam implements a symmetric scoring:
// - If user says YES and team has attr=1 => +1
// - If user says YES and team has attr=0 => -1
// - If user says NO  and team has attr=1 => -1
// - If user says NO  and team has attr=0 => +1
// - NEUTRAL contributes 0
export function scoreTeam(
  answers: UserAnswer[],
  team: TeamDef,
  attrWeight?: (attrId: number) => number,
  teamBias?: (team: TeamDef) => number,
  sport?: SportKey
): TeamScore {
  let score = 0;
  let matches = 0;
  let positives = 0;
  let negatives = 0;
  const matchedAttributes: number[] = [];
  let weightedPositive = 0;

  for (const a of answers) {
    const w = weight(a.choice);
    if (w === 0) continue;
    const has = team.attributes[String(a.attributeId)] ?? 0;
    const base = has === 1 ? 1 : -1;
    const aw = attrWeight ? attrWeight(a.attributeId) : 1;
    const contribution = w * base * aw;
    score += contribution;
    matches++;
    if (contribution > 0) {
      positives++;
      matchedAttributes.push(a.attributeId);
      weightedPositive += Math.abs(contribution);
    } else if (contribution < 0) {
      negatives++;
    }
  }

  // Apply team-level bias if provided (e.g., historical titles)
  if (teamBias) {
    score += teamBias(team);
  }

  // Cricket-specific adjustments to avoid false positives
  if (sport === "cricket") {
    const has = (id: number) => (team.attributes[String(id)] ?? 0) === 1;
    const saidYes = (id: number) => answers.some((a) => a.attributeId === id && a.choice === "yes");

    // Penalize if user values Steady Batting (47) but team lacks it
    if (saidYes(47) && !has(47)) score -= 0.3;
    // Penalize if user values Batting Depth (55) but team lacks it
    if (saidYes(55) && !has(55)) score -= 0.4;
    // Penalize if user values Death Overs (65) but team lacks it
    if (saidYes(65) && !has(65)) score -= 0.5;
    // Reduce overall if team Recent Form (81) is false and user emphasized performance attributes
    const perfYes = [49, 63, 65, 66, 73, 74, 78, 81].filter(saidYes).length;
    if (!has(81) && perfYes >= 3) score -= 0.5;
  }

  // F1-specific adjustments to avoid ties and false positives
  if (sport === "f1") {
    const has = (id: number) => (team.attributes[String(id)] ?? 0) === 1;
    const saidYes = (id: number) => answers.some((a) => a.attributeId === id && a.choice === "yes");

    if (saidYes(105) && !has(105)) score -= 0.6; // Consistency
    if (saidYes(101) && !has(101)) score -= 0.5; // Qualifying Pace
    if (saidYes(102) && !has(102)) score -= 0.5; // Racecraft
    if (saidYes(103) && !has(103)) score -= 0.4; // Tyre Management
    if (saidYes(104) && !has(104)) score -= 0.3; // Wet Weather
  }

  return { team, score, matches, positives, negatives, matchedAttributes, weightedPositive };
}

function getCricketWeights(): { attrWeight: (id: number) => number; teamBias: (team: TeamDef) => number } {
  // Attribute emphasis based on referenced sources (traits & match phases):
  // Batting core: 46 (Aggressive), 47 (Steady), 48 (Middle), 49 (Finisher), 50 (Strike Rotation), 51 (Boundary)
  // Bowling core: 56 (Fast), 57 (Swing), 58 (Reverse), 59 (Short-ball), 60 (Spin), 61 (Wrist), 62 (Finger), 65 (Death), 66 (Accuracy)
  // Phases: 63 (Powerplay), 64 (Middle-Overs), 65 (Death)
  // Fielding/wk: 68, 69, 70, 71
  // Mental/game: 73 (Tactical), 74 (Adaptability), 75 (Awareness), 76 (Big Match), 77 (Leadership), 78 (Calm), 81 (Recent Form)
  const weights: Record<number, number> = {
    // Batting: reward stability and finishing more than raw aggression
    46: 1.0, 47: 1.1, 48: 1.1, 49: 1.4, 50: 1.2, 51: 1.05,
    52: 1.0, 53: 1.05,
    55: 1.0, // batting depth a bit more important
    // Bowling: death overs and spin/fast balance still crucial
    56: 1.15, 57: 1.0, 58: 0.9, 59: 0.9, 60: 1.15, 61: 1.0, 62: 1.0, 65: 1.4, 66: 1.15,
    // Phases: powerplay and middle control slightly higher
    63: 1.3, 64: 1.1,
    // Fielding/wk: slightly higher as consistent differentiator
    68: 1.1, 69: 1.1, 70: 0.9, 71: 1.0,
    // Mental/game: clutch wins, leadership, calm, recent form emphasized
    73: 1.1, 74: 1.15, 75: 1.05, 76: 1.35, 77: 1.15, 78: 1.15, 81: 1.3,
    // Lower emphasis
    72: 0.85, 79: 0.8, 80: 0.9, 82: 0.85, 83: 0.8, 84: 0.8, 85: 0.6,
  };
  const attrWeight = (id: number) => weights[id] ?? 1;

  // Titles bias (from Wikipedia titles summary):
  const titlesMap: Record<string, number> = {
    "Australia": 6,
    "India": 2,
    "West Indies": 2,
    "England": 1,
    "Pakistan": 1,
    "Sri Lanka": 1,
    "New Zealand": 0,
    "South Africa": 0,
  };
  // Focus bias: emphasize modern top-tier consistency
  const focusMap: Record<string, number> = {
    "India": 0.5,
    "Australia": 0.5,
    "England": 0.4,
    "South Africa": 0.3,
    "New Zealand": 0.3,
  };
  const teamBias = (team: TeamDef) => {
    const titles = titlesMap[team.name] ?? 0;
    const titlesBias = Math.min(1.0, titles * 0.12);
    const focusBias = focusMap[team.name] ?? 0;
    // small, bounded biases so attributes dominate
    return titlesBias + focusBias;
  };
  return { attrWeight, teamBias };
}

function getWeightsForSport(sport: SportKey | string | undefined): { attrWeight?: (id: number) => number; teamBias?: (team: TeamDef) => number } {
  if (sport === "cricket") return getCricketWeights();
  if (sport === "football") {
    // Emphasize tactical identity + competitiveness while keeping symmetry
    // Key buckets (by id range): pressing/possession/build-up, defense, set pieces, star power/history
    const weights: Record<number, number> = {
      // Identity / playstyle
      13: 1.25, // High Press
      14: 1.2,  // Short Passing
      15: 1.15, // Build From Back
      16: 1.15, // Technical Midfield
      31: 1.15, // Counter-Attack
      32: 1.1,  // Wing Play
      33: 1.05, // Through Balls
      34: 1.0,  // Crossing Frequency
      37: 1.05, // Inverted Wingers
      38: 1.05, // Fullback Overlaps
      39: 1.05, // Sweeper Keeper
      40: 1.05, // Ball-Playing CB
      // Competitive edge
      26: 1.15, // Set Piece Threat
      27: 1.05, // Home Fortress
      28: 1.05, // Away Warriors
      41: 1.1,  // Aerial Dominance
      21: 1.1,  // Compact Defense
      22: 1.0,  // Low Block
      23: 1.05, // Direct Play
      24: 1.05, // Pace & Power
      25: 1.0,  // Long Passing
      // Culture / org strength
      19: 1.05, // Analytics Adoption
      20: 1.05, // Sports Science
      3:  1.05, // Youth Academy
      44: 1.05, // Academy Integration
      42: 1.0,  // Backroom Stability
      43: 1.0,  // Injury Resilience
      // Narrative/legacy (kept mild so attributes dominate)
      11: 1.05, // Historic Success
      17: 1.05, // European Pedigree
      12: 1.0,  // Global Fanbase
      18: 1.0,  // Star Signings
      29: 1.0,  // Modern Stadium
      6:  1.0,  // Atmospheric Stadium
    };
    const attrWeight = (id: number) => weights[id] ?? 1;
    // Tiny, bounded biases for modern form narratives (kept low)
    const biasMap: Record<string, number> = {
      "Manchester City": 0.20,
      "Real Madrid": 0.18,
      "Bayern Munich": 0.14,
      "Liverpool": 0.12,
      "Arsenal": 0.10,
      "FC Barcelona": 0.10,
      "Inter Milan": 0.08,
      "AC Milan": 0.06,
      "Atletico Madrid": 0.05,
      "Paris Saint-Germain": 0.06,
    };
    const teamBias = (team: TeamDef) => biasMap[team.name] ?? 0;
    return { attrWeight, teamBias };
  }
  if (sport === "f1") {
    // F1 attribute emphasis inspired by sources: qualifying pace, racecraft, tyre/wet management,
    // consistency under pressure, technical feedback, strategy adaptability, fitness.
    const weights: Record<number, number> = {
      101: 1.3, // Qualifying Pace
      102: 1.25, // Racecraft
      103: 1.2, // Tyre Management
      104: 1.15, // Wet Weather Skill
      105: 1.3, // Consistency
      106: 1.0, // Starts
      107: 1.15, // Strategy Adaptability
      108: 1.1, // Technical Feedback
      109: 1.25, // Pressure Handling
      110: 1.0, // Teamwork
      111: 1.0, // Energy/Fuel
      112: 1.0, // Track Knowledge
      113: 1.1, // Fitness
      114: 1.1, // Development Direction
    };
    const attrWeight = (id: number) => weights[id] ?? 1;
    // Tiny bias to break ties based on recent, general reputation signals
    const biasMap: Record<string, number> = {
      "Max Verstappen": 0.30,
      "Charles Leclerc": 0.16,
      "Lando Norris": 0.14,
      "Oscar Piastri": 0.10,
      "Lewis Hamilton": 0.18,
      "George Russell": 0.12,
      "Carlos Sainz": 0.13,
      "Fernando Alonso": 0.11,
      "Sergio Perez": 0.06,
      "Esteban Ocon": 0.04,
      "Yuki Tsunoda": 0.03,
    };
    const teamBias = (team: TeamDef) => biasMap[team.name] ?? 0;
    return { attrWeight, teamBias };
  }
  return {};
}

export function rankTeams(data: SportData, answers: UserAnswer[], topN = 3, sport?: SportKey): TeamScore[] {
  const { attrWeight, teamBias } = getWeightsForSport(sport);
  const scored = data.teams.map((t) => scoreTeam(answers, t, attrWeight, teamBias, sport));
  scored.sort(
    (a, b) =>
      b.score - a.score ||
      b.positives - a.positives ||
      b.weightedPositive - a.weightedPositive ||
      b.matches - a.matches ||
      a.team.name.localeCompare(b.team.name) // final stable tie-breaker
  );
  return scored.slice(0, topN);
}

export function pickQuestionAttributes(attrIds: number[], count: number): number[] {
  // deterministic pick: spread across the list
  if (attrIds.length <= count) return [...attrIds];
  const step = attrIds.length / count;
  const res: number[] = [];
  for (let i = 0; i < count; i++) {
    res.push(attrIds[Math.floor(i * step)]);
  }
  return res;
}

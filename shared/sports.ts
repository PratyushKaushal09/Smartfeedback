// Shared sports data: attributes and teams for football and cricket
// Types
export type SportKey = "football" | "cricket" | "f1";

export interface AttributeDef {
  id: number;
  name: string;
  description: string | null;
  active: boolean;
}

export interface TeamDef {
  id: number;
  name: string;
  meta: Record<string, any>;
  attributes: Record<string, 0 | 1>;
}

export interface SportData {
  attributes: AttributeDef[];
  teams: TeamDef[];
}

export const SPORTS: Record<SportKey, SportData> = {
  football: {
    attributes: [
      { id: 1, name: "Community Engagement", description: null, active: true },
      { id: 2, name: "Possession Play", description: null, active: true },
      { id: 3, name: "Youth Academy", description: null, active: true },
      { id: 4, name: "National Team Contributors", description: null, active: true },
      { id: 5, name: "Iconic Players", description: null, active: true },
      { id: 6, name: "Atmospheric Stadium", description: null, active: true },
      { id: 7, name: "Budget Conscious", description: null, active: true },
      { id: 8, name: "Derby Specialists", description: null, active: true },
      { id: 9, name: "Big Match Temperament", description: null, active: true },
      { id: 10, name: "Sustainability Focus", description: null, active: true },
      { id: 11, name: "Historic Success", description: null, active: true },
      { id: 12, name: "Global Fanbase", description: null, active: true },
      { id: 13, name: "High Press", description: null, active: true },
      { id: 14, name: "Short Passing", description: null, active: true },
      { id: 15, name: "Build From Back", description: null, active: true },
      { id: 16, name: "Technical Midfield", description: null, active: true },
      { id: 17, name: "European Pedigree", description: null, active: true },
      { id: 18, name: "Star Signings", description: null, active: true },
      { id: 19, name: "Analytics Adoption", description: null, active: true },
      { id: 20, name: "Sports Science", description: null, active: true },
      { id: 21, name: "Compact Defense", description: null, active: true },
      { id: 22, name: "Low Block", description: null, active: true },
      { id: 23, name: "Direct Play", description: null, active: true },
      { id: 24, name: "Pace & Power", description: null, active: true },
      { id: 25, name: "Long Passing", description: null, active: true },
      { id: 26, name: "Set Piece Threat", description: null, active: true },
      { id: 27, name: "Home Fortress", description: null, active: true },
      { id: 28, name: "Away Warriors", description: null, active: true },
      { id: 29, name: "Modern Stadium", description: null, active: true },
      { id: 30, name: "Manager Longevity", description: null, active: true },
      { id: 31, name: "Counter-Attack", description: null, active: true },
      { id: 32, name: "Wing Play", description: null, active: true },
      { id: 33, name: "Through Balls", description: null, active: true },
      { id: 34, name: "Crossing Frequency", description: null, active: true },
      { id: 35, name: "Dribble-Oriented", description: null, active: true },
      { id: 36, name: "Long Shots", description: null, active: true },
      { id: 37, name: "Inverted Wingers", description: null, active: true },
      { id: 38, name: "Fullback Overlaps", description: null, active: true },
      { id: 39, name: "Sweeper Keeper", description: null, active: true },
      { id: 40, name: "Ball-Playing CB", description: null, active: true },
      { id: 41, name: "Aerial Dominance", description: null, active: true },
      { id: 42, name: "Backroom Stability", description: null, active: true },
      { id: 43, name: "Injury Resilience", description: null, active: true },
      { id: 44, name: "Academy Integration", description: null, active: true },
      { id: 45, name: "Tiki-Taka Tendencies", description: null, active: true },
    ],
    teams: [
      {
        id: 1,
        name: "Manchester City",
        meta: { league: "Top" },
        attributes: { "1": 1, "2": 0, "3": 0, "4": 1, "5": 1, "6": 1, "7": 0, "8": 1, "9": 0, "10": 1, "11": 1, "12": 1, "13": 1, "14": 1, "15": 1, "16": 1, "17": 1, "18": 0, "19": 1, "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 1, "28": 0, "29": 0, "30": 0, "31": 0, "32": 0, "33": 0, "34": 1, "35": 1, "36": 0, "37": 0, "38": 1, "39": 0, "40": 0, "41": 1, "42": 1, "43": 0, "44": 0, "45": 0 },
      },
      {
        id: 2,
        name: "Manchester United",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 1, "3": 1, "4": 1, "5": 0, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 1, "13": 1, "14": 0, "15": 0, "16": 1, "17": 1, "18": 1, "19": 0, "20": 0, "21": 0, "22": 0, "23": 1, "24": 0, "25": 1, "26": 0, "27": 0, "28": 1, "29": 0, "30": 1, "31": 0, "32": 1, "33": 1, "34": 1, "35": 0, "36": 0, "37": 1, "38": 0, "39": 0, "40": 0, "41": 1, "42": 1, "43": 0, "44": 1, "45": 1 },
      },
      {
        id: 3,
        name: "Liverpool",
        meta: { league: "Top" },
        attributes: { "1": 1, "2": 1, "3": 1, "4": 1, "5": 0, "6": 1, "7": 1, "8": 0, "9": 1, "10": 1, "11": 1, "12": 0, "13": 0, "14": 1, "15": 0, "16": 0, "17": 0, "18": 0, "19": 1, "20": 0, "21": 0, "22": 0, "23": 1, "24": 1, "25": 1, "26": 0, "27": 0, "28": 0, "29": 1, "30": 0, "31": 0, "32": 0, "33": 1, "34": 0, "35": 1, "36": 0, "37": 0, "38": 1, "39": 0, "40": 0, "41": 1, "42": 1, "43": 0, "44": 0, "45": 0 },
      },
      {
        id: 4,
        name: "Chelsea",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 0, "6": 0, "7": 0, "8": 0, "9": 1, "10": 0, "11": 0, "12": 1, "13": 1, "14": 1, "15": 0, "16": 0, "17": 1, "18": 1, "19": 0, "20": 0, "21": 1, "22": 0, "23": 0, "24": 0, "25": 0, "26": 1, "27": 1, "28": 0, "29": 1, "30": 1, "31": 0, "32": 1, "33": 0, "34": 0, "35": 1, "36": 0, "37": 1, "38": 0, "39": 0, "40": 0, "41": 1, "42": 1, "43": 0, "44": 0, "45": 0 },
      },
      {
        id: 5,
        name: "Arsenal",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 1, "3": 0, "4": 1, "5": 0, "6": 1, "7": 1, "8": 0, "9": 1, "10": 0, "11": 0, "12": 0, "13": 0, "14": 1, "15": 1, "16": 1, "17": 0, "18": 1, "19": 0, "20": 1, "21": 1, "22": 1, "23": 1, "24": 1, "25": 1, "26": 0, "27": 1, "28": 1, "29": 0, "30": 1, "31": 1, "32": 0, "33": 1, "34": 0, "35": 1, "36": 1, "37": 1, "38": 1, "39": 0, "40": 0, "41": 1, "42": 0, "43": 1, "44": 1, "45": 0 },
      },
      {
        id: 6,
        name: "Tottenham Hotspur",
        meta: { league: "Top" },
        attributes: { "1": 1, "2": 1, "3": 1, "4": 1, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 1, "11": 0, "12": 0, "13": 1, "14": 0, "15": 1, "16": 1, "17": 1, "18": 1, "19": 0, "20": 0, "21": 0, "22": 0, "23": 1, "24": 0, "25": 0, "26": 1, "27": 1, "28": 0, "29": 1, "30": 1, "31": 1, "32": 0, "33": 1, "34": 1, "35": 0, "36": 0, "37": 0, "38": 0, "39": 1, "40": 0, "41": 0, "42": 1, "43": 1, "44": 0, "45": 0 },
      },
      {
        id: 7,
        name: "Real Madrid",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 1, "3": 0, "4": 1, "5": 1, "6": 0, "7": 0, "8": 1, "9": 0, "10": 0, "11": 1, "12": 1, "13": 0, "14": 1, "15": 1, "16": 1, "17": 1, "18": 1, "19": 0, "20": 1, "21": 1, "22": 0, "23": 1, "24": 0, "25": 0, "26": 1, "27": 0, "28": 1, "29": 0, "30": 1, "31": 1, "32": 1, "33": 0, "34": 1, "35": 1, "36": 1, "37": 1, "38": 1, "39": 1, "40": 0, "41": 1, "42": 1, "43": 0, "44": 0, "45": 0 },
      },
      {
        id: 8,
        name: "FC Barcelona",
        meta: { league: "Top" },
        attributes: { "1": 1, "2": 1, "3": 0, "4": 0, "5": 0, "6": 1, "7": 0, "8": 0, "9": 0, "10": 1, "11": 1, "12": 1, "13": 1, "14": 1, "15": 1, "16": 1, "17": 0, "18": 0, "19": 0, "20": 1, "21": 1, "22": 0, "23": 1, "24": 1, "25": 1, "26": 1, "27": 0, "28": 1, "29": 1, "30": 1, "31": 0, "32": 1, "33": 0, "34": 0, "35": 0, "36": 0, "37": 0, "38": 1, "39": 1, "40": 0, "41": 1, "42": 0, "43": 1, "44": 1, "45": 1 },
      },
      {
        id: 9,
        name: "Atletico Madrid",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 1, "3": 1, "4": 1, "5": 0, "6": 1, "7": 1, "8": 0, "9": 0, "10": 1, "11": 1, "12": 0, "13": 1, "14": 0, "15": 1, "16": 1, "17": 1, "18": 1, "19": 1, "20": 1, "21": 1, "22": 1, "23": 0, "24": 1, "25": 0, "26": 0, "27": 0, "28": 1, "29": 1, "30": 0, "31": 1, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "37": 1, "38": 1, "39": 0, "40": 1, "41": 1, "42": 0, "43": 0, "44": 1, "45": 0 },
      },
      {
        id: 10,
        name: "Bayern Munich",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 1, "3": 1, "4": 1, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 1, "11": 0, "12": 1, "13": 1, "14": 0, "15": 1, "16": 1, "17": 1, "18": 1, "19": 1, "20": 1, "21": 0, "22": 1, "23": 0, "24": 1, "25": 0, "26": 0, "27": 0, "28": 0, "29": 1, "30": 0, "31": 1, "32": 0, "33": 1, "34": 0, "35": 1, "36": 1, "37": 1, "38": 0, "39": 0, "40": 0, "41": 0, "42": 0, "43": 0, "44": 1, "45": 1 },
      },
      {
        id: 11,
        name: "Borussia Dortmund",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 0, "3": 0, "4": 1, "5": 1, "6": 0, "7": 0, "8": 1, "9": 0, "10": 1, "11": 1, "12": 1, "13": 1, "14": 0, "15": 1, "16": 1, "17": 0, "18": 1, "19": 0, "20": 1, "21": 0, "22": 0, "23": 1, "24": 0, "25": 1, "26": 1, "27": 0, "28": 1, "29": 0, "30": 0, "31": 1, "32": 0, "33": 1, "34": 1, "35": 0, "36": 1, "37": 0, "38": 0, "39": 1, "40": 1, "41": 0, "42": 1, "43": 0, "44": 0, "45": 1 },
      },
      {
        id: 12,
        name: "Paris Saint-Germain",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 0, "3": 1, "4": 0, "5": 0, "6": 1, "7": 0, "8": 1, "9": 0, "10": 0, "11": 1, "12": 1, "13": 1, "14": 0, "15": 0, "16": 0, "17": 1, "18": 1, "19": 0, "20": 1, "21": 1, "22": 0, "23": 1, "24": 0, "25": 0, "26": 1, "27": 0, "28": 0, "29": 1, "30": 1, "31": 0, "32": 1, "33": 0, "34": 0, "35": 1, "36": 0, "37": 0, "38": 0, "39": 1, "40": 0, "41": 0, "42": 1, "43": 1, "44": 0, "45": 1 },
      },
      {
        id: 13,
        name: "Juventus",
        meta: { league: "Top" },
        attributes: { "1": 1, "2": 0, "3": 1, "4": 0, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0, "11": 1, "12": 1, "13": 0, "14": 0, "15": 0, "16": 1, "17": 1, "18": 1, "19": 0, "20": 0, "21": 1, "22": 1, "23": 0, "24": 1, "25": 1, "26": 1, "27": 1, "28": 0, "29": 0, "30": 1, "31": 1, "32": 0, "33": 0, "34": 1, "35": 0, "36": 1, "37": 1, "38": 0, "39": 0, "40": 1, "41": 1, "42": 0, "43": 1, "44": 0, "45": 0 },
      },
      {
        id: 14,
        name: "Inter Milan",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 0, "3": 0, "4": 1, "5": 1, "6": 1, "7": 0, "8": 1, "9": 1, "10": 1, "11": 1, "12": 1, "13": 0, "14": 0, "15": 1, "16": 0, "17": 0, "18": 1, "19": 1, "20": 0, "21": 0, "22": 1, "23": 1, "24": 1, "25": 0, "26": 0, "27": 1, "28": 0, "29": 1, "30": 1, "31": 0, "32": 1, "33": 1, "34": 1, "35": 0, "36": 1, "37": 1, "38": 0, "39": 1, "40": 0, "41": 0, "42": 1, "43": 0, "44": 0, "45": 0 },
      },
      {
        id: 15,
        name: "AC Milan",
        meta: { league: "Top" },
        attributes: { "1": 0, "2": 0, "3": 0, "4": 0, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 1, "15": 1, "16": 1, "17": 1, "18": 0, "19": 1, "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 1, "26": 1, "27": 0, "28": 0, "29": 0, "30": 0, "31": 1, "32": 0, "33": 1, "34": 0, "35": 1, "36": 0, "37": 1, "38": 1, "39": 0, "40": 1, "41": 1, "42": 1, "43": 0, "44": 1, "45": 0 },
      },
    ],
  },
  cricket: {
    attributes: [
      { id: 46, name: "Aggressive Batting", description: null, active: true },
      { id: 47, name: "Steady Batting", description: null, active: true },
      { id: 48, name: "Middle-Order Stability", description: null, active: true },
      { id: 49, name: "Finisher Ability", description: null, active: true },
      { id: 50, name: "Strike Rotation", description: null, active: true },
      { id: 51, name: "Boundary Frequency", description: null, active: true },
      { id: 52, name: "Spin-Hitting Skill", description: null, active: true },
      { id: 53, name: "Pace-Hitting Skill", description: null, active: true },
      { id: 54, name: "Left-Hand Variety", description: null, active: true },
      { id: 55, name: "Batting Depth", description: null, active: true },
      { id: 56, name: "Fast Bowling", description: null, active: true },
      { id: 57, name: "Swing Bowling", description: null, active: true },
      { id: 58, name: "Reverse Swing", description: null, active: true },
      { id: 59, name: "Short-Ball Effectiveness", description: null, active: true },
      { id: 60, name: "Spin Bowling", description: null, active: true },
      { id: 61, name: "Wrist-Spin Threat", description: null, active: true },
      { id: 62, name: "Finger-Spin Control", description: null, active: true },
      { id: 63, name: "Powerplay Control", description: null, active: true },
      { id: 64, name: "Middle-Overs Squeeze", description: null, active: true },
      { id: 65, name: "Death Overs Bowling", description: null, active: true },
      { id: 66, name: "Bowling Accuracy", description: null, active: true },
      { id: 67, name: "Bowling All-Rounders", description: null, active: true },
      { id: 68, name: "Catching Consistency", description: null, active: true },
      { id: 69, name: "Ground Fielding", description: null, active: true },
      { id: 70, name: "Run-Out Threat", description: null, active: true },
      { id: 71, name: "Wicketkeeping Excellence", description: null, active: true },
      { id: 72, name: "Fitness/Availability", description: null, active: true },
      { id: 73, name: "Tactical Flexibility", description: null, active: true },
      { id: 74, name: "Adaptability To Conditions", description: null, active: true },
      { id: 75, name: "Game Awareness", description: null, active: true },
      { id: 76, name: "Big Match Wins", description: null, active: true },
      { id: 77, name: "Leadership", description: null, active: true },
      { id: 78, name: "Calm Under Pressure", description: null, active: true },
      { id: 79, name: "Innovation", description: null, active: true },
      { id: 80, name: "Rich Legacy", description: null, active: true },
      { id: 81, name: "Recent Form", description: null, active: true },
      { id: 82, name: "Youth Pipeline", description: null, active: true },
      { id: 83, name: "Passionate Fanbase", description: null, active: true },
      { id: 84, name: "Rivalry Pedigree", description: null, active: true },
      { id: 85, name: "Sportsmanship", description: null, active: true },
    ],
    teams: [
      {
        id: 16,
        name: "India",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 0, "47": 1, "48": 1, "49": 1, "50": 1, "51": 1, "52": 1, "53": 1, "54": 0, "55": 1, "56": 1, "57": 0, "58": 0, "59": 0, "60": 1, "61": 1, "62": 1, "63": 1, "64": 1, "65": 1, "66": 1, "67": 1, "68": 1, "69": 1, "70": 1, "71": 1, "72": 1, "73": 1, "74": 1, "75": 1, "76": 1, "77": 1, "78": 1, "79": 1, "80": 1, "81": 1, "82": 1, "83": 1, "84": 1, "85": 1 },
      },
      {
        id: 17,
        name: "Pakistan",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 1, "47": 0, "48": 0, "49": 0, "50": 0, "51": 0, "52": 0, "53": 0, "54": 0, "55": 0, "56": 1, "57": 0, "58": 1, "59": 1, "60": 0, "61": 0, "62": 0, "63": 0, "64": 0, "65": 0, "66": 1, "67": 0, "68": 0, "69": 0, "70": 0, "71": 0, "72": 0, "73": 0, "74": 0, "75": 0, "76": 1, "77": 1, "78": 0, "79": 0, "80": 0, "81": 0, "82": 0, "83": 1, "84": 0, "85": 0 },
      },
      {
        id: 18,
        name: "Sri Lanka",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 0, "47": 1, "48": 0, "49": 0, "50": 0, "51": 0, "52": 0, "53": 0, "54": 0, "55": 0, "56": 0, "57": 0, "58": 0, "59": 0, "60": 1, "61": 0, "62": 1, "63": 0, "64": 0, "65": 0, "66": 0, "67": 0, "68": 0, "69": 0, "70": 0, "71": 0, "72": 0, "73": 0, "74": 1, "75": 1, "76": 0, "77": 0, "78": 0, "79": 0, "80": 0, "81": 0, "82": 0, "83": 0, "84": 0, "85": 1 },
      },
      {
        id: 19,
        name: "West Indies",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 1, "47": 0, "48": 0, "49": 0, "50": 0, "51": 1, "52": 0, "53": 1, "54": 0, "55": 0, "56": 1, "57": 0, "58": 0, "59": 1, "60": 0, "61": 0, "62": 0, "63": 1, "64": 0, "65": 0, "66": 0, "67": 0, "68": 0, "69": 0, "70": 0, "71": 0, "72": 0, "73": 0, "74": 0, "75": 0, "76": 0, "77": 0, "78": 0, "79": 0, "80": 0, "81": 0, "82": 0, "83": 1, "84": 0, "85": 0 },
      },
      {
        id: 20,
        name: "Australia",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 1, "47": 1, "48": 1, "49": 1, "50": 1, "51": 1, "52": 1, "53": 1, "54": 0, "55": 1, "56": 1, "57": 1, "58": 1, "59": 1, "60": 1, "61": 1, "62": 1, "63": 1, "64": 1, "65": 1, "66": 1, "67": 1, "68": 1, "69": 1, "70": 1, "71": 1, "72": 1, "73": 1, "74": 1, "75": 1, "76": 1, "77": 1, "78": 1, "79": 1, "80": 1, "81": 1, "82": 1, "83": 1, "84": 1, "85": 1 },
      },
      {
        id: 21,
        name: "New Zealand",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 0, "47": 1, "48": 1, "49": 1, "50": 1, "51": 0, "52": 1, "53": 1, "54": 0, "55": 1, "56": 1, "57": 1, "58": 0, "59": 0, "60": 1, "61": 1, "62": 1, "63": 1, "64": 1, "65": 1, "66": 1, "67": 1, "68": 1, "69": 1, "70": 1, "71": 1, "72": 1, "73": 1, "74": 1, "75": 1, "76": 1, "77": 1, "78": 1, "79": 0, "80": 1, "81": 1, "82": 1, "83": 0, "84": 1, "85": 1 },
      },
      {
        id: 22,
        name: "England",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 1, "47": 1, "48": 1, "49": 1, "50": 1, "51": 1, "52": 1, "53": 1, "54": 0, "55": 1, "56": 1, "57": 1, "58": 1, "59": 1, "60": 1, "61": 1, "62": 1, "63": 1, "64": 1, "65": 1, "66": 1, "67": 1, "68": 1, "69": 1, "70": 1, "71": 1, "72": 1, "73": 1, "74": 1, "75": 1, "76": 1, "77": 1, "78": 1, "79": 1, "80": 1, "81": 1, "82": 1, "83": 1, "84": 1, "85": 1 },
      },
      {
        id: 23,
        name: "South Africa",
        meta: { type: "national", sport: "cricket" },
        attributes: { "46": 1, "47": 1, "48": 1, "49": 1, "50": 1, "51": 1, "52": 1, "53": 1, "54": 0, "55": 1, "56": 1, "57": 1, "58": 0, "59": 1, "60": 1, "61": 1, "62": 1, "63": 1, "64": 1, "65": 0, "66": 1, "67": 1, "68": 1, "69": 1, "70": 1, "71": 1, "72": 1, "73": 1, "74": 1, "75": 1, "76": 0, "77": 1, "78": 1, "79": 0, "80": 1, "81": 1, "82": 1, "83": 1, "84": 1, "85": 1 },
      },
    ],
  },
  f1: {
    attributes: [
      { id: 101, name: "Qualifying Pace", description: null, active: true },
      { id: 102, name: "Racecraft (Overtaking/Defending)", description: null, active: true },
      { id: 103, name: "Tyre Management", description: null, active: true },
      { id: 104, name: "Wet Weather Skill", description: null, active: true },
      { id: 105, name: "Consistency (Error Rate)", description: null, active: true },
      { id: 106, name: "Starts/Launch", description: null, active: true },
      { id: 107, name: "Strategy Adaptability", description: null, active: true },
      { id: 108, name: "Technical Feedback", description: null, active: true },
      { id: 109, name: "Pressure Handling", description: null, active: true },
      { id: 110, name: "Teamwork/Communication", description: null, active: true },
      { id: 111, name: "Energy/Fuel Management", description: null, active: true },
      { id: 112, name: "Track Knowledge", description: null, active: true },
      { id: 113, name: "Fitness/Endurance", description: null, active: true },
      { id: 114, name: "Development Direction", description: null, active: true },
    ],
    teams: [
      {
        id: 31,
        name: "Max Verstappen",
        meta: { type: "driver", sport: "f1", team: "Red Bull Racing", logo: "/logos/f1/redbull.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
      {
        id: 32,
        name: "Charles Leclerc",
        meta: { type: "driver", sport: "f1", team: "Ferrari", logo: "/logos/f1/ferrari.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 33,
        name: "Lewis Hamilton",
        meta: { type: "driver", sport: "f1", team: "Ferrari", logo: "/logos/f1/ferrari.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
      {
        id: 34,
        name: "Lando Norris",
        meta: { type: "driver", sport: "f1", team: "McLaren", logo: "/logos/f1/mclaren.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 35,
        name: "Oscar Piastri",
        meta: { type: "driver", sport: "f1", team: "McLaren", logo: "/logos/f1/mclaren.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 36,
        name: "George Russell",
        meta: { type: "driver", sport: "f1", team: "Mercedes", logo: "/logos/f1/mercedes.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
      {
        id: 37,
        name: "Sergio Perez",
        meta: { type: "driver", sport: "f1", team: "Red Bull Racing", logo: "/logos/f1/redbull.svg" },
        attributes: { "101": 0, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 0, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 38,
        name: "Fernando Alonso",
        meta: { type: "driver", sport: "f1", team: "Aston Martin", logo: "/logos/f1/astonmartin.svg" },
        attributes: { "101": 0, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
      {
        id: 39,
        name: "Carlos Sainz",
        meta: { type: "driver", sport: "f1", team: "Ferrari", logo: "/logos/f1/ferrari.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 0, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
      {
        id: 40,
        name: "Esteban Ocon",
        meta: { type: "driver", sport: "f1", team: "Alpine", logo: "/logos/f1/alpine.svg" },
        attributes: { "101": 0, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 41,
        name: "Yuki Tsunoda",
        meta: { type: "driver", sport: "f1", team: "RB", logo: "/logos/f1/rb.svg" },
        attributes: { "101": 0, "102": 1, "103": 1, "104": 0, "105": 0, "106": 1, "107": 1, "108": 0, "109": 0, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 42,
        name: "Alexander Albon",
        meta: { type: "driver", sport: "f1", team: "Williams", logo: "/logos/f1/williams.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
      {
        id: 43,
        name: "Pierre Gasly",
        meta: { type: "driver", sport: "f1", team: "Alpine", logo: "/logos/f1/alpine.svg" },
        attributes: { "101": 0, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 44,
        name: "Lance Stroll",
        meta: { type: "driver", sport: "f1", team: "Aston Martin", logo: "/logos/f1/astonmartin.svg" },
        attributes: { "101": 0, "102": 1, "103": 1, "104": 0, "105": 0, "106": 1, "107": 1, "108": 0, "109": 0, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 45,
        name: "Nico Hülkenberg",
        meta: { type: "driver", sport: "f1", team: "Haas", logo: "/logos/f1/haas.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
      {
        id: 46,
        name: "Kevin Magnussen",
        meta: { type: "driver", sport: "f1", team: "Haas", logo: "/logos/f1/haas.svg" },
        attributes: { "101": 0, "102": 1, "103": 0, "104": 0, "105": 0, "106": 1, "107": 0, "108": 0, "109": 0, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 47,
        name: "Logan Sargeant",
        meta: { type: "driver", sport: "f1", team: "Williams", logo: "/logos/f1/williams.svg" },
        attributes: { "101": 0, "102": 0, "103": 0, "104": 0, "105": 0, "106": 1, "107": 0, "108": 0, "109": 0, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 48,
        name: "Zhou Guanyu",
        meta: { type: "driver", sport: "f1", team: "Sauber", logo: "/logos/f1/sauber.svg" },
        attributes: { "101": 0, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 0 },
      },
      {
        id: 49,
        name: "Valtteri Bottas",
        meta: { type: "driver", sport: "f1", team: "Sauber", logo: "/logos/f1/sauber.svg" },
        attributes: { "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1, "111": 1, "112": 1, "113": 1, "114": 1 },
      },
    ],
  },
};

export function asQuestions(attr: AttributeDef[]): { id: number; text: string }[] {
  return attr.map((a) => ({ id: a.id, text: `Does this describe your preference: ${a.name}?` }));
}

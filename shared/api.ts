/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// Quiz AI explanation types
export interface ExplainRequest {
  sport: "football" | "cricket";
  answers: { attributeId: number; choice: "yes" | "no" | "neutral" }[];
  topTeams: { id: number; name: string; score: number }[];
}

export interface ExplainResponse {
  explanation: string;
  usedLLM: boolean;
}

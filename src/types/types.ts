export type Scene = "START" | "GAME" | "RESULT";

export const GAMES = ["snow-white", "cinderella"] as const;
export type Game = (typeof GAMES)[number];

export type Problem = {
  id: string;
  ui: React.ComponentType<{ isFound: boolean }>;
  comment: string;
};

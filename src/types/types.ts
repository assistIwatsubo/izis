export type Scene = "START" | "GAME" | "RESULT";

export type Game = "snow-white" | "other-game";

export type Problem = {
  id: string;
  ui: React.ComponentType<{ isFound: boolean }>;
  comment: string;
};

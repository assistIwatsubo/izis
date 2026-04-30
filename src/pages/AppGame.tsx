// AppGame.tsx
import { useState } from "react";
import SnowWhite from "./games/SnowWhite.tsx";
import { type GameType } from "../types/game-type";
import { Icon } from "@iconify/react";

type Props = {
  setScene: (scene: "START" | "GAME" | "RESULT") => void;
  activeGame: GameType;
};

function AppGame({ setScene, activeGame }: Props) {
  const [foundCount, setFoundCount] = useState(0);

  return (
    <section className="relative min-h-screen">
      {/* --- 共通UI：進捗パネルなど --- */}
      <nav className="fixed top-0 right-8 z-50 bg-white/20 py-2 px-4 rounded-b-lg izis-glass-panel text-(--primary-color) border-4 border-t-0 border-(--primary-color) flex gap-4 items-end shadow-lg">
        <h1 className="hidden">IZIS</h1>
        <button onClick={() => setScene("START")} className="cursor-pointer">
          <Icon
            icon="qlementine-icons:key-return-noframe-16"
            width="20"
            height="20"
          />
        </button>
        FOUND: {foundCount}/20
      </nav>

      {/* --- ゲーム本体の切り替え --- */}
      {activeGame === "snow-white" && (
        <SnowWhite onFound={() => setFoundCount((prev) => prev + 1)} />
      )}
    </section>
  );
}

export default AppGame;

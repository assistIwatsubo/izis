// AppGame.tsx
import { useState } from "react";
import SnowWhite from "./games/SnowWhite.tsx";
import { type Game } from "../types/types.ts";
import { Icon } from "@iconify/react";
import { snowWhiteProblems } from "../assets/problems/snow-white";
import Modal from "../components/Modal.tsx";

const problems = snowWhiteProblems; // 今回のゲーム

type Props = {
  setScene: (scene: "START" | "GAME" | "RESULT") => void;
  activeGame: Game;
};

function AppGame({ setScene, activeGame }: Props) {
  const [foundIds, setFoundIds] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleFound = (id: string) => {
    setFoundIds((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
    setActiveId(id);
  };

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
        FOUND: {foundIds.length}/20
      </nav>

      {/* --- ゲーム本体の切り替え --- */}
      {activeGame === "snow-white" && (
        <SnowWhite
          foundIds={foundIds}
          onFound={handleFound}
          problems={problems}
        />
      )}
      {activeId && (
        <Modal onClose={() => setActiveId(null)}>
          {problems.find((p) => p.id === activeId)?.comment}
        </Modal>
      )}
    </section>
  );
}

export default AppGame;

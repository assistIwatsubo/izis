// AppGame.tsx
import { useState } from "react";
import GameController from "../components/GameController.tsx";
import { type Game, type Scene } from "../types/types.ts";
import { Icon } from "@iconify/react";
import { problems } from "../types/config.ts";

import Modal from "../components/Modal.tsx";

type Props = {
  setScene: (scene: Scene) => void;
  activeGame: Game;
  foundIds: string[];
  setFoundIds: React.Dispatch<React.SetStateAction<string[]>>;
};

function AppGame({ setScene, activeGame, foundIds, setFoundIds }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProblems = problems[activeGame as keyof typeof problems];

  const isClear = activeProblems && foundIds.length === activeProblems.length;

  const handleFound = (id: string) => {
    setFoundIds((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
    setActiveId(id);
  };

  return (
    <section className="relative min-h-screen">
      <nav className="fixed top-0 right-8 z-50 bg-white/20 py-2 px-4 rounded-b-lg izis-glass-panel text-(--primary-color) border-4 border-t-0 border-(--primary-color) flex gap-4 items-end shadow-lg">
        <h1 className="hidden">IZIS</h1>
        {isClear ? (
          // クリア時の表示
          <div className="flex items-center gap-3">
            <span className="font-bold text-(--primary-color)">COMPLETE!</span>
            <button
              onClick={() => setScene("RESULT")}
              className="hover:bg-(--primary-lite-color) rounded-full p-1 cursor-pointer hover:text-white duration-200"
            >
              <Icon icon="qlementine-icons:clap-16" width="20" height="20" />
            </button>
          </div>
        ) : (
          // 通常時の表示
          <>
            <Icon
              icon="qlementine-icons:key-return-noframe-16"
              width="20"
              height="20"
            />
            <button
              onClick={() => setScene("START")}
              className="cursor-pointer"
            ></button>
            FOUND: {foundIds.length}/{activeProblems?.length ?? "?"}
          </>
        )}
      </nav>

      {/* --- ゲーム本体の切り替え --- */}
      {activeGame && (
        <GameController
          foundIds={foundIds}
          onFound={handleFound}
          problems={activeProblems}
        />
      )}
      {activeId && (
        <Modal onClose={() => setActiveId(null)}>
          {activeProblems.find((p) => p.id === activeId)?.comment}
        </Modal>
      )}
    </section>
  );
}

export default AppGame;

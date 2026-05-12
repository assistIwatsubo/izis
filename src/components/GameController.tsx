import ToggleUI from "./ToggleUi";
import { type Problem } from "../types/types";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

type Props = {
  problems: Problem[];
  foundIds: string[];
  onFound: (id: string) => void;
  isDebug: boolean;
};

function GameController({ foundIds, onFound, problems, isDebug }: Props) {
  const [debugStates, setDebugStates] = useState<Record<string, boolean>>({});

  const toggleDebugState = (id: string) => {
    setDebugStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <section className="font-serif overflow-hidden">
      {problems.map((p) => {
        const found = isDebug ? !!debugStates[p.id] : foundIds.includes(p.id);
        const UI = p.ui;
        return (
          <div className="relative">
            <ToggleUI
              key={p.id}
              id={p.id}
              isFound={found}
              onFound={onFound}
              ui={<UI isFound={found} />}
            />

            {isDebug && (
              <ToggleSwitch
                checked={found}
                onChange={() => toggleDebugState(p.id)}
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default GameController;

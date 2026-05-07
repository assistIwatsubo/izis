import ToggleUI from "./ToggleUi";
import { type Problem } from "../types/types";

type Props = {
  problems: Problem[];
  foundIds: string[];
  onFound: (id: string) => void;
};

function GameController({ foundIds, onFound, problems }: Props) {
  return (
    <section className="font-serif">
      {problems.map((p) => {
        const found = foundIds.includes(p.id);
        const UI = p.ui;
        return (
          <ToggleUI
            key={p.id}
            id={p.id}
            isFound={found}
            onFound={onFound}
            ui={<UI isFound={found} />}
          />
        );
      })}
    </section>
  );
}

export default GameController;

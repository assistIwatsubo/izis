import ToggleUI from "../../components/ToggleUi";
import { type Problem } from "../../types/types";

type Props = {
  problems: Problem[];
  foundIds: string[];
  onFound: (id: string) => void;
};

function SnowWhite({ foundIds, onFound, problems }: Props) {
  return (
    <section>
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

export default SnowWhite;

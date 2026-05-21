import { type Game } from "../types/types.ts";
import { problems } from "../types/config.ts";

type Props = {
  setScene: (scene: "START" | "GAME" | "RESULT") => void;
  activeGame: Game;
  onFullFound: () => void;
};

function AppResult({ setScene, activeGame, onFullFound }: Props) {
  const activeProblems = problems[activeGame as keyof typeof problems];

  return (
    <section className="bg-[url('/izis-background.webp')] bg-cover bg-center min-h-screen flex flex-col justify-around p-4">
      <h1 className="izis-text-shadow text-white font-black">
        IZIS <small>- FIX THE UI -</small>
      </h1>
      <div className="py-4">
        <h2 className="leading-tight text-center text-[5rem] font-black text-white izis-text-shadow my-8 sm:my-12">
          RESULT
        </h2>
      </div>
      <div className="m-auto bg-white/25 rounded-lg w-fit px-8 py-4 backdrop-blur-sm">
        <h3 className="text-center font-bold text-[--primary-color] mb-2 text-[1.5rem]">
          YOU FOUNDED
        </h3>
        <div className="text-(--primary-color) font-black text-[3rem] text-center">
          {activeProblems.length}
          <small className="text-[1.5rem]">／{activeProblems.length}</small>
        </div>
      </div>
      <div className="m-auto flex justify-center items-center flex-col gap-8">
        <button
          className="izis-primary-button"
          onClick={() => {
            onFullFound();
            setScene("GAME");
          }}
        >
          SEE FIXED UI ?
        </button>
        <button
          className="izis-secondary-button"
          onClick={() => setScene("START")}
        >
          PLAY AGEIN ?<span>GO TO TOP</span>
        </button>
      </div>
    </section>
  );
}

export default AppResult;

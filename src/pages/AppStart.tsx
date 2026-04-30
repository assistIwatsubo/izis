import { type GameType } from "../types/game-type";

type Props = {
  setScene: (scene: "START" | "GAME" | "RESULT") => void;
  setActiveGame: (game: GameType) => void;
};

function AppStart({ setScene, setActiveGame }: Props) {
  return (
    <section className="bg-[url('/izis-background.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-around p-4">
      <div className="py-4">
        <h1 className="leading-tight text-center text-[10rem] font-black text-white izis-text-shadow">
          IZIS
        </h1>
        <p className="text-center text-[3rem] font-black text-white izis-text-shadow">
          - FIX THE UI -
        </p>
      </div>
      <div className="m-auto bg-black/25 rounded-lg w-fit px-8 py-4 izis-glass-panel">
        <h2 className="text-center font-bold text-white mb-6 text-[1.5rem] ">
          HOW TO PLAY
        </h2>
        <ol className="text-white flex flex-col gap-4 text-[1.25rem] list-outside list-decimal ml-6">
          <li>悪いUIを見付ける</li>
          <li>クリックorタップ！</li>
          <li>全部見つけたらゲームクリア</li>
        </ol>
      </div>
      <div className="m-auto flex flex-col gap-4 justify-center items-center">
        <div>
          Theme：
          <select
            name="game"
            id="game"
            className="bg-white/50 rounded-md px-2"
            onChange={(e) => setActiveGame(e.target.value as GameType)}
          >
            <option value="snow-white">Snow White</option>
          </select>
        </div>
        <button
          className="izis-primary-button"
          onClick={() => setScene("GAME")}
        >
          GAME START！
        </button>
      </div>
    </section>
  );
}

export default AppStart;

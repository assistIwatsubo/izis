import { GAMES, type Game } from "../types/types";
import ToggleSwitch from "../components/ToggleSwitch";

type Props = {
  setScene: (scene: "START" | "GAME" | "RESULT") => void;
  activeGame: Game;
  setActiveGame: (game: Game) => void;
  isDebug: boolean;
  setIsDebug: React.Dispatch<React.SetStateAction<boolean>>;
};

function AppStart({
  setScene,
  activeGame,
  setActiveGame,
  isDebug,
  setIsDebug,
}: Props) {
  return (
    <section className="bg-[url('/izis-background.webp')] bg-cover bg-center min-h-screen flex flex-col justify-around px-4 py-12">
      <div className="py-4">
        <h1 className="leading-tight text-center text-[10rem] font-black text-white izis-text-shadow">
          IZIS
        </h1>
        <p className="text-center text-[3rem] font-black text-white izis-text-shadow">
          - FIX THE UI -
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-12 lg:gap-24">
        <div className="bg-black/25 rounded-lg w-fit px-8 py-4 backdrop-blur-sm">
          <h2 className="text-center font-bold text-white py-2 text-[1.5rem] ">
            HOW TO PLAY
          </h2>
          <ol className="text-white flex flex-col gap-4 text-[1.25rem] list-outside list-decimal ml-6 py-4">
            <li>悪いUIを見付ける</li>
            <li>クリックorタップ！</li>
            <li>全部見つけたらゲームクリア</li>
          </ol>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="text-(--primary-color) text-[1.25rem]">
            Theme：
            <select
              name="game"
              id="game"
              className="capitalize bg-white/50 rounded-md px-2"
              value={activeGame}
              onChange={(e) => setActiveGame(e.target.value as Game)}
            >
              {GAMES?.map((item) => {
                return (
                  <option key={item} value={item} className="capitalize">
                    {item.replace("-", " ")}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex items-center gap-4 text-(--primary-color) text-[1.25rem] justify-center">
            <span className="inline-flex">
              DebugMode?：<span className="w-8">{isDebug ? "ON" : "OFF"}</span>
            </span>
            <div className="relative inline-flex">
              <ToggleSwitch
                checked={isDebug}
                onChange={() => setIsDebug((prev) => !prev)}
              />
            </div>
          </div>
          <button
            className="izis-primary-button"
            onClick={() => setScene("GAME")}
          >
            GAME START！
          </button>
        </div>
      </div>
    </section>
  );
}

export default AppStart;

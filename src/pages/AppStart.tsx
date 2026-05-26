import { useState } from "react";
import { GAMES, type Game } from "../types/types";
import ToggleSwitch from "../components/ToggleSwitch";
import { Icon } from "@iconify/react";
import Modal from "../components/Modal.tsx";


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

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <section className="bg-[url('/izis-background.webp')] bg-cover bg-center min-h-screen flex flex-col justify-around px-4 py-12">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer fixed right-6 top-4">
        <Icon icon="material-symbols:help-center-rounded" width="32" height="32" className="text-shadow-amber-700 text-white" />
      </button>
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
      {isOpen &&
        <Modal onClose={() => setIsOpen(false)}>
          <h2 className="font-black text-[2.25rem] md:text-[4rem] text-center text-(--primary-color)">What is 'IZIS' ?</h2>
          <span className="block text-center text-(--primary-color) font-bold text-[1.5rem] md:text-[2rem]">- IZISとは？ -</span>
          <div className="md:min-w-100 max-w-160 py-8 max-h-4/5 overflow-hidden">
          <div className="max-h-80 overflow-y-scroll p-2">
            <p className="tracking-wide">「IZIS」は、「悪いUIを良いUIに変える」がテーマの、ゲーム風SPAです。<br />
            <br />
            歴史あるUI/UXの改修に５年ほど関わってきた体験を何かのポートフォリオにまとめられないかと考え、制作しました。<br />
            <br />
            具体的などなたかの成果物を貶める意図は一切ありません。どちらかと言えば、私が自身のセンスを信じ切って作ったひどいものを、少しはモダンでマシでどことなく見たことがあるページデザインに変わるように作りました。<br />
            くすっと笑っていただけたら幸いです。
            </p>
            <div className="p-4 bg-gray-100 mt-8 rounded-md">
            <h3 className="text-center font-bold text-(--primary-color)">- 「IZIS」の由来 -</h3>
            <p className="pt-2 text-[0.875rem] text-gray-800">「いずい」という方言があります。靴の中に小石が入ったときや、Tシャツのタグが背中をちくちく刺してくるときの居心地の悪さを表現する言葉だそうです。<br />
            その「いずい」と英語の「is」を掛け合わせ、「いずいのは（どこ？）」という意味でつけました。
            </p>
            </div>
          </div>
          </div>
        </Modal>
      }
    </section>
  );
}

export default AppStart;

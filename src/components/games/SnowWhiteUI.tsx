import { useState } from "react";

export function FirstView({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <section className="relative min-h-screen lg:flex lg:justify-center lg:items-stretch">
      <h2 className="absolute inset-0 z-0 lg:relative lg:inset-auto md:w-full lg:w-3/5 lg:h-200 scale-x-[-1]">
        <img
          src="./games/snow-white/good-apple.webp"
          alt="奇跡のリンゴ「紅の真珠」"
          className="w-full h-full object-cover"
        />
      </h2>
      <div className="z-10 sticky lg:flex-1 lg:relative min-h-screen ">
        <p className="absolute right-0 lg:right-24 top-16 text-[2rem] lg:text-[4rem] font-bold bg-white p-4 lg:px-8 py-4 lg:whitespace-nowrap">
          貴女の毎日を変える。
        </p>
        <p className="absolute bottom-0 right-0 text-center md:text-right text-[1.25rem] font-medium py-18 px-8 text-black text-shadow-white bg-[linear-gradient(to_top,white_25%,transparent_100%)]">
          想像してみてください。
          <br />
          <br />
          一口かじった、その瞬間。
          <br />
          身体の奥底からエネルギーが満ちていく。
          <br />
          重かったまぶたは軽く、
          <br />
          さっきまでの憂鬱は嘘のように消え去る。
          <br />
          <br />
          「何でもできそう」
          <br />
          <br />
          そんな確信に満ちた、最高の心地よさ。
          <br />
          この林檎はあなたのこれからの毎日を 鮮やかに塗り替える。
          <br />
          <br />
          さあ、新しい人生のための一口を、ここで。
        </p>
      </div>
    </section>
  ) : (
    <section className="flex-col lg:flex-row bg-red-500 py-12 px-4 flex justify-center">
      <div className="flex flex-col gap-8 items-start">
        <p className="text-[3rem] lg:text-[4rem] font-bold">
          究極の眠りへ、
          <br className="lg:hidden" />
          誘う一口。
        </p>
        <p className="text-[#9000FF] text-[2rem] lg:text-[3rem] font-bold leading-snug">
          今、話題の
          <br />
          『紅の真珠』が、
          <br />
          あなたの人生を永遠にフリーズさせる――。
        </p>
      </div>
      <h2>
        <img
          className="h-120 w-120 object-cover"
          src="./games/snow-white/bad-apple.webp"
          alt="奇跡のリンゴ「紅の真珠」"
        />
      </h2>
    </section>
  );
}

export function Example({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="px-8 py-18 lg:p-18">
      <div className="py-8 px-4 lg:p-18 bg-[#ECECEC] flex flex-col gap-4 lg:gap-12">
        <p className="text-center font-bold text-[1.5rem] lg:text-[2rem]">
          申し訳ございません。
        </p>
        <p className="text-center font-black text-[1.75rem] lg:text-[3rem] pt-4">
          当てはまらない方には、お売りできません。
        </p>
        <ol className="flex flex-col lg:flex-row justify-center items-start gap-24 lg:gap-8 pt-12">
          <li className="flex flex-col items-center justify-start gap-8 md:gap-12 relative m-auto">
            <span className="flex justify-center items-center w-16 h-16 rounded-full bg-white text-[#989898] font-noto-sans-jp font-bold border-8 border-[#ECECEC] text-[2rem] absolute -top-8 left-1/2 -translate-x-1/2 text-center pb-1">
              1
            </span>
            <p className="bg-white pt-10 p-4 md:p-12 md:pb-8 rounded-md font-semibold text-[1.25rem] md:text-[1.5rem] border-3 border-dashed border-[#ECECEC]">
              七人分の家事と騒がしさに追われ、
              <br className="hidden md:block" />
              自分を労わる時間も心の余裕も
              <br className="hidden md:block" />
              失ってしまっている方
            </p>
            <img
              src="./games/snow-white/bad-example1.webp"
              alt="疲れ切ってしまった貴女…"
              className="h-48"
            />
          </li>
          <li className="flex flex-col items-center justify-start gap-12 relative m-auto">
            <span className="flex justify-center items-center w-16 h-16 rounded-full bg-white text-[#989898] font-noto-sans-jp font-bold border-8 border-[#ECECEC] text-[2rem] absolute -top-8 left-1/2 -translate-x-1/2 text-center pb-1">
              2
            </span>
            <p className="bg-white pt-10 p-4 md:p-12 md:pb-8 rounded-md font-semibold text-[1.25rem] md:text-[1.5rem] border-3 border-dashed border-[#ECECEC]">
              「いつかお城に戻れる」と、
              <br className="hidden md:block" />
              夢見る力さえ枯れ果てて、
              <br className="hidden md:block" />
              疲れが顔に出てしまいそうな方
            </p>
            <img
              src="./games/snow-white/bad-example2.webp"
              alt="疲れ切ってしまった貴女…"
              className="h-44"
            />
          </li>
        </ol>
      </div>
    </div>
  ) : (
    <ul className="flex flex-col justify-start items-center px-4 py-32 gap-18">
      <li className="flex flex-col md:flex-row md:items-start justify-center gap-8 items-center">
        <p className="bg-[#3D3D3D] p-8 rounded-full font-bold text-[1.5rem] relative before:content-['▼'] before:absolute md:before:text-[#3D3D3D] md:before:top-1/2 md:before:-right-2 md:before:rotate-30">
          慣れない家事、小さな家、
          <br />
          いつ追手が来るか不安…
        </p>
        <img
          src="./games/snow-white/bad-example1.webp"
          alt="疲れ切ってしまった貴女…"
          className="h-48"
        />
      </li>
      <li className="flex flex-col lg:items-start justify-center gap-8 items-center lg:flex-row-reverse">
        <p className="bg-[#3D3D3D] p-8 rounded-full font-bold text-[1.5rem] relative before:content-['▼'] before:absolute md:before:text-[#3D3D3D] md:before:top-1/2 md:before:-right-2 md:before:rotate-30">
          森の中でのサバイバル生活、
          <br />
          栄養が偏ってしまった…
        </p>
        <img
          src="./games/snow-white/bad-example2.webp"
          alt="疲れ切ってしまった貴女…"
          className="h-40"
        />
      </li>
    </ul>
  );
}

export function Modal1({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <></>
  ) : (
    <div className="absolute lg:w-fit w-9/10 top-300 left-1/2 -translate-x-1/2 lg:whitespace-nowrap">
      <div className="bg-black text-[#E6FF45] flex flex-col gap-8 py-8 px-12 justify-start items-center">
        <h3 className="text-[3rem] font-bold text-center">
          お客様限定セール！！
        </h3>
        <p className="text-[1.5rem] font-bold">
          今なら<span className="text-[3rem]">効果30％増</span>の<br />
          <span className="text-[3rem]">特別版</span>が
          <span className="text-[3rem]">購入可能</span>です！
        </p>
        <a className="bg-[#FF0004] cursor-pointer p-4 m-auto text-center w-fit font-black text-[2rem] whitespace-nowrap">
          今すぐ購入する！
        </a>
      </div>
    </div>
  );
}

export function Impact1({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="p-4 relative">
      <div className="absolute left-1/2 -translate-x-1/2 w-full bg-white/50">
        <p className="text-center font-bold text-[3rem] pt-16">
          あなたの毎日を変える、一粒限りの魔法。
        </p>
        <p className="text-center font-black text-[3rem] p-4">
          それがこの
          <span className="text-[3.5rem] text-[#FF0000]">紅の真珠</span>
          です。
        </p>
      </div>
      <img
        src="./games/snow-white/good-apple2.webp"
        alt="紅の真珠は、職人が丹念に磨き上げた特別なリンゴです。"
        className="object-fit w-screen"
      />
    </div>
  ) : (
    <div className="p-4 bg-[#E6FF45] py-12 md:py-18">
      <p className="text-center font-bold text-[2rem] lg:text-[3rem]">
        そんなあなたに！
      </p>
      <p className="text-center font-black text-[2rem] lg:text-[3rem] text-[#FF0000]">
        紅の真珠（レッド・パールのしずく）
      </p>
      <img
        src="./games/snow-white/bad-apple2.webp"
        alt="これを食べたら…ゲヒヒヒヒ～～～～！"
        className="max-w-120 object-fit m-auto py-4 md:py-12"
      />
    </div>
  );
}

export function Appeal1({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="px-4 py-36 bg-[url(/games/snow-white/bg-confetti.webp)] bg-cover">
      <div className="flex flex-col gap-12">
        <p className="text-center font-bold text-[2.25rem] bg-white/50 p-2">
          おかげさまで、
          <br />
          かの<span className="text-[2.625rem]">魔法の鏡から</span>も
          <span className="text-[2.625rem]">お墨付き</span>
          をいただいております！
        </p>
        <ul className="flex justify-center items-start gap-12 py-12">
          <li className="max-w-1/3 w-80 flex flex-col justify-center items-center text-[#4B2C2C] text-[2rem] font-bold">
            <img
              src="./games/snow-white/good-laurel.webp"
              className="absolute opacity-50 h-60"
            />
            世界一効果
            <br />
            のある果実
            <div className="text-[3rem]">
              第<span className="text-[3.5rem]">１</span>位
            </div>
          </li>
          <li className="max-w-1/3 w-80 flex flex-col justify-center items-center text-[#4B2C2C] text-[2rem] font-bold">
            <img
              src="./games/snow-white/good-laurel.webp"
              className="absolute opacity-50 h-60"
            />
            世界一心身
            <br />
            が整う果実
            <div className="text-[3rem]">
              第<span className="text-[3.5rem]">１</span>位
            </div>
          </li>
          <li className="max-w-1/3 w-80 flex flex-col justify-center items-center text-[#4B2C2C] text-[2rem] font-bold">
            <img
              src="./games/snow-white/good-laurel.webp"
              className="absolute opacity-50 h-60"
            />
            世界一成分
            <br />
            が多い果実
            <div className="text-[3rem]">
              第<span className="text-[3.5rem]">１</span>位
            </div>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <ul className="flex flex-col md:flex-row gap-24 justify-center items-center py-18 px-4">
      <li className="flex justify-center items-center p-4">
        <img
          src="./games/snow-white/bad-dokuro.webp"
          className="absolute opacity-50 h-56 lg:h-60"
        />
        <span className="text-[#FF0000] text-[3rem] text-center font-bold  relative z-0">
          一瞬で
          <br />
          効果を実感
        </span>
      </li>
      <li className="flex justify-center items-center p-4">
        <img
          src="./games/snow-white/bad-dokuro.webp"
          className="absolute opacity-50 h-56 lg:h-60"
        />
        <span className="text-[#FF0000] text-[3rem] text-center font-bold relative z-0">
          信頼の
          <br />
          王室御用達
        </span>
      </li>
    </ul>
  );
}

export function Conversion1({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="w-full pt-36 px-12">
      <p className="text-[2rem] font-medium text-center pb-36">
        七人のために頑張るあなたへ。
        <br />
        朝一番の魔法を贈りませんか？
      </p>
      <a className="bg-linear-to-b from-[#E53131] to-[#991919] block w-full cursor-pointer py-12 px-8 rounded-4xl text-center shadow-md shadow-gray-400 max-w-300 m-auto">
        <span className="font-bold bg-clip-text text-transparent bg-linear-to-b from-[#F8E855] via-[#FCFE97] to-[#DEA83D] text-center text-[4.5rem]">
          「紅の真珠」を今すぐ手に入れる
        </span>
      </a>
    </div>
  ) : (
    <div className="w-full pb-4 pt-12">
      <a className="bg-[#FF0000] block w-full cursor-pointer py-8 md:py-12 px-8 text-center text-[3rem] md:text-[4.5rem] text-[#E6FF45] text-shadow-lg font-bold">
        今すぐ<span className="text-black">永遠</span>を
        <br className="lg:hidden" />
        手に入れる
      </a>
    </div>
  );
}

export function Supplement({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="flex justify-center pt-8 px-4 pb-40">
      <p className="font-medium">
        ※一度食べたら二度と起きられない可能性があります。
        <br />
        ※王子様の愛は別料金です。
        <br />
        ※返品・返金は魔鏡の判断に依存します。
      </p>
    </div>
  ) : (
    <div className="w-full py-4">
      <p className="text-[0.75rem] text-[#e0e0e0] text-right">
        ※一度食べたら二度と起きられない可能性があります。
        <br />
        ※王子様の愛は別料金です。
        <br />
        ※返品・返金は魔鏡の判断に依存します。
      </p>
    </div>
  );
}

export function StoryTelling({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <>
      <div className="w-full bg-[linear-gradient(to_bottom,transparent_70%,white_100%),url(/games/snow-white/bg-forest.webp)] bg-cover flex items-stretch">
        <p className="m-auto pt-18 pb-28 px-8 bg-white/80 text-center text-[1.5rem] leading-[3]">
          お城からの追手に怯える日々も、
          <br />
          七人のために自分を削る毎日も、
          <br />
          もう終わりにしましょう。
          <br />
          <br />
          これは、今は脇役として生きるあなたのために、
          <br />
          特別に開発された「人生の特効薬」です。
          <br />
          <br />
          「紅の真珠」を口にした瞬間、
          <br />
          あなたの細胞一つひとつが、
          <br />
          真珠のような気品ある輝きをまといます。
          <br />
          <br />
          自分を最高に幸せにするための魔法。
          <br />
          <br />
          もう耐えるだけのお姫様ではない。
          <br />
          この一粒で、あなたが世界の中心になる。
          <br />
          <br />
          新しい物語を始めてください。
        </p>
      </div>
      <div className="px-12 py-36 bg-[url(/games/snow-white/bg-confetti.webp)] bg-cover">
        <p className="text-center text-[2rem] font-medium py-12 whitespace-nowrap bg-white/50 px-4 leading-loose">
          今なら「紅の真珠」が
          <br />
          <span className="font-bold text-[2.25rem]">
            送料無料！ 即日お届け！
          </span>
        </p>
        <a className="bg-linear-to-b from-[#E53131] to-[#991919] block w-full cursor-pointer py-12 px-8 rounded-4xl text-center shadow-md shadow-gray-400 max-w-300 m-auto ">
          <span className="font-bold bg-clip-text text-transparent bg-linear-to-b from-[#F8E855] via-[#FCFE97] to-[#DEA83D] text-center text-[4.5rem]">
            「紅の真珠」を今すぐ手に入れる
          </span>
        </a>
        <div className="flex justify-center py-8">
          <p className="font-medium">
            ※一度食べたら二度と起きられない可能性があります。
            <br />
            ※王子様の愛は別料金です。
            <br />
            ※返品・返金は魔鏡の判断に依存します。
          </p>
        </div>
      </div>
    </>
  ) : (
    <img
      src="./games/snow-white/bg-forest.png"
      alt="森の中の暮らしに疲れ切ったあなたのための「紅の真珠」です！！"
    />
  );
}

export function UserVoices({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="w-full p-18 bg-linear-to-br from-[#FEFFDC] to-[#FFC0C0]">
      <h3 className="font-bold text-[3rem] text-center pb-16">ご利用者の声</h3>
      <ul className="flex flex-col justify-start items-center gap-8 max-w-4/5 m-auto">
        <li className="flex w-fit justify-center items-center gap-8 bg-white rounded-lg shadow-md px-8 py-4">
          <div className="max-w-120">
            <p className="text-[1.25rem]">
              「ひと口食べた瞬間、視界がブラックアウトしました！まさに人生の強制終了ボタン。あんなに憎かった義理の母の顔も思い出せないほど、深い闇の中へ。心臓が止まるような刺激を求めている方に、おすすめです。
            </p>
            <span className="block w-full text-right pt-4">
              森の美少女 S様（永遠の10代）
            </span>
          </div>
          <img src="./games/snow-white/girl_15.webp" className="w-24" />
        </li>
        <li className="flex justify-center items-center gap-8 bg-white rounded-lg shadow-md px-8 py-4">
          <div className="max-w-120">
            <p className="text-[1.25rem]">
              魔女秘伝の毒がしっかり効いて、呼吸するのも忘れるほどでした！食べた後の硬直感がすごくて、まるでガラスの棺にジャストフィットするお人形さんになった気分。末長く眠り続けたい時にぴったりです。
            </p>
            <span className="block w-full text-right pt-4">
              丁寧な暮らしをしたい女子 B様（推定20代）
            </span>
          </div>
          <img src="./games/snow-white/girl_18.webp" className="w-24" />
        </li>
        <li className="flex justify-center items-center gap-8 bg-white rounded-lg shadow-md px-8 py-4">
          <div className="max-w-120">
            <p className="text-[1.25rem]">
              毒々しい見た目に惹かれて購入。噛むたびに毒素が溢れ出し、即座にあの世が見えました！面倒な王子様の迎えさえなければ、一生起きなくて済む最高の商品。
            </p>
            <span className="block w-full text-right pt-4">
              7人の同居人と暮らす苦労人 C様（年齢非公開）
            </span>
          </div>
          <img src="./games/snow-white/girl_24.webp" className="w-24" />
        </li>
      </ul>
    </div>
  ) : (
    <div className="w-full p-12 pb-18 bg-[#C87676]">
      <h3 className="font-bold text-[2.5rem] md:text-[3rem] text-center py-12 md:pt-8">
        ご利用者の声
      </h3>
      <ul className="flex flex-col justify-start items-center gap-8 lg:max-w-4/5 m-auto">
        <li className="flex flex-col lg:flex-row w-fit justify-center items-center gap-8 bg-white rounded-lg shadow-md px-4 lg:px-8 py-4">
          <div className="max-w-120">
            <p className="text-[1.25rem]">
              「ひと口食べた瞬間、視界がブラックアウトしました！まさに人生の強制終了ボタン。あんなに憎かった義理の母の顔も思い出せないほど、深い闇の中へ。心臓が止まるような刺激を求めている方に、おすすめです。
            </p>
            <span className="block w-full text-right pt-4">
              森の美少女 S様（永遠の10代）
            </span>
          </div>
          <img src="./games/snow-white/mob-icon.webp" className="w-24" />
        </li>
        <li className="flex flex-col lg:flex-row w-fit justify-center items-center gap-8 bg-white rounded-lg shadow-md px-4 lg:px-8 py-4">
          <div className="max-w-120">
            <p className="text-[1.25rem]">
              魔女秘伝の毒がしっかり効いて、呼吸するのも忘れるほどでした！食べた後の硬直感がすごくて、まるでガラスの棺にジャストフィットするお人形さんになった気分。末長く眠り続けたい時にぴったりです。
            </p>
            <span className="block w-full text-right pt-4">
              丁寧な暮らしをしたい女子 B様（推定20代）
            </span>
          </div>
          <img src="./games/snow-white/mob-icon.webp" className="w-24" />
        </li>
        <li className="flex flex-col lg:flex-row w-fit justify-center items-center gap-8 bg-white rounded-lg shadow-md px-4 lg:px-8 py-4">
          <div className="max-w-120">
            <p className="text-[1.25rem]">
              毒々しい見た目に惹かれて購入。噛むたびに毒素が溢れ出し、即座にあの世が見えました！面倒な王子様の迎えさえなければ、一生起きなくて済む最高の商品。
            </p>
            <span className="block w-full text-right pt-4">
              7人の同居人と暮らす苦労人 C様（年齢非公開）
            </span>
          </div>
          <img src="./games/snow-white/mob-icon.webp" className="w-24" />
        </li>
      </ul>
    </div>
  );
}

export function Appeal2({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="px-12 py-36 bg-[url(/games/snow-white/bg-confetti.webp)] bg-cover">
      <p className="text-center text-[3rem] font-bold py-12 whitespace-nowrap bg-white/50 px-4">
        さあ、あなたも「紅の真珠」で
        <br />
        きらめく毎日を手に入れましょう。
      </p>
      <p className="pt-12 text-center pb-4 text-[2.25rem] font-bold">
        <span className="text-[2.625rem]">送料無料・即日お届け</span>は
        <span className="text-[2.625rem]">今だけ</span>です！
      </p>
      <a className="bg-linear-to-b from-[#E53131] to-[#991919] block w-full cursor-pointer py-12 px-8 rounded-4xl text-center shadow-md shadow-gray-400 max-w-300 m-auto">
        <span className="font-bold bg-clip-text text-transparent bg-linear-to-b from-[#F8E855] via-[#FCFE97] to-[#DEA83D] text-center text-[4.5rem]">
          「紅の真珠」を今すぐ手に入れる
        </span>
      </a>
      <div className="flex justify-center py-8">
        <p className="font-medium">
          ※一度食べたら二度と起きられない可能性があります。
          <br />
          ※王子様の愛は別料金です。
          <br />
          ※返品・返金は魔鏡の判断に依存します。
        </p>
      </div>
    </div>
  ) : (
    <div className="pt-12 pb-12">
      <p className="text-center text-[3rem] lg:text-[4rem] font-bold py-12 whitespace-nowrap">
        美しさは罪。
        <br />
        一口で、王妃も嫉妬する<span className="text-[5rem]">永遠の美貌</span>
        を手に入れませんか？
      </p>
      <p className=" text-center pb-4 pt-12 text-[1rem] lg:text-[1.5rem]">
        ＼今だけ毒素30％増量セール開催中！／
      </p>
      <a className="block bg-black text-center p-4 text-[#FF0000] px-12 py-8 m-auto w-fit text-[2rem] lg:text-[3rem]">
        永遠の安らぎを手に入れましょう
      </a>
    </div>
  );
}

export function Faq({ isFound }: { isFound: boolean }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    // setOpenIndexes という「関数呼び出し」の中で条件分岐させる
    setOpenIndexes(
      openIndexes.includes(index)
        ? openIndexes.filter((i) => i !== index)
        : [...openIndexes, index],
    );
  };

  const faqData = [
    {
      q: "食べたら本当に「お休み」できるんですか？",
      a: "はい！一口で深いリラックス状態に入り、王子様が現れるなどの特別なイベントが発生しない限り、中途半端に目が覚めることはございません。",
    },
    {
      q: "苦いのが苦手なのですが、味はどうですか？",
      a: "当店の林檎は、罪深いほどの甘さが特徴です。後味に少しだけ「鉄の味」や「しびれ」を感じる場合がございますが、それは有効成分が神経に届いている証拠ですのでご安心ください。",
    },
    {
      q: "森の奥地まで届けてもらえますか？",
      a: "もちろんです。おばあさんに扮した「シークレット・コンシェルジュ」が、小人たちの留守を狙って……あ、失礼しました。お客様のプライベートな時間を狙って、丁寧にお届けにあがります。",
    },
  ];

  return isFound ? (
    <div className="pt-36 pb-40 px-4 bg-[linear-gradient(to_bottom,#FFC0C0_90%,transparent_100%)]">
      <h3 className="text-center font-bold text-[2rem] pb-12">
        よくあるご質問
      </h3>
      <ul className="flex flex-col gap-8 m-auto max-w-3/5">
        {faqData.map((item, i) => {
          const isOpen = openIndexes.includes(i);
          return (
            <li key={i}>
              <dl className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <dt
                  className="p-4 flex items-center cursor-pointer select-none before:content-['Q：']"
                  onClick={() => toggle(i)}
                >
                  <span className="flex-1">{item.q}</span>
                  <span
                    className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    ＋
                  </span>
                </dt>
                <dd
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 pt-0 border-t border-pink-50">
                    <div className="pt-4 before:content-['A：'] before:block inline-flex">
                      {item.a}
                    </div>
                  </div>
                </dd>
              </dl>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="py-12">
      <h3 className="text-center text-[2rem] py-4">よくあるご質問</h3>
      <ul className="flex flex-col m-auto max-w-3/5">
        {faqData.map((item, i) => (
          <li key={i}>
            <dl className="p-4">
              <dt className="translate-y-4 before:content-['Q:'] before:mr-2">
                {item.q}
              </dt>
              <dd className="before:content-['A:'] before:mr-2 leading-2">
                {item.a}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Appeal3({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <>
      <div className="relative pt-24 pb-60 w-full overflow-hidden">
        <div
          className="absolute inset-0 top-1/3 -z-10 bg-[url(/games/snow-white/bg-end.webp)] bg-cover bg-top"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, white 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, white 20%)",
          }}
        />
        <p className="text-center font-bold text-[3rem]">
          <span className="text-[#FF0004]">送料無料・即日お届け</span>
          は今だけです！
        </p>
        <a className="bg-linear-to-b from-[#E53131] to-[#991919] block w-full cursor-pointer py-12 px-8 rounded-4xl text-center shadow-md shadow-gray-400 max-w-300 mx-auto my-24">
          <span className="font-bold bg-clip-text text-transparent bg-linear-to-b from-[#F8E855] via-[#FCFE97] to-[#DEA83D] text-center text-[4.5rem]">
            「紅の真珠」を今すぐ手に入れる
          </span>
        </a>
      </div>
      <footer className="bg-[#FFC0C0] text-center text-[0.75rem] text-white p-4">
        合同会社魔法の鏡コーポレーション ｜ お問い合わせ ｜ アクセス
      </footer>
    </>
  ) : (
    <>
      <div className="pt-12 pb-12 px-4">
        <a className="bg-linear-to-b from-[#E53131] to-[#991919] block w-full cursor-pointer py-8 px-4 rounded-4xl text-center m-auto text-[#00FF0D] text-[3rem] lg:text-[5rem] font-bold">
          <span className="text-[#FF45FF] block text-[1.5rem] lg:text-[2rem] mb-4">
            ＼これが<b className="text-[#9000FF]">最後</b>のチャンスです！／
          </span>
          今すぐ、<b className="text-[#E6FF45]">幸せ</b>を噛みしめる
        </a>
      </div>
      <footer className="mt-40 bg-black text-center text-[0.75rem] text-white p-4">
        魔法の鏡コーポレーション
      </footer>
    </>
  );
}

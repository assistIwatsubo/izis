import { useState, useEffect } from "react";

const GOLD_TEXT_CLASS =
  "bg-linear-to-b from-[#D4AF37] via-[#FFFDF0] to-[#AA7C11] bg-clip-text text-transparent";

const GOLD_BG_CLASS =
  "bg-linear-to-b from-[#D4AF37] via-[#FFFDF0] to-[#AA7C11]";

const GOLD_BORDER =
  "border [border-image:linear-gradient(to_bottom,#D4AF37,#F8E855,#AA7C11)_1]";

const GLASS_BG = "bg-white/50 backdrop-blur-[0.25rem]";

const GOLD_ACCENT =
  "after:content-[''] after:inline-block after:w-full after:h-12 after:my-8 after:bg-[url(./games/cinderella/good-decoration.webp)] after:bg-contain after:bg-center after:bg-no-repeat";

export function Header({ isFound }: { isFound: boolean }) {
  const START_SECONDS = 48 * 60;
  const [seconds, setSeconds] = useState(START_SECONDS);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExpanded(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsExpanded(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentMinutes = Math.ceil(seconds / 60);

  return isFound ? (
    <header className="fixed top-0 left-0 right-0 z-1 text-center bg-linear-to-b from-[#0A1931] via-[#1F4D97] to-transparent pt-2 pb-2 font-shippori-mincho">
      <div className={`${GOLD_TEXT_CLASS} shippori-mincho`}>
        舞踏会まであと<span className="text-[1.25rem]">0</span>時間
        <span className="text-[1.25rem]">{currentMinutes}</span>分
      </div>
    </header>
  ) : (
    <header
      className={`fixed top-0 left-0 right-0 bg-[#9000FF] text-center text-white font-bold py-2 rounded-b-sm transition-all duration-700 ease-in-out z-1 ${
        isExpanded ? "h-[50vh] flex flex-col justify-center" : "h-auto"
      }`}
    >
      {/* リアルタイムでカウントダウンする時間を表示 */}
      <div>舞踏会まであと{currentMinutes}分</div>
    </header>
  );
}

export function FirstView({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <section className="bg-[url(/games/cinderella/bg-nightsky.webp)] bg-cover bg-top flex flex-col gap-12 py-12 px-4 font-shippori-mincho">
      <div>
        <p className="text-center text-white text-[1.125rem] pb-4 font-semibold">
          <span className="text-[1.5rem] filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]">
            24
          </span>
          時までの奇跡
        </p>
        <h1
          className={`${GOLD_TEXT_CLASS} text-center text-[2rem] font-semibold filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]`}
        >
          あなたが主役になる
          <br />
          舞踏会プロデュース
        </h1>
      </div>
      <img
        src="./games/cinderella/good-fairy.webp"
        alt="フェアリーゴッドマザーにお任せください！"
        className="max-w-240 m-auto rounded-sm"
      />
      <p
        className={`${GOLD_TEXT_CLASS} text-center text-[1.5rem] font-extrabold filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]`}
      >
        フェアリー・ゴッドマザーが
        <br />
        あなたの夢を叶えます！
      </p>
    </section>
  ) : (
    <section className="bg-[#E6FF45] m-auto flex flex-col gap-4 py-12 max-w-300 font-noto-sans-jp">
      <h1 className="font-black text-[3rem] max-w-240 m-auto">
        24時までの奇跡。あなたが主役になる舞踏会プロデュース
      </h1>
      <p className="w-full text-center text-[2.25rem] font-black bg-linear-to-b from-[#E53131] via-white to-[#E53131]">
        フェアリー・ゴッドマザーが
        <br />
        あなたの夢を叶えます！
      </p>
      <img
        src="./games/cinderella/bad-fairy.webp"
        alt="フェアリーゴッドマザーにお任せください！"
        className="m-auto"
      />
    </section>
  );
}

export function Reasons({ isFound }: { isFound: boolean }) {
  const badList = [
    {
      title: "ドレス作成無料！",
      src: "./games/cinderella/bad-reason1.webp",
      text: "貴女に合うドレス\nを作ります！",
    },
    {
      title: "ガラスの靴プレゼント！",
      src: "./games/cinderella/bad-reason2.webp",
      text: "特別な一足を\nご用意します！",
    },
    {
      title: "お急ぎ対応可能！",
      src: "./games/cinderella/bad-reason3.webp",
      text: "魔法の力で舞踏会に間に合わせます！",
    },
  ];

  const goodList = [
    {
      title: "あなたのための\nオリジナルドレスを作成",
      src: "./games/cinderella/good-reason1.webp",
      text: "貴女に合うドレスをお作りします",
    },
    {
      title: "世界に一つだけの\nガラスの靴をプレゼント",
      src: "./games/cinderella/good-reason2.webp",
      text: "特別な一足をご用意します",
    },
    {
      title: "安心保証付きの\nお急ぎ対応",
      src: "./games/cinderella/good-reason3.webp",
      text: "魔法の力で確実に舞踏会へお連れします",
    },
  ];
  return isFound ? (
    <section className="m-auto flex flex-col gap-8 pt-12 pb-20 px-4 font-noto-sans-jp bg-[url(./games/cinderella/bg-rose.webp)] bg-cover">
      <h2
        className={`${GOLD_ACCENT} flex flex-col items-center py-8 px-4 text-[2.25rem] font-semi-bold text-center text-[#1F2937] font-shippori-mincho`}
      >
        選ばれる３つの理由
      </h2>
      <ol className="flex items-stretch gap-8 justify-start max-w-240 m-auto">
        {goodList.map((item, index) => {
          return (
            <li
              key={item.title}
              className={`w-85 flex flex-col justify-start items-center ${GOLD_BORDER} ${GLASS_BG} p-4 relative pt-12 pb-6 gap-6`}
            >
              <span
                className={`text-center font-bold ${GOLD_BG_CLASS} absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-b-full font-shippori-mincho flex justify-center items-center pb-1 text-center`}
              >
                {index + 1}
              </span>
              <h3 className="font-normal text-[1.5rem] font-shippori-mincho text-center whitespace-pre-wrap text-[#1F2937] ">
                {item.title}
              </h3>
              <img src={item.src} className="w-full px-8" />
              <p className="font-normal whitespace-pre-line text-center font-shippori-mincho text-[#1F2937]">
                {item.text}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  ) : (
    <section className="m-auto flex flex-col gap-8 py-12 max-w-300 font-noto-sans-jp">
      <h2 className="py-8 px-4 text-[2.25rem] font-black text-center">
        選ばれる３つの理由
      </h2>
      <ol className="flex items-stretch gap-8">
        {badList.map((item, index) => {
          return (
            <li
              key={item.title}
              className="flex flex-col justify-start items-center"
            >
              <span className="text-center font-bold">その{index + 1}</span>
              <h3 className="font-bold text-[1.5rem]">{item.title}</h3>
              <img src={item.src} className="max-w-full" />
              <p className="font-bold whitespace-pre-line text-center">
                {item.text}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function AdditionalPlan({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <section className={`max-w-200 my-12 mx-auto`}>
      <div
        className={`${GOLD_BORDER} bg-[url(./games/cinderella/bg-glitter.webp)] flex flex-col justify-start items-center bg-cover py-4 px-2`}
      >
        <span className="text-center font-bold text-[1.5rem] text-white text-shadow-lg filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]">
          さらに嬉しい！
        </span>
        <h2
          className={`${GOLD_TEXT_CLASS} m-auto text-center font-black text-[2.25rem]  filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]`}
        >
          プレミアム送迎サービス
        </h2>
      </div>
      <img
        src="./games/cinderella/good-carriage.webp"
        alt="素敵な馬車で夢のようなひとときを過ごしませんか？"
        className="w-full h-auto object-contain m-auto"
      />
      <p className="leading-loose bg-[#ECECEC] text-[#1F2937] p-4">
        フェアリー・ゴッドマザー特製の「かぼちゃの馬車」が、あなたをご自宅の玄関先からお城の正面玄関まで、完全プライベートな空間で優雅にエスコートいたします。
      </p>
    </section>
  ) : (
    <section className="m-auto flex flex-col gap-8 py-12 font-noto-sans-jp">
      <div className="flex flex-col gap-4 justify-start items-center">
        <span className="text-center font-bold text-[1.5rem]">
          さらに嬉しい！
        </span>
        <h2 className="m-auto text-center font-black text-[2.25rem]">
          プレミアム送迎サービス
        </h2>
      </div>
      <img
        src="./games/cinderella/bad-carriage.webp"
        alt="素敵な馬車で夢のようなひとときを過ごしませんか？"
        className="w-200 h-200 object-none object-bottom-left m-auto"
      />
      <p className="leading-loose font-bold text-center">
        馬車での送迎をおつけします！！
        <br />
        ※有料です
      </p>
    </section>
  );
}

export function Apeal1({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="flex flex-col gap-12 items-center justify-center pt-20 pb-32 bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0)),url(./games/cinderella/bg-linen.webp)] bg-cover bg-bottom">
      <p className="text-center max-w-240 w-full m-auto p-2 text-[2.25rem] font-shippori-mincho text-[#1F2937] font-extrabold">
        <span className="block font-bold mt-2 text-[1.5rem] leading-loose">
          フェアリーゴッドマザーと
        </span>
        あなたの夢を
        <br />
        叶えましょう！
      </p>
      <a
        href=""
        className="block w-fit px-4 py-2 text-[2rem] font-extrabold text-[#1F2937] rounded-sm border border-transparent [background:linear-gradient(to_bottom,#D4AF37,#FFFDF0,#AA7C11)_padding-box,linear-gradient(to_bottom,#D4AF37,#DEA83D,#AA7C11)_border-box]"
      >
        今すぐ問い合わせる
      </a>
    </div>
  ) : (
    <div className="flex flex-col gap-8 items-center justify-center pt-20 pb-32">
      <p className="text-center text-[#E6FF45] font-black bg-[#FF0000] max-w-240 w-full m-auto p-2 text-[2.25rem] font-noto-sans-jp shadow-md">
        <span className="block font-bold mt-2 text-[1.5rem]">
          フェアリーゴッドマザーと
        </span>
        あなたの夢を
        <br />
        叶えましょう！
      </p>
      <a
        href=""
        className="bg-[#FF0000] m-auto rounded-sm font-bold font-noto-sans-jp px-2 text-[0.625rem]"
      >
        いまなら間に合う…！？
      </a>
    </div>
  );
}

export function UserVoices({ isFound }: { isFound: boolean }) {
  const list = [
    {
      title:
        "長年引きこもりだった私が、ゴッドマザーの髪質改善魔法で王子様を一本釣り！",
      name: "おとぎの国在住　R様",
      src: "./games/cinderella/user-voice1.webp",
      alt: "自信をもって、笑顔で過ごせるようになりました！",
      text: "塔の上に閉じ込められていた私に、ゴッドマザーは毎日ヘアケアの魔法をかけてくれました。『王子様をハシゴ代わりに登らせるんだから、絶対に切れないキューティクルにしなきゃね！』と一生懸命に。その実績のおかげで、100kg以上ある王子様が登ってもびくともしない頑丈で美しい髪が完成し、無事に塔から脱出して結婚できました！",
    },
    {
      title:
        "尾ひれから『極上の二本足』へ！\nゴッドマザーの美脚魔法で地上の王子様をゲットしました",
      name: "ある国の貴族　A様",
      src: "./games/cinderella/user-voice2.webp",
      alt: "美脚と幸せ、どちらも手に入りました！",
      text: "海の底で人間の王子様に恋をして、途方に暮れていた私。そんな私を見かねたゴッドマザーが『ワシの魔法の実験台（モニター）になりなさい！』と、最高級の美脚魔法をかけてくれたんです。歩くたびに泡になる呪いもなく、お城の舞踏会でもステップを踏める頑丈な足の実績のおかげで、無事に地上への移住と結婚を果たせました！",
    },
  ];
  return isFound ? (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-240 flex flex-col gap-8 justify-start items-center m-auto">
        <h2
          className={`${GOLD_ACCENT} font-bold font-shippori-mincho text-[1.5rem]`}
        >
          お客様の声を
          <br />
          ご紹介します
        </h2>
        <ul className="flex flex-col gap-8 md:gap-16">
          {list.map((item) => {
            return (
              <li>
                <article className={`${GOLD_BORDER} flex overflow-hidden`}>
                  <div className="w-1/2 bg-white p-4 flex flex-col gap-4 font-shippori-mincho md:p-6 md:gap-8">
                    <h3 className="font-bold md:text-[1.5rem] leading-loose whitespace-pre-wrap">
                      {item.title}
                    </h3>
                    <div className="text-[0.75rem] md:text-[1rem] text-center">
                      {item.name}
                    </div>
                    <div className="text-[0.75rem]md:text-[1rem] leading-loose">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-1/2">
                    <img src={item.src} alt={item.alt} />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  ) : (
    <section className="py-12 px-4 bg-[#FF45FF] bg-[url(./games/cinderella/icon-magic.webp)] bg-repeat">
      <div className="max-w-240 flex flex-col gap-8 justify-start items-center m-auto">
        <h2 className="font-bold font-noto-sans-jp text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
          お客様の声
        </h2>
        <ul className="flex flex-col gap-8 md:gap-16">
          {list.map((item) => {
            return (
              <li>
                <article className="flex rounded-md overflow-hidden">
                  <div className="w-1/2 bg-white p-4 flex flex-col gap-4 font-noto-sans-jp md:p-6 md:gap-8">
                    <h3 className="font-bold md:text-[1.5rem]">{item.title}</h3>
                    <div className="text-[0.75rem] md:text-[1rem] text-center">
                      {item.name}
                    </div>
                    <div className="text-[0.75rem]md:text-[1rem]">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-1/2">
                    <img src={item.src} alt={item.alt} />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

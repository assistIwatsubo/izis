import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const GOLD_TEXT_CLASS =
  "bg-linear-to-b from-[#D4AF37] via-[#FFFDF0] to-[#AA7C11] bg-clip-text text-transparent";

const GOLD_BG_CLASS =
  "bg-linear-to-b from-[#D4AF37] via-[#FFFDF0] to-[#AA7C11]";

const GOLD_BORDER =
  "border [border-image:linear-gradient(to_bottom,#D4AF37,#F8E855,#AA7C11)_1]";

const GLASS_BG = "bg-white/50 backdrop-blur-[0.25rem]";

const GOLD_ACCENT =
  "after:content-[''] after:inline-block after:w-full after:h-8 after:my-8 after:bg-[url(./games/cinderella/good-decoration.webp)] after:bg-contain after:bg-center after:bg-no-repeat lg:after:mt-12";

const GOLD_BUTTON =
  "[background:linear-gradient(to_right,#AA7C11,#fff9e6,#AA7C11)_padding-box,linear-gradient(to_bottom,#D4AF37,#DEA83D,#AA7C11)_border-box] [background:linear-gradient(to_bottom,#D4AF37,#FFFDF0,#AA7C11)_padding-box,linear-gradient(to_bottom,#D4AF37,#DEA83D,#AA7C11)_border-box] border-2 cursor-pointer";

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
    <header className="fixed top-0 left-0 right-0 z-1 text-center bg-linear-to-b from-[#0A1931] via-[#1F4D97] to-transparent pt-1 pb-2 font-shippori-mincho">
      <a href="#faq" className={`${GOLD_TEXT_CLASS} shippori-mincho`}>
        舞踏会まであと<span className="text-[1.25rem]">0</span>時間
        <span className="text-[1.25rem]">{currentMinutes}</span>分
      </a>
    </header>
  ) : (
    <header
      className={`fixed top-0 left-0 right-0 bg-[#9000FF] text-center text-white font-bold py-2 rounded-b-sm transition-all duration-700 ease-in-out z-1 ${
        isExpanded ? "h-[50vh] flex flex-col justify-center" : "h-auto"
      }`}
    >
      <div>舞踏会まであと{currentMinutes}分</div>
    </header>
  );
}

export function FirstView({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <section className="bg-[url(/games/cinderella/bg-nightsky.webp)] bg-cover bg-top flex flex-col gap-12 pt-16 lg:pt-20 pb-12 px-4 font-shippori-mincho">
      <div>
        <p className="text-center text-white text-[1.125rem] lg:text-[2rem] pb-4 font-medium">
          <span className="mr-1 font-kaisei-opti text-[1.5rem] lg:text-[2.5rem] filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]">
            24
          </span>
          時までの奇跡
        </p>
        <h1
          className={`${GOLD_TEXT_CLASS} text-center text-[2rem] lg:text-[3rem] lg:pb-4 font-semibold filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]`}
        >
          あなたが主役になる
          <br className="lg:hidden" />
          舞踏会プロデュース
        </h1>
      </div>
      <img
        src="./games/cinderella/good-fairy.webp"
        alt="フェアリーゴッドマザーにお任せください！"
        className="max-w-240 m-auto w-full"
      />
      <p
        className={`${GOLD_TEXT_CLASS} text-center text-[1.5rem] lg:text-[2rem] lg:pt-4 lg:pb-12 font-extrabold filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]`}
      >
        フェアリー・ゴッドマザーが
        <br />
        あなたの夢を叶えます！
      </p>
    </section>
  ) : (
    <section className="bg-[#E6FF45] m-auto flex flex-col gap-4 py-12 max-w-300 font-noto-sans-jp">
      <h1 className="font-black text-[3rem] lg:text-[4rem] lg:py-8 max-w-240 m-auto">
        24時までの奇跡。あなたが主役になる舞踏会プロデュース
      </h1>
      <p className="w-full text-center text-[2.25rem] lg:text-[3rem] lg:py-8 font-black bg-linear-to-b from-[#E53131] via-white to-[#E53131]">
        フェアリー・ゴッドマザーが
        <br />
        あなたの夢を叶えます！
      </p>
      <img
        src="./games/cinderella/bad-fairy.webp"
        alt="フェアリーゴッドマザーにお任せください！"
        className="m-auto lg:w-40"
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
      text: "魔法の力で確実に\n舞踏会へお連れします",
    },
  ];
  return isFound ? (
    <section className="m-auto flex flex-col gap-8 pt-12 lg:pt-24 lg:pb-40 pb-20 px-4 font-noto-sans-jp bg-[url(./games/cinderella/bg-rose.webp)] bg-cover bg-center">
      <h2
        className={`${GOLD_ACCENT} flex flex-col items-center pt-4 lg:py-8 px-4 text-[2rem] lg:text-[2.5rem] font-semi-bold text-center text-[#1F2937] font-shippori-mincho`}
      >
        選ばれる３つの理由
      </h2>
      <ol className="flex flex-col md:flex-row items-stretch gap-8 justify-start max-w-240 m-auto">
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
    <section className="m-auto flex flex-col gap-8 py-12 lg:py-40 max-w-300 font-noto-sans-jp">
      <h2 className="py-8 px-4 text-[2.25rem] lg:text-[3rem] font-black text-center">
        選ばれる３つの理由
      </h2>
      <ol className="flex items-stretch gap-8 lg:gap-12">
        {badList.map((item, index) => {
          return (
            <li
              key={item.title}
              className="flex flex-col justify-start items-center"
            >
              <span className="text-center font-bold lg:text-[1.5rem]">
                その{index + 1}
              </span>
              <h3 className="font-bold text-[1.5rem] lg:text-[2rem]">
                {item.title}
              </h3>
              <img src={item.src} className="max-w-full my-4" />
              <p className="font-bold whitespace-pre-line text-center lg:text-[1.25rem]">
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
    <section className="px-4">
      <div className={`${GOLD_BORDER} max-w-200 my-12 m-auto`}>
        <div className="bg-[url(./games/cinderella/bg-glitter.webp)] flex flex-col justify-start items-center bg-cover py-4 px-2">
          <span className="text-center font-bold text-[1.5rem] text-white text-shadow-lg filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)] leading-loose">
            さらに嬉しい！
          </span>
          <h2
            className={`${GOLD_TEXT_CLASS} m-auto text-center font-black text-[2rem]  filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]`}
          >
            プレミアム
            <br className="sm:hidden" />
            送迎サービス
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
      </div>
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
        className="max-w-100 max-h-100 h-auto aspect-square object-none object-bottom-left m-auto"
      />
      <p className="leading-loose font-bold text-center lg:text-[1.5rem]">
        馬車での送迎をおつけします！！
        <br />
        ※有料です
      </p>
    </section>
  );
}

export function Appeal1({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="flex flex-col gap-12 items-center justify-center pt-20 pb-32 bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0.5)),url(./games/cinderella/bg-linen.webp)] bg-cover bg-bottom">
      <p className="text-center max-w-240 w-full m-auto p-2 text-[2.25rem] font-shippori-mincho text-[#1F2937] font-extrabold">
        <span className="block font-bold mt-2 text-[1.5rem] leading-loose">
          フェアリーゴッドマザーと
        </span>
        あなたの夢を
        <br />
        叶えましょう！
      </p>
      <a
        className={`block w-fit px-4 lg:px-6 py-2 text-[2rem] lg:text-[1.75rem] font-extrabold text-[#1F2937] rounded-sm border border-transparent ${GOLD_BUTTON}`}
      >
        今すぐ問い合わせる
      </a>
    </div>
  ) : (
    <div className="flex flex-col gap-8 items-center justify-center pt-20 pb-32">
      <p className="text-center text-[#E6FF45] font-black bg-[#FF0000] w-full m-auto p-2 text-[2.25rem] lg:text-[3rem] font-noto-sans-jp shadow-md">
        <span className="block font-bold mt-2 text-[1.5rem] lg:text-[2rem]">
          フェアリーゴッドマザーと
        </span>
        あなたの夢を
        <br />
        叶えましょう！
      </p>
      <div className="text-center w-full text-[#E6FF45] bg-[#FF0000] font-noto-sans-jp py-2 text-[2.25rem] lg:text-[2.5rem] font-black mt-20 max-w-240">
        <span className="block text-[1.5rem] lg:text-[2rem] font-bold">
          まだ間に合う！
        </span>
        お申し込みは
        <a className="cursor-pointer block text-[#9000FF] underline">コチラ</a>
      </div>
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
    <section className="py-20 lg:py-40 px-4 bg-[#F5F5F5]">
      <div className="max-w-240 flex flex-col gap-8 justify-start items-center m-auto">
        <h2
          className={`${GOLD_ACCENT} font-bold font-shippori-mincho text-[1.5rem] lg:text-[2rem] text-[#1F2937]`}
        >
          お客様の声を
          <br className="lg:hidden" />
          ご紹介します
        </h2>
        <ul className="flex flex-col gap-8 md:gap-16">
          {list.map((item) => {
            return (
              <li>
                <article
                  className={`${GOLD_BORDER} flex flex-col md:flex-row overflow-hidden`}
                >
                  <div className="w-full md:w-1/2 bg-white p-4 flex flex-col gap-4 font-shippori-mincho md:p-6 md:gap-8">
                    <h3 className="font-bold text-[1.25rem] md:text-[1.5rem] leading-loose whitespace-pre-wrap">
                      {item.title}
                    </h3>
                    <img src={item.src} alt={item.alt} className="md:hidden" />
                    <div className="text-[0.75rem] md:text-[1rem] text-center">
                      {item.name}
                    </div>
                    <div className="text-[0.75rem]md:text-[1rem] leading-loose">
                      {item.text}
                    </div>
                  </div>
                  <div className="hidden md:block w-full md:w-1/2">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full object-cover object-bottom"
                    />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  ) : (
    <section className="py-12 lg:py-24 px-4 bg-[#FF45FF] bg-[url(./games/cinderella/icon-magic.webp)] bg-repeat">
      <div className="max-w-240 flex flex-col gap-8 lg:gap-12 justify-start items-center m-auto">
        <h2 className="font-bold font-noto-sans-jp text-[1.5rem] lg:text-[3rem] filter drop-shadow-[2px_4px_0.25rem_rgba(0,0,0,1)]">
          お客様の声
        </h2>
        <ul className="flex flex-col gap-8 md:gap-16">
          {list.map((item) => {
            return (
              <li>
                <article className="flex rounded-md overflow-hidden">
                  <div className="w-1/2 bg-white p-4 flex flex-col gap-4 font-noto-sans-jp md:p-6 md:gap-8">
                    <h3 className="font-bold md:text-[1.5rem] lg:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <div className="text-[0.75rem] md:text-[1rem] text-center">
                      {item.name}
                    </div>
                    <div className="text-[0.75rem] md:text-[1rem]">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-1/2">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-auto object-cover"
                    />
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

export function Appeal2({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div
      className={`${GOLD_BORDER} border-x-0 font-shippori-mincho py-20 lg:py-30 px-4 flex flex-col gap-16 items-center justify-start bg-[url(./games/cinderella/bg-nightsky.webp)] bg-cover bg-center`}
    >
      <p className="font-medium text-[1.5rem] lg:text-[2rem] lg:pb-8 text-center text-white filter drop-shadow-[0_0_0.25rem_rgba(0,0,0,1)]">
        誰もが憧れるプリンセスに、
        <br />
        あなたもなれます！
      </p>
      <img
        src="./games/cinderella/good-appeal.webp"
        alt="素敵なドレスと世界に一つだけの靴であなたの世界感を表現します！"
        className="m-auto max-h-160 object-center"
      />
      <p
        className={`${GOLD_TEXT_CLASS} w-full text-center text-[2rem] lg:text-[2.5rem] py-4 px-2 font-semibold filter drop-shadow-[0_0_0.2rem_rgba(0,0,0,1)]`}
      >
        <span className="text-[1.5rem] lg:text-[2rem]">
          フェアリーゴッドマザーと、
        </span>
        <br />
        あなたの本当の人生を
        <br className="lg:hidden" />
        手に入れましょう！
      </p>
      <a
        className={`block w-fit px-4 lg:px-6 py-2 text-[2rem] font-extrabold text-[#1F2937] rounded-sm border border-transparent ${GOLD_BUTTON}`}
      >
        お申し込みはこちら
      </a>
    </div>
  ) : (
    <div className="font-noto-sans-jp py-20 lg:py-40 flex flex-col gap-16 lg:gap-32 items-center justify-start">
      <p className="font-bold text-[1.5rem] lg:text-[2rem] text-center">
        誰もが憧れるプリンセスに、
        <br />
        あなたもなれます！
      </p>
      <p className="w-full text-center text-[2rem] lg:text-[3rem] font-black bg-linear-to-b from-[#E53131] via-white to-[#E53131] py-4 px-2">
        <span className="text-[1.5rem] lg:text-[2rem]">
          フェアリーゴッドマザーと、
        </span>
        <br />
        あなたの本当の人生を手に入れましょう！
      </p>
      <img
        src="./games/cinderella/bad-appeal.webp"
        alt="プリンセスになればお金と心に余裕のある生活ができますよ！"
        className="max-w-160 w-full m-auto object-center"
      />
      <div className="text-center text-[#E6FF45] bg-[#FF0000] max-w-240 w-full mx-auto font-noto-sans-jp py-2 text-[2.25rem] lg:text-[2.5rem] font-black mt-4">
        <span className="block text-[1.5rem] lg:text-[2rem] font-bold">
          まだ間に合う！
        </span>
        お申し込みは
        <a className="cursor-pointer block text-[#9000FF] underline">コチラ</a>
      </div>
    </div>
  );
}

export function Comparison({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <section className="py-20 lg:pb-40 px-4 font-shippori-mincho text-[#1F2937]">
      <h2
        className={`text-center font-semibold text-[1.5rem] lg:text-[2rem] leading-loose ${GOLD_ACCENT} py-8`}
      >
        舞踏会プロデュースなら
        <span className="block text-[1.875rem]  lg:text-[2.5rem]">
          フェアリーゴッドマザー
        </span>
        にお任せください
      </h2>
      <table className="text-center mx-auto lg:mt-4">
        <thead>
          <tr>
            <th className="p-2 m-1"></th>
            <th className="w-36 lg:w-60 border-b-2 border-[#1f2937] p-2 m-1 align-bottom">
              他社A
            </th>
            <th className="hidden md:table-cell w-36 lg:w-60 border-b-2 border-[#1f2937] p-2 tedt-[1.125rem] align-bottom">
              他社B
            </th>
            <th className="w-64 border-b-2 border-[#1f2937] py-2 px-2 text-[1.25rem] align-bottom">
              フェアリー
              <br />
              ゴッドマザー
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="rounded-sm bg-[#ECECEC]  font-normal p-2 border-4 border-white text-[0.75rem]">
              <Icon
                icon="fluent-emoji-high-contrast:dress"
                width={40}
                className="mx-auto my-1"
              />
              ドレス
            </th>
            <td className="border-b border-[#1F4D97] border-dashed">既製品</td>
            <td className="border-b border-[#1F4D97] border-dashed hidden md:table-cell ">
              オーダーメイド
            </td>
            <td className="border-b border-[#1F4D97] border-dashed font-semibold text-[1.125rem]  bg-[#E6EEFA]">
              魔法製の
              <br />
              一点もの
            </td>
          </tr>
          <tr>
            <th className="rounded-sm bg-[#ECECEC]  font-normal p-2 border-4 border-white text-[0.75rem]">
              <Icon icon="ph:high-heel" width={40} className="mx-auto my-1" />靴
            </th>
            <td className="border-b border-[#1F4D97] border-dashed">既製品</td>
            <td className="border-b border-[#1F4D97] border-dashed hidden md:table-cell ">
              種類は選べる
            </td>
            <td className="border-b border-[#1F4D97] border-dashed font-semibold text-[1.125rem]  bg-[#E6EEFA]">
              ガラスで作る
              <br />
              専用の一足
            </td>
          </tr>
          <tr>
            <th className="rounded-sm bg-[#ECECEC]  font-normal p-2 border-4 border-white text-[0.75rem]">
              <Icon
                icon="material-symbols:av-timer-outline-rounded"
                width={40}
                className="mx-auto my-1"
              />
              特急
              <br className="md:hidden" />
              対応
            </th>
            <td className="border-b border-[#1F4D97] border-dashed">なし</td>
            <td className="border-b border-[#1F4D97] border-dashed hidden md:table-cell ">
              あり（保証なし）
            </td>
            <td className="border-b border-[#1F4D97] border-dashed font-semibold text-[1.125rem]  bg-[#E6EEFA]">
              １００％保証
            </td>
          </tr>
          <tr>
            <th className="rounded-sm bg-[#ECECEC]  font-normal p-2 border-4 border-white text-[0.75rem]">
              <Icon
                icon="hugeicons:horse-saddle"
                width={40}
                className="mx-auto my-1"
              />
              送迎
            </th>
            <td className=" ">徒歩</td>
            <td className="hidden md:table-cell">人力車</td>
            <td className="font-semibold text-[1.125rem]  bg-[#E6EEFA]">
              かぼちゃモチーフの
              <br />
              可愛らしい馬車
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  ) : (
    <section className="font-noto-sans-jp py-20">
      <h2 className="text-center font-bold text-[2rem] lg:text-[3rem]">
        <span className="text-[1.5rem] lg:text-[2rem]">
          フェアリーゴッドマザーは
        </span>
        <br />
        断然お得！
      </h2>
      <table className="border-collapse border border-black m-auto mt-12 lg:mt-24 lg:mb-40">
        <thead>
          <tr>
            <th className="border border-black p-1 font-bold text-center bg-transparent text-black"></th>
            <th className="border border-black p-1 font-bold text-center bg-transparent text-black">
              他社A
            </th>
            <th className="border border-black p-1 font-bold text-center bg-transparent text-black">
              他社B
            </th>
            <th className="border border-black p-1 font-bold text-center bg-transparent text-black">
              フェアリー
              <br className="hidden md:block" />
              ゴッドマザー
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border border-black p-1 text-left text-black">
              ドレス
            </th>
            <td className="border border-black p-1 text-left text-black">
              既製品
            </td>
            <td className="border border-black p-1 text-left text-black">
              オーダーメイド
            </td>
            <td className="border border-black p-1 text-left text-black">
              魔法で作成した一点ものです！
            </td>
          </tr>
          <tr>
            <th className="border border-black p-1 text-left text-black">靴</th>
            <td className="border border-black p-1 text-left text-black">
              既製品
            </td>
            <td className="border border-black p-1 text-left text-black">
              種類は選べる
            </td>
            <td className="border border-black p-1 text-left text-black">
              ガラスで作るのであなた専用です！
            </td>
          </tr>
          <tr>
            <th className="border border-black p-1 text-left text-black">
              お急ぎ対応
            </th>
            <td className="border border-black p-1 text-left text-black">
              なし
            </td>
            <td className="border border-black p-1 text-left text-black">
              あり（保証なし）
            </td>
            <td className="border border-black p-1 text-left text-black">
              １００％保証します！！
            </td>
          </tr>
          <tr>
            <th className="border border-black p-1 text-left text-black">
              送迎
            </th>
            <td className="border border-black p-1 text-left text-black">
              徒歩
            </td>
            <td className="border border-black p-1 text-left text-black">
              人力車
            </td>
            <td className="border border-black p-1 text-left text-black">
              素敵なかぼちゃで作った夢のような馬車
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export function Faq({ isFound }: { isFound: boolean }) {
  const list = [
    {
      q: "本当に24時を過ぎたら、すべての魔法が解けてしまうのですか？",
      a: "はい、当店の魔法契約は24時に完全自動で解除されます。ドレス、馬車、御者などすべて元の姿に戻ります。ただし、「ガラスの靴」のみ特許取得済みの特殊魔法を使用しているため、24時を過ぎてもそのままの姿で残りますのでご安心ください。余裕を持ってお城を出発されることを強くお勧めいたします。",
    },
    {
      q: "ドレスのサイズが合うか不安です。事前に試着はできますか？",
      a: "事前の試着は不要です！当店の魔法は「完全自動フィッティング機能」を搭載しております。お客様がその場でドレスに袖を通した瞬間に、体型に合わせて1ミリ単位で最適化されます。どんな体型の方でも、最も美しく見えるシルエットを実現します。",
    },
    {
      q: "プレミアム送迎プランの「かぼちゃの馬車」は雨の日でも大丈夫ですか？",
      a: "はい、完全防水・耐水仕様となっております。また、魔法のシールドで覆われているため、泥跳ねでお召し物が汚れる心配もございません。馬車内は冷暖房完備（魔法調整）ですので、快適に舞踏会会場まで直行していただけます。",
    },
  ];
  return isFound ? (
    <section className={`py-12 px-4 font-shippori-mincho ${GOLD_ACCENT}`}>
      <h2
        className={`pt-12 text-[1.5rem] lg:text-[2.5rem] text-center ${GOLD_ACCENT} after:my-12`}
      >
        よくあるご質問
      </h2>
      <ul className="max-w-240 m-auto flex flex-col gap-12 lg:gap-12 lg:py-12">
        {list?.map((item) => {
          return (
            <li>
              <dt className="inline-flex w-full before:content-['Q:'] before:mr-2 before: border-b border-[#989898] py-2 px-4 lg:text-[1.25rem]">
                {item.q}
              </dt>
              <dd className="before:content-['A:'] before:mr-2 before:inline-block inline-flex p-4 leading-loose lg:text-[1.25rem]">
                {item.a}
              </dd>
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    <section className="bg-[#E6FF45] py-12 lg:py-24 font-noto-sans-jp">
      <h2 className="text-center text-[3rem] font-bold mb-8 lg:mb-12">
        よくあるご質問
      </h2>
      <ul className="max-w-240 m-auto flex flex-col items-center justify-start gap-8">
        {list?.map((item) => {
          return (
            <li>
              <dt className="text-[3rem] font-black before:content-['Q:'] before:mr-4 border-b">
                {item.q}
              </dt>
              <dd className="text-[2rem] before:content-['A:'] before:mr-4 p-2">
                {item.a}
              </dd>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function Contact({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <>
      <section className="flex flex-col gap-16 items-center justify-center pb-32 bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0.5)),url(./games/cinderella/bg-linen.webp)] bg-cover bg-bottom text-[#1f2937]">
        <div
          className={`flex flex-col justify-start items-center gap-20 ${GOLD_ACCENT}`}
        >
          <p className="text-center font-bold text-[1.5rem] lg:text-[2rem] text-[#1f2937] py-2 leading-loose">
            さあ、
            <br />
            あとは一歩踏み出すだけ。
          </p>
          <p className="text-center font-bold text-[1.5rem] lg:text-[2rem] text-[#1f2937] leading-loose">
            舞踏会で <br />
            あなたの人生の伴侶が <br />
            待っています。
          </p>
        </div>
        <h2 className="text-center text-[2rem] font-bold lg:mb-8" id="faq">
          お問い合わせは
          <br />
          こちら
        </h2>
        <form
          action=""
          className="flex flex-col m-auto max-w-160 w-full p-4 gap-8"
        >
          <label className="text-[1.25rem] lg:text-[1.5rem] flex flex-col lg:flex-row justify-between gap-2 lg:gap-4">
            お名前
            <input
              type="text"
              className="border-2 border-[#1f2937] rounded-sm w-full lg:w-80 bg-gray-100"
            />
          </label>
          <label className="text-[1.25rem] lg:text-[1.5rem] flex flex-col lg:flex-row justify-between gap-2 lg:gap-4">
            お住まい
            <input
              type="text"
              className="border-2 border-[#1f2937] rounded-sm w-full lg:w-80 bg-gray-100"
            />
          </label>
          <label className="text-[1.25rem] lg:text-[1.5rem] flex flex-col lg:flex-row justify-between gap-2 lg:gap-4">
            メールアドレス
            <input
              type="email"
              className="border-2 border-[#1f2937] rounded-sm w-full lg:w-80 bg-gray-100"
            />
          </label>
          <label className="text-[1.25rem] lg:text-[1.5rem] flex flex-col lg:flex-row justify-between gap-2 lg:gap-4">
            お電話
            <input
              type="tel"
              className="border-2 border-[#1f2937] rounded-sm w-full lg:w-80 bg-gray-100"
            />
          </label>
          <div className="m-auto pt-16 w-full">
            <button
              className={`w-full font-shippori-mincho text-[1.5rem] py-2 px-4 rounded-md ${GOLD_BUTTON} border-transparent font-extrabold`}
            >
              利用規約に同意して送信
            </button>
            <p
              className="text-center pt-4 text-[0.875rem]
            "
            >
              ※<a className="underline font-bold">利用規約</a>
              をご確認ください。
            </p>
          </div>
        </form>
      </section>
      <footer className="text-center text-[0.875rem] font-shippori-mincho text-white bg-[#1f2937] p-4 font-normal">
        株式会社フェアリーゴッドマザー
      </footer>
    </>
  ) : (
    <>
      <section
        id="faq"
        className="py-12 font-noto-sans-jp flex flex-col gap-4 items-center justify-start"
      >
        <h2 className="text-center text-[1.5rem] lg:text-[2rem] font-bold lg:mt-12">
          お問い合わせ
        </h2>
        <hr className="w-40 m-auto" />
        <form
          action=""
          className="flex flex-col m-auto max-w-120 w-full p-4 gap-4"
        >
          <label className="font-bold inline-flex justify-between gap-4 text-[0.5rem]">
            お名前
            <input type="text" className="border-2 rounded-sm w-60 lg:w-80" />
          </label>
          <label className="font-bold inline-flex justify-between gap-4 text-[0.5rem]">
            お住まい
            <input type="text" className="border-2 rounded-sm w-60 lg:w-80" />
          </label>
          <label className="font-bold inline-flex justify-between gap-4 text-[0.5rem]">
            メールアドレス
            <input type="email" className="border-2 rounded-sm w-60 lg:w-80" />
          </label>
          <label className="font-bold inline-flex justify-between gap-4 text-[0.5rem]">
            お電話
            <input type="tel" className="border-2 rounded-sm w-60 lg:w-80" />
          </label>
          <button className="bg-black rounded-md text-center px-4 py-2 text-[#E6FF45] font-bold my-4 text-[0.5rem]">
            利用規約に同意して送信
          </button>
        </form>
      </section>
      <footer className="text-center text-[0.875rem] font-noto-sans-jp font-black bg-[#FF45FF] mt-20 p-4">
        株式会社フェアリーゴッドマザー
      </footer>
    </>
  );
}

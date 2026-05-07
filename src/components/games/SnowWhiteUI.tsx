export function FirstView({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="max-h-screen overflow-hidden flex justify-center items-stretch">
      <img
        src="/games/snow-white/good-apple.jpg"
        alt="奇跡のリンゴ「紅の真珠」"
        className="w-3/5 object-cover h-240 scale-x-[-1]"
      />
      <div className="flex-1 relative h-screen">
        <p className="absolute right-24 top-16 text-[4rem] font-bold bg-white px-8 py-4 whitespace-nowrap">
          貴女の毎日を変える。
        </p>
        <p className="absolute bottom-0 right-0 text-right text-[1.125rem] font-light py-18 px-4">
          想像してみてください。
          <br />
          <br />
          一口かじった、その瞬間。
          <br />
          身体の奥底からエネルギーが満ちていく。
          <br />
          重かったまぶたは軽く、
          <br />
          さっきまでの憂鬱な嘘のように消え去る。
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
    </div>
  ) : (
    <div className="bg-red-500 py-12 px-4 flex justify-center">
      <div className="flex flex-col gap-8 items-start">
        <p className="text-[4rem] font-bold">究極の眠りへ、誘う一口。</p>
        <p className="text-[#9000FF] text-[3rem] font-bold leading-snug">
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
          src="/games/snow-white/bad-apple.jpg"
          alt="奇跡のリンゴ「紅の真珠」"
        />
      </h2>
    </div>
  );
}

export function Example({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="max-h-screen overflow-hidden flex justify-center items-stretch">
      <img
        src="/games/snow-white/good-apple.jpg"
        alt="奇跡のリンゴ「紅の真珠」"
        className="w-3/5 object-cover h-240 scale-x-[-1]"
      />
      <div className="flex-1 relative h-screen">
        <p className="absolute right-24 top-16 text-[4rem] font-bold bg-white px-8 py-4 whitespace-nowrap">
          貴女の毎日を変える。
        </p>
        <p className="absolute bottom-0 right-0 text-right text-[1.125rem] font-light py-18 px-4">
          想像してみてください。
          <br />
          <br />
          一口かじった、その瞬間。
          <br />
          身体の奥底からエネルギーが満ちていく。
          <br />
          重かったまぶたは軽く、
          <br />
          さっきまでの憂鬱な嘘のように消え去る。
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
    </div>
  ) : (
    <div className="bg-red-500 py-12 px-4 flex justify-center">
      <div className="flex flex-col gap-8 items-start">
        <p className="text-[4rem] font-bold">究極の眠りへ、誘う一口。</p>
        <p className="text-[#9000FF] text-[3rem] font-bold leading-snug">
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
          src="/games/snow-white/bad-apple.jpg"
          alt="奇跡のリンゴ「紅の真珠」"
        />
      </h2>
    </div>
  );
}

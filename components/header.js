import Image from "next/image";
import React from "react";
import Hummer from "../public/hummer.svg";
import useWindowSize from "../hooks/useWindowSize";

const Header = () => {
  const windowSize = useWindowSize();

  return (
    <header className="w-full max-w-7xl m-auto px-4 xl:px-0 relative flex flex-col md:flex-row justify-center items-center py-[50px]">
      <div className="w-full md:w-7/12 space-y-10 pb-[30px] 2xl:pb-0">
        <h1 className="text-[42px] sm:text-[52px] font-bold sm:font-semibold 2xl:text-[62px]">
          Passive Income
          <br /> is <span className="text-[#2A85FF]">Relaxing</span>
        </h1>
        <p className="text-sm md:w-11/12 text-[#4D4D4F]">
          Tired of looking at charts and stressing over the next red candle? <br className="hidden sm:inline" />
          Worrried your latest Defi invesment could get explioted or rug pulled? <br className="hidden sm:inline" />
          With Eternity Earn, you can sit back, relax and let the contract do
          the <br className="hidden sm:inline" /> work for you By depositing $CRO youll earn a passive daily return <br className="hidden sm:inline" />
          while you sleep eat walk the dog or speend time with the family.
        </p>
        <button className="bg-white outline outline-gray-200 text-black px-[11px] py-[6px] lg:px-[12px] xl:px-[12px] lg:py-2 xl:py-2 rounded-md font-bold">
          Join our Telegram
        </button>
      </div>
      <div className="w-full md:w-5/12 flex justify-center">
        <Image
          src={Hummer}
          layout="fixed"
          width={
            windowSize.width < 950
              ? "350"
              : windowSize.width < 1040
              ? "400"
              : "450"
          }
          height={
            windowSize.width < 950
              ? "350"
              : windowSize.width < 1040
              ? "400"
              : "450"
          }
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Adventure = () => {
  return (
    <div className="max-w-7xl m-auto px-4 xl:px-0 py-28 flex flex-col items-center justify-center">
      <div className="space-y-5 mb-10 px-2">
        <p className="text-[24px] xl:text-2xl font-bold text-center ">
          START YOUR AVDENTURE
        </p>
        <h2 className="text-5xl xl:text-6xl font-semibold text-center ">
          Still Not Convinced? Take a test drive for less than a cup of
          coffee.
        </h2>
        <p className="text-base sm:text-xl font-light text-center text-[#4D4D4F]">
          There in no minimum invesment so deposit just a few $CRO and learn why Eternity Earn is different!
        </p>
      </div>
      <button className="bg-[#2A85FF] hover:text-[#000000] hover:bg-white hover:outline text-white px-[18px] py-[10px] lg:px-[12px] xl:px-[12px] lg:py-2 xl:py-2 rounded-xl font-bold">
        Launch Dapp
      </button>
    </div>
  );
};

export default Adventure;

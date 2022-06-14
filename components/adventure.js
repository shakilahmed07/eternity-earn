import React from "react";

const Adventure = () => {
  return (
    <div className="max-w-7xl m-auto px-4 xl:px-0 py-28 flex flex-col items-center justify-center">
      <div className="space-y-5 mb-10 px-2">
        <p className="text-[15px] font-bold text-center ">
          START YOUR AVDENTURE
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-center ">
          Still Not Convinced? <br /> Take a test drive <br className="lg:hidden xl:hidden 2xl:hidden" /> for less than a cup of
          coffee.
        </h2>
        <p className="text-sm sm:text-base font-light text-center text-[#4D4D4F]">
          There in no minimum invesment so deposit just a few $CRO and learn why <br /> Eternity Earn is different!
        </p>
      </div>
      <button className="bg-[#2A85FF] hover:text-[#000000] hover:bg-white btn__outline text-white px-[24px] py-[12px] rounded-xl font-bold">
        Launch Dapp
      </button>
    </div>
  );
};

export default Adventure;

import Image from "next/image";
import React from "react";
import EternityLogo from "../public/Eternity-logo.svg";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-100">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex items-center justify-between sm:justify-between  h-[100px]">
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <Image
              src={EternityLogo}
              alt="Eternity Earn"
              height={50}
              width={65}
            />
          </div>
          <div>
            <h1 className="hidden sm:inline lg:inline xl:inline font-semibold text-[#000000]">
              Eternity Earn
            </h1>
          </div>
        </div>
        <div className="hidden lg:inline-flex xl:inline-flex lg:space-x-8 xl:space-x-10">
          <p className="text-[#8A8C8E] font-semibold cursor-pointer">About</p>
          <p className="text-[#8A8C8E] font-semibold cursor-pointer">Stratgy</p>
          <p className="text-[#8A8C8E] font-semibold cursor-pointer">Rewards & Taxes</p>
          <p className="text-[#8A8C8E] font-semibold cursor-pointer">Roadmap</p>
        </div>
        <div className="flex space-x-4 lg:space-x-8 xl:space-x-8">
          <button className="font-semibold text-[#000000]">Whitepaper</button>
          <button className="bg-[#2A85FF] hover:text-[#000000] hover:bg-white btn__outline text-white px-[11px] py-[6px] lg:px-[12px] xl:px-[12px] lg:py-2 xl:py-2 rounded-lg font-semibold hover:font-bold">
            Launch Dapp
          </button>
          {/* <button className="font-semibold text-[#000000]">Whitepaper</button>
          <button className="btn__primary">Launch Dapp</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

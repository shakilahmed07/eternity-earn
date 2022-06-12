import Image from "next/image";
import React from "react";
import EternityLogo from "../public/Eternity-logo.svg";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-100">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex items-center justify-between sm:justify-between  h-[100px]">
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src={EternityLogo}
              alt="Eternity Earn"
              height={40}
              width={60}
            />
          </div>
          <div>
            <h1 className="hidden sm:inline lg:inline xl:inline font-bold">
              Eternity Earn
            </h1>
          </div>
        </div>
        <div className="hidden lg:inline-flex xl:inline-flex lg:space-x-8 xl:space-x-10">
          <p className="text-[#8A8C8E] font-semibold">About</p>
          <p className="text-[#8A8C8E] font-semibold">Stratgy</p>
          <p className="text-[#8A8C8E] font-semibold">Rewards & Taxes</p>
          <p className="text-[#8A8C8E] font-semibold">Roadmap</p>
        </div>
        <div className="flex space-x-4 lg:space-x-8 xl:space-x-8">
          <button className="font-semibold text-[#000000]">Whitepaper</button>
          <button className="bg-[#2A85FF] hover:text-[#000000] hover:bg-white hover:outline text-white px-[11px] py-[6px] lg:px-[12px] xl:px-[12px] lg:py-2 xl:py-2 rounded-md font-bold">
            Launch Dapp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

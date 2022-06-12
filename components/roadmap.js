import Image from "next/image";
import React from "react";
import Rocket from "../public/Rocket.svg";
import { BsDot } from "react-icons/bs";

const Roadmap = () => {
  return (
    <div className="pt-20 pb-28 border-b">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex flex-col-reverse md:flex-row md:items-center">
        <div className="w-full md:w-4/12 lg:w-5/12 px-[35px] md:px-0 py-5 md:py-0">
          <div className="space-y-2 py-[20px]">
            <p className="bg-[#9757D7] text-white w-11 text-center rounded-md font-bold py-1 ml-2">
              01
            </p>
            <p className="text-[20px] font-semibold ml-2">
              Phase 1 - Up to 8% $CRO Miner
            </p>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">Launch Giga Miner on Cronos Chain</p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">Estabilish Main Telegram Group</p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">Daily Voice Chats with Community</p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">
                Launch Central and Community Marketing Efforts (Shill Group)
              </p>
            </div>
          </div>
          <div className="space-y-2 py-[20px]">
            <p className="bg-[#EF466F] text-white w-11 text-center rounded-md font-bold py-1 ml-2">
              02
            </p>
            <p className="text-[20px] font-semibold ml-2">
              Phase 2 - 2% Daily ROI Dapp
            </p>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">
                Stealth launch of new DRIP Upgrade token
              </p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">Upgraded and Integrated UI</p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">
                Publish Whitepaper for DRIP Upgrade token
              </p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">Certik and Rude Launge Audit</p>
            </div>
          </div>
          <div className="space-y-2 py-[20px]">
            <p className="bg-[#46B36C] text-white w-11 text-center rounded-md font-bold py-1 ml-2">
              03
            </p>
            <p className="text-[20px] font-semibold ml-2">
              Phase 3 - Market Expansion
            </p>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">
                Cross chain Giga Miner rollout - AVAX, Comdos, Solona
              </p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">
                Ability to puchase or $CRO and deposit to contracts from mobile
                app using fiat cradit card
              </p>
            </div>
            <div className="flex items-center">
              <BsDot className="text-gray-500" />
              <p className="text-[14px]">
                Lendin protocol for DRIP Upgrade token
              </p>
            </div>
          </div>
        </div>
        <div className="w-full -ml-10 md:w-8/12 lg:w-7/12">
          <Image src={Rocket} alt="" height={700} width={700} />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

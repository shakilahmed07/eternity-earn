import Image from "next/image";
import { MdDone } from "react-icons/md";
import Mobile from "../public/mobile.svg";
import useWindowSize from "../hooks/useWindowSize";

const Compound = () => {
  const windowSize = useWindowSize();

  return (
    <section className="py-28 bg-[#F4F5F6] 2x:h-[450px]">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Just Compound & Chill
          </h1>
          <p className="text-base lg:text-xl text-[#4D4D4F]">
            We make crypto passinve income easy through our simple Dapp user interface and proven invesment strategy.
          </p>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <MdDone className="text-[#45B36B]" />
              <p className="font-semibold">Earn Up to 8% per Day</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdDone className="text-[#45B36B]" />
              <p className="font-semibold">Incorporated in Florida, USA</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdDone className="text-[#45B36B]" />
              <p className="font-semibold">Fully Doxxed Team</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdDone className="text-[#45B36B]" />
              <p className="font-semibold">12% Referral Rewards</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdDone className="text-[#45B36B]" />
              <p className="font-semibold">Future Revenue Streams</p>
            </div>
          </div>
          <div className="flex items-center space-x-8 py-5">
            <button className="bg-[#2A85FF] hover:text-[#000000] hover:bg-white hover:outline text-white px-[11px] py-[6px] lg:px-[12px] xl:px-[12px] lg:py-2 xl:py-2 rounded-md font-bold">
              Launch Dapp
            </button>
            <button className="bg-white outline outline-gray-200 text-black px-[11px] py-[6px] lg:px-[12px] xl:px-[12px] lg:py-2 xl:py-2 rounded-md font-bold">
              Join our Telegram
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          <Image
            src={Mobile}
            width={windowSize.width < 1024 ? "400" : "800"}
            height={windowSize.width < 1024 ? "400" : "800"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Compound;

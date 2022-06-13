import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";
import PlusBg from "./../public/plus-bg.svg";
import keyboard from "./../public/keyboard.svg";
import circle from "./../public/circle.svg";
import line from "./../public/line.svg";

const Metamask = () => {
  return (
    <div className="max-w-7xl m-auto px-4 xl:px-0 py-28">
      <div>
        <h1 className="text-center text-2xl sm:text-3xl xl:text-5xl font-bold">
          How to Add Cronos <br className="lg:hidden" /> to MetaMask
        </h1>
        <p className="text-center py-4 text-sm lg:text-base text-[#4D4D4F]">
          Before interacting with the Eternity Earn Dapp, you mush add the
          Cronos Chain to{" "}
          <br className="hidden sm:inline lg:inline xl:inline 2xl:inline" />{" "}
          MetaMask or Trush Wallet. Below are instructions on how to add Cronos.
        </p>
      </div>
      <div className="flex items-center justify-center sm:space-x-8 space-x-4 my-[60px] px-[20px]">
        <div className="flex items-center justify-center">
          <Image
            src={PlusBg}
            className="relative"
            height={80}
            width={80}
            alt=""
          />
          <AiOutlinePlus className="h-[35px] w-[35px] p-1 rounded-md text-[#9757D7] absolute bg-white" />
        </div>
        <div className="flex items-center justify-center">
          <Image src={circle} alt="" />
          <Image src={line} alt="" width={220} />
          <Image src={circle} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={keyboard}
            className="relative"
            height={80}
            width={80}
            alt=""
          />
          <FaRegKeyboard className="h-[40px] w-[40px] p-2 rounded-md text-[#EF466F] absolute bg-white" />
        </div>
      </div>

      <div className="flex justify-center my-[60px]">
        <div className="text-center space-y-4 pr-[40px]">
          <p className="font-semibold text-center">Step 1</p>
          <h3 className="font-semibold">Add Network</h3>
          <p className="text-[12px] sm:text-base flex flex-col sm:flex-row items-center">
            <span className="text-[#4D4D4F]">Click on</span>
            <IoIosArrowRoundDown className="sm:hidden" />
            <IoIosArrowRoundForward className="hidden sm:inline" /> Setting
            <IoIosArrowRoundDown className="sm:hidden" />
            <IoIosArrowRoundForward className="hidden sm:inline" />{" "}
            Networks
            <IoIosArrowRoundDown className="sm:hidden" />
             <IoIosArrowRoundForward className="hidden sm:inline" /> Add Networks
          </p>
        </div>
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <p className="font-semibold text-center">Step 2</p>
            <h3 className="font-semibold">Fill in Textfields</h3>
            <p className="text-[14px] sm:text-base">
              Fill in the paramerters for the{" "}
              <span className="text-[#4D4D4F]">Cronos Mainnet Network</span>
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[12px] sm:text-base font-semibold">
              Name : <span className="text-[#4D4D4F]">Cronos Chain</span>
            </p>
            <p className="text-[12px] sm:text-base font-semibold">
              New RPC URL :{" "}
              <span className="text-[#4D4D4F]">
                https://rpc.artemisone.org/cronos
              </span>
            </p>
            <p className="text-[12px] sm:text-base font-semibold">
              Chain-ID : <span className="text-[#4D4D4F]">25</span>
            </p>
            <p className="text-[12px] sm:text-base font-semibold">
              Symbol : <span className="text-[#4D4D4F]">CRO</span>
            </p>
            <p className="text-[12px] sm:text-base font-semibold">
              Book Explorer URL :{" "}
              <span className="text-[#4D4D4F]">https://cronoscan.org</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metamask;

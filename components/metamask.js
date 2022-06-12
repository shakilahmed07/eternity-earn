import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa";
import PlusBg from "./../public/plus-bg.svg";
import keyboard from "./../public/keyboard.svg";
import circle from "./../public/circle.svg";
import line from "./../public/line.svg";

const Metamask = () => {
  return (
    <div className="max-w-7xl m-auto px-4 xl:px-0 py-28">
      <div>
        <h1 className="text-center text-[20px] sm:text-3xl xl:text-4xl font-bold">
          How to Add Cronos to MetaMask
        </h1>
        <p className="text-center py-4 text-[12px] sm:text-base lg:text-lg xl:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Dolor
          non voluptate incidunt modi perferendis. Illo.
        </p>
      </div>
      <div className="flex items-center justify-center sm:space-x-8 space-x-4 my-[60px]">
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
        <div className="flex items-center">
          <Image src={circle} alt="" />
          <Image src={line} alt="" style={{ marginLeft: 10 }} />
          <Image src={circle} alt="" style={{ marginRight: 10 }} />
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
          <p className="font-semibold">Step 1</p>
          <h3 className="font-semibold">Add Network</h3>
          <p className="text-[10px] sm:text-base">
            Click on Setting Networks Add Networks
          </p>
        </div>
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <p className="font-semibold">Step 2</p>
            <h3 className="font-semibold">Fill in Textfields</h3>
            <p className="text-[10px] sm:text-base">
              Fill in the paramerters for the Cronos Mainnet Network
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold">
              Name : <span className="text-gray-600">Cronos Chain</span>
            </p>
            <p className="text-sm font-semibold">
              New RPC URL :{" "}
              <span className="text-gray-600">
                https://rpc.artemisone.org/cronos
              </span>
            </p>
            <p className="text-sm font-semibold">
              Chain-ID : <span className="text-gray-600">25</span>
            </p>
            <p className="text-sm font-semibold">
              Symbol : <span className="text-gray-600">CRO</span>
            </p>
            <p className="text-sm font-semibold">
              Book Explorer URL :{" "}
              <span className="text-gray-600">https://cronoscan.org</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metamask;

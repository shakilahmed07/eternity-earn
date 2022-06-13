import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaDiscord,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Gate from "../public/gate.svg"
import Image from "next/image"

import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="border-t-2 border-gray-100">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex items-center justify-between h-[100px]">
        <p className="text-[10px] sm:text-[14px] text-[#4D4D4F]">
          Copyright &copy; 2022 Eternity Earn, All rights Reserved
        </p>
        <div className="flex sm:space-x-4 space-x-1">
          {/* <Image src={Copyright} fill="red" /> */}
          <AiOutlineCopyright className="h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] text-[#8A8C8E] hover:text-[#0069F6] cursor-pointer" />
          <FaTelegramPlane className="h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] text-[#8A8C8E] hover:text-[#0069F6] cursor-pointer" />
          <FaTwitter className="h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] text-[#8A8C8E] hover:text-[#0069F6] cursor-pointer" />
          <FaDiscord className="h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] text-[#8A8C8E] hover:text-[#0069F6] cursor-pointer" />
          <div className="h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] flex">
          <Image src={Gate} />
          </div>
          <FaFacebook className="h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] text-[#8A8C8E] hover:text-[#0069F6] cursor-pointer" />
          <FaInstagram className="h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] text-[#8A8C8E] hover:text-[#0069F6] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Footer;

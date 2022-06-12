import Image from "next/image";
import Gold from "../../public/gold.svg";
import Wallet from "../../public/wallet.svg";
import claim from "../../public/claim.svg";
import React from "react";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const strategyData = [
  {
    id: 1,
    icon: claim,
    title: "6:1 Compound/Claim",
    description:
      "lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam",
  },
  {
    id: 2,
    icon: Wallet,
    title: "13:1 Compound/Claim",
    description:
      "leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis",
  },
  {
    id: 3,
    icon: Gold,
    title: "29:1 Compound/Claim",
    description:
      "iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus",
  },
];

const Strategy = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  return (
    <section className="bg-[#F4F5F6] py-28">
      <div className="max-w-7xl m-auto px-4 xl:px-0">
        <div className="">
          <h1 className="pb-5 text-[40px] sm:text-[50px] text-center font-semibold">
            Strategy
          </h1>
          <p className="text-center w-10/12 sm:w-8/12 lg:w-6/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maiores
            necessitatibus tenetur excepturi voluptatibus ratione neque odio
            perferendis saepe harum eveniet, earum numquam, nulla consequatur.
            Magnam sapiente, et facere a explicabo error, at placeat enim odit
            nemo, dicta adipisci maiores voluptatem doloribus mollitia atque
            maxime? Neque repellat voluptatum rem hic.
          </p>
        </div>
        <div className="py-[50px]">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {strategyData.map((item, i) => (
              <SwiperSlide key={i}>
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center items-center">
          <button className="m-auto bg-[#2A85FF] hover:text-[#000000] hover:bg-white hover:outline text-white px-5 py-3 rounded-lg font-bold">
            Launch Dapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Strategy;

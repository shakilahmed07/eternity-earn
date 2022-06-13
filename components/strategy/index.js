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
      "This is the lowest compund rate to maintain the maximum daily ROI of up to 8% and still get a weekly payout. When TVL is decreasing and the price of $CRO is decreasing, this schedule may not keep up with reward rate decay",
  },
  {
    id: 2,
    icon: Wallet,
    title: "13:1 Compound/Claim",
    description:
      "This schedule allows a bi-monthly pay day while growing your $CRO invested in the contract at a higher rate. Schedules with a higher compound rate can overcome reward dacay and leapfrog other investors.",
  },
  {
    id: 3,
    icon: Gold,
    title: "29:1 Compound/Claim",
    description:
      "Claiming only once per month is not for everone, however, smaller initial invest-ments benefit form aggessinve compounding all allowing their $CRO deposits to grow. This is a longer-term strategy with higher",
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
          <h1 className="pb-5 text-5xl sm:text-[50px] text-center font-semibold">
            Strategy
          </h1>
          <p className="text-center text-sm w-10/12 sm:w-8/12 lg:w-6/12 mx-auto text-[#4D4D4F]">
            Once $CRO deposit are locked in the Eternity Earn contract, users
            are ecouraged to compound their rewards sit days per week and then
            claim rewards on the seventy da (6:1). By following the recommended
            compound/claim schedule, the maximun daily rewards (up to 8%) can be
            achieved, allowing for a typical return on invesment within four to
            six weeks. All rewards are paid in $CRO tokens based on the total
            value locked (TVL) in the contract liquidity pool and activity
            during the day by other users of the system. The value of $CRO is
            also variable and can flucatuate with market conditions.
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
          <button className="m-auto bg-[#2A85FF] hover:text-[#000000] hover:bg-white hover:outline text-white px-8 py-[14px] rounded-xl font-semibold">
            Launch Dapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Strategy;

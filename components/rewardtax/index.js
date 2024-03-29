import React from "react";
import Card from "./card";
import Referrel from "../../public/referrel.svg";
import Deposit from "../../public/Deposit.svg";
import Compound from "../../public/Compound.svg";
import Claim from "../../public/Claim-2.svg";

const rewardData = [
  {
    id: 1,
    icon: Referrel,
    title: "Referral Rewards",
    description:
      "By reffering another investor, you'll receive 12% of their deposits and compounds, paid from the pool, not the investor.",
  },
  {
    id: 2,
    icon: Deposit,
    title: "Deposit Tax",
    description:
      "A 5% tax is paid on deposits of $CRO into contract. The tax is deposit into the Grand Reserve for development and marketing.",
  },
  {
    id: 3,
    icon: Compound,
    title: "Compound Tax",
    description:
      "There is no paid on compounding available $CRO rewards. A small gas fee is paid for each compound transaction.",
  },
  {
    id: 4,
    icon: Claim,
    title: "Claim Tax",
    description:
      "A 5% tax is paid on withdrawals of available $CRO rewards. The tax is deposit into the Grand Reserve for development and marketing.",
  },
];

const RewardTax = () => {
  return (
    <div className="w-full py-28 border-b">
      <div className="max-w-7xl m-auto px-4 xl:px-0">
        <h1 className="xl:text-5xl sm:text-[30px] text-[24px] text-center font-semibold">
          Refrral Rewards and Taxes
        </h1>
        <div className="grid gap-5 px-2 grid-cols-2 xl:grid-cols-4 pt-[50px]">
          {rewardData.map((item) => (
            <Card
              icon={item.icon}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardTax;

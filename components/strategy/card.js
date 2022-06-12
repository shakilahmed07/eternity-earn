import React from "react";
import Image from "next/image";

const Card = ({title, description, icon}) => {
  return (
    <div className="flex flex-col items-center px-4 bg-white m-4 rounded-2xl">
      <Image src={icon} alt="" />
      <div className="space-y-8 mt-4">
        <h2 className="text-center text-xl font-bold">{title}</h2>
        <p className="text-center pb-10 px-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Image from "next/image";

const Card = ({title, description, icon}) => {
  return (
    <div className="flex flex-col items-center px-4 bg-white m-4 p-4 rounded-2xl">
      <Image src={icon} alt="" height={200} width={150}  />
      <div className="space-y-8 mt-4">
        <h2 className="text-center text-xl font-semibold">{title}</h2>
        <p className="text-center text-sm pb-10 px-2 text-[#4D4D4F]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

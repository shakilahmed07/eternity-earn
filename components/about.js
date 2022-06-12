import React from "react";

const About = () => {
  return (
    <section className="py-28 border-t-2">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold">
            About
          </p>
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold">
            Strategy
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold">
            Rewards & Taxes
          </p>
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold">
            Roadmap
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-black text-sm xs:text-base sm:text-lg md:text-xl font-semibold">
            Contact
          </p>
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold">
            example@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

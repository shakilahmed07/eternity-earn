import React from "react";

const About = () => {
  return (
    <section className="py-16 border-t-2">
      <div className="max-w-7xl m-auto px-4 xl:px-0 flex items-center justify-between">
        <div className="space-y-4">
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold cursor-pointer">
            About
          </p>
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold cursor-pointer">
            Strategy
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold cursor-pointer">
            Rewards & Taxes
          </p>
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold cursor-pointer">
            Roadmap
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-black text-sm xs:text-base sm:text-lg md:text-xl font-semibold cursor-pointer">
            Contact
          </p>
          <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl font-semibold cursor-pointer">
            EmailHere@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

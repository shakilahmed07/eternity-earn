import Image from "next/image";
import workIco1 from "../public/workIco1.svg";
import workIco2 from "../public/workIco2.svg";
import workIco3 from "../public/workIco3.svg";
import workIco4 from "../public/workIco4.svg";
import useWindowSize from "../hooks/useWindowSize";

const dataArr = [
  {
    ico: workIco1,
    icoBoxColor: "#45B36B",
    step: "1",
    title: "Bridge",
    paragraph:
      "Purchase $CRO from Crypto.com and send it to a Cronos enabled MetaMask wallet. Or, use a cross-chain swap application to exchange other crypto for $CRO. Cronos currently supports MetaMask and Trust Wallet",
  },
  {
    ico: workIco2,
    icoBoxColor: "#9757D7",
    step: "2",
    title: "Deposit",
    paragraph:
      "Connect your MetaMask to Eternity Earn and deposit the desired ammount of $CRO. There is no minimum investment Deposits, minus a 5% fee are locked in the contract and are earned back through the daily $CRO rewards.",
  },
  {
    ico: workIco3,
    icoBoxColor: "#EF466F",
    step: "3",
    title: "Compound",
    paragraph:
      "To graw the ammount of $CRO invested in the contract and maximize your daily ROI, you can compound (reinvest) your $CRO rewards earned. There is no limit to compunding but keep in mind the small gas fee paid for each transcation",
  },
  {
    ico: workIco4,
    icoBoxColor: "#3772FF",
    step: "4",
    title: "Claim",
    paragraph:
      "Once per weekm or on a schedule that fits your invesment strategy, the daily $CRO rewards can be claimed (with-drawn) to your wallet, minus a 5% fee. Claiming to often (more than once per week) will reduce daily rewards.",
  },
];

const Works = () => {
  const windowSize = useWindowSize();
  return (
    <div className="max-w-7xl m-auto px-4 xl:px-0 pb-28">
      <div className="space-y-6">
        <h1 className="text-center text-xl font-bold">How it Works</h1>
        <p className="text-center text-lg 2xl:w-6/12 2xl:mx-auto">
          Eternity Earn is a $CRO miner rewards pool build on the Cronos Chain, the native blockchanin of Crypto.com. When $CRO is deposited and locked into the decentralized application (Dapp). you will begin earning real-time rewards, up to 8% daily, in the form of $CRO that you can compound (reinvest) or claim (withdraw). There in no secondary token to purchase or stake, making Eternity Earn a sample way to participate in crypto DeFi.
        </p>
      </div>
      <div className="py-20 flex flex-col lg:flex-row justify-between items-start gap-24 lg:gap-10">
        {dataArr.map((data, i) => {
          const { ico, icoBoxColor, step, title, paragraph } = data;
          return (
            <div
              key={i}
              className="flex flex-row lg:flex-col lg:justify-center items-center gap-4 md:gap-16 lg:gap-0"
            >
              <div
                className="w-10 md:w-20 h-10 md:h-20 flex justify-center items-center rounded-lg md:rounded-3xl relative"
                style={{ background: icoBoxColor }}
              >
                <Image
                  src={ico}
                  width={windowSize.width < 768 ? 25 : 35}
                  height={windowSize.width < 768 ? 25 : 35}
                  alt=""
                />
                {i !== 0 && (
                  <span className="absolute xs:block -top-5 lg:top-auto left-auto lg:-left-10 w-3 h-3 rounded-full border border-gray-600"></span>
                )}

                {i !== 3 && (
                  <span className="absolute xs:block -bottom-32 sm:-bottom-24 md:-bottom-[4.5rem] lg:bottom-auto lg:-right-32 xl:-right-44  lg:w-16 xl:w-28 h-20 sm:h-12 md:h-10 lg:h-1 border-l lg:border-l-0 2xl:border-l-0 md:border-t border-dashed border-gray-600"></span>
                )}

                {i !== 3 && (
                  <span className="absolute  xs:block -bottom-5 lg:bottom-auto right-auto lg:-right-10 w-3 h-3 rounded-full border border-gray-600"></span>
                )}
              </div>
              <div className="w-10/12 lg:w-full lg:pt-20 flex flex-row items-center lg:flex-col gap-4 md:gap-16 lg:gap-0">
                <div className="w-4/12 sm:w-3/12 lg:w-full text-center">
                  <span className="text-sm md:text-base font-semibold">
                    Step {step}
                  </span>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold pt-4 lg:pt-8">
                    {title}
                  </h4>
                </div>
                <p className="w-8/12 sm:w-9/12 lg:w-full lg:pt-8 text-sm md:text-base text-left lg:text-center">
                  {paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="border py-4 px-5 text-black font-semibold rounded-xl block mx-auto">
        Add Cronos to MetaMask
      </button>
    </div>
  );
};

export default Works;
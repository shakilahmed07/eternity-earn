import About from "../components/about";
import Adventure from "../components/adventure";
import Arrow from "../components/arrow";
import Compound from "../components/compound";
import Header from "../components/header";
import Metamask from "../components/metamask";
import Ourvision from "../components/ourvision";
import RewardTax from "../components/rewardtax";
import Roadmap from "../components/roadmap";
import Strategy from "../components/strategy";
import Works from "../components/works";

export default function Home() {
  return (
    <>
      <Header />
      <Arrow />
      <Works />
      <Strategy />
      <RewardTax />
      <Ourvision />
      <Roadmap />
      <Metamask />
      <Compound />
      <Adventure />
      <About />
    </>
  );
}

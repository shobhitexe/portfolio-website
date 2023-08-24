import { buttonColors } from "../UI/Button/Button";
import PageHeader from "../UI/pageHeading/PageHeader";
import Arrow from "../icons/Arrow";
import Eye from "../icons/Eye";
import Fingers from "../icons/Fingers";

export default function PortfolioHero() {
  return (
    <div className="flex justify-center relative w-[95%] sm:mt-[190px] mt-[250px] mx-auto h-screen">
      <PageHeader
        headText="Web Development Portfolio"
        headDesc="My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of projects for various industries."
        TwoButtons={true}
        SvgOne={Arrow}
        SvgTwo={Fingers}
        buttonOneBtnBg={buttonColors.gray}
        buttonOneCircleBg={buttonColors.white}
        buttonOneText="Contact"
        SvgThree={Arrow}
        SvgFour={Eye}
        buttonTwoBtnBg={buttonColors.white}
        buttonTwoCircleBg={buttonColors.gray}
        buttonTwoText="Resume"
        startHighlight={2}
        endHighlight={26}
        indexHero={false}
      />
    </div>
  );
}

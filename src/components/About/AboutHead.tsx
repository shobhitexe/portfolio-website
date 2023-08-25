import { buttonColors } from "../UI/Button/Button";
import PageHeader from "../UI/pageHeading/PageHeader";
import Arrow from "../icons/Arrow";
import Eye from "../icons/Eye";
import Fingers from "../icons/Fingers";

export default function AboutHead() {
  return (
    <div className="flex justify-center relative w-[95%] sm:mt-[190px] mt-[250px] mx-auto h-screen">
      <PageHeader
        headText="I EXCEL WITH PASSION AND EXPERTISE"
        headDesc="Welcome to my world! Where creativity meets strategy, and stunning design meets functionality. I am passionate about crafting digital experiences "
        TwoButtons={true}
        buttonOneBtnBg={buttonColors.gray}
        buttonOneCircleBg={buttonColors.white}
        buttonOneText="Contact"
        SvgOne={Arrow}
        SvgTwo={Fingers}
        buttonTwoBtnBg={buttonColors.white}
        buttonTwoCircleBg={buttonColors.gray}
        buttonTwoText="Works"
        SvgThree={Arrow}
        SvgFour={Eye}
        startHighlight={7}
        endHighlight={24}
        indexHero={false}
      />
    </div>
  );
}

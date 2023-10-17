import Button, { buttonColors } from "../UI/Button/Button";
import Label, { labelColors } from "../UI/Label/Label";
import UpRevealText from "../UI/UpRevealText/UpRevealText";
import Arrow from "../icons/Arrow";
import Eye from "../icons/Eye";
import Fingers from "../icons/Fingers";

export default function AboutDesc() {
  return (
    <div className="flex sm:flex-row flex-col max-sm:gap-10 items-start w-[90%] mx-auto pb-40">
      <Label title="A few words about me" labelBg={labelColors.green} />
      <div className="flex flex-col gap-10 items-start sm:w-[70%] mx-auto justify-around">
        <h1 className="text-whiteShade font-satoshi md:text-[40px] sm:text-[35px] ss:text-[30px] xs:text-[25px] text-[20px] font-medium">
          As a freelance web designer and developer, I am dedicated to
          empowering forward-thinking individuals and organizations to unlock
          their growth potential.
        </h1>
        <div className="w-full h-[1px] bg-whiteShade bg-opacity-50"></div>
        <div className="flex flex-col gap-5 font-general text-whiteShade">
          <UpRevealText
            label="I am not just about crafting visually captivating websites - I am
              dedicated to shaping digital experiences that leave an enduring
              initial impact. I am a youthful digital developer who approaches
              work with utmost professionalism, yet I firmly believe that work
              should be enjoyable. That's why I infuse a touch of humor into
              every project I undertake."
            delay={0.1}
          />
          <UpRevealText
            label="I hold the belief that humor and creativity are interconnected, and this mindset propels me to explore boundaries and deliver genuinely outstanding designs. Furthermore, I maintain the perspective that each business is distinct, and as a result, no two websites should bear too much resemblance to one another."
            delay={0.2}
          />
        </div>
        <div className="flex items-center gap-5">
          <Button
            label="Portfolio"
            buttonBg={buttonColors.gray}
            circleBg={buttonColors.white}
            FirstSvg={Arrow}
            SecondSvg={Fingers}
            border={true}
            redirectTo="/Portfolio"
          />
          <Button
            label="Resume"
            buttonBg={buttonColors.white}
            circleBg={buttonColors.gray}
            FirstSvg={Arrow}
            SecondSvg={Eye}
            redirectTo="/Resume"
          />
        </div>
      </div>
    </div>
  );
}

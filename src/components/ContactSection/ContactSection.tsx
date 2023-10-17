import Button, { buttonColors } from "../UI/Button/Button";
import Label, { labelColors } from "../UI/Label/Label";
import SlideText from "../UI/SlideText/SlideText";
import Arrow from "../icons/Arrow";
import Fingers from "../icons/Fingers";

export default function ContactSection() {
  return (
    <div className="mt-28 bg-grayShade bg-opacity-10 w-full">
      <div className="w-[90%] mx-auto py-20 flex sm:flex-row flex-col max-sm:gap-5 text-whiteShade items-start justify-between">
        <Label title="Get in touch" labelBg={labelColors.green} />
        <div className="flex flex-col gap-5 sm:w-[40%] relative pb-16">
          <div className="flex flex-col md:text-[38px] text-[30px] font-satoshi">
            <SlideText label="HAVE AN IDEA?" />
            <SlideText label="LET'S DO IT TOGETHER!" />
          </div>
          <p className="font-general">
            {`Don't put your creativity on hold and let's build a professional web
            experience which will put you above your competitors.`}
          </p>
          <div className="absolute bottom-0">
            <Button
              label="Contact"
              buttonBg={buttonColors.white}
              circleBg={buttonColors.gray}
              FirstSvg={Arrow}
              SecondSvg={Fingers}
              redirectTo="/Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { MutableRefObject, useEffect, useRef } from "react";
import Button, { buttonColors } from "../../UI/Button/Button";
import Label, { labelColors } from "../../UI/Label/Label";
import SlideText, { SlideTextColors } from "../../UI/SlideText/SlideText";
import Arrow from "../../icons/Arrow";
import Eye from "../../icons/Eye";
import Fingers from "../../icons/Fingers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ExpertiseLeft() {
  const paraRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      paraRef.current,
      { translateY: 150, opacity: 0 },
      {
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: paraRef.current,
          scrub: 2,
          start: "10% bottom",
          end: "30% bottom",
        },
      }
    );
  }, []);

  return (
    <div className="flex sticky top-[20%] h-full flex-col gap-5 md:w-[40%]">
      <Label title="Expertise" labelBg={labelColors.green} />
      <SlideText
        label="HOW CAN I HELP"
        highlightedText={3}
        colorOne={SlideTextColors.black}
        colorTwo={SlideTextColors.gray}
        style="text-[40px] font-medium"
      />
      <p ref={paraRef} className="font-general font-medium text-[17px]">
        As a freelance Full Stack developer, I specialize in providing custom
        web design and development services to startups and established
        businesses alike. My goal is to assist businesses in building a robust
        online presence and effectively connecting with their target audience.
      </p>
      <div className="flex gap-3 items-center">
        <Button
          label="Read More"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          FirstSvg={Arrow}
          SecondSvg={Eye}
        />
        <Button
          label="Contact Me"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          FirstSvg={Arrow}
          SecondSvg={Fingers}
        />
      </div>
    </div>
  );
}

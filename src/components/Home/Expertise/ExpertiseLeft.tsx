"use client";

import UpRevealText from "@/components/ui/UpRevealText/UpRevealText";
import Button, { buttonColors } from "../../ui/Button/Button";
import Label, { labelColors } from "../../ui/Label/Label";
import SlideText, { SlideTextColors } from "../../ui/SlideText/SlideText";
import Arrow from "../../icons/Arrow";
import Eye from "../../icons/Eye";
import Fingers from "../../icons/Fingers";

export default function ExpertiseLeft() {
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
      <UpRevealText
        label="As a freelance Full Stack developer, I specialize in providing custom
        web design and development services to startups and established
        businesses alike. My goal is to assist businesses in building a robust
        online presence and effectively connecting with their target audience."
        styles="font-medium text-[17px]"
        delay={0.1}
      />
      <div className="flex gap-3 items-center">
        <Button
          label="Read More"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          FirstSvg={Arrow}
          SecondSvg={Eye}
          redirectTo="/about"
        />
        <Button
          label="Contact Me"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          FirstSvg={Arrow}
          SecondSvg={Fingers}
          redirectTo="/contact"
        />
      </div>
    </div>
  );
}

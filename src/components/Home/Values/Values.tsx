import Label, { labelColors } from "@/components/UI/Label/Label";
import SlideText, {
  SlideTextColors,
} from "@/components/UI/SlideText/SlideText";
import ValuesGrid from "./ValuesGrid";
import UpRevealText from "@/components/UI/UpRevealText/UpRevealText";

export default function Values() {
  return (
    <div className="pb-[999px] mt-28 flex flex-col gap-24 w-[90%] mx-auto">
      <div className="flex sm:flex-row flex-col items-start justify-between">
        <Label title="Values" labelBg={labelColors.green} />
        <div className="flex flex-col md:w-[50%] sm:w-[70%]">
          <SlideText
            label="DEVELOPING WITH PURPOSE"
            highlightedText={10}
            colorOne={SlideTextColors.gray}
            colorTwo={SlideTextColors.white}
            style="lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-medium"
          />
          <UpRevealText
            label=" As a freelance Full Stack developer and web designer, I embrace a
            dedicated and results-driven approach for every project. I harness
            my expertise and proficiency to craft customized websites that
            perfectly match your requirements. Moreover, I proactively
            collaborate with my clients to achieve common goals and realize
            desired outcomes"
            styles="text-whiteShade font-general md:text-[15px] text-[14px]"
          />
        </div>
      </div>
      <div>
        <ValuesGrid />
      </div>
    </div>
  );
}

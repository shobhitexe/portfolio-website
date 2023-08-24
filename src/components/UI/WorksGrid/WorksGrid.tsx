import Label, { labelColors } from "../Label/Label";
import SlideText from "../SlideText/SlideText";
import RevealImage, { RevealColorColors } from "../RevealImage/RevealImage";
import { selectedWorksType } from "@/components/Home/Works/WorkConstants";

type WorksGridProps = { worksArray: selectedWorksType[] };

export default function WorksGrid({ worksArray }: WorksGridProps) {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
      {worksArray.map((work) => (
        <div key={work.alt} className="flex flex-col gap-5 ">
          <RevealImage
            image={work.image}
            alt={work.alt}
            cover={RevealColorColors.lightGrey}
          />
          <div className="flex items-center justify-between">
            <SlideText
              label={work.title}
              style="text-whiteShade text-[20px] font-medium"
            />
            <Label
              title="View"
              labelBg={labelColors.transparant}
              styles="hover:bg-whiteShade duration-500 hover:text-greyBg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

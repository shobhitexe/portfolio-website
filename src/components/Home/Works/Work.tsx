import { AllWorksData } from "@/components/Portfolio/AllWorks/AllWorksConstants";
import Button, { buttonColors } from "../../UI/Button/Button";
import Label, { labelColors } from "../../UI/Label/Label";
import SlideText, { SlideTextColors } from "../../UI/SlideText/SlideText";
import Arrow from "../../icons/Arrow";
import Eye from "../../icons/Eye";
import WorksGrid from "@/components/UI/WorksGrid/WorksGrid";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div className="mt-28 bg-grayShade bg-opacity-10 py-10">
      <div className="w-[90%] mx-auto flex flex-col gap-20 items-center">
        <div className="flex sm:flex-row flex-col max-sm:gap-5 justify-between items-start">
          <Label title="Works" labelBg={labelColors.green} />
          <div className="sm:w-[50%] w-full">
            <SlideText
              label="A FEW SELECTED WORKS"
              style="md:text-[40px] text-[30px] font-medium text-whiteShade"
              colorOne={SlideTextColors.white}
              colorTwo={SlideTextColors.gray}
              highlightedText={5}
            />
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                stiffness: 60,
                type: "spring",
              }}
              className="font-general sm:text-[19px] text-[15px] text-whiteShade"
            >
              My projects showcases the exceptional work that I have delivered.
              Have a look into my portfolio, highlighting the diverse range of
              web design projects for various industries.
            </motion.p>
          </div>
        </div>
        <WorksGrid
          worksArray={AllWorksData.filter((data, idx) => [0, 2].includes(idx))}
        />
        <Button
          label="View All Projects"
          buttonBg={buttonColors.white}
          circleBg={buttonColors.gray}
          FirstSvg={Arrow}
          SecondSvg={Eye}
          redirectTo="/Portfolio"
        />
      </div>
    </div>
  );
}

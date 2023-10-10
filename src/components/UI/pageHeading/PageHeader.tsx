import Button from "../Button/Button";
import { buttonColors } from "../Button/Button";
import HeaderHeading from "./HeaderHeading";
import Arrow from "@/components/icons/Arrow";
import Fingers from "@/components/icons/Fingers";
import Eye from "@/components/icons/Eye";
import { motion } from "framer-motion";

type PageHeaderProps = {
  headText: string;
  headDesc: string;
  TwoButtons?: boolean;
  buttonOneText: string;
  buttonTwoText?: string;
  startHighlight?: number;
  endHighlight?: number;
  indexHero: boolean;
  redirectOne: string;
  redirectTwo?: string;
};

export default function PageHeader({
  headText,
  headDesc,
  TwoButtons = false,
  buttonOneText,
  buttonTwoText,
  startHighlight,
  endHighlight,

  redirectOne,
  redirectTwo,
}: PageHeaderProps) {
  return (
    <div>
      <HeaderHeading
        HeroHeadingText={headText}
        startHighlight={startHighlight}
        endHighlight={endHighlight}
      />
      <div className="flex flex-col gap-5 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 2,
            stiffness: 60,
            damping: 6,
            type: "spring",
          }}
          className="md:w-[40%] sm:w-[50%] w-full mt-10 font-general text-whiteShade md:text-[20px] sm:text-[18px] text-[15px]"
        >
          {headDesc}
        </motion.div>
        <div className="flex flex-row gap-2">
          <Button
            label={buttonOneText}
            buttonBg={buttonColors.gray}
            circleBg={buttonColors.white}
            FirstSvg={Arrow}
            SecondSvg={Fingers}
            border={true}
            redirectTo={redirectOne}
          />
          {TwoButtons && (
            <Button
              label={buttonTwoText!}
              buttonBg={buttonColors.white}
              circleBg={buttonColors.gray}
              FirstSvg={Arrow}
              SecondSvg={Eye}
              border={false}
              redirectTo={redirectTwo!}
            />
          )}
        </div>
      </div>
    </div>
  );
}

import Button from "../Button/Button";
import { buttonColors } from "../Button/Button";
import { useRef, MutableRefObject, useEffect } from "react";
import HeaderHeading from "./HeaderHeading";
import { pageHeadRevealAnimation } from "./pageHeadAnimations";
import Arrow from "@/components/icons/Arrow";
import Fingers from "@/components/icons/Fingers";
import Eye from "@/components/icons/Eye";

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
  indexHero,
  redirectOne,
  redirectTwo,
}: PageHeaderProps) {
  const heroParaRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    pageHeadRevealAnimation(heroParaRef.current!);
  }, []);

  return (
    <div>
      <HeaderHeading
        HeroHeadingText={headText}
        startHighlight={startHighlight}
        endHighlight={endHighlight}
        indexHero={indexHero}
      />
      <div ref={heroParaRef} className="flex flex-col gap-5 w-full">
        <div className="md:w-[40%] sm:w-[50%] w-full mt-10 font-general text-whiteShade md:text-[20px] sm:text-[18px] text-[15px]">
          {headDesc}
        </div>
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

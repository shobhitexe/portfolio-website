import Button from "../Button/Button";
import { buttonColors } from "../Button/Button";
import { useRef, MutableRefObject, useEffect } from "react";
import HeaderHeading from "./HeaderHeading";
import { pageHeadRevealAnimation } from "./pageHeadAnimations";

type PageHeaderProps = {
  headText: string;
  headDesc: string;
  TwoButtons?: boolean;
  SvgOne: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  SvgTwo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  SvgThree?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  SvgFour?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  buttonOneCircleBg: buttonColors;
  buttonOneBtnBg: buttonColors;
  buttonTwoCircleBg?: buttonColors;
  buttonTwoBtnBg?: buttonColors;
  buttonOneText: string;
  buttonTwoText?: string;
  startHighlight?: number;
  endHighlight?: number;
  indexHero: boolean;
};

export default function PageHeader({
  headText,
  headDesc,
  TwoButtons = false,
  SvgOne,
  SvgTwo,
  SvgThree,
  SvgFour,
  buttonOneCircleBg,
  buttonOneBtnBg,
  buttonTwoCircleBg,
  buttonTwoBtnBg,
  buttonOneText,
  buttonTwoText,
  startHighlight,
  endHighlight,
  indexHero,
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
            buttonBg={buttonOneBtnBg}
            circleBg={buttonOneCircleBg}
            FirstSvg={SvgOne}
            SecondSvg={SvgTwo}
            border={buttonOneBtnBg === buttonColors.gray ? true : false}
          />
          {TwoButtons && (
            <Button
              label={buttonTwoText!}
              buttonBg={buttonTwoBtnBg!}
              circleBg={buttonTwoCircleBg!}
              FirstSvg={SvgThree!}
              SecondSvg={SvgFour!}
              border={buttonOneBtnBg === buttonColors.gray ? true : false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

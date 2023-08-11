import Button from "../UI/Button/Button";
import { buttonColors } from "../UI/Button/Button";
import Rocket from "../icons/Rocket";
import RocketFill from "../icons/RocketFill";
import HeroHeading from "./HeroHeading";
import Arrow from "../icons/Arrow";
import Fingers from "../icons/Fingers";
import { useRef, useEffect, MutableRefObject } from "react";
import { heroRevealAnimation } from "./HeroAnimations";

export default function Hero() {
  const buttonRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const heroParaRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    heroRevealAnimation(buttonRef.current!, heroParaRef.current!);
  }, []);

  return (
    <div className={"flex relative flex-col mt-[170px] w-[95%] mx-auto"}>
      <div ref={buttonRef} className={`flex`}>
        <Button
          label="Available for work"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          border={true}
          FirstSvg={Rocket}
          SecondSvg={RocketFill}
        />
      </div>
      <HeroHeading />
      <div ref={heroParaRef} className="flex flex-col gap-5 w-full">
        <div className="md:w-[40%] sm:w-[50%] w-full mt-10 font-general text-whiteShade md:text-[20px] sm:text-[18px] text-[15px]">
          Crafting user-friendly web applications and automated bots and
          dabbling in the world of Web3. Always pushing code boundaries and
          finding creative solutions.
        </div>

        <Button
          label="Contact Me"
          buttonBg={buttonColors.white}
          circleBg={buttonColors.gray}
          FirstSvg={Arrow}
          SecondSvg={Fingers}
        />
      </div>
    </div>
  );
}

import Button from "../../UI/Button/Button";
import { buttonColors } from "../../UI/Button/Button";
import Rocket from "../../icons/Rocket";
import RocketFill from "../../icons/RocketFill";
import { useRef, useEffect, MutableRefObject } from "react";
import { heroRevealAnimation } from "./HeroAnimations";
import PageHeader from "../../UI/pageHeading/PageHeader";

export default function Hero() {
  const buttonRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    heroRevealAnimation(buttonRef.current!);
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
      <PageHeader
        headText="FULL STACK - JAVASCRIPT DEVELOPER"
        headDesc="Crafting user-friendly web applications and automated bots and
          dabbling in the world of Web3. Always pushing code boundaries and
          finding creative solutions."
        buttonOneText="Contact Me"
        indexHero={true}
      />
    </div>
  );
}

import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { buttonColors } from "../UI/Button/Button";
import Rocket from "../icons/Rocket";
import RocketFill from "../icons/RocketFill";
import { RootState } from "@/store/rootReducer";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);

  const textRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const HeroHeadingText: string = "FULL STACK JAVASCRIPT/TYPESCRIPT DEVELOPER";

  useEffect(() => {
    Array.from(textRef.current?.children!).map((span, idx) => {
      console.log(span);

      gsap.fromTo(
        span,
        { translateY: -200, rotationX: 180, opacity: 0 },
        {
          translateY: 0,
          opacity: 1,
          rotateX: 0,
          duration: idx * 0.03,
          z: "-50",
        }
      );
    });
  }, []);

  return (
    <div className={"flex relative flex-col mt-[200px] w-[95%] mx-auto"}>
      <div className={`flex ${isNavOpen && "-z-50"}`}>
        <Button
          label="Available for work"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          border={true}
          FirstSvg={Rocket}
          SecondSvg={RocketFill}
        />
      </div>

      <div
        ref={textRef}
        className={`w-full text-whiteShade font-satoshi text-[7vw] mt-5 lg:leading-[110px] md:leading-[90px] sm:leading-[70px] ss:leading-[60px] xs:leading-[40px] leading-[30px] font-semibold ${
          isNavOpen && "-z-50"
        }`}
      >
        {Array.from(HeroHeadingText).map((text, idx) => {
          return (
            <span
              className={`${
                idx <= 10 || idx >= 32 ? "text-green-500" : "text-whiteShade"
              } inline-block`}
              key={idx}
            >
              {text}
              {idx === 3 && <div className=""></div>}
              {text === " " && <>&nbsp;</>}
            </span>
          );
        })}
      </div>
    </div>
  );
}

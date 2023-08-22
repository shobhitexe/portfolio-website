import { useRef, MutableRefObject, useEffect } from "react";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

type HeaderHeadingProps = {
  HeroHeadingText: string;
  startHighlight?: number;
  endHighlight?: number;
  indexHero: boolean;
};

export default function HeaderHeading({
  HeroHeadingText,
  startHighlight = 10,
  endHighlight = 23,
  indexHero,
}: HeaderHeadingProps) {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);
  const textRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    Array.from(textRef.current?.children!).map((span, idx) => {
      if (Boolean(indexHero)) {
        gsap.fromTo(
          span,
          { translateY: idx <= 23 ? "-300" : "-250" },
          {
            translateY: 0,
            delay: idx <= 23 ? 0.04 : 0.1,
            duration: idx <= 23 ? idx * 0.05 + 0.4 : (idx - 23) * 0.1,
          }
        );
      } else {
        gsap.fromTo(
          span,
          { translateY: "-300" },
          {
            translateY: 0,
            delay: 0.04,
            duration: idx * 0.05 + 0.4,
          }
        );
      }
    });
  }, [indexHero]);
  return (
    <div
      ref={textRef}
      className={`w-full text-whiteShade overflow-hidden font-satoshi text-[7vw] mt-5 lg:leading-[110px] md:leading-[90px] sm:leading-[70px] ss:leading-[60px] xs:leading-[40px] leading-[30px] font-semibold ${
        isNavOpen && "-z-50"
      }`}
    >
      {" "}
      {Array.from(HeroHeadingText).map((text, idx) => {
        return (
          <span
            className={`${
              idx <= startHighlight || idx >= endHighlight
                ? "text-green-500"
                : "text-whiteShade"
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
  );
}

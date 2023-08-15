import { useRef, useEffect, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export enum SlideTextColors {
  white = "text-whiteShade",
  gray = "text-grayShade",
  black = "text-black",
}

type SlideTextProps = {
  label: string;
  style?: string;
  highlightedText?: number;
  colorOne?: SlideTextColors;
  colorTwo?: SlideTextColors;
};

export default function SlideText({
  label,
  style,
  highlightedText,
  colorOne,
  colorTwo,
}: SlideTextProps) {
  const textRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    Array.from(textRef.current?.children!).map((text, idx) => {
      gsap.fromTo(
        text,
        { opacity: 0, translateX: idx * 10 },
        {
          opacity: 1,
          translateX: 0,
          duration: idx * 0.04,
          delay: 0.3,
          scrollTrigger: {
            trigger: text,
            start: "20% bottom",
            end: "30% bottom",
            scrub: 3,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={textRef} className={`font-satoshi flex ${style}`}>
      {Array.from(label).map((text, idx) => {
        return (
          <div
            key={idx}
            className={`${idx < highlightedText! ? colorOne : colorTwo}`}
          >
            {text}
            {text === " " && <div>&nbsp;</div>}
          </div>
        );
      })}
    </div>
  );
}

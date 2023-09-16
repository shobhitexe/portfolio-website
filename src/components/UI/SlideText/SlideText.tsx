import { useRef, MutableRefObject } from "react";

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
  start?: string;
  end?: string;
};

export default function SlideText({
  label,
  style,
  highlightedText,
  colorOne,
  colorTwo,
  start = "20% bottom",
  end = "20% bottom",
}: SlideTextProps) {
  const textRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <div className={`font-satoshi flex relative ${style}`}>
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

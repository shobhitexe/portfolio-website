import { motion } from "framer-motion";
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
}: SlideTextProps) {
  const textRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <div className={`font-satoshi flex relative ${style}`}>
      {Array.from(label).map((text, idx) => {
        return (
          <motion.div
            layout
            initial={{ translateX: idx * 2, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.2,
              stiffness: 70,
              type: "spring",
            }}
            key={idx}
            className={`${idx < highlightedText! ? colorOne : colorTwo}`}
          >
            {text}
            {text === " " && <div>&nbsp;</div>}
          </motion.div>
        );
      })}
    </div>
  );
}

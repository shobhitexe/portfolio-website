import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export enum buttonColors {
  white = "bg-whiteShade",
  gray = "bg-greyBg",
}

type ButtonProps = {
  label: string;
  buttonBg: buttonColors;
  circleBg: buttonColors;
  border?: boolean;
  redirectTo: string;
  FirstSvg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  SecondSvg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Button({
  label,
  buttonBg,
  circleBg,
  border = false,
  FirstSvg,
  SecondSvg,
  redirectTo,
}: ButtonProps) {
  const [btnTransform, setBtnTransform] = useState<{
    svg1: { transform: number; opacity: number };
    svg2: { transform: number; opacity: number };
  }>({
    svg1: {
      transform: 0,
      opacity: 1,
    },
    svg2: {
      transform: 20,
      opacity: 0,
    },
  });

  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0 }}
      whileHover={{ rotate: -5 }}
      transition={{
        duration: 0.1,
        type: "spring",
        damping: 6,
      }}
      whileInView={{ opacity: 1 }}
      onMouseOver={() =>
        setBtnTransform({
          svg1: { transform: -20, opacity: 0 },
          svg2: { transform: 0, opacity: 1 },
        })
      }
      onMouseLeave={() =>
        setBtnTransform({
          svg1: { transform: 0, opacity: 1 },
          svg2: { transform: 10, opacity: 0 },
        })
      }
    >
      <Link
        href={redirectTo}
        target={redirectTo === "/Resume" ? "_blank" : ""}
        className={`flex items-center px-3 gap-2 py-1 cursor-pointer sm:text-[15px] text-[12px] rounded-3xl font-general w-fit ${
          border ? "border border-white" : ""
        } ${buttonBg}`}
      >
        <h1
          className={`font-general ${
            buttonBg === buttonColors.gray ? "text-whiteShade" : "text-greyBg"
          }`}
        >
          {label}
        </h1>
        <div
          className={`flex flex-col w-6 h-6 ${circleBg} rounded-full relative
        `}
        >
          <motion.div
            initial={{ translateY: 0, opacity: 1 }}
            animate={{
              translateY: btnTransform.svg1.transform,
              opacity: btnTransform.svg1.opacity,
            }}
            transition={{
              duration: 0.1,
              type: "spring",
              damping: 6,
            }}
          >
            <FirstSvg
              width={24}
              height={24}
              color={circleBg === buttonColors.gray ? "white" : "black"}
              className="p-1 absolute rounded-full"
            />
          </motion.div>
          <motion.div
            initial={{ translateY: 0, opacity: 0 }}
            animate={{
              translateY: btnTransform.svg2.transform,
              opacity: btnTransform.svg2.opacity,
            }}
          >
            <SecondSvg
              width={24}
              height={24}
              color={circleBg === buttonColors.gray ? "white" : "black"}
              className="p-1 rounded-full absolute"
            />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

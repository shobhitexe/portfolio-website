import { motion } from "framer-motion";
import Link from "next/link";

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
  function handleButtonAnimation() {}

  function handleButtonLeaveAnimation() {}

  return (
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: -5 }}
      transition={{
        delay: 0.1,
        duration: 0.1,
        type: "spring",
        damping: 7,
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Link
        href={redirectTo}
        target={redirectTo === "/Resume" ? "_blank" : ""}
        onMouseEnter={handleButtonAnimation}
        onMouseLeave={handleButtonLeaveAnimation}
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
          <FirstSvg
            width={24}
            height={24}
            color={circleBg === buttonColors.gray ? "white" : "black"}
            className="p-1 absolute rounded-full"
          />
          <SecondSvg
            width={24}
            height={24}
            color={circleBg === buttonColors.gray ? "white" : "black"}
            className="p-1 rounded-full absolute translate-y-2 opacity-0"
          />
        </div>
      </Link>
    </motion.div>
  );
}

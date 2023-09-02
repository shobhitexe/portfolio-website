import { gsap } from "gsap";
import { useRef, MutableRefObject } from "react";
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
  const buttonRef: MutableRefObject<HTMLAnchorElement | null> = useRef(null);
  const iconRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  function handleButtonAnimation() {
    gsap.to(buttonRef.current, { rotateZ: -5 });

    const timeline = gsap.timeline();
    timeline
      .to(iconRef.current?.children[0]!, {
        opacity: 0,
        translateY: -10,
        duration: 0.1,
      })
      .to(iconRef.current?.children[1]!, {
        opacity: 1,
        duration: 0.1,
        translateY: 0,
      });
  }

  function handleButtonLeaveAnimation() {
    gsap.to(buttonRef.current, { rotateZ: 0 });

    const timeline = gsap.timeline();
    timeline
      .to(iconRef.current?.children[1]!, {
        opacity: 0,
        translateY: 10,
        duration: 0.1,
      })
      .to(iconRef.current?.children[0]!, {
        opacity: 1,
        translateY: 0,
        duration: 0.1,
      });
  }

  return (
    <Link
      href={redirectTo}
      target={redirectTo === "/Resume" ? "_blank" : ""}
      ref={buttonRef}
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
        ref={iconRef}
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
  );
}

import Arrow from "@/components/icons/Arrow";
import Fingers from "@/components/icons/Fingers";
import { gsap, Elastic } from "gsap";
import { useRef, MutableRefObject } from "react";

export enum buttonColors {
  white = "bg-whiteShade",
  gray = "bg-greyBg",
}

type ButtonProps = {
  label: string;
  buttonBg: buttonColors;
  circleBg: buttonColors;
};

export default function Button({ label, buttonBg, circleBg }: ButtonProps) {
  const buttonRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
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
    <div
      ref={buttonRef}
      onMouseEnter={handleButtonAnimation}
      onMouseLeave={handleButtonLeaveAnimation}
      className={`flex items-center px-3 gap-2 py-1 cursor-pointer rounded-3xl ${buttonBg}`}
    >
      <h1 className="font-general">{label}</h1>
      <div
        ref={iconRef}
        className={`flex flex-col w-6 h-6 ${circleBg} rounded-full relative`}
      >
        <Arrow
          width={24}
          height={24}
          color={circleBg === buttonColors.gray ? "white" : "black"}
          className="p-1 absolute rounded-full"
        />
        <Fingers
          width={24}
          height={24}
          color={circleBg === buttonColors.gray ? "white" : "black"}
          className="p-1 rounded-full absolute translate-y-2 opacity-0"
        />
      </div>
    </div>
  );
}

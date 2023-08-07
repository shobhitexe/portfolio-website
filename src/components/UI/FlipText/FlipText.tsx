import { MutableRefObject, useRef } from "react";
import { gsap } from "gsap";

type FlipTextProps = {
  title: string;
  size: string;
};

export default function FlipText({ title, size }: FlipTextProps) {
  const flipTextRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  function handleFlipTextAnimationEnter() {
    gsap.to(flipTextRef.current?.children[0]!, {
      translateY: -15,
      rotateX: 90,
      opacity: 0,
      duration: 0.2,
    });

    gsap.to(flipTextRef.current?.children[1]!, {
      translateY: 0,
      rotateX: 0,
      opacity: 1,
      duration: 0.2,
    });
  }

  function handleFlipTextAnimationExit() {
    gsap.to(flipTextRef.current?.children[0]!, {
      translateY: 0,
      rotateX: 0,
      opacity: 1,
      duration: 0.2,
    });

    gsap.to(flipTextRef.current?.children[1]!, {
      translateY: 15,
      rotateX: -90,
      opacity: 0,
      duration: 0.2,
    });
  }

  return (
    <div
      onMouseEnter={handleFlipTextAnimationEnter}
      onMouseLeave={handleFlipTextAnimationExit}
      ref={flipTextRef}
      className={`${size} cursor-pointer opacity-1 px-10 relative w-10 translate-y-0`}
    >
      <h1 className="absolute">{title}</h1>
      <h1 className="text-red-600 opacity-0 translate-y-1 absolute">{title}</h1>
    </div>
  );
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MutableRefObject, useEffect, useRef } from "react";

type UpRevealTextProps = { label: string; styles?: string; YShift?: number };

export default function UpRevealText({
  label,
  styles,
  YShift = 150,
}: UpRevealTextProps) {
  const textRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      textRef.current,
      { translateY: YShift, opacity: 0 },
      {
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 2,
          start: "10% bottom",
          end: "30% bottom",
        },
      }
    );
  }, [YShift]);

  return (
    <div ref={textRef} className={`font-general ${styles}`}>
      {label}
    </div>
  );
}

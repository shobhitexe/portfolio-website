import React, { MutableRefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export const CustomCursor = () => {
  const cursorRef: MutableRefObject<HTMLImageElement | null> = useRef(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <Image
      src={"images/cursor/planet.svg"}
      ref={cursorRef}
      alt="cursor"
      className="flex absolute z-10"
      width={40}
      height={40}
    />
  );
};

"use client";

import { MutableRefObject, useRef } from "react";
import { useRouter } from "next/navigation";

type FlipTextProps = {
  title: string;
  style?: string;
  href?: string;
  openInNew?: boolean;
};

export default function FlipText({
  title,
  style,
  href,
  openInNew = false,
}: FlipTextProps) {
  const flipTextRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (!href) return;
        if (openInNew) {
          window.open(href, "_blank");
        } else {
          router.push(href);
        }
      }}
      ref={flipTextRef}
      className={`${style} cursor-pointer opacity-1 px-10 relative w-10 translate-y-0`}
    >
      <h1 className="absolute">{title}</h1>
      <h1 className="text-red-600 opacity-0 translate-y-1 absolute">{title}</h1>
    </div>
  );
}

import { MutableRefObject, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

export enum RevealColorColors {
  lightGrey = "bg-lightGray",
}

type RevealImageProps = {
  image: string;
  alt: string;
  style?: string;
  cover: RevealColorColors;
};

export default function RevealImage({
  image,
  alt,
  style,
  cover,
}: RevealImageProps) {
  const imageRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imageRef.current?.children[0]!, {
      translateX: -700,
      delay: 1,
      scrollTrigger: {
        trigger: imageRef.current?.children[0]!,
        scrub: 5,
        start: "50% bottom",
        end: "50% bottom",
      },
    });
  }, []);

  return (
    <div ref={imageRef} className="overflow-hidden rounded-2xl relative">
      <div className={`absolute w-full h-full ${cover}`}></div>
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={1000}
        className={`rounded-2xl cursor-pointer hover:scale-105 duration-300 ${style}`}
      />
    </div>
  );
}

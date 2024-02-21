"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export enum RevealColorColors {
  lightGrey = "bg-lightGray",
}

type RevealImageProps = {
  image: string;
  alt: string;
  style?: string;
  cover: RevealColorColors;
  delay?: number;
};

export default function RevealImage({
  image,
  alt,
  style,
  cover,
  delay = 0.4,
}: RevealImageProps) {
  return (
    <div className="overflow-hidden rounded-2xl relative">
      <motion.div
        initial={{ translateX: 0 }}
        whileInView={{ translateX: "100%" }}
        transition={{
          delay: delay,
          duration: 0.5,
          stiffness: 50,
          damping: 15,
          type: "spring",
        }}
        className={`absolute w-full h-full ${cover}`}
      ></motion.div>
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

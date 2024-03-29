"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { showCaseImages, showCaseImagesType } from "./showCaseConstants";
import { motion } from "framer-motion";

export default function Showcase() {
  const [gridImages, setGridImages] = useState<showCaseImagesType[][]>([]);

  useEffect(() => {
    const imagesRecurr = [];

    for (let i = 0; i < 10; i++) {
      imagesRecurr.push(...showCaseImages.sort(() => Math.random() - 0.5));
    }

    const showCaseImagesRows = [
      Array.from(new Set([...imagesRecurr.sort(() => Math.random() - 0.5)])),
      Array.from(new Set([...imagesRecurr.sort(() => Math.random() - 0.5)])),
      Array.from(new Set([...imagesRecurr.sort(() => Math.random() - 0.5)])),
    ];

    setGridImages(showCaseImagesRows.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="overflow-hidden bg-whiteShade bg-opacity-20 mt-40 sm:h-screen h-[50vh]">
      <div className="flex sm:gap-5 gap-1">
        {[0, 1, 2]
          .sort(() => Math.random() - 0.5)
          .map((num, indx) => (
            <motion.div
              key={num}
              className={`flex flex-col sm:gap-2 ss:gap-3 gap-1`}
            >
              {gridImages[num]?.map((img, idx) => (
                <motion.div
                  initial={{
                    translateY: `${indx === 1 ? "-50%" : "50%"}`,
                    opacity: 0,
                  }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.5,
                    stiffness: 50,
                    damping: 10,
                    type: "spring",
                  }}
                  key={Math.random() + num + idx}
                  className={`shadow-xl  ${
                    num === 2
                      ? "max-sm:translate-x-[50%]"
                      : num === 0
                      ? "max-sm:translate-x-[-50%]"
                      : ""
                  } max-sm:scale-200`}
                >
                  <Image
                    src={img.image}
                    alt={img.alt + num}
                    width={500}
                    height={500}
                    className={`rounded-md w-auto h-auto`}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
      </div>
    </div>
  );
}

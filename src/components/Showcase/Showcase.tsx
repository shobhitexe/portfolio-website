import Image from "next/image";
import { useRef, useEffect, MutableRefObject, useState } from "react";
import {
  showCaseImages,
  showCaseImagesType,
} from "@/constants/Showcase/showCaseConstants";
import { scrollShowcaseAnimation } from "./showCaseAnimations";

export default function Showcase() {
  const gridRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const [gridImages, setGridImages] = useState<showCaseImagesType[][]>([]);

  useEffect(() => {
    scrollShowcaseAnimation(gridRef.current!);

    const imagesRecurr = [];

    for (let i = 0; i < 8; i++) {
      imagesRecurr.push(...showCaseImages);
    }

    const showCaseImagesRows = [
      [...imagesRecurr.sort(() => Math.random() - 0.5)],
      [...imagesRecurr.sort(() => Math.random() - 0.5)],
      [...imagesRecurr.sort(() => Math.random() - 0.5)],
    ];

    setGridImages(showCaseImagesRows);
  }, []);

  return (
    <div className="overflow-hidden bg-whiteShade bg-opacity-20 mt-40 sm:h-screen ss:h-[400px] xs:h-[400px] h-[200px]">
      <div ref={gridRef} className="flex sm:gap-5 gap-1">
        {[0, 1, 2].map((num) => (
          <div key={num} className={` flex flex-col sm:gap-5 gap-2`}>
            {gridImages[num]?.map((img, idx) => (
              <div key={Math.random() + num + idx}>
                <Image
                  src={img.image}
                  alt={img.alt + num}
                  width={500}
                  height={500}
                  className="rounded-md w-auto h-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

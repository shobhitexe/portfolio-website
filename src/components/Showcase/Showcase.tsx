import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef, useEffect, MutableRefObject, useState } from "react";
import { gsap } from "gsap";
import {
  showCaseImages,
  showCaseImagesType,
} from "@/constants/Showcase/showCaseConstants";

export default function Showcase() {
  const gridRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const [gridImages, setGridImages] = useState<showCaseImagesType[][]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // console.log(gridRef.current);
  }, []);

  useEffect(() => {
    const showCaseImagesRows = [
      [...showCaseImages.sort(() => Math.random() - 0.5)],
      [...showCaseImages.sort(() => Math.random() - 0.5)],
      [...showCaseImages.sort(() => Math.random() - 0.5)],
    ];

    setGridImages(showCaseImagesRows);
  }, []);

  return (
    <div className="overflow-hidden bg-black mt-40">
      <div ref={gridRef} className="flex gap-5">
        {[0, 1, 2].map((num) => (
          <div
            key={num}
            className={`${
              num === 1 ? "-translate-y-28" : "-translate-y-14"
            } flex flex-col gap-10`}
          >
            {gridImages[num]?.map((img) => (
              <div key={img.alt}>
                <Image
                  src={img.image}
                  alt={img.alt}
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

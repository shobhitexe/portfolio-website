import Image from "next/image";
import { useEffect, MutableRefObject, useState } from "react";
import { showCaseImages, showCaseImagesType } from "./showCaseConstants";

export default function Showcase() {
  const [gridImages, setGridImages] = useState<showCaseImagesType[][]>([]);

  useEffect(() => {
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
    <div className="overflow-hidden bg-whiteShade bg-opacity-20 mt-40 sm:h-screen h-[50vh]">
      <div className="flex sm:gap-5 gap-1">
        {[0, 1, 2].map((num) => (
          <div
            key={num}
            className={`flex flex-col sm:gap-4 ss:gap-16 xs:gap-16 gap-10`}
          >
            {gridImages[num]?.map((img, idx) => (
              <div
                key={Math.random() + num + idx}
                className={`shadow-xl  ${
                  num === 2
                    ? "max-sm:translate-x-[50%]"
                    : num === 0
                    ? "max-sm:translate-x-[-50%]"
                    : ""
                } max-sm:scale-150`}
              >
                <Image
                  src={img.image}
                  alt={img.alt + num}
                  width={500}
                  height={500}
                  className={`rounded-md w-auto h-auto`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

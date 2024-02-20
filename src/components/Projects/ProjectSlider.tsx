"use client";

import { useEffect, useState } from "react";
import {
  AllWorksData,
  AllWorksType,
} from "../Portfolio/AllWorks/AllWorksConstants";
import Label, { labelColors } from "../ui/Label/Label";
import Link from "next/link";
import SlideText from "../ui/SlideText/SlideText";
import Image from "next/image";

export default function ProjectSlider({
  currPage,
}: {
  currPage: string | string[] | undefined;
}) {
  const [sliderData, setSliderData] = useState<AllWorksType[]>(AllWorksData);

  useEffect(() => {
    setSliderData(
      AllWorksData.sort(() => Math.random() - 0.5).filter(
        (data) => data.alt !== currPage
      )
    );
  }, [currPage]);

  return (
    <div className="mt-20 flex flex-col w-[95%] mx-auto">
      <div className="flex justify-between items-start">
        <Label title="Other works" labelBg={labelColors.green} />
        <h1 className="font-satoshi md:text-[40px] sm:text-[30px] text-[18px] text-whiteShade">
          CHECK OUT SOME MORE
        </h1>
      </div>
      <div className="flex mt-10 gap-5 sm:flex-row flex-col">
        {sliderData.map((data, idx) => {
          if (idx > 2) return;

          return (
            <div key={data.alt}>
              <div key={data.alt} className="flex flex-col gap-5">
                <Image
                  src={data.image}
                  alt={data.alt}
                  width={1280}
                  height={720}
                  className="rounded-xl"
                />
                <div className="flex items-center justify-between">
                  <SlideText
                    label={data.title}
                    style="text-whiteShade md:text-[20px] text-[17px] font-medium"
                  />
                  <Link href={`/projects/${data.alt}`}>
                    <Label
                      title="View"
                      labelBg={labelColors.transparant}
                      styles="hover:bg-whiteShade duration-500 hover:text-greyBg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

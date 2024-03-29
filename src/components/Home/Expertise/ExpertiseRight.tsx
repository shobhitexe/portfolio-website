"use client";

import Image from "next/image";
import { expertiseCards } from "./ExpertiseConstants";
import Label, { labelColors } from "../../ui/Label/Label";

export default function ExpertiseRight() {
  return (
    <div className="flex flex-col md:w-[60%]">
      {expertiseCards.map((card, idx) => {
        return (
          <div
            key={card.title}
            className={`md:w-[80%] sticky border border-whiteShade border-opacity-30 mx-auto h-full flex flex-col bg-greyBg gap-10 mt-5 ss:py-10 max-ss:pb-7 max-ss:pt-3 px-5 rounded-2xl text-whiteShade`}
            style={{ top: String(20 + idx * 2) + "%" }}
          >
            <div className="flex ss:flex-row flex-col ss:gap-7">
              <Image
                src={card.image}
                alt={card.title}
                width={100}
                height={100}
                className="p-5"
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-satoshi text-[25px] font-medium">
                  {card.title}
                </h1>
                <div className="flex gap-3 flex-wrap">
                  {card.tags.map((tag) => {
                    return (
                      <Label
                        title={tag}
                        key={tag}
                        labelBg={labelColors.transparant}
                        styles={`border border-whiteShade text-whiteShade`}
                      />
                    );
                  })}
                </div>
                <p className="font-general mt-10">{card.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

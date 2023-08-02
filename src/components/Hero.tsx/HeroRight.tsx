import RoundedCorner from "../icons/RoundedCorner";
import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="absolute h-screen right-0 bg-blackShade w-[300px] md:flex hidden flex-col gap-10 z-10">
      <RoundedCorner
        width={50}
        height={50}
        className="absolute right-[300px] top-[11px] rotate-90"
      />
      <div className="bg-skin rounded-full mt-5 text-center text-white flex cursor-pointer items-center justify-center w-52 font-matter text-[20px] h-52 mx-auto">
        Lorem ipsum
      </div>
      <div className="relative mx-auto border cursor-pointer w-52 h-52 rounded-3xl">
        <Image
          src={"/images/hero/heroSide.png"}
          width={208}
          height={208}
          alt="portfolio"
          className="rounded-3xl"
        />
        <h1 className="font-matter absolute top-5 bg-white px-3 py-1 rounded-3xl left-5">
          Portfolio
        </h1>
      </div>
      <div className="w-52 h-52 bg-green-500 mx-auto rounded-3xl cursor-pointer"></div>
    </div>
  );
}

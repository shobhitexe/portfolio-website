import Image from "next/image";
import HeroRight from "./HeroRight";

export default function HeroContainer() {
  return (
    <div className="flex relative h-screen bg-heroBg bg-fixed bg-cover">
      <HeroRight />
      <div className=" bg-blackShade w-full h-full opacity-50 "></div>
      <div className="absolute bg-blackShade w-full h-5 bottom-0"></div>
      <div className="absolute bg-blackShade h-full w-3 bottom-0 left-0"></div>
    </div>
  );
}

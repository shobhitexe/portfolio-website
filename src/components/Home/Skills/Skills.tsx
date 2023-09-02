import { skills } from "./SkillsConstants";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="mt-28 flex flex-col mx-auto items-center gap-10">
      <h1 className="font-satoshi text-whiteShade text-[40px] text-center">
        Tech Stack
      </h1>
      <div className="flex sm:w-[80%] justify-center flex-wrap">
        {skills.map((data) => (
          <div key={data.title} className="border border-whiteShade py-5 px-10">
            <Image
              src={data.logo}
              alt={data.title}
              width={100}
              height={100}
              className="sm:w-20 w-10 sm:h-20 h-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

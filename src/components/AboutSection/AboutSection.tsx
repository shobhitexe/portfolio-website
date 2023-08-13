import { AboutSectionLinks } from "@/constants/AboutSection/AboutSectionConstants";
import Label, { labelColors } from "../UI/Label/Label";
import Image from "next/image";
import Button from "../UI/Button/Button";
import { buttonColors } from "../UI/Button/Button";
import Arrow from "../icons/Arrow";
import Eye from "../icons/Eye";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  imageRevealAnimation,
  paragraphsRevealAnimation,
} from "./AboutSectionAnimations";

export default function AboutSection() {
  const paraRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const imageRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    paragraphsRevealAnimation(paraRef.current!);
    imageRevealAnimation(imageRef.current!);
  }, []);

  return (
    <div className="text-white mt-28 w-[90%] mx-auto flex md:flex-row flex-col items-stretch md:gap-40 gap-10 justify-center">
      <div className="flex flex-col items-stretch justify-between ">
        <Label title="About Me" labelBg={labelColors.green} />
        <div className="flex flex-col gap-5">
          <h1 className="font-satoshi text-[20px]">Social Links</h1>
          <div className="flex gap-3">
            {AboutSectionLinks.map((link) => (
              <Label
                title={link.title}
                labelBg={labelColors.transparant}
                key={link.title}
                styles="hover:bg-whiteShade hover:text-greyBg duration-500"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center gap-10">
        <div ref={imageRef} className="rounded-full">
          <Image
            src="/images/about/shobhitexe.jpeg"
            alt="pfp"
            width={150}
            height={150}
            className="rounded-full object-contain"
          />
        </div>

        <div ref={paraRef} className="flex flex-col w-fit gap-5">
          <h1 className="font-general font-medium text-whiteShade">
            Hello, I&apos;m Shobhit, a dedicated freelance web designer and
            skilled developer based in parts unknown. I take pride in crafting
            exceptional projects. My expertise encompasses JavaScript and
            TypeScript, including proficiency in React, Next.js, Express, and
            Node.js. By blending design and code, I bring digital visions to
            life with excellence.
          </h1>
          <p className="font-general text-whiteShade">
            Driven by a passion for technology and a keen focus on web design
            and as a novice fullstack developer, I shape captivating digital
            experiences that generate value for my clients and their customers.
            I firmly believe in a collaborative approach to my work, working
            closely with my clients to ensure that each project caters to their
            unique needs and goes beyond their expectations.
          </p>
          <Button
            label="Read More"
            buttonBg={buttonColors.gray}
            circleBg={buttonColors.white}
            FirstSvg={Arrow}
            border={true}
            SecondSvg={Eye}
          />
        </div>
      </div>
    </div>
  );
}

import RoundedCorner from "../icons/RoundedCorner";
import Image from "next/image";
import { useEffect, useRef, MutableRefObject } from "react";
import {
  animatePortfolioButtonIn,
  animatePortfolioButtonHover,
  animateResumeDivIn,
  animateResumeButtonHover,
  animateGitDiv,
} from "./HeroAnimations";
import Link from "next/link";

export default function HeroRight() {
  const portfolioButtonDiv: MutableRefObject<HTMLHeadingElement | null> =
    useRef(null);
  const portfolioPara: MutableRefObject<HTMLParagraphElement | null> =
    useRef(null);
  const resumeDiv: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const resumeButton: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const gitDiv: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    animatePortfolioButtonIn(portfolioButtonDiv.current!);
    animateResumeDivIn(resumeDiv.current!);
  }, []);

  function handlePortfolioButtonHover() {
    animatePortfolioButtonHover(
      portfolioButtonDiv.current!,
      portfolioPara.current!
    );
  }

  function handleResumeButtonHover() {
    animateResumeButtonHover(resumeButton.current!, resumeDiv.current!);
  }

  function handleGitDivHover() {
    animateGitDiv(gitDiv.current?.children[0]!, gitDiv.current?.children[1]!);
  }

  return (
    <div className="absolute h-screen right-0 bg-blackShade w-[300px] md:flex hidden flex-col gap-10 z-50">
      <RoundedCorner
        width={50}
        height={50}
        className="absolute right-[300px] top-[11px] rotate-90"
      />
      <div
        ref={gitDiv}
        onMouseEnter={handleGitDivHover}
        className="bg-skin rounded-full flex flex-col mt-5 text-center text-black cursor-pointer items-center justify-center w-52 font-matter text-[18px] h-52 mx-auto"
      >
        <Image
          src={"/images/hero/github.svg"}
          alt="github"
          width={50}
          height={50}
        />
        <span>
          100% Self coded
          <br />
          View Source code
        </span>
      </div>
      <div
        onMouseEnter={handlePortfolioButtonHover}
        className="relative mx-auto border cursor-pointer w-52 h-52 rounded-3xl"
      >
        <Image
          src={"/images/hero/heroSide.png"}
          width={208}
          height={208}
          alt="portfolio"
          className="rounded-3xl"
        />
        <h1
          ref={portfolioButtonDiv}
          className="font-matter absolute top-5 bg-white px-3 py-1 rounded-3xl left-5"
        >
          Portfolio
        </h1>
        <p
          ref={portfolioPara}
          className="absolute font-matter hidden text-black top-16 left-10 w-[80%]"
        >
          Welcome to my portfolio click to view
        </p>
      </div>
      <div
        ref={resumeDiv}
        onMouseEnter={handleResumeButtonHover}
        className="w-52 h-52 bg-green-500 mx-auto rounded-3xl cursor-pointer flex justify-center items-center -rotate-180"
      >
        <div
          ref={resumeButton}
          className="font-matter bg-white px-3 py-2 rounded-3xl flex items-center h-[80%] w-[80%] "
        >
          <Link target="_blank" href={"/Resume"}>
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

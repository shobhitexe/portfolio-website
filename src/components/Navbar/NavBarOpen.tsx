import { navLinks } from "@/constants/navbar/navbarConstants";
import DiagonalArrow from "../icons/DiagonalArrow";
import { useRef, useEffect, MutableRefObject } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  navBarSliderOpenAnimation,
  navLinksEnterAnimation,
  navLinksExitAnimation,
} from "./NavbarAnimations";

export default function NavBarOpen() {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);

  const titleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const navBarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    navBarSliderOpenAnimation(navBarRef.current!, titleRef.current!);
  }, [isNavOpen]);

  return (
    <div className="fixed w-full left-0 sm:h-1/2 h-fit top-3 mx-auto">
      <div
        ref={navBarRef}
        className="bg-black w-[98%] h-full rounded-2xl mx-auto"
      >
        <div
          ref={titleRef}
          className="text-whiteShade font-satoshi h-full sm:grid max-sm:pt-20 grid-cols-5 w-full"
        >
          {navLinks.map((nav, idx) => (
            <div
              onMouseEnter={() =>
                navLinksEnterAnimation(titleRef.current!, idx)
              }
              onMouseLeave={() => navLinksExitAnimation(titleRef.current!, idx)}
              className={`text-[30px] cursor-pointer flex flex-row w-full justify-center pb-10 ${
                idx + 1 === navLinks.length ? "" : "border-r"
              } items-end max-sm:border-t border-whiteShade border-opacity-30 pt-10`}
              key={nav.title}
            >
              <Link
                href={nav.link}
                target={nav.link === "Resume" ? "_blank" : ""}
                className="flex flex-row items-center lg:gap-20 md:gap-14 gap-5 relative select-none"
              >
                <h1>{nav.title}</h1>
                <h1 className="text-green-500 opacity-0 translate-y-5 absolute">
                  {nav.title}
                </h1>
                <DiagonalArrow />
                <div className="absolute right-0 translate-x-[-15px] translate-y-[15px] opacity-0">
                  <DiagonalArrow />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

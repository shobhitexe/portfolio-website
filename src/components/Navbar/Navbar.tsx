import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { navLinks } from "@/constants/navbar/navbarConstants";
import RoundedCorner from "../icons/RoundedCorner";
import Link from "next/link";
import { MutableRefObject, useEffect, useRef } from "react";
import {
  navRouteAnimation,
  navbarAnimation,
  navHeadingAnimation,
} from "./NavbarAnimations";

export default function Navbar() {
  const currRoute = useSelector((state: RootState) => state.currRoute.route);
  const navBarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const navHeadingRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    navbarAnimation(navBarRef.current!);
    navHeadingAnimation(navHeadingRef.current!);
  }, []);

  useEffect(() => {
    navRouteAnimation(navHeadingRef.current!);
  }, [currRoute]);

  return (
    <div className="fixed w-full z-40">
      <div className="flex relative">
        <div
          ref={navHeadingRef}
          className="flex flex-col pr-5 pl-10 py-2 rounded-br-3xl bg-blackShade text-white font-matter relative z-40"
        >
          <div className="flex text-[15px]">
            <span>shobhitexe/</span>
            <span>{currRoute.split("/")}</span>
          </div>
          <div className="text-[40px] -mt-3 flex">
            {"Portfolio".split("").map((character, index) => (
              <h1 key={index}>{character}</h1>
            ))}
          </div>
          <RoundedCorner
            width={50}
            height={50}
            className="absolute -right-[48px] top-3"
          />
        </div>
        <div className="bg-blackShade h-3 w-full"></div>

        <div
          ref={navBarRef}
          className="flex absolute p-6 left-[230px] top-6 bg-blackShade font-matter bg-opacity-40 backdrop-blur-sm shadow-md  px-20 gap-10 rounded-3xl py-4"
        >
          {navLinks.map((nav) => (
            <Link
              href={""}
              as={nav.link}
              key={nav.title}
              className="cursor-pointer text-white hover:underline underline-offset-2 "
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import { navLinks } from "./navbarConstants";
import DiagonalArrow from "../icons/DiagonalArrow";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setIsNavOpen } from "@/store/slices/navbarOpen";
import { motion } from "framer-motion";

export default function NavBarOpen() {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ translateY: "-120%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: "-120%", opacity: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        stiffness: 70,
        damping: 13,
        type: "spring",
      }}
      className="bg-black fixed rounded-2xl w-full left-0 sm:h-1/2  top-3 mx-auto"
    >
      <div className="bg-black w-[98%] h-full rounded-2xl mx-auto">
        <div className="text-whiteShade font-satoshi h-full sm:grid max-sm:pt-20 grid-cols-5 w-full">
          {navLinks.map((nav, idx) => (
            <div
              onClick={() => dispatch(setIsNavOpen())}
              className={`sm:text-[30px] text-[25px] cursor-pointer flex flex-row w-full justify-center sm:py-10 py-9 ${
                idx + 1 === navLinks.length ? "" : "sm:border-r"
              } items-end max-sm:border-t border-whiteShade border-opacity-30`}
              key={nav.title}
            >
              <Link
                href={nav.link}
                target={nav.link === "Resume" ? "_blank" : ""}
                className="flex flex-row items-center lg:gap-20 md:gap-14 gap-5 relative select-none hover:-translate-y-5 duration-500 hover:text-green-500"
              >
                <motion.h1
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                  }}
                  exit={{ opacity: 0, translateY: 50 }}
                  transition={{
                    delay: 0.1 * idx + 0.2,
                    duration: 0.5,
                    stiffness: 60,
                    damping: 6,
                    type: "spring",
                  }}
                  className=""
                >
                  {nav.title}
                </motion.h1>
                <DiagonalArrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

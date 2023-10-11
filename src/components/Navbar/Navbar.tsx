import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { buttonColors } from "../UI/Button/Button";
import Button from "../UI/Button/Button";
import NavBarOpen from "./NavBarOpen";
import { useDispatch } from "react-redux";
import { setIsNavOpen } from "@/store/slices/navbarOpen";
import NavBarHeading from "../UI/Heading/NavBarHeading";
import Arrow from "../icons/Arrow";
import Fingers from "../icons/Fingers";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);

  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 2,
        type: "spring",
      }}
      className="fixed top-0 left-0 ss:px-10 px-5 py-5 flex justify-between items-center w-full z-50 bg-greyBg"
    >
      <div className={`z-50 relative`}>
        <NavBarHeading />
      </div>
      <div className="flex items-center sm:gap-5 gap-2">
        <Button
          label="Contact"
          buttonBg={buttonColors.white}
          circleBg={buttonColors.gray}
          FirstSvg={Arrow}
          SecondSvg={Fingers}
          redirectTo="/Contact"
        />
        <div
          onClick={() => {
            dispatch(setIsNavOpen());
          }}
          className={`bg-whiteShade w-8 h-8 justify-center ${
            isNavOpen && "z-[999]"
          } items-center cursor-pointer rounded-full flex flex-col hover:scale-125 duration-1000`}
        >
          <div className="border-b-2 border-black w-4 translate-y-[-2px]"></div>
          <div
            className={` ${
              isNavOpen ? "border-b" : "border-b-[3px]"
            }  border-black w-4 translate-y-[2px]`}
          ></div>
        </div>
      </div>
      <AnimatePresence>{isNavOpen && <NavBarOpen />}</AnimatePresence>
    </motion.div>
  );
}

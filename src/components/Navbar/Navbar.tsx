import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { MutableRefObject, useEffect, useRef } from "react";
import { navBarAnimation, navOpenBtnAnimation } from "./NavbarAnimations";
import { buttonColors } from "../UI/Button/Button";
import Button from "../UI/Button/Button";
import NavBarOpen from "./NavBarOpen";
import { useDispatch } from "react-redux";
import { setIsNavOpen } from "@/store/slices/navbarOpen";
import NavBarHeading from "../UI/Heading/NavBarHeading";

export default function Navbar() {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);
  const navBtnRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const dispatch = useDispatch();

  const navbarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    navBarAnimation(navbarRef.current!);
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 left-0 px-5 py-3 flex justify-between items-center w-full"
    >
      <NavBarHeading />
      <div className="flex items-center sm:gap-5 gap-2">
        <Button
          label="Contact"
          buttonBg={buttonColors.white}
          circleBg={buttonColors.gray}
        />
        <div
          onClick={() => {
            dispatch(setIsNavOpen());
            navOpenBtnAnimation(navBtnRef.current!, isNavOpen);
          }}
          ref={navBtnRef}
          className={`bg-whiteShade w-8 h-8 justify-center items-center cursor-pointer rounded-full flex flex-col hover:scale-125 duration-1000`}
        >
          <div className="border-b-2 border-black w-4 translate-y-[-2px]"></div>
          <div
            className={` ${
              isNavOpen ? "border-b" : "border-b-[3px]"
            }  border-black w-4 translate-y-[2px]`}
          ></div>
        </div>
      </div>
      <NavBarOpen />
    </div>
  );
}

import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { buttonColors } from "../UI/Button/Button";
import Rocket from "../icons/Rocket";
import RocketFill from "../icons/RocketFill";
import { RootState } from "@/store/rootReducer";
import HeroHeading from "./HeroHeading";
import Arrow from "../icons/Arrow";
import Fingers from "../icons/Fingers";

export default function Hero() {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);

  return (
    <div className={"flex relative flex-col mt-[200px] w-[95%] mx-auto"}>
      <div className={`flex ${isNavOpen && "-z-50"}`}>
        <Button
          label="Available for work"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          border={true}
          FirstSvg={Rocket}
          SecondSvg={RocketFill}
        />
      </div>
      <HeroHeading />
      <div className="flex flex-col gap-5 w-full">
        <div className="md:w-[40%] sm:w-[50%] w-full mt-10 font-general text-whiteShade md:text-[20px] sm:text-[18px] text-[15px]">
          Crafting user-friendly web applications and automated bots and
          dabbling in the world of Web3. Always pushing code boundaries and
          finding creative solutions.
        </div>

        <Button
          label="Contact Me"
          buttonBg={buttonColors.white}
          circleBg={buttonColors.gray}
          FirstSvg={Arrow}
          SecondSvg={Fingers}
        />
      </div>
    </div>
  );
}

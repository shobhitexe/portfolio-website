import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";

type HeaderHeadingProps = {
  HeroHeadingText: string;
  startHighlight?: number;
  endHighlight?: number;
};

export default function HeaderHeading({
  HeroHeadingText,
  startHighlight = 10,
  endHighlight = 24,
}: HeaderHeadingProps) {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);

  return (
    <div
      className={`w-full text-whiteShade overflow-hidden font-satoshi text-[7vw] mt-5 lg:leading-[110px] md:leading-[90px] sm:leading-[70px] ss:leading-[60px] xs:leading-[40px] leading-[30px] font-semibold ${
        isNavOpen && "-z-50"
      }`}
    >
      {" "}
      {Array.from(HeroHeadingText).map((text, idx) => {
        return (
          <span
            className={`${
              idx <= startHighlight || idx >= endHighlight
                ? "text-green-500"
                : "text-whiteShade"
            } inline-block`}
            key={idx}
          >
            {text}
            {idx === 3 && <div className=""></div>}
            {text === " " && <>&nbsp;</>}
          </span>
        );
      })}
    </div>
  );
}

import { RootState } from "@/store/rootReducer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type HeaderHeadingProps = {
  HeroHeadingText: string;
  startHighlight?: number;
  endHighlight?: number;
};

export default function HeaderHeading({
  HeroHeadingText,
  startHighlight = 0,
  endHighlight = 3,
}: HeaderHeadingProps) {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);

  return (
    <div
      className={`w-full flex sm:gap-5 gap-2 flex-wrap text-whiteShade overflow-hidden font-satoshi text-[7vw] mt-5 lg:leading-[110px] md:leading-[90px] sm:leading-[70px] ss:leading-[60px] xs:leading-[40px] leading-[30px] font-semibold ${
        isNavOpen && "-z-50"
      }`}
    >
      {" "}
      {HeroHeadingText.split(" ").map((text, idx) => {
        return (
          <div
            className={`${
              idx <= startHighlight || idx >= endHighlight
                ? "text-green-500"
                : "text-whiteShade"
            } flex`}
            key={idx}
          >
            {Array.from(text).map((txt, idx) => (
              <motion.div
                layout
                initial={{ translateY: -3 * idx, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.05 * idx,
                  duration: 1,
                  stiffness: 50,
                  damping: 6,
                  type: "spring",
                }}
                key={idx}
              >
                {txt}
              </motion.div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

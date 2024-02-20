"use client";

import Button from "../../ui/Button/Button";
import { buttonColors } from "../../ui/Button/Button";
import Rocket from "../../icons/Rocket";
import RocketFill from "../../icons/RocketFill";
import PageHeader from "../../ui/pageHeading/PageHeader";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className={"flex relative flex-col mt-[170px] w-[95%] mx-auto"}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 2,
          type: "spring",
        }}
        className={`flex`}
      >
        <Button
          label="Available for work"
          buttonBg={buttonColors.gray}
          circleBg={buttonColors.white}
          border={true}
          FirstSvg={Rocket}
          SecondSvg={RocketFill}
          redirectTo="/"
        />
      </motion.div>
      <PageHeader
        headText="FULL STACK JAVASCRIPT DEVELOPER"
        headDesc="Crafting user-friendly web applications and automated bots and
          dabbling in the world of Web3. Always pushing code boundaries and
          finding creative solutions."
        buttonOneText="Contact Me"
        indexHero={true}
        redirectOne="/contact"
      />
    </div>
  );
}

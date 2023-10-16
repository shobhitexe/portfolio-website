import {
  AboutSectionLinks,
  headingParagraph1,
  headingParagraph2,
} from "./AboutSectionConstants";
import Label, { labelColors } from "../../UI/Label/Label";
import Image from "next/image";
import Button from "../../UI/Button/Button";
import { buttonColors } from "../../UI/Button/Button";
import Arrow from "../../icons/Arrow";
import Eye from "../../icons/Eye";
import UpRevealText from "@/components/UI/UpRevealText/UpRevealText";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="text-white mt-28 w-[90%] mx-auto flex md:flex-row flex-col items-stretch md:gap-40 gap-10 justify-center">
      <div className="flex flex-col items-stretch justify-between ">
        <Label title="About Me" labelBg={labelColors.green} />
        <div className="flex flex-col gap-5">
          <h1 className="font-satoshi text-[20px]">Social Links</h1>
          <div className="flex gap-3">
            {AboutSectionLinks.map((link) => (
              <Label
                title={link.title}
                labelBg={labelColors.transparant}
                key={link.title}
                styles="hover:bg-whiteShade hover:text-greyBg duration-500"
                href={link.url}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center gap-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.2,
            stiffness: 70,
            damping: 13,
            type: "spring",
          }}
          className="rounded-full"
        >
          <Image
            src="/images/about/shobhitexe.jpeg"
            alt="pfp"
            width={150}
            height={150}
            className="rounded-full object-contain"
          />
        </motion.div>

        <div className="flex flex-col w-fit gap-5">
          <UpRevealText
            label={headingParagraph1}
            delay={0.1}
            styles="font-medium"
          />
          <UpRevealText label={headingParagraph2} delay={0.2} />
          <Button
            label="Read More"
            buttonBg={buttonColors.gray}
            circleBg={buttonColors.white}
            FirstSvg={Arrow}
            border={true}
            SecondSvg={Eye}
            redirectTo="/About"
          />
        </div>
      </div>
    </div>
  );
}

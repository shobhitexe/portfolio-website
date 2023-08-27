import { Contact, AboutHead, AboutDesc, Values } from "@/components";

export default function About() {
  return (
    <div className="sm:mt-[190px] mt-[250px]">
      <AboutHead />
      <AboutDesc />
      <Values />
      <Contact />
    </div>
  );
}

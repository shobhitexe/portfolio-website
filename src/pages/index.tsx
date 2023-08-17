import {
  AboutSection,
  Contact,
  Expertise,
  Hero,
  Showcase,
  Skills,
  Values,
  Work,
} from "@/components";

export default function Home() {
  return (
    <div className={`mt-[100px]`}>
      <Hero />
      <Showcase />
      <AboutSection />
      <Skills />
      <Work />
      <Expertise />
      <Values />
      <Contact />
    </div>
  );
}

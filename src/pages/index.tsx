import {
  AboutSection,
  Expertise,
  Hero,
  Showcase,
  Skills,
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
    </div>
  );
}

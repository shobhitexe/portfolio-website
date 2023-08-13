import { AboutSection, Hero, Showcase, Skills } from "@/components";

export default function Home() {
  return (
    <div className={`mt-[100px]`}>
      <Hero />
      <Showcase />
      <AboutSection />
      <Skills />
    </div>
  );
}

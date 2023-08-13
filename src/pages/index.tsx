import { AboutSection, Hero, Showcase } from "@/components";

export default function Home() {
  return (
    <div className={`mt-[100px]`}>
      <Hero />
      <Showcase />
      <AboutSection />
    </div>
  );
}

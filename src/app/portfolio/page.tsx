import { ContactSection, AllWorks, PortfolioHero } from "@/components";

export default function Portfolio() {
  return (
    <div className={`mt-[100px]`}>
      <PortfolioHero />
      <AllWorks />
      <ContactSection />
    </div>
  );
}

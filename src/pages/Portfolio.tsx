import { Contact, AllWorks, PortfolioHero } from "@/components";

export default function Portfolio() {
  return (
    <div className={`mt-[100px]`}>
      <PortfolioHero />
      <AllWorks />
      <Contact />
    </div>
  );
}

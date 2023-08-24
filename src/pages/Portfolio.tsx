import { Contact } from "@/components";
import AllWorks from "@/components/Portfolio/AllWorks/AllWorks";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";

export default function Portfolio() {
  return (
    <div className={`mt-[100px]`}>
      <PortfolioHero />
      <AllWorks />
      <Contact />
    </div>
  );
}

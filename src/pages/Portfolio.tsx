import { Contact } from "@/components";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";

export default function Portfolio() {
  return (
    <div className={`mt-[100px]`}>
      <PortfolioHero />
      <Contact />
    </div>
  );
}
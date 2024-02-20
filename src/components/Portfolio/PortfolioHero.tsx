import PageHeader from "../ui/pageHeading/PageHeader";

export default function PortfolioHero() {
  return (
    <div className="flex justify-center relative w-[95%] sm:mt-[190px] mt-[250px] mx-auto h-screen">
      <PageHeader
        headText="Web Development Portfolio"
        headDesc="My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of projects for various industries."
        TwoButtons={true}
        buttonOneText="Contact"
        buttonTwoText="Resume"
        startHighlight={2}
        endHighlight={26}
        indexHero={false}
        redirectOne="/contact"
        redirectTwo="/resume"
      />
    </div>
  );
}

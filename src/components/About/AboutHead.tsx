import PageHeader from "../UI/pageHeading/PageHeader";

export default function AboutHead() {
  return (
    <div className="flex justify-center relative w-[95%] sm:mt-[190px] mt-[250px] mx-auto h-screen">
      <PageHeader
        headText="WITH MY PASSION, I EXCEL"
        headDesc="Welcome to my world! Where creativity meets strategy, and stunning design meets functionality. I am passionate about crafting digital experiences "
        TwoButtons={true}
        buttonOneText="Contact"
        buttonTwoText="Works"
        startHighlight={4}
        endHighlight={18}
        indexHero={false}
        redirectOne="/Contact"
        redirectTwo="/Portfolio"
      />
    </div>
  );
}

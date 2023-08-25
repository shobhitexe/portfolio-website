import PageHeader from "../UI/pageHeading/PageHeader";

export default function AboutHead() {
  return (
    <div className="flex justify-center relative w-[95%] sm:mt-[190px] mt-[250px] mx-auto h-screen">
      <PageHeader
        headText="I EXCEL WITH PASSION AND EXPERTISE"
        headDesc="Welcome to my world! Where creativity meets strategy, and stunning design meets functionality. I am passionate about crafting digital experiences "
        TwoButtons={true}
        buttonOneText="Contact"
        buttonTwoText="Works"
        startHighlight={7}
        endHighlight={24}
        indexHero={false}
      />
    </div>
  );
}

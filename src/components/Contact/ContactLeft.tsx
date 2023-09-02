import FlipText from "../UI/FlipText/FlipText";
import SlideText from "../UI/SlideText/SlideText";
import Email from "../icons/Email";

export default function ContactLeft() {
  return (
    <div className="flex flex-col gap-5">
      <div className="md:text-[40px] sm:text-[35px] ss:text-[30px] text-[25px] font-satoshi font-medium flex flex-col">
        <SlideText label="HAVE AN IDEA?" style="text-grayShade" />
        <SlideText label="LET'S DO IT TOGETHER!" style="text-whiteShade" />
      </div>
      <h1 className="font-general text-whiteShade sm:w-[50%] text-[17px]">
        Looking for a freelance web designer or developer to take your website
        to the next level? Get in touch today to learn more.
      </h1>
      <div className="flex relative">
        <Email className="w-10 h-10 bg-grayShade p-2 rounded-md absolute" />
        <FlipText
          title="sguptamds94@gmail.com"
          style="text-[15px] text-whiteShade font-general mt-2 ml-4"
          href="mailto:sguptamds94@gmail.com"
        />
      </div>
    </div>
  );
}

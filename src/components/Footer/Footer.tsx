import { AboutSectionLinks } from "../Home/AboutSection/AboutSectionConstants";
import { navLinks } from "../Navbar/navbarConstants";
import FlipText from "../UI/FlipText/FlipText";
import NavBarHeading from "../UI/Heading/NavBarHeading";
import Label, { labelColors } from "../UI/Label/Label";

export default function Footer() {
  return (
    <div className="w-full pt-20">
      <div className="w-[90%] flex flex-col mx-auto">
        <div className="flex flex-row justify-between items-start pb-20">
          <div className="flex sm:flex-row flex-col max-sm:gap-10 w-[40%] justify-between">
            <NavBarHeading />
            <div className="flex font-general text-whiteShade gap-10">
              <div className="flex flex-col gap-10">
                {navLinks.map((link) => (
                  <div key={link.title} className="cursor-pointer">
                    <FlipText
                      title={link.title}
                      size="text-[15px]"
                      href={link.link}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-10">
                {AboutSectionLinks.map((link) => (
                  <div key={link.title} className="cursor-pointer">
                    <FlipText
                      title={link.title}
                      size="text-[15px]"
                      href={link.url}
                      openInNew={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Label
            title="sguptamds94@gmail.com"
            labelBg={labelColors.transparant}
            styles="hover:bg-whiteShade hover:text-greyBg hover:border-greyBg duration-500 max-ss:text-[10px] max-ss:mt-10"
            href="mailto:sguptamds94@gmail.com"
          />
        </div>
        <div className="h-[0.5px] opacity-30 w-full bg-whiteShade"></div>
        <div className="font-general text-center py-3 text-whiteShade">
          © 2023 Shobhit. All right reserved.
        </div>
      </div>
    </div>
  );
}

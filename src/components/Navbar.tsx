import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { navLinks } from "@/constants/navbar/navbarConstants";
import RoundedCorner from "./icons/RoundedCorner";
import Link from "next/link";

export default function Navbar() {
  const currRoute = useSelector((state: RootState) => state.currRoute.route);

  return (
    <div className="fixed w-full z-40">
      <div className="flex relative">
        <div className="flex flex-col pr-5 pl-10 py-2 rounded-br-3xl bg-blackShade text-white font-matter relative z-40">
          <p className="text-[15px]">shobhitexe{currRoute}</p>
          <h1 className="text-[40px] -mt-3">Portfolio</h1>
          <RoundedCorner
            width={50}
            height={50}
            className="absolute -right-[48px] top-3"
          />
        </div>
        <div className="bg-blackShade h-3 w-full"></div>

        <div className="flex absolute p-6 left-[230px] top-6 bg-blackShade font-matter bg-opacity-40 backdrop-blur-sm shadow-md  px-20 gap-10 rounded-3xl py-4">
          {navLinks.map((nav) => (
            <Link
              href={""}
              as={nav.link}
              key={nav.title}
              className="cursor-pointer text-white"
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

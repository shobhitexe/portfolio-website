import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";

export default function NavBarHeading() {
  const route = useSelector((state: RootState) => state.currRoute.route);
  const router = useRouter();

  return (
    <div
      className="flex font-satoshi ss:text-[1.5rem] text-[1.2rem] cursor-pointer hover:-rotate-6 duration-500"
      onClick={() => router.push("/")}
    >
      <h1 className="text-whiteShade">Shobhitexe</h1>
      <h1 className="text-grayShade">{route}</h1>
    </div>
  );
}

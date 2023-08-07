import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

export default function NavBarHeading() {
  const route = useSelector((state: RootState) => state.currRoute.route);

  return (
    <div className="flex font-satoshi text-[1.5rem] cursor-pointer hover:-rotate-6 duration-500">
      <h1 className="text-whiteShade">Shobhitexe</h1>
      <h1 className="text-grayShade">{route}</h1>
    </div>
  );
}

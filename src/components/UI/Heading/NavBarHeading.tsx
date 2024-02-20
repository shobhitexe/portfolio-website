"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { setCurrRoute } from "@/store/slices/navCurrRouteText";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function NavBarHeading() {
  const route = useSelector((state: RootState) => state.currRoute.route);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrRoute(pathname === "/" ? "/home" : pathname));
  }, [dispatch, pathname]);

  return (
    <div
      className="flex font-satoshi ss:text-[1.5rem] text-[1.2rem] cursor-pointer"
      onClick={() => router.push("/")}
    >
      <h1 className="text-whiteShade">Shobhitexe</h1>
      <h1 className="text-grayShade">{route}</h1>
    </div>
  );
}

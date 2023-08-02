import { ReactNode } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { setCurrRoute } from "@/store/slices/navCurrRouteText";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();

  dispatch(setCurrRoute(router.asPath === "/" ? "/home" : router.asPath));

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

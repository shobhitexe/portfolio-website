import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { useDispatch } from "react-redux";
import { setCurrRoute } from "@/store/slices/navCurrRouteText";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setCurrRoute(router.asPath === "/" ? "/home" : router.asPath));
  }, [dispatch, router.asPath]);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

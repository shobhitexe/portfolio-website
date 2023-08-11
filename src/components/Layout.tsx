import { ReactNode, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { setCurrRoute } from "@/store/slices/navCurrRouteText";
import { useRouter } from "next/router";
import { CustomCursor } from "./Cursor/Cursor";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const currRoute = useSelector((state: RootState) => state.currRoute.route);

  useEffect(() => {
    dispatch(setCurrRoute(router.asPath === "/" ? "/home" : router.asPath));
  }, [dispatch, router.asPath]);

  return (
    <div>
      {currRoute !== "/Resume" ? (
        <Fragment>
          {/* <CustomCursor /> */}
          <Navbar />
        </Fragment>
      ) : (
        <Fragment />
      )}
      {children}
    </div>
  );
}

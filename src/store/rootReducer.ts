import { combineReducers } from "@reduxjs/toolkit";
import navCurrRouteText from "./slices/navCurrRouteText";
import navbarOpen from "./slices/navbarOpen";

const rootReducer = combineReducers({
  currRoute: navCurrRouteText,
  isNavOpen: navbarOpen,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

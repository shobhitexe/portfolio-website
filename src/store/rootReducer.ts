import { combineReducers } from "@reduxjs/toolkit";
import navCurrRouteText from "./slices/navCurrRouteText";

const rootReducer = combineReducers({
  currRoute: navCurrRouteText,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import navCurrRouteText from "./slices/navCurrRouteText";
import navbarOpen from "./slices/navbarOpen";
import contactForm from "./slices/contactForm";
import contactFormDialouge from "./slices/contactFormDialouge";

const rootReducer = combineReducers({
  currRoute: navCurrRouteText,
  isNavOpen: navbarOpen,
  contactFormData: contactForm,
  contactFormDialouge: contactFormDialouge,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

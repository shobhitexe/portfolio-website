import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { route: string } = { route: "home" };

export const navCurrRouteSlice = createSlice({
  name: "currRoute",
  initialState,
  reducers: {
    setCurrRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload;
    },
  },
});

export const { setCurrRoute } = navCurrRouteSlice.actions;

export default navCurrRouteSlice.reducer;

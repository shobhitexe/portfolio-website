import { createSlice } from "@reduxjs/toolkit";

const initialState: { isOpen: boolean } = { isOpen: false };

export const navBarOpenSlice = createSlice({
  name: "isNavOpen",
  initialState,
  reducers: {
    setIsNavOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsNavOpen } = navBarOpenSlice.actions;

export default navBarOpenSlice.reducer;

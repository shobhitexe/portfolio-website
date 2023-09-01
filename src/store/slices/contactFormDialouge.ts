import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type contactFormDialougeType = { message: string; isOpen: boolean };

const initialState: contactFormDialougeType = {
  message: "",
  isOpen: false,
};

const contactFormDialougeSlice = createSlice({
  name: "contactFormDialouge",
  initialState,
  reducers: {
    setContactDialouge: (
      state,
      action: PayloadAction<contactFormDialougeType>
    ) => {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    },
  },
});

export const { setContactDialouge } = contactFormDialougeSlice.actions;

export default contactFormDialougeSlice.reducer;

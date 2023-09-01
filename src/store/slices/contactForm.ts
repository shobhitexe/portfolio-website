import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type contactFormProps = {
  form: {
    name: string;
    email: string;
    message: string;
    find: string;
  };
};

const initialState: contactFormProps = {
  form: {
    name: "",
    email: "",
    message: "",
    find: "",
  },
};

export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setContactFormData: (state, action: PayloadAction<contactFormProps>) => {
      state.form = action.payload.form;
    },
  },
});

export const { setContactFormData } = contactFormSlice.actions;

export default contactFormSlice.reducer;

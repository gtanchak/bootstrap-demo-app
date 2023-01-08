import { createSlice } from "@reduxjs/toolkit";

interface State {
  contacts: any;
  isSuccess: boolean;
}

const initialState: State = {
  contacts: [],
  isSuccess: false,
};

export const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    contactList: (state, { payload }) => {
      state.contacts = payload;
      state.isSuccess = true;
    },
  },
});

export const { contactList } = contactSlice.actions;

export default contactSlice.reducer;

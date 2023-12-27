import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: "",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,

  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const languageSliceReducer = languageSlice.reducer;

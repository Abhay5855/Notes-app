import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./slice/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

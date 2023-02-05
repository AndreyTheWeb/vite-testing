import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./index";

export const store = configureStore({
  reducer: mainSlice.reducer,
});

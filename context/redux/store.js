import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicers/authSlicer";

export const store = configureStore({
  reducer: {
    auth: authSlicer,
  },
});

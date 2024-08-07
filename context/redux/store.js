import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicers/authSlicer";
import iconSlicer from "./slicers/iconSlicer";

export const store = configureStore({
  reducer: {
    auth: authSlicer,
    icon: iconSlicer,
  },
});

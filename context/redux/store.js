import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicers/authSlicer";
import iconSlicer from "./slicers/iconSlicer";
import cardSlicer from "./slicers/cardSlicer";
import taskEventSlicer from "./slicers/taskEventSlicer";

export const store = configureStore({
  reducer: {
    auth: authSlicer,
    icon: iconSlicer,
    card: cardSlicer,
    event: taskEventSlicer,
  },
});

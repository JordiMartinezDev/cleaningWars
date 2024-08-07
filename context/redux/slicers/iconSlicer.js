import { createSlice } from "@reduxjs/toolkit";

const iconSlicer = createSlice({
  name: "Icons",
  initialState: {
    iconId: 0,
    iconName: "baby",
  },
  reducers: {
    setIcon(state, action) {
      state.iconId = action.payload.iconId;
      state.iconName = action.payload.iconName;
    },
  },
});

export const { setIcon } = iconSlicer.actions;

export default iconSlicer.reducer;

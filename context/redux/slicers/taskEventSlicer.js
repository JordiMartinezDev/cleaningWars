import { createSlice } from "@reduxjs/toolkit";

const taskEventSlicer = createSlice({
  name: "Event",
  initialState: {
    name: "Test Task",
    user: "Test user",
    date: "2024-01-01",
    icon: "baby",
  },
  reducers: {
    setEventTask(state, action) {
      state.name = action.payload.name;
      state.user = action.payload.user;
      state.date = action.payload.date;
      state.icon = action.payload.icon;
    },
  },
});

export const { setEventTask } = taskEventSlicer.actions;

export default taskEventSlicer.reducer;

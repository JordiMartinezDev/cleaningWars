import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskName: "Kitchen",
  icon: "baby",
  score: 5,
  user: "Jordi",
  color: "#f47d2e",
  bgColor: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setTaskName(state, action) {
      state.taskName = action.payload;
    },
    setIcon(state, action) {
      state.icon = action.payload;
    },
    setScore(state, action) {
      state.score = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
    setBgColor(state, action) {
      state.bgColor = action.payload;
    },
    setTask(state, action) {
      const { name, icon, score, user, color, bgColor } = action.payload;
      state.taskName = name;
      state.icon = icon;
      state.score = score;
      state.user = user;
      state.color = color;
      state.bgColor = bgColor;
    },
  },
});

export const {
  setTaskName,
  setIcon,
  setScore,
  setUser,
  setColor,
  setBgColor,
  setTask,
} = cardSlice.actions;

export default cardSlice.reducer;

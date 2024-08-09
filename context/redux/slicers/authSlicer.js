import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
  name: "Authentication",
  initialState: {
    userId: "0",
    userIsAuthenticated: true,
    userName: "Jordi",
  },
  reducers: {
    authenticated(state, action) {
      state.userIsAuthenticated = true;
      state.userId = action.payload.userId;
    },
    notAuthenticated(state, action) {
      state.userIsAuthenticated = false;
      state.userId = "0";
    },
    setUserName(state, action) {
      state.userName = action.payload.user;
    },
  },
});

export const { authenticated, notAuthenticated, setUserName } =
  authSlicer.actions;

export default authSlicer.reducer;

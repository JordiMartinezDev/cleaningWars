import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
  name: "Authentication",
  initialState: {
    userId: "0",
    userIsAuthenticated: true,
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
  },
});

export const { authenticated, notAuthenticated } = authSlicer.actions;

export default authSlicer.reducer;

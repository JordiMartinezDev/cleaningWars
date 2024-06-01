import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
  name: "Authentication",
  initialState: {
    id: "0",
    userIsAuthenticated: false,
  },
  reducers: {
    authenticated(state, action) {
      state.userIsAuthenticated = true;
      state.id = action.payload.id;
    },
    notAuthenticated(state, action) {
      state.userIsAuthenticated = false;
      state.id = "0";
    },
  },
});

export const { authenticated, notAuthenticated } = authSlicer.actions;

export default authSlicer.reducer;

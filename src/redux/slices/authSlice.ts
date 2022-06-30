import { createSlice } from "@reduxjs/toolkit";
import { loginInUser, signInUser } from "services/authService";

interface AuthState {
  authToken: string | null;
  authStatus: string;
}

const initialState: AuthState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authStatus: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logoutUser: (state) => {
        state.authToken = null
        state.authStatus = "idle"
        localStorage.removeItem("authToken")
    },
  },

  extraReducers: {
    // Log In
    [loginInUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [loginInUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.authToken = action.payload;
      localStorage.setItem("authToken", JSON.stringify(state.authToken));
    },
    [loginInUser.rejected]: (state) => {
      state.authStatus = "rejected";
    },
    // Sign in
    [signInUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [signInUser.fulfilled]: (state, action) => {
      state.authStatus = "signInFulfilled";
      state.authToken = action.payload;
      localStorage.setItem("authToken", JSON.stringify(state.authToken));
    },
    [signInUser.rejected]: (state) => {
      state.authStatus = "rejected";
    },
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;

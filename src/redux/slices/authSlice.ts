import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addUser, loginInUser, signInUser } from "services/authService";

interface AuthState {
  authToken: string | null;
  authStatus: string;
  userId: string;
  name: string;
  email: string;
}

const initialState: AuthState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authStatus: "idle",
  userId: "",
  name: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logoutUser: (state) => {
      state.userId = "";
      state.name = "";
      state.email = "";
      state.authToken = "";
      state.authStatus = "idle";
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully!");
    },
    getUserCredentials: (state, action) => {
      console.log(action.payload);
      state.userId = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
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
      state.authStatus = "fulfilled";
      state.authToken = action.payload;
      localStorage.setItem("authToken", JSON.stringify(state.authToken));
      // state.userId = action.payload.id
    },
    [signInUser.rejected]: (state) => {
      state.authStatus = "rejected";
    },
    // User
    [addUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [addUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.userId = action.payload;
    },
    [addUser.rejected]: (state) => {
      state.authStatus = "rejected";
    },
  },
});

export const { logoutUser, getUserCredentials } = authSlice.actions;
export default authSlice.reducer;

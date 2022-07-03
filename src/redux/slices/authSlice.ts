import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUser,
  getAllUsers,
  loginInUser,
  signInUser,
} from "services/authService";
import { AuthState } from "types/auth.types";

const initialState: AuthState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authStatus: "idle",
  userId: "",
  name: "",
  email: "",
  allUsers: [
    {
      email: "johndoekar@gmail.com",
      id: "oxj4JTPfjLO7KuLo1gxG3nt5ygG2",
      name: "John Doekar",
    },
  ],
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
    // Add User
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
    // All Users
    [getAllUsers.pending]: (state) => {
      state.authStatus = "loading";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.allUsers = action.payload;
    },
    [getAllUsers.rejected]: (state) => {
      state.authStatus = "rejected";
    },
  },
});

export const { logoutUser, getUserCredentials } = authSlice.actions;
export default authSlice.reducer;

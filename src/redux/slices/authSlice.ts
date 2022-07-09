import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUser,
  getAllUsers,
  loginInUser,
  signInUser,
  updateUser,
  uploadAvatarProfile,
  getAvatarProfile
} from "services/authService";
import { AuthState } from "types/auth.types";

const initialState: AuthState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authStatus: "idle",
  userId: "",
  name: "",
  email: "",
  allUsers: [],
  avatar: ""
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
      state.allUsers = []
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully!");
    },
    getUserCredentials: (state, action) => {
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
      localStorage.setItem("authToken", state.authToken)
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
      localStorage.setItem("authToken", state.authToken)
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
    // Update user
    [updateUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
    },
    [updateUser.rejected]: (state) => {
      state.authStatus = "rejected";
    },

    // upload Avatar Profile
    [uploadAvatarProfile.pending]: (state) => {
      state.authStatus = "loading";
    },
    [uploadAvatarProfile.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      
    },
    [uploadAvatarProfile.rejected]: (state) => {
      state.authStatus = "rejected";
    },

    // get Avatar Profile
    [getAvatarProfile.pending]: (state) => {
      state.authStatus = "loading";
    },
    [getAvatarProfile.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.avatar = action.payload
    },
    [getAvatarProfile.rejected]: (state) => {
      state.authStatus = "rejected";
    },
  },
});

export const { logoutUser, getUserCredentials } = authSlice.actions;
export default authSlice.reducer;

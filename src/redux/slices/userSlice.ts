import { createSlice } from "@reduxjs/toolkit";
import { getBookmark } from "services/userService";

type UserState = {
  bookmarkList: [];
  bookmarkStatus: string;
  followers: [];
  following: [];
//   searchValue: string;
};

const initialState: UserState = {
  bookmarkList: [],
  bookmarkStatus: "idle",
  followers: [],
  following: [],
//   searchValue: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // getSearchedValue: (state, action) => {
    //   state.searchValue = action.payload;
    // },
  },

  extraReducers: {
    [getBookmark.pending]: (state) => {
      state.bookmarkStatus = "loading";
    },
    [getBookmark.fulfilled]: (state, action) => {
      state.bookmarkStatus = "fulfilled";
      state.bookmarkList = action.payload;
    },
    [getBookmark.rejected]: (state) => {
      state.bookmarkStatus = "rejected";
    },
  },
});

export default userSlice.reducer;
// export const {getSearchedValue} = userSlice.actions

import { createSlice } from "@reduxjs/toolkit";
import { getBookmark } from "services/userService";


type UserState = {
    bookmarkList: [],
    bookmarkStatus: string,
    followers: [],
    following: []
}   

const initialState:UserState = {
    bookmarkList: [],
    bookmarkStatus: "idle",
    followers: [],
    following: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getBookmark.pending] : (state) => {
            state.bookmarkStatus = "loading"
        },
        [getBookmark.fulfilled] : (state, action) => {
            state.bookmarkStatus = "fulfilled"
            state.bookmarkList = action.payload
        },
        [getBookmark.rejected] : (state) => {
            state.bookmarkStatus = "rejected"
        },
    }
})

export default userSlice.reducer
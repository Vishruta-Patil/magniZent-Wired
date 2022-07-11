import { createSlice } from "@reduxjs/toolkit";

type BookmarkState = {
    bookmarkList: []
}

const initialState:BookmarkState = {
    bookmarkList: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getBookmarkList: (state, action) => {
            state.bookmarkList = action.payload
        }
    }
})

export default userSlice.reducer
export const {getBookmarkList} = userSlice.actions
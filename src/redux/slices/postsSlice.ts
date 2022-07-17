import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "services/postsServices";

type PostsState = {
    allPosts: [],
    allPostsStatus: string,
}

const initialState:PostsState = {
    allPosts: [],
    allPostsStatus: "idle",
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {      
    },

    extraReducers: {
        [getAllPosts.pending] : (state) => {
            state.allPostsStatus = "loading"
        },
        [getAllPosts.fulfilled] : (state, action) => {
            state.allPostsStatus = "fulfilled"
            state.allPosts = action.payload
        },
        [getAllPosts.rejected] : (state) => {
            state.allPostsStatus = "rejected"
        },
    }

})

export default postsSlice.reducer
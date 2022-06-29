import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    authToken: string
}

const initialState:AuthState = {
    authToken: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

// export const {} from authSlice.actions
export default authSlice.reducer
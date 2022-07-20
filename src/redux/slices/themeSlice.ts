import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
    theme: String
}

const initialState:ThemeState = {
    theme: "dark"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        lightThemeHandler: (state) => {
            state.theme = "light"
            localStorage.setItem("theme", "light")
        },
        darkThemeHandler: (state) => {
            state.theme = "dark"
            localStorage.setItem("theme", "dark")
        }
    }
})

export default themeSlice.reducer;
export const {lightThemeHandler, darkThemeHandler} = themeSlice.actions
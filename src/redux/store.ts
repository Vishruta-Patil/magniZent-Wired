import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import postsReducer from "./slices/postsSlice";
import userReducer from "./slices/userSlice"
import themeReducer from "./slices/themeSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts : postsReducer,
    user: userReducer,
    theme : themeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

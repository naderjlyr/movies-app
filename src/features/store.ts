import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesReducer from "./slice/moviesSlice";
import userReducer from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

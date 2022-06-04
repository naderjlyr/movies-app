import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import { tmdbSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [tmdbSlice.reducerPath]: tmdbSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

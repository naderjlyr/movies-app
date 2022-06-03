import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesReducer from "./slice/moviesSlice";
import userReducer from "./slice/userSlice";
import { loadState, PersistConfig } from "redux-toolkit-persist";

// We exclude the reducer 'api' from RTK-query
export const persistConfig: PersistConfig = {
  version: 1,
};
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
  preloadedState: loadState(persistConfig),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

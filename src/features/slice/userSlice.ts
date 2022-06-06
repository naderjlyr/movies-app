import { createSlice } from "@reduxjs/toolkit";
import { PopularMoviesResults } from "../../models/interfaces/movies";
import { RootState } from "../store";
export interface IUserData {
  userId: number;
  username: string;
  password: string;
  watchList: PopularMoviesResults[];
  favorites: PopularMoviesResults[];
  notification: string;
}

const initialState: IUserData = {
  userId: 20,
  username: "admin",
  password: "admin",
  watchList: [],
  favorites: [],
  notification: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addRemoveWatchList(state, { payload }) {
      if (!state.watchList.some((movie) => movie.id === payload.id)) {
        state.watchList.push(payload);
        return;
      }
      const newWatchlist = state.watchList.filter(
        (movie) => movie.id !== payload.id
      );
      state.watchList = newWatchlist;
    },
    addRemoveFavorites(state, { payload }) {
      if (!state.favorites.some((movie) => movie.id === payload.id)) {
        state.favorites.push(payload);
        return;
      }
      const newFavoriteList = state.favorites.filter(
        (movie) => movie.id !== payload.id
      );
      state.favorites = newFavoriteList;
    },
  },
});
export const selectUser = (state: RootState) => state.user;
export const userActions = userSlice.actions;

export default userSlice.reducer;

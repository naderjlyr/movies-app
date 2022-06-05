import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { PopularMoviesResults } from "../../models/interfaces/movies";
import { RootState, AppThunk } from "../store";
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
      const newFavoriteList = state.watchList.filter(
        (movie) => movie.id !== payload.id
      );
      state.favorites = newFavoriteList;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchMovies.pending, (state) => {
    //     state.status = FetchState.LOADING;
    //   })
    //   .addCase(fetchMovies.fulfilled, (state, { payload, meta }) => {
    //     state.status = FetchState.SUCCESS;
    //     if (meta.arg.type === "popular") {
    //       state.popularMovies = payload.results;
    //     } else if (meta.arg.type === "upcoming") {
    //       state.upcomingMovies = payload.results;
    //     } else if (meta.arg.type === "top_rated") {
    //       state.topRatedMovies = payload.results;
    //     }
    //     state.totalPages = payload.total_pages;
    //     state.totalResults = payload.total_results;
    //     console.log(current(state));
    //   })
    //   .addCase(fetchMovies.rejected, (state, action) => {
    //     state.status = FetchState.ERROR;
    //     // state.errorMessage = action.payload.error;
    //   });
  },
});
export const selectUser = (state: RootState) => state.user;
export const userActions = userSlice.actions;

export default userSlice.reducer;

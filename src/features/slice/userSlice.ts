import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
export interface IUserData {
  userId: number;
  username: string;
  password: string;
  watchList: number[];
  favorites: number[];
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
      if (state.watchList.indexOf(payload) === -1) {
        state.watchList.push(payload);
      } else {
        const newWatchlist = state.watchList.filter(
          (movie) => movie !== payload
        );
        state.watchList = newWatchlist;
        state.notification = "The Movie Successfully added to your watch list!";
      }
    },
    addRemoveFavorites(state, { payload }) {
      if (state.favorites.indexOf(payload) === -1) {
        state.favorites.push(payload);
      } else {
        const newFavorites = state.favorites.filter(
          (movie) => movie !== payload
        );
        state.favorites = newFavorites;
      }
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

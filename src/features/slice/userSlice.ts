import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import tmdbApi from "../services/movie";
export interface InitialState {
  userId: number;
  username: string;
  password: string;
  watchList: number[];
  favorites: number[];
  notification: string;
}

const initialState: InitialState = {
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
    addToWatchList(state, { payload }) {
      if (state.watchList.indexOf(payload) === -1) {
        state.watchList.push(payload);
        state.notification = "Movie Added to your Watchlist!";
      } else {
        state.watchList.filter((movie) => movie !== payload);
        state.notification = "Movie Removed from your Watchlist!";
      }
    },
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromWatchList(state, { payload }) {
      return {
        ...state,
        watchList: [...state.watchList].filter((movie) => movie !== payload),
      };
    },
    removeFromFavorites(state, { payload }) {},
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

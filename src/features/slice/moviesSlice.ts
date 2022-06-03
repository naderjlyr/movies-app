import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import tmdbApi from "../services/movie";
import { MediaContent } from "../../models/interfaces/movies";
import { MovieRequest, FetchState } from "../../models/interfaces/tmdbRequests";
export interface IFetchMovie {
  popularMovies: MediaContent[];
  topRatedMovies: MediaContent[];
  upcomingMovies: MediaContent[];
  searchResults: MediaContent[];
  status: FetchState;
  totalPages: number;
  totalResults: number;
}

const initialState: IFetchMovie = {
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  searchResults: [],
  status: FetchState.DEFAULT,
  totalPages: 0,
  totalResults: 0,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (request: MovieRequest, thunkApi) => {
    const response = await tmdbApi.getMovies(request);
    return response.data;
  }
);
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = FetchState.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload, meta }) => {
        state.status = FetchState.SUCCESS;
        if (meta.arg.type === "popular") {
          state.popularMovies = payload.results;
        } else if (meta.arg.type === "upcoming") {
          state.upcomingMovies = payload.results;
        } else if (meta.arg.type === "top_rated") {
          state.topRatedMovies = payload.results;
        }
        state.totalPages = payload.total_pages;
        state.totalResults = payload.total_results;
        console.log(current(state));
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = FetchState.ERROR;
        // state.errorMessage = action.payload.error;
      });
  },
});
export const selectMovies = (state: RootState) => state.movies;
export const selectLoadingStatus = (state: RootState) => state.movies.status;

export default moviesSlice.reducer;

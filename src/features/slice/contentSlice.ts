import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import tmdbApi from "../../api/tmdbApi";
import { MediaContent } from "../../models/interfaces/movies";
import { MovieRequest } from "../../models/interfaces/tmdbRequests";

export interface InitialState {
  contents: MediaContent[];
  searchResults: MediaContent[];
  status: string;
  totalPages: number;
  totalResults: number;
}

const initialState: InitialState = {
  contents: [],
  searchResults: [],
  status: "idle",
  totalPages: 0,
  totalResults: 0,
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await tmdbApi.getMovies({
      type: "popular",
      page: 1,
    });
    return response.data;
  }
);

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.searchResults = payload.results;
        state.contents = payload.results;
        state.totalPages = payload.total_pages;
        state.totalResults = payload.total_results;
        console.log(current(state));
      })
      .addCase(fetchPopularMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const selectContent = (state: RootState) => state.content;

export default contentSlice.reducer;

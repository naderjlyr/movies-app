import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FetchState } from "../../models/interfaces/tmdbRequests";
import { PopularMoviesResults } from "../../models/interfaces/movies";
export interface IFetchMovie {
  popularMovies: PopularMoviesResults[];
  topRatedMovies: PopularMoviesResults[];
  upcomingMovies: PopularMoviesResults[];
  searchResults: PopularMoviesResults[];
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

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});
export const selectMovies = (state: RootState) => state.movies;
export const selectLoadingStatus = (state: RootState) => state.movies.status;

export default moviesSlice.reducer;

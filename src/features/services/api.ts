import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PopularMovies,
  PopularMoviesResults,
} from "../../models/interfaces/movies";
const tmdbConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ab8a60c60fd1813653b3b7c93ca1d177",
  originalImage: (imagePath: string | null) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image: (imagePath: string | null) =>
    `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

export const tmdbSlice = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: tmdbConfig.baseUrl }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<
      PopularMovies<PopularMoviesResults>,
      number | void
    >({
      query: (page = 1) =>
        `movie/popular?api_key=${tmdbConfig.apiKey}&language=en-US&page=${page}`,
    }),
    getTopRatedMovies: builder.query<
      PopularMovies<PopularMoviesResults>,
      number | void
    >({
      query: () =>
        `movie/top_rated?api_key=${tmdbConfig.apiKey}&language=en-US&page=1`,
    }),
    getUpcomingMovies: builder.query<
      PopularMovies<PopularMoviesResults>,
      number | void
    >({
      query: () =>
        `movie/upcoming?api_key=${tmdbConfig.apiKey}&language=en-US&page=1`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} = tmdbSlice;

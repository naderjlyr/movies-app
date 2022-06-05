import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PopularMovies,
  PopularMoviesResults,
  RequestTrailer,
  Trailer,
} from "../../models/interfaces/movies";
export const tmdbConfig = {
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
      query: (page = 1) =>
        `movie/top_rated?api_key=${tmdbConfig.apiKey}&language=en-US&page=${page}`,
    }),
    getUpcomingMovies: builder.query<
      PopularMovies<PopularMoviesResults>,
      number | void
    >({
      query: (page = 1) =>
        `movie/upcoming?api_key=${tmdbConfig.apiKey}&language=en-US&page=${page}`,
    }),
    searchMovie: builder.query<
      PopularMovies<PopularMoviesResults>,
      string | void
    >({
      query: (searchQuery: string) =>
        `search/movie?api_key=${tmdbConfig.apiKey}&language=en-US&query=${searchQuery}&page=1`,
    }),
    getTrailer: builder.query<RequestTrailer<Trailer>, number | void>({
      query: (movieId: number) =>
        `movie/${movieId}/videos?api_key=${tmdbConfig.apiKey}`,
    }),
  }),
});
export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useSearchMovieQuery,
  useGetTrailerQuery,
} = tmdbSlice;

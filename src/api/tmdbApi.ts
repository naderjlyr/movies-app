import {
  MovieRequest,
  CategoryRequest,
  MultiSearchesRequest,
} from "../models/interfaces/tmdbRequests";
import tmdbConfig from "./tmdbConfig";
import axiosClient from "./axiosClient";

const tmdbApi = {
  getMovies: (request: MovieRequest) => {
    const url =
      "movie/" +
      request.type +
      "?api_key=" +
      tmdbConfig.apiKey +
      "&language=en-US&page=" +
      request.page;
    return axiosClient.get(url);
  },

  search: (request: CategoryRequest) => {
    const url =
      "search/" +
      request.category +
      "?api_key=" +
      tmdbConfig.apiKey +
      "&language=en-US&query=" +
      request.query +
      "&page=" +
      request.page +
      "&include_adult=false";
    return axiosClient.get(url);
  },

  multiple_search: (request: MultiSearchesRequest) => {
    const url =
      "search/multi?api_key=" +
      tmdbConfig.apiKey +
      "&language=en-US&query=" +
      request.query +
      "&page=" +
      request.page +
      "&include_adult=false";
    return axiosClient.get(url);
  },
};

export default tmdbApi;

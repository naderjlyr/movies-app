import {
  MovieRequest,
  TVRequest,
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

  getTvList: (request: TVRequest) => {
    const url =
      "tv/" +
      request.type +
      "?api_key=" +
      tmdbConfig.apiKey +
      "&language=en-US&page=" +
      request.page;
    return axiosClient.get(url);
  },

  getVideos: (request: CategoryRequest) => {
    try {
      const url =
        request.category +
        "/" +
        request?.id +
        "/videos?api_key=" +
        tmdbConfig.apiKey +
        "&language=en-US";
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
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

  credits: (request: CategoryRequest) => {
    try {
      const url =
        request.category +
        "/" +
        request.id +
        "/credits?api_key=" +
        tmdbConfig.apiKey +
        "&language=en-US";
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },

  similar: (request: CategoryRequest) => {
    try {
      const url =
        request.category +
        "/" +
        request.id +
        "/similar?api_key=" +
        tmdbConfig.apiKey +
        "&language=en-US&page=" +
        request.page;
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },

  detail: (request: CategoryRequest) => {
    try {
      const url =
        request.category +
        "/" +
        request.id +
        "?api_key=" +
        tmdbConfig.apiKey +
        "&language=en-US";
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
};

export default tmdbApi;

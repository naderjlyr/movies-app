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
      "?apiKey=" +
      tmdbConfig.apiKey +
      "&language=en-US&page=" +
      request.page;
    return axiosClient.get(url);
  },

  getTvList: (request: TVRequest) => {
    const url =
      "tv/" +
      request.type +
      "?apiKey=" +
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
        "/videos?apiKey=" +
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
      "?apiKey=" +
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
      "search/multi?apiKey=" +
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
        "/credits?apiKey=" +
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
        "/similar?apiKey=" +
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
        "?apiKey=" +
        tmdbConfig.apiKey +
        "&language=en-US";
      return axiosClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
};

export default tmdbApi;

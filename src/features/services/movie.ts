import {
  MovieRequest,
  SearchRequest,
} from "../../models/interfaces/tmdbRequests";
import axiosClient from "../../api/axiosClient";
import tmdbConfig from "../../api/tmdbConfig";
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
  search: (request: SearchRequest) => {
    const url =
      "search/" +
      "movie" +
      "?api_key=" +
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

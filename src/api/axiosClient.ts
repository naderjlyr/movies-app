import axios from "axios";
import queryString from "query-string";

import tmdbConfig from "./tmdbConfig";

const axiosClient = axios.create({
  baseURL: tmdbConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: tmdbConfig.apiKey }),
});
axiosClient.interceptors.request.use(async (config) => config);

export default axiosClient;

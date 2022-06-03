export interface MovieRequest {
  type: "upcoming" | "popular" | "top_rated" | string;
  page: number;
}
export enum FetchState {
  LOADING = "loading",
  DEFAULT = "idle",
  SUCCESS = "success",
  ERROR = "error",
}

export interface SearchRequest {
  page?: number;
  query?: string;
}

// export interface EpisodeDetailsRequest {
//   tv_id: number;
//   season_number: number;
//   episode_number: number;
// }

export interface MultiSearchesRequest {
  page: number;
  query: string;
}

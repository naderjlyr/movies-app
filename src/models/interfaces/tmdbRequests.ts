export interface MovieRequest {
  type: "upcoming" | "popular" | "top_rated" | string;
  page: number;
}

export interface TVRequest {
  type: "popular" | "top_rated" | "on_the_air" | string;
  page: number;
}

export interface CategoryRequest {
  category: "movie" | "tv" | string;
  id?: number | string;
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

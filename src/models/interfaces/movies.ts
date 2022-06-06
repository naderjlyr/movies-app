//Movies and TVSeries all necessary data models (Interfaces)

export interface PopularMoviesResults {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
export interface PopularMovies<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
  per_page: number;
}

export interface MediaContent {
  media_type: string;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_data: string;
  genre_ids: any;
  original_title: string;
  id: number;
  release_date: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  first_air_date: string;
  name: string;
  origin_country: [string];
  original_name: string;
  vote_average: number;
  genres: Genres[];
  runtime: number | string;
  production_countries: any;
  episode_run_time: any;
  number_of_seasons: number;
}

interface Genres {
  id: number;
  name: string;
}

export interface RequestTrailer<T> {
  id: number;
  results: T[];
}
export interface Trailer {
  iso_639_1?: string;
  iso_3166_1?: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

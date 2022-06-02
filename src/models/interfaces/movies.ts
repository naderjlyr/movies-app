//Movies and TVSeries all necessary data models (Interfaces)

export interface PopularMoviesResults {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_data: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
export interface PopularMovies {
  page: number;
  results: PopularMoviesResults[];
  total_results: number;
  total_pages: number;
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
  last_episode_to_air: Episode;
  number_of_seasons: number;
  seasons: Season[];
}

//   export interface IVideoTemp {
//     id: number;
//     poster_path: string | null;
//     title?: string;
//     backdrop_path: string | null;
//     name?: string;
//     release_date?: string;
//     first_air_date?: string;
//   }

interface Genres {
  id: number;
  name: string;
}

interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

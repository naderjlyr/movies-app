import React, { FC } from "react";
import "./MoviesList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import tmdbApi from "../../api/tmdbApi";
import {
  MediaContent,
  PopularMovies,
  PopularMoviesResults,
} from "../../models/interfaces/movies";
import { useAppSelector } from "../../features/hooks/hooks";
import { selectMovies } from "../../features/slice/moviesSlice";
import MovieCard from "../MovieCard/MovieCard";
interface IMoviesList {
  moviesType: MediaContent[];
}
const MoviesList: FC<IMoviesList> = ({ moviesType }) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  const renderMovieItems = moviesType.map((movie) => {
    return (
      <SwiperSlide key={movie.id}>
        <MovieCard key={movie.id} movie={movie} />
      </SwiperSlide>
    );
  });
  return (
    <div className="movies-list">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={15}
        slidesPerView={3}
      >
        {renderMovieItems}
      </Swiper>
    </div>
  );
};

export default MoviesList;

import React, { FC } from "react";
import "./MoviesList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { PopularMoviesResults } from "../../models/interfaces/movies";
import MovieCard from "../MovieCard/MovieCard";
interface IMoviesList {
  moviesType: PopularMoviesResults[];
}
SwiperCore.use([Navigation]);

const MoviesList: FC<IMoviesList> = ({ moviesType }) => {
  const renderMovieItems = moviesType.map((movie) => {
    return (
      <SwiperSlide key={movie.id}>
        <MovieCard key={movie.id} movie={movie} />
      </SwiperSlide>
    );
  });
  return (
    <div className="movies-list">
      <Swiper navigation spaceBetween={15} slidesPerView={3}>
        {renderMovieItems}
      </Swiper>
    </div>
  );
};

export default MoviesList;

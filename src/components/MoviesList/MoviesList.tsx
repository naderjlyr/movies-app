import React from "react";
import "./MoviesList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi from "../../api/tmdbApi";
import { MediaContent } from "../../models/interfaces/movies";

interface IMoviesList {
  category: string;
  type: string;
  id?: number;
}

const MoviesList = (props: IMoviesList) => {
  const [items, setItems] = React.useState<MediaContent[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <div className="movies-list">
      {/* <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {!loading
          ? items.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard item={item} category={props.category} />
              </SwiperSlide>
            ))
          : skeletonData.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard
                  item={item}
                  category={props.category}
                  loading={true}
                />
              </SwiperSlide>
            ))}
      </Swiper> */}
    </div>
  );
};

export default MoviesList;

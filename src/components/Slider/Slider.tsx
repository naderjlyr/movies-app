import { useEffect, useState, useRef, FC } from "react";
import tmdbApi from "../../api/tmdbApi";
import tmdbConfig from "../../api/tmdbConfig";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { IMovieRequest } from "../../models/interfaces/tmdb";
// import HeroSlideItem from "./HeroSlideItem";
// import ModalTrailer from "../Modal/Modal";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import "./Slider.scss";
import { MediaContent } from "../../models/interfaces/movies";
import { useAppSelector } from "../../features/hooks/hooks";
import { selectLoadingStatus } from "../../features/slice/moviesSlice";
import { FetchState } from "../../models/interfaces/tmdbRequests";
import SlideItem from "./SlideItem";
interface ISlider {
  moviesType: MediaContent[];
}

const Slider: FC<ISlider> = ({ moviesType }) => {
  // const [openTrailer, setOpenTrailer] = useState<boolean>(false);
  const iframeRef = React.useRef<any>(null);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const [isActive, setIsActive] = useState<boolean>(false);
  const renderMovieItems = moviesType.map((movie) => {
    return (
      <SwiperSlide key={movie.id}>
        <SlideItem
          key={movie.id}
          movie={movie}
          status={`${isActive ? "active" : ""}`}
        />
        ;
      </SwiperSlide>
    );
  });

  // const handleOpen = async (id: number) => {
  //   const modal = document.querySelector(`#modal-box`);

  //   const getVideo = await tmdbApi.getVideos({
  //     category: "movie",
  //     id: id,
  //   });

  //   if (getVideo?.data.results.length > 0) {
  //     const videoSrc =
  //       "https://www.youtube.com/embed/" + getVideo?.data.results[0].key;
  //     modal
  //       ?.querySelector(".modal-video > iframe")
  //       ?.setAttribute("src", videoSrc);
  //   } else {
  //     const modalVideo: any = document.querySelector(".modal-video");
  //     modalVideo.innerHTML = "No Trailer";
  //   }
  //   setOpenTrailer(true);
  // };
  // const handleClose = () => {
  //   iframeRef.current.setAttribute("src", "");
  //   setOpenTrailer(false);
  // };
  return (
    <>
      <div className="top-slider">
        {loadingStatus === FetchState.SUCCESS ? (
          <Swiper
            modules={[Autoplay, Navigation]}
            grabCursor={false}
            allowTouchMove={false}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 4000 }}
          >
            {renderMovieItems}
          </Swiper>
        ) : (
          <div style={{ height: 1000 }} />
        )}
      </div>
      {/* <ModalTrailer open={openTrailer}>
        <div className="modal-box" id={`modal-box`}>
          <div className="modal-close">
            <CloseIcon onClick={handleClose} />
          </div>
          <div className="modal-video">
            <iframe
              ref={iframeRef}
              allowFullScreen={true}
              width="100%"
              height="100%"
              title="trailer"
            ></iframe>
          </div>
        </div>
      </ModalTrailer> */}
    </>
  );
};

export default Slider;

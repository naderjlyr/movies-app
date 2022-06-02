import { FC } from "react";
import { MediaContent } from "../../models/interfaces/movies";
import { Button, useMediaQuery } from "@mui/material";
import tmdbConfig from "../../api/tmdbConfig";
type ISlide = {
  movie: MediaContent;
  status: string;
};

const SlideItem: FC<ISlide> = ({ movie, status }) => {
  const slideBackground = tmdbConfig.originalImage(movie.backdrop_path);
  const mobileScreen = useMediaQuery("(min-width:600px)");
  const tabletScreen = useMediaQuery("(min-width:1024px)");
  return (
    <div
      className={`hero-slide__item__content`}
      style={{ backgroundImage: `url(${slideBackground})` }}
    >
      <div className="hero-slide__item__content__info">
        <div className="title">
          <h1>{movie.title}</h1>
        </div>
        <div className="user-core">
          <div className="user-core__progress">
            {/* <CirclarProgressBarComponent percentage={item.vote_average * 10} /> */}
          </div>
          <h2>User Core</h2>
        </div>
        <div className="description">
          <p>{movie.overview}</p>
        </div>
        <div className="buttons">
          <Button
            size={!mobileScreen ? "medium" : "large"}
            variant="contained"
            sx={{
              fontWeight: 600,
              textTransform: "initial",
              fontSize: tabletScreen && mobileScreen ? "1.5rem" : "auto",
            }}
            // onClick={onWatchNow}
          >
            Watch now
          </Button>
          <Button
            size={!mobileScreen ? "medium" : "large"}
            variant="outlined"
            sx={{
              fontWeight: 600,
              marginLeft: !mobileScreen ? "8px" : 2,
              textTransform: "initial",
              fontSize: tabletScreen && mobileScreen ? "1.5rem" : "auto",
            }}
            // onClick={() => handleOpenTrailer(movie.id)}
          >
            {mobileScreen ? "Watch trailer" : "Trailer"}
          </Button>
        </div>
      </div>
      <div className="hero-slide__item__content__poster">
        <img src={tmdbConfig.w500Image(movie.poster_path)} alt={movie.title} />
      </div>
    </div>
  );
};
export default SlideItem;

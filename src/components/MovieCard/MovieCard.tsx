import { useAppSelector } from "../../features/hooks/hooks";
import { selectLoadingStatus } from "../../features/slice/moviesSlice";
import {
  MediaContent,
  PopularMoviesResults,
} from "../../models/interfaces/movies";
import { FetchState } from "../../models/interfaces/tmdbRequests";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import tmdbConfig from "../../api/tmdbConfig";
import playSVG from "../../assets/images/play.svg";
interface IMovieCard {
  movie: MediaContent;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const urlRegex = /\s|:/g;
  const url_title = movie.title.toLowerCase().replace(urlRegex, "-");
  const link = "/content/" + movie.id + "/" + url_title;
  let cardBackground = "";
  if (movie.poster_path || movie.backdrop_path) {
    cardBackground = tmdbConfig.w500Image(
      movie.poster_path ?? movie.backdrop_path
    );
  }
  return (
    <>
      {loadingStatus === FetchState.SUCCESS ? (
        <Link to={link}>
          <div className="movie-card">
            <div
              className="movie-card__image"
              style={{ backgroundImage: `url(${cardBackground})` }}
            ></div>
            <img src={playSVG} alt="" />
            <div className="movie-card__release">
              <p>{movie?.release_date?.split("-")[0]}</p>
            </div>
          </div>
          <div className="movie-card__title">
            <h5>{movie.title ?? movie.name}</h5>
          </div>
        </Link>
      ) : (
        ""
        // <>
        //   <Skeleton
        //     variant="rectangular"
        //     width={width}
        //     height={height}
        //     sx={{ borderRadius: "10px" }}
        //   />
        //   <Skeleton
        //     variant="rectangular"
        //     width={width}
        //     height={mobileScreen ? 24 : 12}
        //     sx={{ marginTop: "0.6rem", borderRadius: 1 }}
        //   />
        // </>
      )}
    </>
  );
};

export default MovieCard;

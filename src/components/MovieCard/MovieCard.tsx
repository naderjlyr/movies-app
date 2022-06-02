import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { selectLoadingStatus } from "../../features/slice/moviesSlice";
import {
  MediaContent,
  PopularMoviesResults,
} from "../../models/interfaces/movies";
import { FetchState } from "../../models/interfaces/tmdbRequests";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import tmdbConfig from "../../api/tmdbConfig";
import addToList from "../../assets/images/addtolist.svg";
import heartSVG from "../../assets/images/heart.svg";
import { selectUser, userActions } from "../../features/slice/userSlice";
import { useEffect, useState } from "react";
interface IMovieCard {
  movie: MediaContent;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const [watchList, setWatchList] = useState<string>("");
  const [favorite, setFavorite] = useState<string>("");
  const urlRegex = /\s|:/g;
  const url_title = movie.title.toLowerCase().replace(urlRegex, "-");
  const link = "/content/" + movie.id + "/" + url_title;
  let cardBackground = "";
  if (movie.poster_path || movie.backdrop_path) {
    cardBackground = tmdbConfig.w500Image(
      movie.poster_path ?? movie.backdrop_path
    );
  }
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const movieClassNameChecker = () => {
      if (user.watchList.find((id) => id === movie.id)) {
        setWatchList((prev) => "watchlist");
      }
      // if(user.favorites.find((id)=>id===movie.id)){
      //   setMovieClassName((prev)=>"yes")
      // }
    };
    movieClassNameChecker();
  }, [movie.id, user.watchList]);

  const watchListHandler = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => {
    const movieItem = e.currentTarget;
    if (movieItem.classList.contains("watchlist")) {
      console.log("hastesh");
      movieItem.classList.remove("watchlist");
    } else {
      dispatch(userActions.addToWatchList(movie.id));
    }
  };

  // const findPositionHandler = (
  //   e: MouseEvent<HTMLElement, globalThis.MouseEvent>
  // ) => {
  //   dispatch(jobActions.findPosition(job));
  // };

  return (
    <>
      {loadingStatus === FetchState.SUCCESS ? (
        <div>
          <div className="movie-card">
            <div
              className="movie-card__image"
              style={{ backgroundImage: `url(${cardBackground})` }}
            ></div>

            <div className="movie-card__release">
              <p>{movie?.release_date?.split("-")[0]}</p>
            </div>
          </div>
          <div className="movie-card__title">
            <h5>{movie.title ?? movie.name}</h5>
          </div>
        </div>
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

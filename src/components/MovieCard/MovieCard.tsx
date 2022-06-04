import { MouseEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import {
  MediaContent,
  PopularMoviesResults,
} from "../../models/interfaces/movies";
import { FetchState } from "../../models/interfaces/tmdbRequests";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import { tmdbConfig } from "../../features/services/api";
import addToListSVG from "../../assets/images/playlist-add.svg";
import addToListCheckSVG from "../../assets/images/playlist-add-check.svg";
import heartSVG from "../../assets/images/heart.svg";
import heartFillSVG from "../../assets/images/heart-fill.svg";
import { selectUser, userActions } from "../../features/slice/userSlice";
import { useEffect, useState } from "react";
interface IMovieCard {
  movie: PopularMoviesResults;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  const [watchList, setWatchList] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
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
    const classChecker = () => {
      if (user.watchList.find((id) => id === movie.id)) {
        setWatchList((prev) => !prev);
      }
      if (user.favorites.find((id) => id === movie.id)) {
        setFavorite((prev) => !prev);
      }
    };
    classChecker();
    return () => {
      classChecker();
    };
  }, [user.watchList, user.favorites, movie.id]);

  const addToListHandler = (e: MouseEvent) => {
    // console.log(favoriteElement);
    if (e.currentTarget?.classList.contains("watchlist-container")) {
      dispatch(userActions.addRemoveWatchList(movie.id));
      console.log(movie.id);
    }
    if (e.currentTarget?.classList.contains("favorite-container")) {
      dispatch(userActions.addRemoveFavorites(movie.id));
    }
  };
  return (
    <>
      <div>
        <div className="movie-card">
          <div
            className="movie-card__image"
            style={{ backgroundImage: `url(${cardBackground})` }}
          ></div>
          <div className="movie-buttons">
            <img
              src={`${watchList ? addToListCheckSVG : addToListSVG}`}
              className={`watchlist-container ${watchList ? "watchlist" : ""}`}
              onClick={addToListHandler}
              alt="add to Watch Later List"
            />
            <img
              src={`${favorite ? heartFillSVG : heartSVG}`}
              className={`favorite-container ${favorite ? "liked" : ""}`}
              onClick={addToListHandler}
              alt="Add to Favorties"
            />
          </div>
          <div className="movie-card__release">
            <p>{movie?.release_data?.split("-")[0]}</p>
          </div>
        </div>
        <div className="movie-card__title">
          <h5>{movie.title ?? movie.title}</h5>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

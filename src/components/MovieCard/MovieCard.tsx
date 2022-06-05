import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { PopularMoviesResults } from "../../models/interfaces/movies";
import "./MovieCard.scss";
import addToListSVG from "../../assets/images/playlist-add.svg";
import addToListCheckSVG from "../../assets/images/playlist-add-check.svg";
import heartSVG from "../../assets/images/heart.svg";
import heartFillSVG from "../../assets/images/heart-fill.svg";
import { selectUser, userActions } from "../../features/slice/userSlice";
import { useEffect, useState } from "react";
import { tmdbConfig } from "../../features/services/api";
import { Button } from "@mui/material";
import CustomModal from "../Modal/CustomModal";

interface IMovieCard {
  movie: PopularMoviesResults;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  const [watchList, setWatchList] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
      if (user.watchList.find((watchMovie) => watchMovie.id === movie.id)) {
        setWatchList((prev) => !prev);
      }
      if (user.favorites.find((favMovie) => favMovie.id === movie.id)) {
        setFavorite((prev) => !prev);
      }
    };
    classChecker();
    return () => {
      classChecker();
    };
  }, [user.watchList, user.favorites, movie.id]);

  const addToListHandler = (e: MouseEvent) => {
    if (e.currentTarget?.classList.contains("watchlist-container")) {
      dispatch(userActions.addRemoveWatchList(movie));
    }
    if (e.currentTarget?.classList.contains("favorite-container")) {
      dispatch(userActions.addRemoveFavorites(movie));
    }
  };

  const requestTrailerHandler = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className="movie-card" id={String(movie.id)}>
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
        <Button
          sx={{
            width: "100%",
            color: "#fff",
            backgroundColor: "#e0005d",
          }}
          className="trailer-button"
          onClick={requestTrailerHandler}
        >
          Watch Trailer
        </Button>
        {isModalOpen && (
          <CustomModal
            movieId={movie.id}
            toggleOpen={requestTrailerHandler}
            open={isModalOpen}
          />
        )}
        <div className="movie-card__title">
          <h5>{movie.title ?? movie.title}</h5>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

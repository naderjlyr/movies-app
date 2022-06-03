import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { selectMovies, fetchMovies } from "../../features/slice/moviesSlice";
import { Button } from "@mui/material";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Dashboard.scss";
import { selectUser } from "../../features/slice/userSlice";
import {
  MediaContent,
  PopularMoviesResults,
} from "../../models/interfaces/movies";
import { IFetchMovie } from "../../features/slice/moviesSlice";
import { IUserData } from "../../features/slice/userSlice";
import { RootState } from "../../features/store";
import { current } from "@reduxjs/toolkit";
type Props = {};

const Dashboard = () => {
  const [localStorageMovies, setLocalStorageMovies] = useState<IFetchMovie>();
  const [localStorageLists, setLocalStorageLists] = useState<IUserData>();
  const [allMovies, setAllMovies] = useState<MediaContent[]>();
  const [watchList, setWatchList] = useState<MediaContent[]>();
  const [favorites, setFavorites] = useState<MediaContent[]>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    let localState: RootState;
    const fetchLocalStorage = async () => {
      localState = await JSON.parse(
        localStorage.getItem("rtk-persist") || "{}"
      );
      setLocalStorageMovies(localState.movies);
      setLocalStorageLists(localState.user);
      // Concating arrays with duplicates
      const allMovies = localState.movies.popularMovies.concat(
        localState.movies.topRatedMovies
      );
      setWatchList(
        allMovies.filter((movie) =>
          localState.user.watchList.includes(movie.id)
        )
      );
      setFavorites(
        allMovies.filter((movie) =>
          localState.user.favorites.includes(movie.id)
        )
      );
    };
    fetchLocalStorage();
    return () => {};
  }, [watchList, favorites]);

  return (
    <>
      <div className="category-box container">
        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Your Watch List</h2>
          </div>
          <MoviesList moviesType={watchList ? watchList : []} />
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Movies you've liked</h2>
          </div>
          <MoviesList moviesType={favorites ? favorites : []} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

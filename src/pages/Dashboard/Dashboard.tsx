import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../features/hooks/hooks";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Dashboard.scss";
import { selectUser } from "../../features/slice/userSlice";
import { PopularMoviesResults } from "../../models/interfaces/movies";
import { RootState } from "../../features/store";

const Dashboard = () => {
  const user = useAppSelector(selectUser);
  const mainWatch = user.watchList;

  console.log(mainWatch);

  // const mainFav = User.favorites;
  // const [watchList, setWatchList] = useState<PopularMoviesResults[]>();
  // const [favorites, setFavorites] = useState<PopularMoviesResults[]>();

  // const fetchLocalStorage = useCallback(async () => {
  //   const fromLocalStorage: RootState = await JSON.parse(
  //     localStorage.getItem("rtk-persist") || "{}"
  //   );
  //   let allMovies = fromLocalStorage.movies.popularMovies
  //     .concat(
  //       fromLocalStorage.movies.topRatedMovies,
  //       fromLocalStorage.movies.upcomingMovies
  //     )
  //     .filter(
  //       (value, index, self) =>
  //         index ===
  //         self.findIndex((t) => t.id === value.id && t.title === value.title)
  //     );

  //   setWatchList(
  //     allMovies.filter((movie) =>
  //       fromLocalStorage.user.watchList.includes(movie.id)
  //     )
  //   );
  //   setFavorites(
  //     allMovies.filter((movie) =>
  //       fromLocalStorage.user.favorites.includes(movie.id)
  //     )
  //   );
  // }, []);

  // useEffect(() => {
  //   fetchLocalStorage();
  // }, [fetchLocalStorage, mainWatch, mainFav]);

  return (
    <>
      {/* <div className="category-box container">
        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Your Watch List</h2>
          </div>
          <div></div>
          <MoviesList moviesType={watchList ? watchList : []} />
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Movies you've liked</h2>
          </div>
          <MoviesList moviesType={favorites ? favorites : []} />
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;

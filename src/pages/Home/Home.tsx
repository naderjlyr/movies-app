import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { selectMovies, fetchMovies } from "../../features/slice/moviesSlice";
import { ThemeProvider, Button } from "@mui/material";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Home.scss";
type Props = {};

const Home = (props: Props) => {
  const movies = useAppSelector(selectMovies);
  const topRatedMovies = movies.topRatedMovies;
  const upcomingMovies = movies.upcomingMovies;
  const popularMovies = movies.popularMovies;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies({ type: "popular", page: 1 }));
    dispatch(fetchMovies({ type: "upcoming", page: 1 }));
    dispatch(fetchMovies({ type: "top_rated", page: 1 }));
  }, []);

  return (
    <>
      <div className="page-title">Home</div>
      <Slider />
      <div className="category-box container">
        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Trending Movie</h2>
            <Button
              variant="outlined"
              sx={{ fontWeight: 600, textTransform: "initial" }}
            >
              View more
            </Button>
          </div>
          <MoviesList moviesType={popularMovies} />
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Upcoming Movies</h2>
            <Button
              variant="outlined"
              sx={{ fontWeight: 600, textTransform: "initial" }}
            >
              View more
            </Button>
          </div>
          <MoviesList moviesType={upcomingMovies} />
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Top Rated Movies</h2>
            <Button
              variant="outlined"
              sx={{ fontWeight: 600, textTransform: "initial" }}
            >
              View more
            </Button>
          </div>
          <MoviesList moviesType={topRatedMovies} />
        </div>
      </div>
    </>
  );
};

export default Home;

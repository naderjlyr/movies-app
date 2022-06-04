import { Button, Pagination } from "@mui/material";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Home.scss";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../../features/services/api";
import { ChangeEvent, MouseEventHandler, useState } from "react";

const Home = () => {
  const [page, setPage] = useState<number>(1);

  const { data: popularMovies } = useGetPopularMoviesQuery(page);
  const { data: topRatedMovies } = useGetTopRatedMoviesQuery();
  const { data: upcomingMovies } = useGetUpcomingMoviesQuery();
  console.log(popularMovies?.total_pages + "here it is");

  const handleOnChangePage = (e: unknown, value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="category-box container">
        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Trending Movie</h2>
            {/* <Button
              variant="outlined"
              sx={{ fontWeight: 600, textTransform: "initial" }}
            >
              View more
            </Button> */}
          </div>
          <MoviesList
            moviesType={popularMovies?.results ? popularMovies.results : []}
          />
          <div className="pagination-container">
            <Pagination
              count={
                popularMovies?.total_pages ? popularMovies?.total_pages / 10 : 1
              }
              page={page}
              color="standard"
              onChange={handleOnChangePage}
            />
          </div>
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Upcoming Movies</h2>
            {/* <Button
              variant="outlined"
              sx={{ fontWeight: 600, textTransform: "initial" }}
            >
              View more
            </Button> */}
          </div>
          <MoviesList
            moviesType={upcomingMovies?.results ? upcomingMovies.results : []}
          />
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Top Rated Movies</h2>
            {/* <Button
              variant="outlined"
              sx={{ fontWeight: 600, textTransform: "initial" }}
            >
              View more
            </Button> */}
          </div>
          <MoviesList
            moviesType={topRatedMovies?.results ? topRatedMovies.results : []}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

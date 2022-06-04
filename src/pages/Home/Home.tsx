import { Button } from "@mui/material";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Home.scss";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../../features/services/api";

const Home = () => {
  const { data: popularMovies } = useGetPopularMoviesQuery();
  const { data: topRatedMovies } = useGetTopRatedMoviesQuery();
  const { data: upcomingMovies } = useGetUpcomingMoviesQuery();
  console.log(popularMovies?.results + "here it is");
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

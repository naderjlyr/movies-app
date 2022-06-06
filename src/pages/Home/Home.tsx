import { OutlinedInput, FormControl } from "@mui/material";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Home.scss";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useSearchMovieQuery,
} from "../../features/services/api";
import { ChangeEvent, useState } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";
import { useDebounce } from "use-debounce";
import CustomSkeleton from "../../components/Skeleton/CustomSkeleton";
const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [skip, setSkip] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const {
    data: popularMovies,
    isLoading: popularLoading,
    isSuccess: popularSuccess,
  } = useGetPopularMoviesQuery(page);
  const {
    data: topRatedMovies,
    isLoading: topRatedLoading,
    isSuccess: topRatedSuccess,
  } = useGetTopRatedMoviesQuery(page, { skip: !popularSuccess });
  const {
    data: upcomingMovies,
    isSuccess: upcomingSuccess,
    isLoading: upcomingLoading,
  } = useGetUpcomingMoviesQuery(page, {
    skip: !topRatedSuccess,
  });

  const { data: searchResult, isSuccess: searchedForMovie } =
    useSearchMovieQuery(debouncedSearchQuery, {
      skip: debouncedSearchQuery === "",
    });

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
    setSkip((prev) => !prev);
  };
  return (
    <>
      <div className="category-box container">
        <div className="section mb-3">
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              id="outlined-adornment-amount"
              placeholder="Search Movies..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </FormControl>
          {searchedForMovie && (
            <SearchResult searchedPhrase={debouncedSearchQuery}>
              <MoviesList moviesType={searchResult.results} />
            </SearchResult>
          )}
          <div className="header__section mb-2">
            <h2>Trending Movie</h2>
          </div>

          {popularSuccess ? (
            <MoviesList moviesType={popularMovies.results} />
          ) : (
            <>
              <div>Failed to fetch movies!</div>
              <CustomSkeleton />
            </>
          )}
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Upcoming Movies</h2>
          </div>
          {upcomingSuccess ? (
            <MoviesList moviesType={upcomingMovies.results} />
          ) : (
            <>
              <CustomSkeleton />
            </>
          )}
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Top Rated Movies</h2>
          </div>
          {topRatedSuccess ? (
            <MoviesList moviesType={topRatedMovies.results} />
          ) : (
            <>
              <CustomSkeleton />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

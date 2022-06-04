import {
  Button,
  Pagination,
  Skeleton,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Home.scss";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useSearchMovieQuery,
} from "../../features/services/api";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";
import CustomSkeleton from "../../components/Skeleton/CustomSkeleton";
import { useDebounce } from "use-debounce";
const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [skip, setSkip] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const { data: popularMovies, isLoading: popularLoading } =
    useGetPopularMoviesQuery(page);
  const { data: topRatedMovies, isLoading: topRatedLoading } =
    useGetTopRatedMoviesQuery();
  const { data: upcomingMovies, isLoading: upcomingLoading } =
    useGetUpcomingMoviesQuery();

  const {
    data: searchResult,
    isSuccess: searchedForMovie,
    isFetching,
    isError,
  } = useSearchMovieQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery === "",
  });

  const handleOnChangePage = (e: unknown, value: number) => {
    setPage(value);
  };
  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
    setSkip((prev) => !prev);
  };
  console.log(searchedForMovie);
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
            <SearchResult>
              <MoviesList moviesType={searchResult.results} />
            </SearchResult>
          )}
          <div className="header__section mb-2">
            <h2>Trending Movie</h2>
          </div>

          {!popularLoading ? (
            <MoviesList
              moviesType={popularMovies?.results ? popularMovies.results : []}
            />
          ) : (
            <>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </>
          )}
          <div className="pagination-container">
            {/* <Pagination
              count={
                popularMovies?.total_pages ? popularMovies?.total_pages / 10 : 1
              }
              page={page}
              color="standard"
              onChange={handleOnChangePage}
            /> */}
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

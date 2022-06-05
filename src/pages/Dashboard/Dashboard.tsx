import { useAppSelector } from "../../features/hooks/hooks";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./Dashboard.scss";
import { selectUser } from "../../features/slice/userSlice";

const Dashboard = () => {
  const user = useAppSelector(selectUser);
  const watchList = user.watchList;
  const favorites = user.favorites;

  return (
    <>
      <div className="category-box container">
        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Your Watch List</h2>
          </div>
          <div></div>
          <MoviesList moviesType={watchList} />
        </div>

        <div className="section mb-3">
          <div className="header__section mb-2">
            <h2>Movies you've liked</h2>
          </div>
          <MoviesList moviesType={favorites} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

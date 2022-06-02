import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <>
      <NavLink to="./home">Home</NavLink>
      <NavLink to="./movie">Movies</NavLink>
      <NavLink to="./series">TV Series</NavLink>
    </>
  );
};

export default Navigation;

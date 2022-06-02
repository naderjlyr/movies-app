import "./header.scss";
import Logo from "../../assets/images/logo.svg";
import Navigation from "./Navigation";
import { useEffect, useRef } from "react";
const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrapper container">
        <div className="logo">
          <img src={Logo} alt="The NMovie App" />
        </div>
        <div className="navigation">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;

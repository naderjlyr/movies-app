import "./header.scss";
import Logo from "../../assets/images/logo.svg";
import Navigation from "./Navigation";
import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const tabletScreen = useMediaQuery("(min-width:1024px)");
  const mobileScreen = useMediaQuery("(min-width:600px)");
  const [isOpeningMenu, setOpeningMenu] = useState<boolean>(false);
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

  const editOpenMenu = (open: boolean) => {
    setOpeningMenu(open);
  };

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

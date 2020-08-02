import React from "react";
import style from "./NavBar.module.css";
import ButtonNavigation from "./ButtonNavigation";
import CardTravel from "@material-ui/icons/CardTravel";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";


const NavBar = ({ homeIcon, store, aboutIcon }) => {
  return (
    <div className={style.navBar}>
      <div className={style.navTop}>
        
          <Link to="/" className={style.logoLink}>
            <span className={style.logo}>Men's Fashion</span>
          </Link>

        <div className={style.spaceNavBar} />
          <Link to="/store" className={style.linkTopNav}>
            <CardTravel
              className={style.storeIcon}
              fontSize="large"
              color={store ? "primary" : "inherit"}
            />
          </Link>

          <Link to="/about/" className={style.linkTopNav}>
            <InfoIcon
              className={style.storeIcon}
              fontSize="large"
              color={aboutIcon ? "primary" : "inherit"}
            />
          </Link>
      </div>
      <ButtonNavigation homeIcon={homeIcon} store={store} about={aboutIcon} />
    </div>
  );
};

export default NavBar;

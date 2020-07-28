import React from "react";
import style from "./NavBar.module.css";
import ButtonNavigation from "./ButtonNavigation";
import CardTravel from "@material-ui/icons/CardTravel";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const NavBar = ({ homeIcon, store, aboutIcon }) => {
  return (
    <div className={style.navBar}>
      <div className={style.navTop}>
        
          <Link to="/" className={style.logoLink}>
            <span className={style.logo}>Men's Fashion</span>
          </Link>

        <div className={style.spaceNavBar} />
        <LightTooltip title="store">
          <Link to="/store/" className={style.linkTopNav}>
            <CardTravel
              className={style.storeIcon}
              fontSize="large"
              color={store ? "primary" : ""}
            />
          </Link>
        </LightTooltip>

        <LightTooltip title="about">
          <Link to="/about/" className={style.linkTopNav}>
            <InfoIcon
              className={style.storeIcon}
              fontSize="large"
              color={aboutIcon ? "primary" : ""}
            />
          </Link>
        </LightTooltip>
      </div>
      <ButtonNavigation homeIcon={homeIcon} store={store} about={aboutIcon} />
    </div>
  );
};

export default NavBar;

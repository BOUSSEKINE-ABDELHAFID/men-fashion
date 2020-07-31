import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CardTravel from "@material-ui/icons/CardTravel";
import InfoIcon from "@material-ui/icons/Info";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation({ homeIcon, store, about }) {
  const [value, setValue] = React.useState(0);

  return (
    <div className={style.navbutton}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={style.navButtonIcons}
      >
        <Link to="/" className={style.linkTopNav}>
          <BottomNavigationAction
            icon={<HomeIcon color={homeIcon ? "primary" : ""} />}
          />
        </Link>

        <Link to="/store" className={style.linkTopNav}>
          <BottomNavigationAction
            icon={<CardTravel color={store ? "primary" : ""} />}
          />
        </Link>

        <Link to="/about" className={style.linkTopNav}>
          <BottomNavigationAction
            icon={<InfoIcon color={about ? "primary" : ""} />}
          />
        </Link>
      </BottomNavigation>
    </div>
  );
}

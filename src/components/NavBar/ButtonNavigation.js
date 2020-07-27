import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CardTravel from "@material-ui/icons/CardTravel";
import InfoIcon from "@material-ui/icons/Info";
import style from "./NavBar.module.css"


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className = {style.navbutton}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className = {style.navButtonIcons}
      >
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<CardTravel />} />
        <BottomNavigationAction icon={<InfoIcon />} />
      </BottomNavigation>
    </div>
  );
}

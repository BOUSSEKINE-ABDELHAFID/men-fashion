import React from 'react'
import style from "./NavBar.module.css"
import ButtonNavigation from "./ButtonNavigation"
import CardTravel from '@material-ui/icons/CardTravel'
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);



const NavBar = () => {
    return (
        <div className = {style.navBar}>
            <div className = {style.navTop}>
                <span className = {style.logo}>Men's Fashion</span>
                <div className = {style.spaceNavBar}/>
                <LightTooltip title="store">
                <CardTravel className = {style.storeIcon} fontSize="large"/>
                </LightTooltip>

                <LightTooltip title="about">
                <InfoIcon className = {style.storeIcon} fontSize="large"/>
                </LightTooltip>

                
            </div>
            <ButtonNavigation  />
        </div>
    )
}

export default NavBar

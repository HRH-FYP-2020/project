import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuList from "@material-ui/core/MenuList";
// import Grow from "@material-ui/core/Grow";
// import Paper from "@material-ui/core/Paper";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Hidden from "@material-ui/core/Hidden";
// import Poppers from "@material-ui/core/Popper";
// import Divider from "@material-ui/core/Divider";
// @material-ui/icons
// import Person from "@material-ui/icons/Person";
// import Notifications from "@material-ui/icons/Notifications";
// import Dashboard from "@material-ui/icons/Dashboard";
// import Search from "@material-ui/icons/Search";
// core components
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  // const classes = useStyles();
  // const [openNotification, setOpenNotification] = React.useState(null);
  // const [openProfile, setOpenProfile] = React.useState(null);
  // const handleClickNotification = event => {
  //   if (openNotification && openNotification.contains(event.target)) {
  //     setOpenNotification(null);
  //   } else {
  //     setOpenNotification(event.currentTarget);
  //   }
  // };
  // const handleCloseNotification = () => {
  //   setOpenNotification(null);
  // };
  // const handleClickProfile = event => {
  //   if (openProfile && openProfile.contains(event.target)) {
  //     setOpenProfile(null);
  //   } else {
  //     setOpenProfile(event.currentTarget);
  //   }
  // };
  // const handleCloseProfile = () => {
  //   setOpenProfile(null);
  // };
  const logout=()=>{

    localStorage.removeItem('user');
    window.location.assign('/home')
  }
  return (


    <div>
      <a onClick={logout} className="btn btn-info btn-sm w-100">
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </a>
    </div>
  );
}


    // {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> */}
    // {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
    // {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> */}
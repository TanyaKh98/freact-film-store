import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "../../components/authentication/Login/Login";
import Search from "../../Pages/Search/Search";
import Favorite from "../../Pages/Favorite/Favorite";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </MenuIcon>
      <Menu
        className="sMenu"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={Login}>Log In</MenuItem>
        <MenuItem onClick={Search}>Search</MenuItem>
        <MenuItem onClick={Favorite}>Favorite</MenuItem>
      </Menu>
    </div>
  );
}

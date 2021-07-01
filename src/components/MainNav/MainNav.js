import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";

import MenuIcon from "../../components/MainNav/Button";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import { useHistory } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "../../components/MainNav/MainNav.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/favorite");
    } else if (value === 4) {
      history.push("/search");
    } else if (value === 5) {
      history.push("/login");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Home"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        className="hide"
        style={{ color: "white" }}
        label="Favorite"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        className="hide"
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />

      <BottomNavigationAction
        className="hide"
        style={{ color: "white" }}
        label="Log in"
        icon={<AccountBoxIcon />}
      />
      <BottomNavigationAction
        className="appear"
        style={{ color: "white" }}
        icon={<MenuIcon />}
      />
    </BottomNavigation>
  );
}

import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Select } from "@material-ui/core";
import Nav from "../nav/nav";
import { AuthContext } from "../../contexts/authContext";


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },

  appbar: {},
  inactiveLink: {
    color: "white",
    padding: theme.spacing(8),
    fontSize: "0.8rem",
    fontFamily: "Franklin Gothic",
  },
  activeLink: {
    color: "#b0c6e8",
    padding: theme.spacing(1),
    fontSize: "0.8rem",
    fontFamily: "Franklin Gothic",
  },
}));

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { token, signout } = useContext(AuthContext);

  const open = Boolean(anchorEl);
  const menuOptions = [
    { name: "TOP RATED MOVIES", path: "movies/top-rated" },
    { name: "POPULAR MOVIES", path: "movies/popular" },
    { name: "MY WATCHLIST", path: "movies/watchlist" },
    { name: "NOW-PLAYING", path: "movies/now-playing" },
    { name: "SIMILAR MOVIES", path: "movies/similar" },
    { name: "UPCOMING", path: "/movies/upcoming" },
    { name: "TV DETAILS", path: "/tv/tv_id" },
    
  ];
  const menuOptions2 = [
    { name: "HOME", path: "/" },
    { name: "ACTORS LIST", path: "/actors" },
    { name: "TV SERIES", path: "/tv/series" },
    { name: "FAVOURITES", path: "/movies/favourites" },
    { name: "TOP RATED", path: "movies/top-rated" },
  ];


  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <>
       {token ? (
        <p>
          Welcome! <button onClick={() => signout()}>Sign out</button>
        </p>
      ) : (
        <p>
          You are not logged in{" "}
          <button onClick={() => navigate("login")}>Login</button>
        </p>
      )}
      <AppBar
        className={classes.appbar}
        position="fixed"
        elevation={0}
        style={{ flex: 1, backgroundColor: "#581845" ,color:"#DAF7A6" }}
      >
        <Toolbar style= {{paddingTop: 50, marginBottom: 10, padding: 20, paddingLeft:40}}>
        <Typography
            variant="h5"
            className={classes.title}
            align="left"
            style={{fontFamily: "Franklin Gothic",flex: 1, color: "#FFC300" }}
           
          >
            ICT2__ASSIGNMENT2__

          </Typography>
          {menuOptions2.map((opt) => (
            <MenuItem style={{ backgroundColor: "#581845",fontSize:15 }} variant="h6" key={opt.name} onClick={() => handleMenuSelect(opt.path)}>
              {opt.name}
            </MenuItem>
          ))}
          <Typography style ={{fontSize:15}}> MORE..</Typography>
          <img
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg"
            width="10"
            height={1}
            alt=""
          ></img>
          <Select style={{ backgroundColor: "#581845" }}>
            <Nav></Nav>
          </Select>
          <img
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg"
            width="10"
            height={1}
            alt=""
          ></img>
          <Typography
            variant="h6"
            className={classes.title}
            align="left"
            style={{ fontFamily: "Franklin Gothic" }}
          >
            All you need to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.name}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;

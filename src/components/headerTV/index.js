import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
    backgroundColor: "#7197d1",
  },
  tagLine: {
    fontSize: "1.5rem",
    color: "white",
  },
}));

const TvHeader = (props) => {
  const classes = useStyles();
  const tv = props.tv;


  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon style={{ color: "white" }} fontSize="large" />
      </IconButton>
      <Typography variant="h4" component="h3" style={{ color: "white" }}>
        {tv.title}
        <a href={tv.homepage}>
          <span>
            <HomeIcon style={{ color: "white" }} />
          </span>
        </a>
        <br />
        <span className={classes.tagLine}>{`   "${tv.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon style={{ color: "white" }} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TvHeader;
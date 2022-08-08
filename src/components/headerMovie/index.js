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
    backgroundColor: "#900C3F",
  },
  tagLine: {
    fontSize: "1.5rem",
    color: "#DAF7A6",
  },
}));

const MovieHeader = (props) => {
  const classes = useStyles();
  const movie = props.movie;


  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon  fontSize="large" style={{ color: "#DAF7A6" }} />
      </IconButton>
      <Typography variant="h4" component="h3" style={{ color: "#DAF7A6" }}>
        {movie.title}
        <br />
        <span className={classes.tagLine}>{`   "${movie.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon  fontSize="large" style={{ color: "#DAF7A6" }}/>
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;

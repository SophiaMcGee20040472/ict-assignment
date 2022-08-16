import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
    marginRight: theme.spacing(-2.4),
    marginLeft: theme.spacing(-2.4),
    backgroundColor: "#900C3F",
  },
  tagLine: {
    fontSize: "1.5rem",
    color: "white",
  },
}));

const ActorHeader = (props) => {
  const classes = useStyles();
  const actor = props.actor;
  const nav = useNavigate();

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => nav(-1)}>
        <ArrowBackIcon style={{ color: "#FFC300" }} fontSize="large" />
      </IconButton>
      <Typography variant="h4" component="h3" style={{ color: "#FFC300" }}>
        Biography for the Actor {actor.name}
        <br />
        <span
          className={classes.tagLine}
          style={{ color: "#FFC300" }}
        >{`   "${actor.place_of_birth}"`}</span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => nav(1)}>
        <ArrowForwardIcon style={{ color: "#FFC300" }} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;

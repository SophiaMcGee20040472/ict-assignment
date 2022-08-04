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

const TvHeader = (props) => {
  const classes = useStyles();
  const tvSeries = props.tvSeries;
  const nav = useNavigate();

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => nav(-1)}>
        <ArrowBackIcon style={{ color: "#DAF7A6" }} fontSize="large" />
      </IconButton>
      <Typography variant="h4" component="h3" style={{ color: "#DAF7A6" }}>
        {tvSeries.name}
        <br />
        <span className={classes.tagLine} style={{ color: "#DAF7A6" }}>{`   "${tvSeries.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => nav(1)}>
        <ArrowForwardIcon style={{ color: "#DAF7A6" }} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TvHeader;

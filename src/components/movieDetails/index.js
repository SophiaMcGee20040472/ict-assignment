import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "screenLeft",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  chipReview: {
    position: "absolute",
    right:    20,
    bottom:   20,
  },
}));

const MovieDetails = (props) => {
  const classes = useStyles();
  const movie = props.movie;

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip
              label="Genres"
              className={classes.chipLabel}
              color="primary"
            />
          </li>
          <li>
            <Chip label="Science Fiction" className={classes.chipLabel} />
          </li>
          <li>
            <Chip label="Action" className={classes.chipLabel} />
          </li>
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
          <Chip
            icon={<MonetizationIcon />}
            label={`${movie.revenue.toLocaleString()}`}
          />
          <Chip
            icon={<StarRate />}
            label={`${movie.vote_average} (${movie.vote_count}`}
          />
          <Chip label={`Released: ${movie.release_date}`} />
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip
              label="Production Countries"
              className={classes.chipLabel}
              color="primary"
            />
          </li>
          <li>
            <Chip label="France" className={classes.chipLabel} />
          </li>
          <li>
            <Chip label="Lithuania" className={classes.chipLabel} />
          </li>
        </Paper>
        <Paper>
          <Chip
            icon={<ArrowDropUpIcon />}
            label="REVIEWS" color= "secondary"
            className={classes.chipReview}
          />
        </Paper>
      </div>
    </>
  );
};
export default MovieDetails;

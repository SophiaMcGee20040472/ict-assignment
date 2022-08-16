import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import TvSeriesReviews from "../tvSeriesReviews";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
    color: "#DAF7A6",
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
  fab: {
    //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const TvShowDetails = ({ tvSeries }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography style ={{color:"#FFC300",fontFamily:"Helvetica"}} variant="h4" component="p">
        {tvSeries.name}
      </Typography>
      <Typography variant="h5" component="h3">
        Overview
      </Typography> 
      <Typography variant="h6" component="p">
        {tvSeries.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper
          component="ul"
          className={classes.chipSet}
          style={{ background: "#581845" }}
        >
          <Chip
            icon={
              <AccessTimeIcon
                style={{ background: "#C70039 ", color: "#FFC300" }}
              />
            }
            label={`${tvSeries.episode_run_time} min`}
            style={{ background: "#C70039 ", color: "#DAF7A6" }}
          />
          <Chip
            label={`Episodes: ${tvSeries.number_of_episodes}`}
            style={{ background: "#C70039 ", color: "#DAF7A6" }}
          />
          <Chip
            style={{ background: "#C70039 ", color: "#DAF7A6" }}
            label={`First Aired: ${tvSeries.first_air_date}`}
          />
        </Paper>

        <Paper
          component="ul"
          className={classes.chipSet}
          style={{ background: "#581845" }}
        >
          <li>
            <Chip
              label="Production Countries"
              className={classes.chipLabel}
              style={{ background: "#C70039 ", color: "#DAF7A6" }}
            />
          </li>
          {tvSeries.production_countries.map((p) => (
            <li key={p.name}>
              <Chip
                label={p.name}
                className={classes.chip}
                style={{ background: "#C70039 ", color: "#DAF7A6" }}
              />
            </li>
          ))}
        </Paper>
        <Paper
          component="ul"
          className={classes.chipSet}
          style={{ background: "#581845" }}
        >
          <li>
            <Chip
              label="Genres"
              className={classes.chipLabel}
              style={{ background: "#C70039 ", color: "#DAF7A6" }}
            />
          </li>
          {tvSeries.genres.map((g) => (
            <li key={g.name}>
              <Chip
                label={g.name}
                className={classes.chip}
                style={{ background: "#C70039", color: "#DAF7A6" }}
              />
            </li>
            
          ))}
  </Paper>
      </div>
      {}
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TvSeriesReviews tvSeries={tvSeries} />
      </Drawer>
    </>
  );
};
export default TvShowDetails;

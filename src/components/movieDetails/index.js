import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from '../movieReviews'

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
    background:"#581845"
    
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
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const MovieDetails = ( {movie}) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false); // New

  return (
    <>
      <Typography variant="h5" component="h3" style={{color:"#DAF7A6"}}>
        Overview
      </Typography>

      <Typography variant="h6" component="p" style={{color:"#DAF7A6"}}>
        {movie.overview}
      </Typography>
      <div className={classes.chipRoot} >
      <Paper component="ul" className={classes.chipSet} style={{background:"#581845"}}>
        <li>
          <Chip label="Genres" className={classes.chipLabel} style={{background:"#900C3F",color:"#DAF7A6"}} />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} style={{background:"#900C3F",color:"#DAF7A6"}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.chipSet} style={{background:"#581845",color:"#DAF7A6"}}>
        <Chip icon={<AccessTimeIcon style={{color:"#FFC300"}} />} label={`${movie.runtime} min.`}
       style={{background:"#900C3F",color:"#DAF7A6"}} />
        <Chip
          icon={<MonetizationIcon style={{color:"#FFC300"}} />}
          label={`${movie.revenue.toLocaleString()}`}
          style={{background:"#900C3F",color:"#DAF7A6"}}
        />
        <Chip
          icon={<StarRate style={{color:"#FFC300"}}/>}
          label={`${movie.vote_average} (${movie.vote_count}`}
          style={{background:"#900C3F",color:"#DAF7A6"}}
        />
        <Chip label={`Released: ${movie.release_date}`}
        style={{background:"#900C3F",color:"#DAF7A6"}} />
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
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default  MovieDetails;

import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const TvShowDetails = ( {tvSeries}) => {
const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvSeries.overview}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
      <Chip icon={<AccessTimeIcon style={{background:"black", color:"#FFC300"}} />} label={`${tvSeries.episode_run_time} min`}  style={{background:"black", color:"#DAF7A6"}} />
        <Chip label={`Episodes: ${tvSeries.number_of_episodes}`}  style={{background:"black", color:"#DAF7A6"}} />
        <Chip style={{background:"black", color:"#DAF7A6"}} label={`First Aired: ${tvSeries.first_air_date}` } />
      </Paper>
      
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Production Countries" className={classes.chipLabel}  style={{background:"black", color:"#DAF7A6"}} />
        </li>
        {tvSeries.production_countries.map((p) => (
          <li key={p.name}>
            <Chip label={p.name} className={classes.chip}  style={{background:"black", color:"#DAF7A6"}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.chipSet} >
        <li>
          <Chip label="Genres" className={classes.chipLabel}  style={{background:"black", color:"#DAF7A6"}} />
        </li>
        {tvSeries.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip}  style={{background:"black", color:"#DAF7A6"}}/>
          </li>
        ))}
      </Paper>
      </div>
    </>
  );
};
export default  TvShowDetails;
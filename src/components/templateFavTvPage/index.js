import React, { useState } from "react";
import TvHeader from "../headerTV";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TVSeriesList from "../tvSeriesList";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#581845",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

function FavTvPageTemplate({ tvseries, title,action}) {
  const classes = useStyles();

  let displayedSeries = tvseries
  .filter((m) => {
    return m
  })

return (
  <>
   
  <Grid container className={classes.root} style ={{paddingRight:-30,paddingLeft:-30}}>
        <Grid item xs={12} >
        <TvHeader title={title}/>
        </Grid>
        <Grid item container spacing={5}>
        </Grid>
        <br></br>
        <TVSeriesList action={action} tv={displayedSeries} />
      </Grid>

    </>
  );
}
export default FavTvPageTemplate;
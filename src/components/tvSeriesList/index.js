import React from "react";
import Grid from "@material-ui/core/Grid";
import TVCard from "../tvFavCard";

const TVSeriesList = ( {tv, action }) => {
    console.log(tv);
  let tvSeries = tv.map((m) => (
    <Grid key={m.id+"g"} item xs={12} sm={6} md={4} lg={3} xl={2} style ={{background:"#581845"}}>
      <TVCard key={m.id+"t"} tvSeries={m} action={action} />
    </Grid>
  ));
  return tvSeries;
};
export default TVSeriesList;
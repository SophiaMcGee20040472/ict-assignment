import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import TVList from "../tvList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#581845",
    paddingTop: theme.spacing(7),
    paddingLeft: theme.spacing(1),
    marginRight: -1,
    marginLeft: -1,
  },
  fab: {
    marginTop: theme.spacing(13.5),
    marginRight:theme.spacing(10),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
function TVListPageTemplate({ tvseries, title, action }) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const genreId = Number(genreFilter);
  let displayedTVSeries = tvseries
    .filter((m) => {
      return m.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });
  const handleChange = (type, value) => {
    if (type === "name") setTitleFilter(value);
    else setGenreFilter(value);
  };
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <TVList action={action} tvseries={displayedTVSeries} />
        </Grid>
      </Grid>
      <Fab
        style ={{color :"#581845" ,background:"#FFC300"}}
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
}
export default TVListPageTemplate;

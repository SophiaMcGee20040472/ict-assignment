import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import FilterActorsMoviesCard from "../filterMovieActors";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";
import TvHeader from "../headerTV";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#581845",
    paddingLeft: theme.spacing(1),
    marginRight:-1,
    marginLeft:-1
  
  },
  fab: {
    marginTop: theme.spacing(9),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(3),
    
  },
}));

function ActorPageTemplate({ actor, title,name, action}) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [actorFilter, setActorFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const actorId = Number(actorFilter);

  let displayedActors = actor
    .filter((m) => {
      return m.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return actorId > 0 ? m.actor_ids.includes(actorId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else setActorFilter(value);
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <TvHeader title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actor={displayedActors} />
      </Grid>
    </Grid>
    </>    
  );
}
export default ActorPageTemplate;
import React from "react";
import ActorCard from "../actorCard";
import Grid from "@material-ui/core/Grid";

const ActorList = ({actor, action}) => {
  let actorCards = actor.map((m) => (
    <Grid style={{backgroundColor:'#581845'}}key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard key={m.id} actor={m} action={action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;
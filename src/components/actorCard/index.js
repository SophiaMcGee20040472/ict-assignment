import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: { maxWidth: 280 },
  media: { height: 220 },
  backgroundColor: "#FF5733 ",
});
export default function ActorCard({ actor }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ background: "#DAF7A6 ", color: "#900C3F ", textAlign: "center" }}
    >
      <CardHeader className={classes.header} title={actor.name} />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}></Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Link to={`/actor/${actor.id}`}>
          <Button
            variant="outlined"
            size="medium"
            style={{ background: "#900C3F ", color: "#DAF7A6" }}
          >
            Actor Bio ...
          </Button>
        </Link>
        <Typography>
          POPULARITY
          <CardHeader
            className={classes.header}
            title={actor.popularity}
            style={{ color: "#581845" }}
          />
        </Typography>
      </CardActions>
    </Card>
  );
}

import Avatar from "@material-ui/core/Avatar";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcons from "../cardIcons/playlistAddIcon";
import { useState } from "react";

const useStyles = makeStyles({
  card: { maxWidth: 300 },
  media: { height: 160 },
  avatar: {},
  avatar1: {},
});

export default function MovieCard({ movie, action }) {
  const classes = useStyles();
  const { favourites, addToFavourites, mustWatch } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavourites(movie);
  };

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false;
  }

  const handleAddToMustWatchList = (e) => {
    e.preventDefault();
    PlaylistAddIcons(movie.id);
  };

  return (
    <Card
      className={classes.card}
      style={{ flex: 1, backgroundColor: "#DAF7A6" }}
    >
      <CardHeader
        className={classes.header}
        avatar={
          movie.favourite ? (
            <Avatar
              className={classes.avatar}
              style={{ color: "#900C3F", backgroundColor: "#FF5733" }}
            >
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        avatar1={
          movie.mustWatch ? (
            <Avatar
              className={classes.avatar1}
              style={{ color: "#900C3F", backgroundColor: "white" }}
            >
              <PlaylistAddIcons />
            </Avatar>
          ) : null
        }
        title={
          <Typography
            variant="h5"
            component="p"
            style={{ color: "#900C3F", textAlign: "center" }}
          >
            {movie.title}{" "}
          </Typography>
        }
      />

      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              component="p"
              style={{ color: "#581845 " }}
            >
              <CalendarIcon fontSize="small" />
              <br></br>
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              component="p"
              style={{ color: "#581845  ", textAlign: "right" }}
            >
              <StarRateIcon
                fontSize="small"
                style={{ color: "#581845  ", textAlign: "right" }}
              />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button
            variant="outlined"
            size="medium"
            style={{ background: "#581845  ", color: "#DAF7A6" }}
          >
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

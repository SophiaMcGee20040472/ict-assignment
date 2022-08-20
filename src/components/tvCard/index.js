import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AddToFavTvIcon from "../cardIcons/addTvFavourite";
import { MoviesContext } from "../../contexts/moviesContext";
import Avatar from "@material-ui/core/Avatar";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles({
  card: { maxWidth: 350 },
  media: { height: 166 },
  backgroundColor: "#FF5733 ",
  Avatar: {},
});
export default function TVCard({ tv, action }) {
  const classes = useStyles();
  const { TvFavs } = useContext(MoviesContext);

  if (TvFavs.find((id) => id === tv.id)) {
    tv.TvFavs = true;
  } else {
    tv.TvFavs = false;
  }

  let icon;

  if (tv.TvFavs) {
    icon = (
      <Avatar className={classes.avatar}>
        <AddToFavTvIcon />
      </Avatar>
    );
  } else {
    icon = null;
  }

  return (
    <Card
      className={classes.card}
      style={{ background: "#DAF7A6 ", color: "#900C3F ", textAlign: "center" }}
    >
      <CardHeader className={classes.header} title={tv.name} />
      <CardMedia
        className={classes.media}
        Avatar={icon}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tv.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tv.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {action(tv)}
        <Link to={`/tvseries/${tv.id}`}>
          <Button
            variant="outlined"
            size="medium"
            style={{ background: "#900C3F ", color: "#DAF7A6" }}
          >
            More Info ...
          </Button>
        </Link>
      </CardActions>
      <br></br>
    </Card>
  );
}

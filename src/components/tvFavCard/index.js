import React from "react";
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

const useStyles = makeStyles({
  card: { maxWidth: 300, marginBottom: 20 },
  media: { height: 166, marginBottom: 20 },
  backgroundColor: "#FF5733 ",
});
export default function TVCard({ tv, tvSeries, action }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ background: "#DAF7A6 ", color: "#900C3F ", textAlign: "center" }}
    >
      <CardHeader className={classes.header} title={tvSeries.name} />
      <CardMedia
        className={classes.media}
        image={
          tvSeries.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvSeries.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvSeries.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

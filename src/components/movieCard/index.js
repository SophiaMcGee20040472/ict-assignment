import Avatar from "@material-ui/core/Avatar";
import React,{useContext} from "react";
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

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    
  },
});

export default function MovieCard({ movie, action }) {
  const classes = useStyles();
  const { favourites, addToFavourites } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavourites(movie);
  };

  const handleAddToMustWatchList = (e) => {
  e.preventDefault();
  PlaylistAddIcons(movie.id);
};

  return (
    <Card className={classes.card} style={{flex:1, backgroundColor:'#181818'}}>
      <CardHeader 
      className={classes.header}  
      avatar={
        movie.favourite ? (
          <Avatar className={classes.avatar} style ={{color:'#E91E63', backgroundColor: 'white'}} >
            <FavoriteIcon />
          </Avatar >
        ) : null
      }
      title={
        <Typography variant="h5" component="p" style={{color:'white'}}>
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
            <Typography variant="h6" component="p" style={{color:'white'}}>
              <CalendarIcon fontSize="small"/>
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p" style={{color:'white'}}>
              <StarRateIcon fontSize="small" color ="secondary" />
              {"  "} {movie.vote_average}{" "} 
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions >
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" style={{color:'white'}}size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

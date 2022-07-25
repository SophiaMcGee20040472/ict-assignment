import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getActorsMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterActorsMoviesCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("cast", getActorsMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const casts = data.cast;
  if (casts[0].name !== "All"){
    casts.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleCastChange = (e) => {
    handleChange(e, "cast", e.target.value);
  };

  return (
    <>
      <Card className={classes.root} variant="outlined" style ={{background:'#581845'}}>
        <CardContent>
          <Typography variant="h5" component="h1" style ={{color:'white'}}>
            <SearchIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
            className={classes.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={props.titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="cast-label">Cast</InputLabel>
            <Select
              labelId="cast-label"
              id="cast-select"
              value={props.castFilter}
              onChange={handleCastChange}
            >
              {casts.map((cast) => {
                return (
                  <MenuItem key={cast.id} value={cast.id}>
                    {cast.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card >
      <Card className={classes.root} variant="outlined">
        <CardContent style ={{background:'#900C3F'}}>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large"/>
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

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
import { getActors, getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { getLanguages } from "../../api/tmdb-api";

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

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    "genres",
    getGenres,
    "actor",
    getActors
  );
  const { data: languages } = useQuery("language", getLanguages);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };
  const handleTitleChange = (e, props) => {
    handleChange(e, "title", e.target.value);
  };
  const handleActorChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleSortNameChange = (e) => {
    handleChange(e, "sortTitle", e.target.checked);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };
  const handleLanguageChange = (e, props) => {
    handleChange(e, "language", e.target.value);
  };

  return (
    <>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ background: "#581845" }}
      >
        <CardContent>
          <Typography variant="h5" component="h1" style={{ color: "white" }}>
            <SearchIcon fontSize="large" />
            Search Tv Page
          </Typography>
          <TextField
            className={classes.formControl}
            id="filled-search"
            label=" Tv Search field"
            type="search"
            value={props.nameFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <Typography variant="h5" component="h1" style={{ color: "white" }}>
            <SearchIcon fontSize="large" />
            Search Actor Page.
          </Typography>
          <TextField
            className={classes.formControl}
            id="filled-search"
            label="Actor Search field"
            type="search"
            value={props.TitleFilter}
            variant="filled"
            onChange={handleTitleChange}
          />
          <Typography variant="h5" component="h1" style={{ color: "white" }}>
            <SearchIcon fontSize="large" />
            Search Movie Page.
          </Typography>
          <TextField
            className={classes.formControl}
            id="filled-search"
            label="Movie Search field"
            type="search"
            value={props.TitleFilter}
            variant="filled"
            onChange={handleTitleChange}
          />

          <FormControl className={classes.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="certification-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language-select"
              value={props.languageFilter}
              onChange={handleLanguageChange}
            >
              <MenuItem key={""} value={"all"}>
                All
              </MenuItem>
              {languages?.map((l) => {
                return (
                  <MenuItem key={l.iso_639_1} value={l.iso_639_1}>
                    {l.english_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent style={{ background: "#900C3F" }}>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            SORT MOVIES
            <h6>Sort Options</h6>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleSortNameChange} />}
                label="Alphabetize movies?"
              />
            </FormGroup>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

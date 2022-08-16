import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import MovieIcon from "@material-ui/icons//Movie";

const AddFantasyIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMyFantasy = (e) => {
    e.preventDefault();
    context.addToMyFantasy(movie);
  };
  return (
    <IconButton aria-label="add to fantasy" onClick={handleAddToMyFantasy}>
      <MovieIcon
        style={{ color: "#FFC300", background: "#581845" }}
        fontSize="large"
      />
    </IconButton>
  );
};

export default AddFantasyIcon;

import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon style={{ color: "#C70039" }} fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;

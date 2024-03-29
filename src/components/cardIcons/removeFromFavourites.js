import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavourites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavourites}
    >
      <DeleteIcon
        style={{ backgroundColor: "#FF5733", color: "white" }}
        fontSize="medium"
      />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;

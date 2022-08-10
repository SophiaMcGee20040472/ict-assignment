import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavTvIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleAddToTvFavs= (e) => {
    e.preventDefault();
    context.addToTvFavs(tv);
  };
  return (
    <IconButton aria-label="add to TvFavs" onClick={handleAddToTvFavs}>
      <FavoriteIcon style={{ color: "purple" }} fontSize="large" />
    </IconButton>
  );
};

export default AddToFavTvIcon;
import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromMustWatch = (e) => {
    e.preventDefault();
    context.removeFromMustWatch(movie);
  };
  return (
    <IconButton
      aria-label="remove from Must Watchlist"
      onClick={handleRemoveFromMustWatch}
    >
      <DeleteIcon style={{backgroundColor:'#E91E63', color: 'white'}} fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchIcon;
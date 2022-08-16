import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFantasyIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromMyFantasy = (e) => {
    e.preventDefault();
    context.removeFromMyFantasy(movie);
  };
  return (
    <IconButton
      aria-label="remove from fantasy"
      onClick={handleRemoveFromMyFantasy}
    >
      <DeleteIcon
        style={{ backgroundColor: "red", color: "white" }}
        fontSize="large"
      />
    </IconButton>
  );
};

export default RemoveFromFantasyIcon;

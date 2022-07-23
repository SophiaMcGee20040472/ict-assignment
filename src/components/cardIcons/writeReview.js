import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ movie }) => {
  return (
    <Link
      to={"/reviews/form"}
      state={{
        movieId: movie.id,
      }}
    >
      <RateReviewIcon style={{backgroundColor: 'white',color:'black'}} fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;

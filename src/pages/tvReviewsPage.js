import React from "react";
import { useLocation } from "react-router-dom";
import TemplateTvPage from "../components/templateTvDetails";
import TVSeriesReview from "../components/tvSeriesReview";

const TvReviewsPage = (props) => {
  const {
    state: { tvSeries, review },
  } = useLocation();
  return (
    <TemplateTvPage tvSeries={tvSeries}>
      <TVSeriesReview review={review} />
    </TemplateTvPage>
  );
};

export default TvReviewsPage;

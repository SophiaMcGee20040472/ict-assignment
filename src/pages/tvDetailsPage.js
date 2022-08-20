import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TvTemplatePage from "../components/templateTvDetails";
import { getTVSeriesDetails, getTVSeriesCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TvCast from "../components/tvCast";

const TVDetailsPage = () => {
  const { id } = useParams();
  const {
    data: tvSeries,
    error,
    isLoading,
    isError,
  } = useQuery(["tv", { id: id }], getTVSeriesDetails);

  const { data: cast } = useQuery(
    ["show cast", { id: id }],
    getTVSeriesCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvSeries ? (
        <>
          <TvTemplatePage tvSeries={tvSeries}>
            <TvDetails tvSeries={tvSeries} />
            <TvCast cast ={cast} />
          </TvTemplatePage>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TVDetailsPage;

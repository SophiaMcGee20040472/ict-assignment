import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TvTemplatePage from "../components/templateTvDetails";
import { getTVSeriesDetails } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const TVDetailsPage = () => {
  const { id } = useParams();
  const { data: tvSeries, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTVSeriesDetails
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
          <TvTemplatePage tvSeries={tvSeries} >
            <TvDetails tvSeries={tvSeries} />
          </TvTemplatePage>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TVDetailsPage;




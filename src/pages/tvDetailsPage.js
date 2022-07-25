import React from "react";
import { useParams } from "react-router-dom";
import TvDetailsPage from "../components/tvDetails";
import { getTvDetails } from "../api/tmdb-api";
import { useQuery } from "react-query/";
import Spinner from "../components/spinner";

const TvDetails = () => {
  const { id } = useParams();
  const {
    data: tv,
    error,
    isLoading,
    isError,
  } = useQuery(["tv", { id: id }], getTvDetails);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <TvDetailsPage tv={tv}>
            <TvDetails tv={tv} />
          </TvDetailsPage>
        </>
      ) : (
        <p>Waiting for tv details</p>
      )}
    </>
  );
};

export default TvDetails;

import React from "react";
import { useParams } from "react-router-dom";
import ActorsDetailsPage from "../components/ActorsMovieDetails";
import { getActorsMovies } from "../api/tmdb-api";
import { useQuery } from "react-query/";
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";

const ActorMovieDetails = () => {
  const { id } = useParams();
  const { data: person, actor,error, isLoading,isError,} = useQuery(
    ["person", { id: id }], getActorsMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <ActorsDetailsPage actor={person}>
            <ActorDetails actor={actor} />
          </ActorsDetailsPage>
        </>
      ) : (
        <p>Waiting for tv details</p>
      )}
    </>
  );
};

export default ActorMovieDetails;

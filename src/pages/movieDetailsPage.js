import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMoviesCredits } from "../api/tmdb-api";
import { useQuery } from "react-query/";
import Spinner from "../components/spinner";
import MovieCast from "../components/movieCast";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovie);

  const { data: cast } = useQuery(
    ["movie cast", { id: id }],
    getMoviesCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <MovieCast cast={cast}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;

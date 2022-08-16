import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import PlaylistAddIcons from "../components/cardIcons/playlistAddIcon";
import SimilarMoviePage from "./similarMoviesPage";

const UpcomingMoviePage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "movie",
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  return (
    <PageTemplate
      title="UPCOMING MOVIES"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcons movie={movie} />;
      }}
    />
  );
};
export default UpcomingMoviePage;

import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import PlaylistAddIcons from "../components/cardIcons/playlistAddIcon";

const SimilarMoviePage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "movie",
    getSimilarMovie
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
      title="SIMILAR MOVIES"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcons movie={movie} />;
      }}
    />
  );
};
export default SimilarMoviePage;

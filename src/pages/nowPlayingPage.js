import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getSimilarMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner"
import { useQuery } from "react-query";
import PlaylistAddIcons from "../components/cardIcons/playlistAddIcon";

const NowPlayingPage = () => {
  const { data, error, isLoading, isError }  = useQuery('now-playing', getSimilarMovies)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  return (
    <PageTemplate
    title='NOW-PLAYING'
    movies={movies}
    action={(movie) => {
      return <PlaylistAddIcons movie={movie}  />
    }}
  />
  );
};
export default NowPlayingPage;


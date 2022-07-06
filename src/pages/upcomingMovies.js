import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner"
import { useQuery } from "react-query";
import PlaylistAddIcon from  "@material-ui/icons/PlaylistAdd"

const UpcomingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('movie', getUpcomingMovie)
  
  const addToFavourites = () => null;
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  
  return (
    <PageTemplate
    title='Upcoming Movies'
    movies={movies}
    action={(movie) => {
      return <PlaylistAddIcon movie={movie} color ="primary" />
    }}
    selectFavourite={addToFavourites}
  />
  );
};
export default UpcomingMoviePage;


import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner"
import { useQuery } from "react-query";
import PlaylistAddIcons from "../components/cardIcons/playlistAddIcon";

const UpcomingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('movie', getUpcomingMovies)
  
  const addToFavourites = () => null;
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  
  return (
    <PageTemplate
    title='Upcoming Movies'
    movies={movies}
    action={(movie) => {
      return <PlaylistAddIcons movie={movie}  />
    }}
    selectFavourite={addToFavourites}
  />
  );
};
export default UpcomingMoviePage;


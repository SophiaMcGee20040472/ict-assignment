import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner"
import { useQuery } from "react-query";
import PlaylistAddIcons from "../components/cardIcons/playlistAddIcon";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const PopularMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)
  
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
    title='POPULAR MOVIES'
    movies={movies}
    action={(movie) => {
      return <div>
        <AddToFavouritesIcon movie={movie} color ="primary" />
        <PlaylistAddIcons movie={movie} color ="primary" />
      </div>
    }}
    selectFavourite={addToFavourites}
  />
  );
};
export default PopularMoviePage;
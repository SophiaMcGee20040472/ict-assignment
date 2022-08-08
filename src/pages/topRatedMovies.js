import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner"
import { useQuery } from "react-query";
import PlaylistAddIcons from "../components/cardIcons/playlistAddIcon";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import AddFantasyIcon from "../components/cardIcons/addMyFantasy";

const TopRatedPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('top-rated', getTopRatedMovies)
  
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
    title='TOP-RATED MOVIES'
    movies={movies}
    action={(movie) => {
      return <div>
      <AddToFavouritesIcon movie={movie} />
      <AddFantasyIcon movie={movie} />
        </div>
    
    }}
    selectFavourite={addToFavourites}
  />
  );
};
export default TopRatedPage;
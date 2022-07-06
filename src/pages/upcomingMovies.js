import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner"
import { useQuery } from "react-query";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import PlaylistAddIcon from  "@material-ui/icons/PlaylistAdd"

const UpcomingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upComing', getUpcomingMovie)

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
        
        return  (
        <> <handleAddToFavourites movie={movie} />
         <PlaylistAddIcon movie ={movie} color ="primary"/>
        </>      
        );
      }}

    />
  );
};
export default UpcomingMoviePage;


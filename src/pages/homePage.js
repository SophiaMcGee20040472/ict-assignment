import React, {useState, useEffect} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  return (<div>
  
    <PageTemplate
      title="DISCOVER MOVIES"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
    </div> 
  );
};

export default HomePage;

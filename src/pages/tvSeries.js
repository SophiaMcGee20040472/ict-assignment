
import React from "react";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVSeries} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import TVListPageTemplate from "../components/templateTVListPage";

const TVSeriesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTVSeries)
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }
  const tvseries = data.results;

  return (
    <TVListPageTemplate
      title="TV Series"
      tvseries={tvseries}
      action={(tv) => {
        return <AddToFavouritesIcon tv={tv} />
      }}
    />
);
};
export default TVSeriesPage;










import React from "react";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVSeries} from '../api/tmdb-api'
import AddToFavTvIcon from "../components/cardIcons/addTvFavourite";
import TVListPageTemplate from "../components/templateTVListPage";


const TVSeriesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTVSeries)
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }
  const tvSeries = data.results;

  return (
    <TVListPageTemplate
      title="TV SERIES"
      tvseries={tvSeries}
      action={(tv) => {
        return <AddToFavTvIcon tv={tv} />
      }}
    />
);
};
export default TVSeriesPage;









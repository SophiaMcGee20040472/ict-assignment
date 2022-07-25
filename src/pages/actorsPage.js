import React from "react";
import ActorPageTemplate from "../components/templateActorPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getActors} from '../api/tmdb-api';
import { getActorsImage } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


const ActorPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('actors', getActors, getActorsImage)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  return (
    <ActorPageTemplate
      title="Discover Actors"
      actor={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
);
};

export default ActorPage;
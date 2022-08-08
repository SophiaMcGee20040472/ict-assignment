import React from 'react';
import ActorCard from '../components/actorCard';
import SampleActor from './sampleActorData';
import { MemoryRouter } from 'react-router';
// import MoviesContextProvider from '../contexts/moviesContext';
import { action } from '@storybook/addon-actions';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';
import { getActorImages } from '../api/tmdb-api';

export default {
  title: 'Home Page/ActorCard',
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}
      action={(actor) => <AddToFavoritesIcon actor={actor} />}
      tagging={(actor) => null}
    />
  );
};
Basic.storyName = 'Default';


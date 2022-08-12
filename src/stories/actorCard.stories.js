import React from 'react';
import ActorCard from '../components/actorCard';
import SampleActor from './sampleActorData';
import { MemoryRouter } from 'react-router';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';


export default {
  title: 'Actor Details Page/ActorCard',
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


import React from 'react';
import TVCard from '../components/tvCard';
import SampleTv from './sampleTvSeriesData';
import { MemoryRouter } from 'react-router';
// import MoviesContextProvider from '../contexts/moviesContext';
import { action } from '@storybook/addon-actions';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';
import sampleTvSeriesData from './sampleTvSeriesData';



export default {
  title: 'Home Page/TVCard',
  component: TVCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <TVCard
      tv={sampleTvSeriesData}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      tagging={(tv) => null}
    />
  );
};
Basic.storyName = 'Default';

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleTv, profile_path: undefined };
    return (
      <TVCard
        tv={sampleNoPoster}
        action={(tv) => <AddToFavoritesIcon tv={tv} />}
        taging={(tv) => null}
      />
    );
  };
  Exceptional.storyName = 'exception';
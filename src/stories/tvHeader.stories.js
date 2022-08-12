import React from 'react';
import TvHeader from '../components/headerTV';
import SampleTvSeries from './sampleTvSeriesData';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Tv Details Page/TvHeader',
  component: TvHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvHeader tvSeries={SampleTvSeries} />;

Basic.storyName = 'Default';
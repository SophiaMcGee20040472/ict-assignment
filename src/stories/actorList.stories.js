import React from 'react';
import ActorList from '../components/actorList';
import SampleActor from './sampleActorData';
import { MemoryRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';

export default {
  title: 'Actor Details Page/ActorList',
  component: ActorList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const actor = [
    { ...SampleActor, id: 1 },
    { ...SampleActor, id: 2 },
    { ...SampleActor, id: 3 },
    { ...SampleActor, id: 4 },
    { ...SampleActor, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <ActorList actor={actor} />
    </Grid>
  );
};
Basic.storyName = 'Default';
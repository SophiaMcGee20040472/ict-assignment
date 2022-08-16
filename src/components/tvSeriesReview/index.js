import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#DAF7A6',
  },
}));

const TVSeriesReview = ({ review}) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h6' component='h5' className={classes.root}>
      Reviewed By: {review.author}
      </Typography>
      <Typography variant='h6' component='p' className={classes.root}>
        {review.content}
      </Typography>
    </>
  );
};
export default TVSeriesReview;
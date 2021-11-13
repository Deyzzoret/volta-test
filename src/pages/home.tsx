import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListUserOptsCards } from '../components';

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 16,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <br></br>
      <br></br>
      <br></br>
      <ListUserOptsCards />
    </div>
  );
};

export default Home;

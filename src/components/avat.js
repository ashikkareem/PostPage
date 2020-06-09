import React,{useStyles} from 'react'

import { makeStyles , Avatar} from '@material-ui/core';

import coronaimage from '../images/logo512.png';


const usestyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

 const avat = () => {
  const classes = usestyles();

  return (
    <div className={classes.root}>
      
      <Avatar alt="Remy Sharp" src={coronaimage} className={classes.large} />
    </div>
  );
}

export default avat;

import React from 'react';
import { useStyles } from './notFound.styles';

export default function NotFound() {
  const classes = useStyles();

  return (
    <h1 className={classes.test}>Not Found Page</h1>
  );
}

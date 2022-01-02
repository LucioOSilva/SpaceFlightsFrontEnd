import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  base: {
    backgroundClip: 'border-box',
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: '20px',
  },

  image: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    top: '-30%',
  },
}));

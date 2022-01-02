import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  base: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },

  cardList: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },

  icon: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
    display: 'flex',
    height: 'inherit',
    justifyContent: 'center',
    width: 'inherit',
    borderRadius: '5px',
  },

  iconBox: {
    marginBottom: '10px',
    width: '40px',
    height: '40px',
    '& span': {
      color: theme.palette.primary.main,
    },
  },
}));

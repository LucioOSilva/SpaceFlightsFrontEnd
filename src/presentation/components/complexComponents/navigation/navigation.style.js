import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  base: {
    alignItems: 'center',
    display: 'flex',
    height: '60px',
    justifyContent: 'flex-end',
    marginBottom: '20px',
    width: '100%',
  },

  iconBox: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    '& span': {
      color: theme.palette.global.white,
    },
  },

  input: {
    marginRight: '30px',
    '& .MuiInputBase-root': {
      height: '30px',
    },
  },

}));

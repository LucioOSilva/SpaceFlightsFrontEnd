import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: theme.palette.global.lightgray,
    color: theme.palette.global.black,
    display: 'flex',
    height: '300px',
    width: '100%',
    marginBottom: '20px',
  },

  bodyText: {
    height: '205px',
  },

  boxDescription: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '30px',
  },

  boxDescriptionReverse: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '30px',
  },

  boxImage: {
    height: '100%',
  },

  btnSmall: {
    height: '25px',
  },

  btnMore: {
    width: '130px',
    height: '50px',
  },

  image: {
    height: '100%',
  },

  rowSpaced: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    height: '60px',
  },
}));

import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core';
import './fonts/robotoCondensed.css';

export default function Theme() {
  const paletteTheme = createTheme({
    palette: {
      primary: {
        main: '#302E53',
      },
      secondary: {
        main: '#D07017',
      },
      global: {
        white: '#FAFAFA',
        black: '#1E2022',
        gray: '#434242',
        lightgray: '#E1E1E1',
      },
    },
  });

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto Condensed',
        'sans-serif',
      ],
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2.0rem',
        fontWeight: 700,
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      h4: {
        fontSize: '1rem',
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 300,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
      },
    },

    palette: {
      primary: {
        main: paletteTheme.palette.primary.main,
        lighter: `${paletteTheme.palette.primary.main}44`,
      },
      secondary: {
        main: paletteTheme.palette.secondary.main,
        lighter: `${paletteTheme.palette.secondary.main}44`,
      },
      global: {
        white: paletteTheme.palette.global.white,
        black: paletteTheme.palette.global.black,
        gray: paletteTheme.palette.global.gray,
        lightgray: paletteTheme.palette.global.lightgray,
      },
    },
  });
  return theme;
}

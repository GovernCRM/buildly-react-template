import {
  responsiveFontSizes,
} from '@mui/material';

import {
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';

const theme = extendTheme({
  cssVarPrefix: 'color',
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#FFFFFF',
          light: '#BEBEBA',
          light2: '#D3D4D5',
          light3: '#FDF0D5',
          dark: '#383636',
          primary: '#780000',
          secondary: '#F9D658',
          tertiary: '#003049',
          black: '#000',
          border: '#ddd',
        },
        primary: {
          main: '#780000',
        },
        secondary: {
          main: '#F9D658',
        },
        tertiary: {
          main: '#003049',
        },
        lightbeige: {
          main: '#FDF0D5',
        },
        disabled: {
          main: '#780000A1',
        },
        white: {
          main: '#FFFFFF',
        },
        success: {
          main: '#003049',
        },
        info: {
          main: '#0099CC',
        },
        warning: {
          main: '#F9D658',
        },
        error: {
          main: '#780000',
        },
      },
    },
  },
  typography: {
    fontFamily: 'League Spartan',
    fontWeight: 400,
    color: '#000000 !important',
    button: {
      textTransform: 'none',
    },
    h1: {
      fontWeight: 700,
      fontSize: '57px',
      fontFamily: 'Baskervville SC',
      color: '#003049',
    },
    h2: {
      fontWeight: 700,
      fontSize: '45px',
      fontFamily: 'Baskerville SC',
      color: '#003049',
    },
    h3: {
      fontWeight: 700,
      fontSize: '36px',
      fontFamily: 'Baskerville SC',
      color: '#003049',
    },
    h4: {
      fontWeight: 700,
      fontSize: '32px',
      fontFamily: 'Baskerville SC',
      color: '#003049',
    },
    h5: {
      fontWeight: 700,
      fontSize: '28px',
      fontFamily: 'Baskerville SC',
      color: '#003049',
    },
    h6: {
      fontWeight: 700,
      fontSize: '24px',
      fontFamily: 'Baskerville SC',
      color: '#003049',
    },
    subtitle1: {
      fontSize: '22px',
    },
    subtitle2: {
      fontSize: '16px',
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
    caption: {
      fontSize: '12px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 3000,
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          '&.Mui-selected': {
            color: '#F0CE7F',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#F0CE7F',
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);

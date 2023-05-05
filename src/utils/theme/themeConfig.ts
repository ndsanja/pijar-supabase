import {
  createTheme,
  useTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

let mode = 'light';
// Create a theme instance.
const themeConfig = createTheme({
  palette:
    mode === 'light'
      ? {
          mode: 'light',
          background: {
            default: '#ffffff',
          },
        }
      : {
          mode: 'dark',
          background: {
            default: 'rgb(10, 25, 41)',
            paper: 'rgb(0, 30, 60)',
          },
        },
  typography: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    h1: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    h2: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    h3: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    h4: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    h5: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    h6: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});

export default themeConfig;

export const theme = responsiveFontSizes(themeConfig);

import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    primary: {
      main: '#556cd6',
      contrastText: '#595959',
    },
    secondary: {
      main: '#05344a',
      contrastText: '#034d59',
    },
    error: {
      main: red.A400,
    },
    grey: {
      200: grey[200],
    },
  },
});

export default theme;
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ED1C24',
    },
    secondary: {
      main: '#39B54A',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'roboto',
  },
});

export default theme;
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2c4781',
      dark: '#002054',
      light: '#5d72b1',
    },
    secondary: {
      main: '#4a6ccb',
      dark: '#004299',
      light: '#809aff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
  },
});

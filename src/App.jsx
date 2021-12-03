import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './Routes'


const theme = createTheme({
  palette: {
      primary: {
          main: blue[500]
      },
  },
  props: {
      MuiTextField: {
          variant: 'outlined',
          fullWidth: true
      },
      MuiSelect: {
          variant: 'outlined',
          fullWidth: true
      }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

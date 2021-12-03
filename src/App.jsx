import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css';
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Alert, Confirm, Loading, Notify } from "./views/components";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
    },
    MuiSelect: {
      variant: "outlined",
      fullWidth: true,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Notify />
        <Loading />
        <Alert />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./pages/App";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

const main = "#222437";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: main
    },
    background: {
      paper: main,
      default: "#1C1E2F"
    },
    text: {
      primary: grey[300]
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);

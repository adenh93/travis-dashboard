import "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./pages/App";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: grey[100]
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

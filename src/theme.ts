import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const main = "#282c34";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    status: {
      success: string;
      info: string;
      warning: string;
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      success?: string;
      info?: string;
      warning?: string;
      danger?: string;
    };
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: main
    },
    background: {
      paper: main,
      default: "#21252b"
    },
    text: {
      primary: grey[400]
    }
  },
  status: {
    success: "#98c379",
    info: "#61afef",
    warning: "#e5c07b",
    danger: "#e06a70"
  }
});

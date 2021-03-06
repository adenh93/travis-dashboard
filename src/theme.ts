import { createMuiTheme } from "@material-ui/core";
import { grey, blueGrey, green, teal } from "@material-ui/core/colors";

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
    error: {
      main: "#e06a70"
    },
    background: {
      paper: main,
      default: "#21252b"
    },
    text: {
      primary: grey[400],
      secondary: grey[800]
    }
  },
  overrides: {
    MuiButton: {
      sizeLarge: {
        width: 200,
        height: 50
      },
      contained: {
        borderRadius: 0
      },
      containedPrimary: {
        color: grey[300],
        backgroundColor: blueGrey[700],
        "&:hover": {
          backgroundColor: blueGrey[600]
        },
        "&:disabled": {
          backgroundColor: blueGrey[900]
        }
      },
      containedSecondary: {
        color: grey[300],
        backgroundColor: grey[700],
        "&:hover": {
          backgroundColor: grey[600]
        },
        "&:disabled": {
          backgroundColor: grey[900]
        }
      }
    },
    MuiLink: {
      root: {
        color: teal[300]
      }
    }
  },
  status: {
    success: "#98c379",
    info: "#61afef",
    warning: "#e5c07b",
    danger: "#e06a70"
  }
});

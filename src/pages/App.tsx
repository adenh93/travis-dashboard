import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import { DashboardSidebar } from "../components/Dashboard";
import { Header } from "../components/UI";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";

const sidebarWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export const App: React.SFC = () => {
  const classes = useStyles({});
  return (
    <Router>
      <div className={classes.root}>
        <Header marginLeft={sidebarWidth} />
        <DashboardSidebar width={sidebarWidth} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper>
                <Typography variant="body1">This is content</Typography>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    </Router>
  );
};

import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { DashboardSidebar } from "../components/Dashboard";
import { Header } from "../components/UI";
import { BuildListPage } from "../pages/Builds";

const sidebarWidth = 240;

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
          <Switch>
            <Route exact path="/" component={null} />
            <Route exact path="/builds" component={BuildListPage} />
            <Route exact path="/analytics" component={null} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

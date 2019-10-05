import * as React from "react";
import {
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  CircularProgress
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      textAlign: "center"
    },
    progress: {
      marginBottom: 10,
      color: theme.palette.text.primary
    }
  })
);

export const BuildsListLoading: React.SFC = () => {
  const classes = useStyles({});
  return (
    <Paper className={classes.root}>
      <CircularProgress className={classes.progress} />
      <Typography variant="body1">Getting list of builds</Typography>
    </Paper>
  );
};

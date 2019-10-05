import * as React from "react";
import { Paper, Typography, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      textAlign: "center"
    },
    icon: {
      marginBottom: theme.spacing(1)
    }
  })
);

export const BuildsListEmpty: React.SFC = () => {
  const classes = useStyles({});
  return (
    <Paper className={classes.root}>
      <FontAwesomeIcon
        className={classes.icon}
        icon={faExclamationCircle}
        size="3x"
      />
      <Typography variant="body1">No builds have been discovered</Typography>
    </Paper>
  );
};

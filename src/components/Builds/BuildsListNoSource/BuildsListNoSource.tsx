import * as React from "react";
import { createStyles } from "@material-ui/styles";
import { Theme, Paper, makeStyles, Typography } from "@material-ui/core";
import { Button } from "../../UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      textAlign: "center"
    },
    row: {
      marginBottom: 10
    }
  })
);

export const BuildsListNoSource: React.SFC<Props> = () => {
  const classes = useStyles({});
  return (
    <Paper className={classes.root}>
      <FontAwesomeIcon
        className={classes.row}
        size="3x"
        icon={faExclamationTriangle}
      />
      <Typography className={classes.row} variant="body1">
        You have not added a Travis CI API source yet
      </Typography>
      <Button icon={faPlusCircle} label="Add Source" size="large" />
    </Paper>
  );
};

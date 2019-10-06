import * as React from "react";
import { createStyles } from "@material-ui/styles";
import {
  Theme,
  Paper,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";
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
    icon: {
      marginBottom: 10
    },
    button: {
      marginTop: 10
    },
    buttonIcon: {
      marginRight: 10
    }
  })
);

export const BuildsListNoSource: React.SFC<Props> = () => {
  const classes = useStyles({});
  return (
    <Paper className={classes.root}>
      <FontAwesomeIcon
        className={classes.icon}
        icon={faExclamationTriangle}
        size="3x"
      />
      <Typography variant="body1">
        You have not added a Travis CI API source yet
      </Typography>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        size="large"
      >
        <FontAwesomeIcon className={classes.buttonIcon} icon={faPlusCircle} />
        Add Source
      </Button>
    </Paper>
  );
};

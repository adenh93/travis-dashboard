import * as React from "react";
import { createStyles } from "@material-ui/styles";
import { Theme, Paper, makeStyles, Typography } from "@material-ui/core";
import { Button } from "../../UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
import { BuildsAddSourceModal } from "../BuildsAddSourceModal";

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

export const BuildsNoSource: React.SFC<Props> = () => {
  const classes = useStyles({});
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOk = () => setModalOpen(false);
  const handleModalCancel = () => setModalOpen(false);

  return (
    <>
      <Paper className={classes.root}>
        <FontAwesomeIcon
          className={classes.row}
          size="3x"
          icon={faExclamationTriangle}
        />
        <Typography className={classes.row} variant="body1">
          You have not added a Travis CI API source yet
        </Typography>
        <Button
          icon={faPlusSquare}
          onClick={() => setModalOpen(true)}
          label="Add Source"
          size="large"
        />
      </Paper>
      <BuildsAddSourceModal
        open={modalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      />
    </>
  );
};

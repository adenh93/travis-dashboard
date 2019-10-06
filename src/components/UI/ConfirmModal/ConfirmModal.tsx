import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, Modal, Box, Typography } from "@material-ui/core";
import { Button } from "../Button";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  open: boolean;
  title: string;
  subtitle: string;
  onCancel?: (e: any) => void;
  onOk?: (e: any) => void;
  onClose?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    title: {},
    subtitle: {
      marginBottom: theme.spacing(2)
    }
  })
);

export const ConfirmModal: React.SFC<Props> = ({
  open,
  title,
  subtitle,
  onCancel,
  onOk,
  onClose,
  children
}) => {
  const classes = useStyles({});
  return (
    <Modal className={classes.root} open={open} onClose={onClose}>
      <div className={classes.paper}>
        <Typography className={classes.title} variant="h6">
          {title}
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2">
          {subtitle}
        </Typography>
        {children}
        <Box mt={2}>
          <Button icon={faCheck} label="ok" onClick={onOk} />{" "}
          <Button
            icon={faTimes}
            color="secondary"
            label="cancel"
            onClick={onCancel}
          />
        </Box>
      </div>
    </Modal>
  );
};

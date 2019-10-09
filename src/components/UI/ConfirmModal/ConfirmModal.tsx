import * as React from "react";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { Button } from "../Button";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  open: boolean;
  title: string;
  subtitle: string;
  disableOk?: boolean;
  onCancel?: (e: any) => void;
  onOk?: (e: any) => void;
  onClose?: () => void;
}

export const ConfirmModal: React.SFC<Props> = ({
  open,
  title,
  subtitle,
  onCancel,
  onOk,
  onClose,
  disableOk = false,
  children
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>
      {title}
      <Typography variant="subtitle2">{subtitle}</Typography>
    </DialogTitle>
    <DialogContent>
      <DialogContentText color="textPrimary">{children}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button icon={faCheck} disabled={disableOk} label="ok" onClick={onOk} />{" "}
      <Button
        icon={faTimes}
        disabled={disableOk}
        color="secondary"
        label="cancel"
        onClick={onCancel}
      />
    </DialogActions>
  </Dialog>
);

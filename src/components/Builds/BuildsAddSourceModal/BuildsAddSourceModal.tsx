import * as React from "react";
import { ConfirmModal } from "../../UI";
import { Typography, TextField, FormControl } from "@material-ui/core";

interface Props {
  open: boolean;
  onCancel?: () => void;
  onOk?: () => void;
}

export const BuildsAddSourceModal: React.SFC<Props> = ({
  open,
  onCancel,
  onOk
}) => {
  return (
    <ConfirmModal
      open={open}
      title="Add API Source"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Typography variant="subtitle1">
        Add a Travis CI API source to sync build statuses
      </Typography>
    </ConfirmModal>
  );
};

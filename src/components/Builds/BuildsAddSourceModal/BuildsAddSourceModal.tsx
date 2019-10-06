import * as React from "react";
import { ConfirmModal, Button } from "../../UI";
import {
  Typography,
  TextField,
  FormControl,
  Grid,
  Link,
  Box
} from "@material-ui/core";
import { faEye, faSearch } from "@fortawesome/free-solid-svg-icons";

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
      subtitle="Add a Travis CI API source to sync build statuses"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Typography variant="body2">
        To add a new source, locate your Travis CI API key and paste it below.
        You can find your API Key by accessing your{" "}
        <Link href="https://travis-ci.org/account/preferences">
          account preferences
        </Link>{" "}
        on Travis CI, and navigating to Settings.
      </Typography>
      <Box my={2}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <FormControl fullWidth>
                <TextField type="password" />
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <Button
                color="secondary"
                size="small"
                label="Show"
                icon={faEye}
              />{" "}
              <Button size="small" label="Check" icon={faSearch} />
            </Grid>
          </Grid>
        </form>
      </Box>
    </ConfirmModal>
  );
};

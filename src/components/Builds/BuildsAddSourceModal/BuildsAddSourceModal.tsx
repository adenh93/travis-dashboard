import * as React from "react";
import { ConfirmModal, Button } from "../../UI";
import { Typography, Grid, Link, Box } from "@material-ui/core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { PasswordField } from "../../UI";
import { testApiConnection } from "../../../utils/api/travisApi";
import { storeApiKey } from "../../../utils/browserStorageUtils";

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
  const [apiKey, setApiKey] = React.useState("");
  const [apiKeyInvalid, setApiKeyInvalid] = React.useState();
  const [waiting, setWaiting] = React.useState(false);

  const handleApiKeyChange = (e: any) => setApiKey(e.target.value);

  const checkApiKey = () => {
    setWaiting(true);
    testApiConnection(apiKey)
      .then(() => {
        setApiKeyInvalid(false);
      })
      .catch(error => {
        setApiKeyInvalid(true);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  const saveApiKey = () => {
    checkApiKey();
    if (!apiKeyInvalid) {
      storeApiKey(apiKey);
      onOk;
    }
  };

  return (
    <ConfirmModal
      open={open}
      title="Add API Source"
      subtitle="Add a Travis CI API source to sync build statuses"
      onCancel={onCancel}
      onOk={saveApiKey}
      disableOk={waiting}
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
            <Grid item xs={9}>
              <PasswordField
                error={apiKeyInvalid}
                value={apiKey}
                disabled={waiting}
                placeholder="Enter an API key..."
                onChange={handleApiKeyChange}
              />
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                size="small"
                label="Check"
                disabled={waiting}
                icon={faCheckCircle}
                onClick={checkApiKey}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </ConfirmModal>
  );
};

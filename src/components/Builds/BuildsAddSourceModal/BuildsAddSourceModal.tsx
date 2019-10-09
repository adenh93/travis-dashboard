import * as React from "react";
import { ConfirmModal } from "../../UI";
import { Typography, Link, Box } from "@material-ui/core";
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
  const [apiKeyInvalid, setApiKeyInvalid] = React.useState(false);
  const [waiting, setWaiting] = React.useState(false);

  const handleApiKeyChange = (e: any) => setApiKey(e.target.value);

  async function trySaveApiKey() {
    try {
      setWaiting(true);
      await testApiConnection(apiKey);
      saveApiKey();
    } catch (error) {
      setApiKeyInvalid(true);
    }
    setWaiting(false);
  }

  const saveApiKey = () => {
    storeApiKey(apiKey);
    onOk();
  };

  return (
    <ConfirmModal
      open={open}
      title="Add API Source"
      subtitle="Add a Travis CI API source to sync build statuses"
      onCancel={onCancel}
      onOk={trySaveApiKey}
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
          <PasswordField
            error={apiKeyInvalid}
            value={apiKey}
            disabled={waiting}
            placeholder="Enter an API key..."
            helperText={apiKeyInvalid ? "API key invalid" : ""}
            onChange={handleApiKeyChange}
          />
        </form>
      </Box>
    </ConfirmModal>
  );
};

import * as React from "react";
import { BuildsListEmpty } from "../BuildsListEmpty";
import { Grid } from "@material-ui/core";

interface Props {}

export const BuildsList: React.SFC<Props> = () => {
  return (
    <Grid item xs={12}>
      <BuildsListEmpty />
    </Grid>
  );
};

import * as React from "react";
import { BuildsListEmpty, BuildsListNoSource, BuildsListLoading } from "..";
import { Grid } from "@material-ui/core";

interface Props {}

export const BuildsList: React.SFC<Props> = () => {
  return (
    <Grid item xs={12}>
      <BuildsListNoSource />
      {/* <BuildsListEmpty /> */}
    </Grid>
  );
};

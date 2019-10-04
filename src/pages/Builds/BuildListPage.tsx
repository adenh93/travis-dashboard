import * as React from "react";
import { Grid } from "@material-ui/core";
import { BuildsList } from "../../components/Builds";

export const BuildListPage = () => (
  <Grid container spacing={3}>
    <BuildsList />
  </Grid>
);

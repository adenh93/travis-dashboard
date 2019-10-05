import * as React from "react";
import { Grid } from "@material-ui/core";
import { BuildsList } from "../../components/Builds";
import { SearchBar } from "../../components/UI";

export const BuildListPage = () => (
  <Grid container spacing={3}>
    <SearchBar value="" onChange={null} />
    <BuildsList />
  </Grid>
);

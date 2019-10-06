import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Link
} from "@material-ui/core";

interface Props {
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: theme.mixins.toolbar,
    link: {
      color: theme.palette.text.primary
    }
  })
);

export const SidebarBrand: React.SFC<Props> = ({ label }) => {
  const classes = useStyles({});
  return (
    <Box p={2} className={classes.root}>
      <Typography variant="h6">
        <Link className={classes.link} component={RouterLink} to="/">
          {label}
        </Link>
      </Typography>
    </Box>
  );
};

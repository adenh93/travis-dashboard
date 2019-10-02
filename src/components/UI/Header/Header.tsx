import * as React from "react";
import {
  AppBar,
  Toolbar,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";

interface Props {
  marginLeft?: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => `calc(100% - ${props.marginLeft}px)`,
      marginLeft: (props: Props) => props.marginLeft
    }
  })
);

export const Header: React.SFC<Props> = ({ ...props }) => {
  const classes = useStyles(props);
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

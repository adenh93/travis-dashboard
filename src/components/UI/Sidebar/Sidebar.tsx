import * as React from "react";
import {
  Drawer,
  createStyles,
  Theme,
  makeStyles,
  List,
  Divider
} from "@material-ui/core";

interface Props {
  width: number;
  position?: "left" | "top" | "right" | "bottom";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => props.width,
      flexShrink: 0
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      backgroundColor: theme.palette.primary.main,
      width: (props: Props) => props.width
    }
  })
);

export const Sidebar: React.SFC<Props> = ({
  position = "left",
  children,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <Drawer
      className={classes.root}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor={position}
    >
      <div className={classes.toolbar} />
      <List>{children}</List>
    </Drawer>
  );
};

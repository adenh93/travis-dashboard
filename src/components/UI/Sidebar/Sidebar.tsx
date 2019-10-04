import * as React from "react";
import { SidebarBrand } from "../SidebarBrand";
import {
  Drawer,
  createStyles,
  Theme,
  makeStyles,
  List
} from "@material-ui/core";

interface Props {
  width: number;
  brandLabel: string;
  position?: "left" | "top" | "right" | "bottom";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: any) => props.width,
      flexShrink: 0
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      backgroundColor: theme.palette.primary.main,
      width: (props: any) => props.width
    }
  })
);

export const Sidebar: React.SFC<Props> = ({
  position = "left",
  brandLabel = "",
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
      <SidebarBrand label={brandLabel} />
      <List>{children}</List>
    </Drawer>
  );
};

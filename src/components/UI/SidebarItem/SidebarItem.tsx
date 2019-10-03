import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";

interface Props {
  icon: IconDefinition;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 20
    }
  })
);

export const SidebarItem: React.SFC<Props> = ({ icon, text }) => {
  const classes = useStyles({});
  return (
    <ListItem>
      <ListItemIcon className={classes.icon}>
        <FontAwesomeIcon icon={icon} />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

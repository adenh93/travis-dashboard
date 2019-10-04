import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  makeStyles,
  createStyles,
  Typography,
  Link
} from "@material-ui/core";

interface Props {
  icon: IconDefinition;
  text: string;
  route: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 20,
      color: theme.palette.text.primary
    }
  })
);

export const SidebarItem: React.SFC<Props> = ({ icon, text, route }) => {
  const classes = useStyles({});
  return (
    <ListItem>
      <ListItemIcon className={classes.icon}>
        <FontAwesomeIcon icon={icon} />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body1">
          <Link color="textPrimary" component={RouterLink} to={route}>
            {text}
          </Link>
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

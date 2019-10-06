import * as React from "react";
import { Button as MuiButton, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
  label: string;
  size?: "large" | "medium" | "small";
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  icon?: IconDefinition;
  onClick?: (e: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    icon: {
      marginRight: 10
    }
  })
);

export const Button: React.SFC<Props> = ({
  label,
  size = "medium",
  variant = "contained",
  color = "primary",
  icon,
  onClick
}) => {
  const classes = useStyles({});
  return (
    <MuiButton
      className={classes.root}
      size={size}
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {icon ? <FontAwesomeIcon className={classes.icon} icon={icon} /> : ""}
      {label}
    </MuiButton>
  );
};

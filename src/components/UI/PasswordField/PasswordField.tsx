import * as React from "react";
import {
  FormControl,
  Theme,
  makeStyles,
  createStyles,
  InputAdornment,
  IconButton,
  Input
} from "@material-ui/core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 18,
      color: theme.palette.text.primary
    }
  })
);

export const PasswordField: React.SFC<Props> = ({ value, placeholder }) => {
  const classes = useStyles({});
  const [showPassword, toggleShowPassword] = React.useState(false);

  const handleShowPassword = (e: any) => {
    e.preventDefault();
    toggleShowPassword(!showPassword);
  };

  return (
    <FormControl fullWidth>
      <Input
        value={value}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <IconButton className={classes.icon} onClick={handleShowPassword}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

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
  value: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 17,
      color: theme.palette.text.primary
    }
  })
);

export const PasswordField: React.SFC<Props> = ({
  value,
  error,
  placeholder,
  disabled = false,
  onChange
}) => {
  const classes = useStyles({});
  const [showPassword, toggleShowPassword] = React.useState(false);

  return (
    <FormControl fullWidth>
      <Input
        error={error}
        value={value}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              disabled={disabled}
              className={classes.icon}
              onClick={() => toggleShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

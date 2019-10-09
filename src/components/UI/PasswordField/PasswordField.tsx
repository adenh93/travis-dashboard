import * as React from "react";
import {
  FormControl,
  Theme,
  makeStyles,
  createStyles,
  InputAdornment,
  IconButton,
  TextField
} from "@material-ui/core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  value: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
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
  helperText,
  disabled = false,
  onChange
}) => {
  const classes = useStyles({});
  const [showPassword, toggleShowPassword] = React.useState(false);

  return (
    <FormControl fullWidth>
      <TextField
        error={error}
        value={value}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        helperText={helperText}
        disabled={disabled}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disabled={disabled}
                className={classes.icon}
                onClick={() => toggleShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  );
};

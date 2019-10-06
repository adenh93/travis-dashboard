import * as React from "react";
import {
  Theme,
  makeStyles,
  createStyles,
  Grid,
  Paper,
  FormControl,
  InputBase
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  value: string;
  onChange: (e: any) => void;
}

const height = 60;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: height,
      display: "flex",
      padding: theme.spacing(3),
      alignItems: "center",
      borderRadius: 0
    },
    icon: {
      color: theme.palette.text.primary,
      marginRight: theme.spacing(2),
      fontSize: 17
    },
    input: {
      padding: 0,
      marginTop: 2,
      marginLeft: theme.spacing(3),
      color: theme.palette.text.primary
    }
  })
);

export const SearchBar: React.SFC<Props> = ({ value, onChange }) => {
  const classes = useStyles({});
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <FontAwesomeIcon className={classes.icon} icon={faSearch} />
        <FormControl fullWidth>
          <InputBase
            name="keyword"
            value={value}
            className={classes.input}
            placeholder="Enter a keyword..."
            onChange={onChange}
          />
        </FormControl>
      </Paper>
    </Grid>
  );
};

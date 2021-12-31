import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

function MyTextField({ currentColor, label, ...rest }) {
  const useStyles = makeStyles({
    root: {
      "& label.Mui-focused": {
        color: currentColor,
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: " #eaeaea",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: currentColor,
      },
    },
  });
  const classes = useStyles();
  return (
    <TextField
      fullWidth
      margin="dense"
      inputProps={{ style: { fontSize: "0.875rem" } }}
      label={label}
      variant="standard"
      className={classes.root}
    />
  );
}

export default MyTextField;
MyTextField.propTypes = {
  label: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

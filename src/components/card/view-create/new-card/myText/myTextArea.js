import { Box, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

function MyTextArea({ currentColor, label, placeholder, defaultValue }) {
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
  // const [visible, setVisible] = useState(false);
  const classes = useStyles();
  // const handleFocus = () => {
  //   setVisible(true);
  // };
  return (
    <Box className="box">
      <TextField
        id="standard-multiline-static"
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        inputProps={{ style: { fontSize: "0.875rem" } }}
        multiline
        fullWidth
        rows={4}
        className={classes.root}
        variant="standard"
      />
    </Box>
  );
}

export default MyTextArea;
MyTextArea.propTypes = {
  label: PropTypes.string,
  currentColor: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

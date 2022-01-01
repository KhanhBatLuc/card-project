import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function InputDate() {
  return (
    <TextField
      id="date"
      fullWidth
      margin="dense"
      variant="standard"
      type="date"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

InputDate.propTypes = {};

import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

function InputSelect({ label, dataItem }) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="standard" margin="dense" sx={{ m: 1, width: '100%' }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dataItem?.map((e) => (
          <MenuItem key={e.value} value={e.value}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputSelect;
InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  dataItem: PropTypes.array.isRequired
};

import { TextField } from '@mui/material';

export default function InputDefault({ root }) {
  return (
    <TextField
      fullWidth
      margin="dense"
      InputProps={{
        style: {
          paddingBottom: '.25rem',
          paddingTop: '.5rem'
        }
      }}
      placeholder="Something"
      variant="standard"
      className={root}
    />
  );
}

import { Icon } from '@iconify/react';
// material
import { Box, IconButton } from '@mui/material';

export default function ButtonBack() {
  return (
    <IconButton aria-label="delete" size="large">
      <Icon icon="mdi:arrow-left" />
    </IconButton>
  );
}

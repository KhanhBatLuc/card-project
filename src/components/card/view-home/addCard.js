import { Icon } from '@iconify/react';
// material
import { Tooltip } from '@mui/material';

export default function AddCard() {
  return (
    <Tooltip title="Add Card" placement="top">
      <Icon icon="mdi:plus-circle-outline" />
    </Tooltip>
  );
}

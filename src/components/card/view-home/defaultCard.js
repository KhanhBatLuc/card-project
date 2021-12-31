import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
// material
import { Box, Card, Typography } from '@mui/material';
//

// ----------------------------------------------------------------------

const CardDefault = styled(Card)(({ theme }) => ({
  height: '272px',
  border: '1px dashed #283593',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  boxShadow: theme.customShadows.z16
}));

DefaultCard.propTypes = {};

export default function DefaultCard() {
  return (
    <CardDefault>
      <Box
        sx={{
          m: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: 'translateY(50%)',
          marginTop: '75px'
        }}
      >
        <Icon icon="mdi:plus-thick" fontSize={30} color="#283593" />
        <Typography variant="h6" color="#283593" fontWeight="400" align="center">
          Add Card
        </Typography>
      </Box>
    </CardDefault>
  );
}

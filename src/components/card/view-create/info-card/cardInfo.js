import { Card, Box, Typography, Divider } from '@mui/material';
import ListInfo from './list-info';

function CardInfo() {
  return (
    <Card
      sx={{
        minWidth: 275,
        position: 'sticky',
        top: '1rem',
        padding: '.80rem',
        borderRadius: ' 0.625rem'
      }}
    >
      <Box>
        <Divider textAlign="center" sx={{ pt: '10px', pb: '20px', color: '#47494a' }}>
          Add Infomation
        </Divider>
        <ListInfo />
      </Box>
    </Card>
  );
}

export default CardInfo;

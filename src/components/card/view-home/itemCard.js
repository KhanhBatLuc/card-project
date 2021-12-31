import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// material
import { Box, Card, Typography, CardMedia } from '@mui/material';
// ----------------------------------------------------------------------

const CardItem = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: '.75s transform ease ',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.customShadows.weight,
    transform: 'translateY(-8px)'
  }
}));

ItemCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default function ItemCard({ img, name }) {
  return (
    <CardItem>
      <CardMedia component="img" height="200px" image={img} alt="image_card" />
      <Box sx={{ py: 3 }}>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
      </Box>
    </CardItem>
  );
}

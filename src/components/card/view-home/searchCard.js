import { Icon } from '@iconify/react';
// material
import { InputBase, Divider, IconButton, Card, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

//component
import AddCard from './addCard';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25)
}));

const CustomCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.z12
}));

export default function SearchCard() {
  return (
    <CustomCard>
      <RootStyle>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <Icon icon="mdi:import" />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Cards"
          inputProps={{ 'aria-label': 'search cards' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <Icon icon="mdi:magnify" />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton sx={{ p: '10px' }} aria-label="directions">
          <AddCard />
        </IconButton>
      </RootStyle>
    </CustomCard>
  );
}

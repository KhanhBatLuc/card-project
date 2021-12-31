import { styled } from '@mui/material/styles';
// material
import { Card } from '@mui/material';
//component
import LoadImg from './loadImg';
import ColorPicker from './colorPicker';
import FormFullName from './formFullName';
import ButtonCreate from './buttonCreate';
const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderTopLeftRadius: '0.625rem',
  borderTopRightRadius: ' 0.625rem',
  boxShadow: theme.customShadows.z16
}));

export default function NewCard() {
  return (
    <>
      <RootStyle>
        <LoadImg />
        <ColorPicker />
        <FormFullName />
      </RootStyle>
      <ButtonCreate />
    </>
  );
}

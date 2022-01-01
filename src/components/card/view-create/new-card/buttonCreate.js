import { Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { coloractiveSelector } from '../../../../redux/selectors';

const ButtonRoot = styled(Box)(({ theme }) => ({
  position: 'sticky',
  width: '100%',
  padding: '1rem 0',
  zIndex: 99,
  backgroundColor: '#ffffff',
  textAlign: 'center',
  bottom: 0,
  borderTop: ' 2px solid rgb(233, 233, 233)',
  boxShadow: theme.customShadows.z16,
  borderBottomLeftRadius: '0.625rem',
  borderBottomRightRadius: ' 0.625rem'
}));

function ButtonCreate() {
  const currentColor = useSelector(coloractiveSelector);
  return (
    <ButtonRoot>
      <Button
        sx={{
          width: '90%',
          color: '#ffffff',
          backgroundColor: currentColor,
          transition: '.25s linear background-color',
          '&:hover': {
            backgroundColor: currentColor,
            boxShadow: '0px 0px 0px 0px rgb(100 116 139 / 70%), 0px 1px 2px rgb(100 116 139 / 39%)'
          }
        }}
      >
        SAVE
      </Button>
    </ButtonRoot>
  );
}

export default ButtonCreate;

//  material
import { Box } from '@mui/material';
// redux
import { useDispatch, useSelector } from 'react-redux';
import colorSlice from '../../../../slice/colorSlice';

import { listcolorSelector, coloractiveSelector } from '../../../../redux/selectors';

function ColorPicker() {
  const listColor = useSelector(listcolorSelector);
  const colorActive = useSelector(coloractiveSelector);

  const dispatch = useDispatch();
  const handleChangeColor = (currentColor) => {
    dispatch(colorSlice.actions.changeColor(currentColor));
  };

  const checkActive = (currentColor) => {
    if (colorActive !== currentColor) return;
    return {
      boxShadow: 'rgb(255 255 255) 0px 0px 0px 2px, rgb(0 0 0 / 38%) 0px 0px 0px 3px',
      transform: 'scale(1.5)'
    };
  };

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'auto'
      }}
    >
      <Box
        sx={{
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px 1rem'
          }}
        >
          {listColor?.map((e) => (
            <Box
              key={e.id}
              sx={{
                width: '1.25rem',
                height: '1.25rem',
                margin: '0.5rem',
                background: e.currentColor,
                borderRadius: '100%',
                cursor: 'pointer',
                transition: '.25s linear transform'
              }}
              style={checkActive(e.currentColor)}
              onClick={() => handleChangeColor(e.currentColor)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ColorPicker;

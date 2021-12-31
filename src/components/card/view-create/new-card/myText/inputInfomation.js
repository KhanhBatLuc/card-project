import { TextField, InputAdornment, Box } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import { Draggable } from 'react-beautiful-dnd';

function InputInfomation({ icon, defaultValue, currentColor, placeholder, ...rest }) {
  const useStyles = makeStyles({
    root: {
      '& label.Mui-focused': {
        color: currentColor
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: ' #eaeaea'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: currentColor
      }
    }
  });
  const classes = useStyles();

  const handleRemoveIcon = () => {
    rest.onRemove(rest.id);
  };

  return (
    <Draggable key={rest.id} draggableId={String(rest.id)} index={rest.index}>
      {(provided) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginY: '2rem'
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Icon
            icon="ic:baseline-dehaze"
            style={{ marginRight: '1rem', color: '#00000061', fontSize: '24px' }}
          />

          <div>
            <TextField
              fullWidth
              inputRef={(input) => input && input.focus()}
              margin="dense"
              defaultValue={defaultValue}
              InputProps={{
                style: {
                  fontSize: '0.875rem',
                  paddingBottom: '.5rem'
                },
                startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon
                      icon="mdi:close"
                      style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                      onClick={handleRemoveIcon}
                    />
                  </InputAdornment>
                )
              }}
              placeholder={placeholder}
              variant="standard"
              className={classes.root}
            />

            <TextField
              fullWidth
              margin="dense"
              InputProps={{
                style: {
                  fontSize: '0.875rem',
                  paddingBottom: '.25rem',
                  paddingTop: '.5rem'
                }
              }}
              placeholder="Sometime"
              variant="standard"
              className={classes.root}
            />
          </div>
        </Box>
      )}
    </Draggable>
  );
}

export default InputInfomation;
InputInfomation.propTypes = {
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  currentColor: PropTypes.string,
  onRemove: PropTypes.func
};

import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemovePhoto = () => props.handleRemovePhoto();

  const handleBackGrPositonMenu = (e) => {
    props.handleBackGrImg(e);
    handleClose();
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        startIcon={<Icon icon="mdi:camera" />}
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          border: '1px solid gray',
          color: 'gray',
          backgroundColor: '#fbfbfb',
          '&:hover': {
            backgroundColor: '#fbfbfba1'
          }
        }}
      >
        UPDATE PHOTO
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>
          <label htmlFor="upload">Choose a photo</label>
          <input type="file" id="upload" hidden onChange={handleBackGrPositonMenu} />
        </MenuItem>
        <MenuItem onClick={handleRemovePhoto}>Remove a photo</MenuItem>
      </Menu>
    </div>
  );
}
PositionedMenu.propTypes = {
  handleChooseNewPhoto: PropTypes.func,
  handleRemovePhoto: PropTypes.func
};

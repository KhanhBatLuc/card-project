import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
// material
// component
import CropImg from '../crop-img/crop';

const PhotoCamera = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '20px',
  bottom: '20px',
  backgroundColor: 'transparent',
  zIndex: '2',
  borderRadius: '50%',
  height: '100px',
  width: '100px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '80px',
    width: '80px'
  }
}));

function UploadAvatar({ currentColor }) {
  // upload avatar
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [resultAvatar, setResultAvatar] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(e);
  };

  const handleChangeAvatar = (e) => {
    e.target && e.target.files[0] && setAvatar(URL.createObjectURL(e.target.files[0]));
    e.target.value = null;
    handleClickOpen();
  };

  return (
    <>
      <PhotoCamera style={{ boxShadow: `0px 0px 2px 5px ${currentColor}` }}>
        {resultAvatar && (
          <img
            src={resultAvatar}
            style={{
              position: 'absolute',
              top: '0',
              width: '100%',
              height: '100px',
              objectFit: 'cover'
            }}
            alt=""
          />
        )}
        <label htmlFor="avatar">
          <Icon
            icon="mdi:camera"
            fontSize="medium"
            style={{
              position: 'absolute',
              right: '50%',
              transform: 'translateX(60%)',
              bottom: '-2',
              height: '30px',
              width: '30px',
              padding: '5px',
              borderRadius: '50%',
              backgroundColor: `${currentColor}`,
              transition: '.25s linear background-color',
              color: '#ffffff'
            }}
          />
        </label>
      </PhotoCamera>
      <input type="file" hidden id="avatar" onChange={handleChangeAvatar} />
      <CropImg open={open} handleClose={handleClose} src={avatar} setResult={setResultAvatar} />
    </>
  );
}

export default UploadAvatar;

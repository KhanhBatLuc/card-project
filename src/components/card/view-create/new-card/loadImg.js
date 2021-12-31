import PropTypes from 'prop-types';
import { useState } from 'react';
// material
import { Box } from '@mui/material';
// component
import PositionedMenu from './crop-img/positonMenu';
import UploadAvatar from './avatar/upload-avatar';
import CropImg from './crop-img/crop';
// redux
import { useSelector } from 'react-redux';
import { coloractiveSelector } from '../../../../redux/selectors';

// ----------------------------------------------------------------------

DefaultHasUpload.propTypes = {
  result: PropTypes.string,
  handleRemovePhoto: PropTypes.func,
  handleBackGrImg: PropTypes.func
};
function DefaultHasUpload({ result, handleRemovePhoto, handleBackGrImg }) {
  return (
    <Box>
      <PositionedMenu handleRemovePhoto={handleRemovePhoto} handleBackGrImg={handleBackGrImg} />
      <img
        src={result}
        style={{
          maxHeight: '400px',
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '100%'
        }}
        alt="preview img"
      />
    </Box>
  );
}

// ----------------------------------------------------------------------
DefaultHasNotUpload.propTypes = {
  handleBackGrImg: PropTypes.func
};

function DefaultHasNotUpload({ handleBackGrImg }) {
  return (
    <>
      <label
        htmlFor="upload"
        style={{
          display: 'inline-block',
          width: '100%',
          background: `url('/static/mock-images/upload/avatar-background.svg')  no-repeat  #d8d8d887`,
          backgroundSize: 'auto 75%',
          backgroundPosition: '25% 100%',
          flex: '1 1 0%',
          paddingBottom: '90%',
          paddingTop: '10%',
          cursor: 'pointer'
        }}
      >
        <span
          style={{
            color: 'rgba(0, 0, 0, 0.38)',
            textTransform: 'none',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          Up load a photo or video
        </span>
      </label>
      <input type="file" id="upload" hidden onChange={handleBackGrImg} />
    </>
  );
}

export default function LoadImg() {
  const currentColor = useSelector(coloractiveSelector);
  // upload && crop img
  const [open, setOpen] = useState(false);
  const [src, setSelectFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(e);
  };

  const handleBackGrImg = (e) => {
    e.target && e.target.files[0] && setSelectFile(URL.createObjectURL(e.target.files[0]));
    e.target.value = null;
    handleClickOpen();
  };
  // position menu
  const handleRemovePhoto = () => {
    setResult(null);
  };
  return (
    <>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        {result ? (
          <DefaultHasUpload
            result={result}
            handleRemovePhoto={handleRemovePhoto}
            handleBackGrImg={handleBackGrImg}
          />
        ) : (
          <DefaultHasNotUpload handleBackGrImg={handleBackGrImg} />
        )}

        <svg
          className="card-wavestyled__Wave-app__sc-4t6hon-0 euHkZp headerstyled__Wave-app__sc-1an2aqg-1 bPtQcg"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            bottom: '0px',
            left: ' 0px',
            position: 'absolute',
            width: '100%',
            zIndex: '1',
            height: '200px',
            transform: 'scaleX(-1.5)'
          }}
          viewBox="0 0 375 100"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
        >
          <path
            d="M0 32.711V100C64.5161 100 93.75 100 177.923 100C262.097 100 330.645 100 375 100V15.7947C282 -22.9496 206.5 53.6056 148 72.7049C89.5 91.8042 51.5 78.1619 0 32.711Z"
            fill="#ffffff"
          />
          <path
            d="M0 26.4033V56.4853C69.5 100.681 125 103.355 209.5 51.3608C294 -0.633482 334.5 6.12572 375 18.0844V10.2853C282 -26.6308 206.5 46.312 148 64.51C89.5 82.708 51.5 69.7096 0 26.4033Z"
            fill={currentColor}
          />
        </svg>
        <UploadAvatar currentColor={currentColor} />
      </Box>
      <CropImg open={open} handleClose={handleClose} src={src} setResult={setResult} />
    </>
  );
}

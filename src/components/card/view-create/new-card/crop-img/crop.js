import PropTypes from 'prop-types';
// hook
import { useState } from 'react';
// material
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
// react crop
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function CropImg({ open, src, ...other }) {
  const [image, setImg] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    aspect: 1 / 1,
    width: 20,
    height: 20
  });

  const handleClose = () => {
    return other.handleClose(false);
  };

  function handleCropImg() {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    // New lines to be added
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL('image/jpeg');
    other.setResult(base64Image);
    handleClose();
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={(newImg) => setImg(newImg)}
            onChange={(newCrop) => setCrop(newCrop)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCropImg}>Crop</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CropImg;
CropImg.propTypes = {
  open: PropTypes.bool,
  src: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired
};

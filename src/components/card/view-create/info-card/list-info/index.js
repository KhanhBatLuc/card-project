import { Box, Grid } from '@mui/material';
import MyIconButton from './myIconButton';
import { useDispatch, useSelector } from 'react-redux';
import cardSlice from '../../../../../slice/cardSlice';
import { listInfoGlobalSelector } from '../../../../../redux/selectors';

function ListInfo() {
  const items = useSelector(listInfoGlobalSelector);
  const dispatch = useDispatch();

  const handleClickIcon = (objItem) => {
    dispatch(cardSlice.actions.addInfomation(objItem));
  };

  return (
    <Grid container>
      {items.map((e) => (
        <Grid key={e.title} item lg={3} sm={4} md={3} xs={6}>
          <MyIconButton
            icon={e.icon}
            id={e.id}
            title={e.title}
            placeholder={e.placeholder}
            defaultValue={e.defaultValue}
            onClick={handleClickIcon}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListInfo;

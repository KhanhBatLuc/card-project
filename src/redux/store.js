import { configureStore } from '@reduxjs/toolkit';
import colorSlice from '../slice/colorSlice';
import cardSlice from '../slice/cardSlice';
const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
    cards: cardSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;

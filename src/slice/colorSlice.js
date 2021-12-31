import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'color',
  initialState: {
    listColor: [
      { id: 0, currentColor: '#00AB55' },
      { id: 1, currentColor: '#628af8' },
      { id: 2, currentColor: '#ffeb3b' },
      { id: 3, currentColor: '#2196f3' },
      { id: 4, currentColor: '#607d8b' },
      { id: 5, currentColor: '#6dd3c7' },
      { id: 6, currentColor: '#4a4a4a' },
      { id: 7, currentColor: '#3bb55d' },
      { id: 8, currentColor: '#673ab7' },
      { id: 9, currentColor: '#8bc34a' },
      { id: 10, currentColor: '#e91e63' }
    ],
    colorActive: '#00AB55'
  },
  reducers: {
    changeColor: (state, action) => {
      state.colorActive = action.payload;
    }
  }
});

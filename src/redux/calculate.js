import {createSlice} from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: [],
  reducers: {
    checkDay: (state, action) => {
      state.push(state.find(action.payload) ? action.payload : '');
    },
  },
});

export const {checkDay} = calculateSlice.actions;

export default calculateSlice.reducer;

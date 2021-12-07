import {createSlice} from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    amount: 0,
  },
  reducers: {
    add: (state, action) => {
      state.amount += action.payload;
    },
  },
});

export const {add} = calculateSlice.actions;

export default calculateSlice.reducer;

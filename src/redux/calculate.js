import {createSlice} from '@reduxjs/toolkit';

let id = 1;

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    id: id++,
    amount: 0,
  },
  reducers: {
    add: (state, action) => {
      state.amount += action.payload;
    },
    reset: state => {
      state.amount = 0;
    },
  },
});

export const {add, reset} = calculateSlice.actions;

export default calculateSlice.reducer;

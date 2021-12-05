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
  },
});

export const {add} = calculateSlice.actions;

export default calculateSlice.reducer;

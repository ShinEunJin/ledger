import {createSlice} from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: [],
  reducers: {
    setSumByDay: (state, action) => {
      state.day = action.payload;
    },
  },
});

export const {setSumByDay} = calculateSlice.actions;

export default calculateSlice.reducer;

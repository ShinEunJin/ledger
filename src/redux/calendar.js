import {createSlice} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    day: dayjs().format('YYYY-MM-DD'),
  },
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    },
  },
});

export const {setDay} = calendarSlice.actions;

export default calendarSlice.reducer;

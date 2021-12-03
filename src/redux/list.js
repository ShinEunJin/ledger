import {createSlice} from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    insert: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {insert} = listSlice.actions;

export default listSlice.reducer;

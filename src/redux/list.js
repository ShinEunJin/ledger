import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setListAsyncStorage = createAsyncThunk(
  'list/setListAsyncStorage',
  async body => {
    const {data} = await AsyncStorage.setItem('ledger', body);
    return data;
  },
);

export const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    insert: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex(item => item.id === action.payload),
        1,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(setListAsyncStorage.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const {insert, remove} = listSlice.actions;

export default listSlice.reducer;

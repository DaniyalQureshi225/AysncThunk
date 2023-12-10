// dataSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

// Create an async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});

// Create a slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional actions like loading, success, and failure
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

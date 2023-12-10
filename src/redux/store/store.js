// store.js

import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './../reducer/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;

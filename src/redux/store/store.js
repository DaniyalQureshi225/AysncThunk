// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './../reducer/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage as the storage engine
  whitelist: ['cart'], // List of reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

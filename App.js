// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor} from './src/redux/store/store'
import Cart from './src/Component/Cart';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Cart />
      </PersistGate>
    </Provider>
  );
}
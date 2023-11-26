// App.js
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'; // Import PersistGate
import {store, persistor} from './src/redux/store/store';
import Cart from './src/Component/Cart';
import Route from './src/route/navigation';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
}

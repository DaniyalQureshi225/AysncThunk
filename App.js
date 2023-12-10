// App.js

import React from 'react';
import {Provider} from 'react-redux';
import YourComponent from './src/Component/Cart';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <YourComponent />
    </Provider>
  );
};

export default App;

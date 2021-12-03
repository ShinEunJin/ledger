import React from 'react';
import {Provider} from 'react-redux';

import store from './redux';
import RootNavigation from './navigations/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

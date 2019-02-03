// @flow

import React from 'react';
import { Provider } from 'react-redux';
import PersonnelBoard from './PersonnelBoard';
import createStore from '../Redux';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <PersonnelBoard />
  </Provider>
);

export default App;

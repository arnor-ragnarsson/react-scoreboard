import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player';

import App from './src/containers/App';

import './scss/styles.scss';

const store = createStore(
  PlayerReducer
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

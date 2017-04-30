import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.scss';
import reducers from './root_reducer';
import Router from './router';

const store = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);

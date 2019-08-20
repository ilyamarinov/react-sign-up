import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import './index.scss';
import App from '@src/containers/app';

const ROOT = document.getElementById('root');

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(
  rootReducer,
  enhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);

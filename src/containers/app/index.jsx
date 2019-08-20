import React from 'react';
import { hot } from 'react-hot-loader';

import Form from '@src/containers/form';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Form />
    </div>
  );
}

export default hot(module)(App)

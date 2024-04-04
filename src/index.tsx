//todo Provide the Redux Store to React
//* Once the store is created, we can make it available to our React components by
//* putting a React-Redux <Provider> around our application in src/index.js.
//* Import the Redux store we just created, put a <Provider> around your <App>,
//* and pass the store as a prop:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DevTools from './DevTools';
import './index.css';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

console.log('store', store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);

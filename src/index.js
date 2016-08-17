import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import DevTools from './components/DevTools';
import './index.css';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

console.log('store', store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppContainer />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);

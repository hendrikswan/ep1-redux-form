import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';
import DevTools from './DevTools';

export default function configureStore() {
  return createStore(reducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
      ),
      DevTools.instrument()
    )
  );
}

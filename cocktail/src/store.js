import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import cocktails from './data/cocktails';

const defaultState = {
  cocktails,
  ingredients: [],
  inventory: []
};

const store = createStore(
  rootReducer, 
  defaultState,
  applyMiddleware(thunkMiddleware)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cocktails from './cocktails';

const rootReducer = combineReducers({
  cocktails, routing: routerReducer
});

export default rootReducer;
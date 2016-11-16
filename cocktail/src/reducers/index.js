import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cocktails from './cocktails';
import ingredients from './ingredients';
import inventory from './inventory';

const rootReducer = combineReducers({
  cocktails, ingredients, inventory, routing: routerReducer
});

export default rootReducer;
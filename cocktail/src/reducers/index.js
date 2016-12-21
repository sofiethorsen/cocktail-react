import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cocktail from './cocktail';
import ingredients from './ingredients';
import inventory from './inventory';
import suggestions from './suggestions';

const rootReducer = combineReducers({
  cocktail, ingredients, inventory, suggestions, routing: routerReducer
});

export default rootReducer;
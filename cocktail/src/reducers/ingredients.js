import sampleIngredients from '../data/ingredients'; 

function ingredients(state = [], action) {
  switch(action.type) {
    case 'SEARCH_INGREDIENT':
      const searchTerm = action.searchTerm;
      if (searchTerm.length > 1) {
        const nextState = search(searchTerm);
        return nextState;
      } else {
        return [];
      }
    case 'CLEAR_SEARCH':
      return [];
    default:
      return state;
  }
}

function search(searchTerm) {
  return sampleIngredients.filter(isIngredient(searchTerm));
}

function isIngredient(searchTerm) {
  return function(ingredient) {
    const normalized = searchTerm.toLowerCase();
    const name = ingredient.name.toLowerCase();
    const type = ingredient.type.toLowerCase();
    const regex = ".*" + normalized + ".*";
    return name.match(regex) || type.match(regex);
  }
}

export default ingredients;
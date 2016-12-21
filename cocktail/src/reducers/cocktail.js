function cocktail(state = [], action) {
  switch(action.type) {
    case 'REQUEST_RECIPE_BY_ID':
      return state
    case 'RECEIVE_RECIPE_BY_ID':
      console.log("got a recipe");
      return action.recipe
    default:
      return state;
  }
}

export default cocktail;
function suggestions(state = [], action) {
  switch(action.type) {
    case 'REQUEST_RECIPES_BY_INGREDIENTS':
      return state;
    case 'RECEIVE_RECIPES_BY_INGREDIENTS':
      return action.suggestions
    default:
      return state;
  }
}

export default suggestions;
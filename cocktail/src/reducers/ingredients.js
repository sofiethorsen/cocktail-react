function ingredients(state = [], action) {
  switch(action.type) {
    case 'CLEAR_SEARCH':
      return [];
    case 'REQUEST_INGREDIENTS':
      return state
    case 'RECEIVE_INGREDIENTS':
      return action.ingredients;
    default:
      return state;
  }
}

export default ingredients;
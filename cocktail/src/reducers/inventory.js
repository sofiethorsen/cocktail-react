function inventory(state = [], action) {
  switch(action.type) {
    case 'ADD_TO_INVENTORY':
      return [...state, {
        name: action.name,
        category: action.category
      }];
    default:
      return state;
  }
}

export default inventory;
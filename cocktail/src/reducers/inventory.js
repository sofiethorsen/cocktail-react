function inventory(state = [], action) {
  switch(action.type) {
    case 'ADD_TO_INVENTORY':
      return [...state, action.ingredient];
    default:
      return state;
  }
}

export default inventory;
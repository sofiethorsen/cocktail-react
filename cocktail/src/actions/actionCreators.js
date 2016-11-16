export function requestIngredients(searchTerm) {
  return {
    type:'REQUEST_INGREDIENTS',
    searchTerm
  }
}

export function receiveIngredients(json) {
  return {
    type: 'RECEIVE_INGREDIENTS',
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function searchForIngredient(searchTerm) {
  return {
    type: 'SEARCH_INGREDIENT',
    searchTerm,
  }
}

export function addToInventory(name, category) {
  return {
    type: 'ADD_TO_INVENTORY',
    name,
    category
  }
}

export function clearSearch() {
  return {
    type: 'CLEAR_SEARCH'
  }
}
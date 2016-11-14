// search with the current ingredients
export function search(ingredients) {
  return {
    type: 'SEARCH',
    ingredients
  }
}
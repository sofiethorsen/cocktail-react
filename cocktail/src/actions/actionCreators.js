import fetch from 'isomorphic-fetch'

export function requestIngredients(searchTerm) {
  return {
    type: 'REQUEST_INGREDIENTS',
    searchTerm
  }
}

export function receiveIngredients(json) {
  return {
    type: 'RECEIVE_INGREDIENTS',
    ingredients: json.result
  }
}

export function fetchIngredients(searchTerm) {
  return function (dispatch) {
    dispatch(requestIngredients(searchTerm));
    return fetch(`http://0.0.0.0:8080/ingredients/${searchTerm}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveIngredients(json))
      )
  }
}

export function requestRecipesByIngredients(ingredients) {
  return {
    type: 'REQUEST_RECIPES_BY_INGREDIENTS',
    ingredients
  }
}

export function recieveRecipesByIngredients(json) {
  return {
    type: 'RECEIVE_RECIPES_BY_INGREDIENTS',
    suggestions: json.result.recipes
  }
}

export function fetchRecipesByIngredients(ingredients) {
  return function (dispatch) {
    dispatch(requestRecipesByIngredients(ingredients));
    return fetch(`http://0.0.0.0:8080/recipesbyingredients?key=${ingredients.join(",")}`)
      .then(response => response.json())
      .then(json =>
        dispatch(recieveRecipesByIngredients(json))
      )
  }
}

export function requestRecipeById(recipeId) {
  return {
    type: 'REQUEST_RECIPE_BY_ID',
    recipeId
  }
}

export function receiveRecipeById(json) {
  return {
    type: 'RECEIVE_RECIPE_BY_ID',
    recipe: json.result
  }
}

export function fetchRecipeById(recipeId) {
  return function (dispatch) {
    dispatch(requestRecipeById(recipeId));
    return fetch(`http://0.0.0.0:8080/recipebyid/${recipeId}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveRecipeById(json))
      )
  }
}

export function addToInventory(ingredient) {
  return {
    type: 'ADD_TO_INVENTORY',
    ingredient
  }
}

export function clearSearch() {
  return {
    type: 'CLEAR_SEARCH'
  }
}
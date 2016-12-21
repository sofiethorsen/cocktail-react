import React, { Component } from 'react';

class Ingredient extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);
    this.getSearchWords = this.getSearchWords.bind(this);
    this.renderIngredient = this.renderIngredient.bind(this);
    this.renderIngredientType = this.renderIngredientType.bind(this);
  }

  handleSelect(e) {
    const { inventory, ingredient } = this.props;

    const ingredients = inventory.concat([ingredient]);
    const searchWords = this.getSearchWords(ingredients);

    this.props.addToInventory(ingredient);
    this.props.fetchRecipesByIngredients(searchWords);
    this.props.clearSearch();
  }

  getSearchWords(ingredients) {
    var searchWords = [];

    for (const ingredient of ingredients) {
      if (!ingredient.categorySearch) {
        const name = ingredient.name2 || ingredient.name;
        searchWords.push(name);
      }
      searchWords = searchWords.concat(ingredient.type.split(", "));
    }

    return searchWords;
  }

  renderIngredientType(ingredient) {
    return (
      <span>{ingredient.type}</span>
    )
  }

  renderIngredient(ingredient) {
    const name = ingredient.name2 || ingredient.name;
    return (
      <span>{name}, {ingredient.type}</span>
    )
  }

  render() {
    const ingredient = this.props.ingredient;
    return (
      <li 
        className="ingredient-list"
        ref="selected"
        onClick={(e) => this.handleSelect(e)}>
        {ingredient.categorySearch ? this.renderIngredientType(ingredient) : this.renderIngredient(ingredient)}
      </li>
    );
  }
}

export default Ingredient;
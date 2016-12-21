import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Search extends Component {
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    e.preventDefault();

    const searchTerm = this.refs.ingredient.value;
    if (searchTerm.length === 0) {
      this.props.clearSearch();
    }
    if (searchTerm.length > 1) {
      this.props.fetchIngredients(searchTerm);
    }
  }

  render() {
    return (
      <div className="ingredient-search">
        <input 
          onChange={this.handleOnChange}
          type="search"
          ref="ingredient"
          placeholder="Search for ingredients"/>
        <div className="ingredient-result">
          <ul>
            {this.props.ingredients.slice(0, 15).map((ingredient, i) => 
              <Ingredient 
                addToInventory={this.props.addToInventory}
                ingredient={ingredient}
                fetchRecipesByIngredients={this.props.fetchRecipesByIngredients}
                inventory={this.props.inventory}
                clearSearch={this.props.clearSearch}
                key={i} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
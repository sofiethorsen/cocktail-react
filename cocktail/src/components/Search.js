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
    this.props.searchForIngredient(searchTerm);
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
            {this.props.ingredients.map((ingredient, i) => 
              <Ingredient 
                addToInventory={this.props.addToInventory}
                clearSearch={this.props.clearSearch}
                key={i} 
                name={ingredient.name}
                category={ingredient.type} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;